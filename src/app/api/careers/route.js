
import connectDB from "@/lib/db";
import CareerApplication from "@/models/CareerApplication";
import nodemailer from "nodemailer";
import path from "path";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

const VALID_POSITIONS = [
  "Senior Full-Stack Engineer",
  "UI/UX Designer",
  "DevOps Engineer",
];

function sanitize(str) {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "").trim().slice(0, 5000);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateUrl(url) {
  if (!url) return true;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid request format" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const formData = await request.formData();

    const fullName = sanitize(formData.get("fullName"));
    const email = sanitize(formData.get("email"));
    const phone = sanitize(formData.get("phone"));
    const position = sanitize(formData.get("position"));
    const linkedinUrl = sanitize(formData.get("linkedinUrl"));
    const portfolioUrl = sanitize(formData.get("portfolioUrl"));
    const coverLetter = sanitize(formData.get("coverLetter"));

    // --- Validate required fields ---
    if (!fullName || fullName.length < 2) {
      return new Response(
        JSON.stringify({ success: false, message: "Full name is required (min 2 characters)" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!email || !validateEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, message: "A valid email address is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!position || !VALID_POSITIONS.includes(position)) {
      return new Response(
        JSON.stringify({ success: false, message: "Please select a valid position" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // --- Validate optional URLs ---
    if (linkedinUrl && !validateUrl(linkedinUrl)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid LinkedIn URL" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (portfolioUrl && !validateUrl(portfolioUrl)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid portfolio URL" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // --- Handle resume file ---
    const resumeFile = formData.get("resume");
    let resumePath = "";

    if (!resumeFile || resumeFile.size === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "Please upload your resume" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate file type
    const fileExt = resumeFile.name
      ? path.extname(resumeFile.name).toLowerCase()
      : "";
    const isValidMime = ALLOWED_TYPES.includes(resumeFile.type);
    const isValidExt = ALLOWED_EXTENSIONS.includes(fileExt);

    if (!isValidMime && !isValidExt) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Only PDF, DOC, and DOCX files are accepted",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate file size
    if (resumeFile.size > MAX_FILE_SIZE) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Resume file must be under 10MB",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    // Save file
    const safeName = resumeFile.name
      ? resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, "_")
      : "resume";
    const filename = `${Date.now()}-${fullName.replace(/\s+/g, "_")}-${safeName}`;
    const filepath = path.join(uploadsDir, filename);

    const bytes = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filepath, buffer);
    resumePath = `/uploads/${filename}`;

    // --- Save to database ---
    await connectDB();

    // Check for duplicate submission (same email + same position within 5 minutes)
    const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000);
    const existing = await CareerApplication.findOne({
      email: email.toLowerCase(),
      position,
      createdAt: { $gte: fiveMinAgo },
    });

    if (existing) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "You have already applied for this position recently. Please wait before applying again.",
        }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }

    const application = new CareerApplication({
      fullName,
      email: email.toLowerCase(),
      phone,
      position,
      linkedinUrl,
      portfolioUrl,
      coverLetter,
      resumePath,
    });

    await application.save();

    // --- Send emails (non-blocking: email failure doesn't fail the request) ---
    let emailsSent = true;
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const logoPath = path.join(process.cwd(), "public", "image", "logo.png");

      const hasLogo = existsSync(logoPath);
      const logoAttachment = hasLogo
        ? [{ filename: "logo.png", path: logoPath, cid: "logo" }]
        : [];

      const logoImgTag = hasLogo
        ? `<img src="cid:logo" alt="Tyrand Logo" style="width: 180px; margin-bottom: 20px;" />`
        : `<h2 style="color: #a3e635; margin-bottom: 20px;">TYRAND</h2>`;

      // --- Email to Tyrand team ---
      const mailToTeam = {
        from: `"Tyrand Careers" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Application: ${position} — ${fullName}`,
        text: `New Career Application\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nPosition: ${position}\nLinkedIn: ${linkedinUrl || "N/A"}\nPortfolio: ${portfolioUrl || "N/A"}\nCover Letter:\n${coverLetter || "N/A"}\n\nResume attached.`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            ${logoImgTag}
            <h2 style="color: #333; border-bottom: 2px solid #a3e635; padding-bottom: 10px;">New Career Application</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td>
                <td style="padding: 8px 0;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Position:</td>
                <td style="padding: 8px 0;">${position}</td>
              </tr>
              ${linkedinUrl ? `<tr><td style="padding: 8px 0; font-weight: bold;">LinkedIn:</td><td style="padding: 8px 0;"><a href="${linkedinUrl}">${linkedinUrl}</a></td></tr>` : ""}
              ${portfolioUrl ? `<tr><td style="padding: 8px 0; font-weight: bold;">Portfolio:</td><td style="padding: 8px 0;"><a href="${portfolioUrl}">${portfolioUrl}</a></td></tr>` : ""}
            </table>
            ${coverLetter ? `
              <div style="margin-top: 20px;">
                <h3 style="font-weight: bold; margin-bottom: 8px;">Cover Letter:</h3>
                <p style="line-height: 1.6; color: #555;">${coverLetter.replace(/\n/g, "<br/>")}</p>
              </div>
            ` : ""}
            <p style="margin-top: 20px; font-size: 12px; color: #999;">Resume attached to this email.</p>
          </div>
        `,
        attachments: [
          ...logoAttachment,
          {
            filename: resumeFile.name || "resume",
            path: filepath,
          },
        ],
      };

      // --- Email to applicant ---
      const mailToApplicant = {
        from: `"Tyrand Careers" <${process.env.EMAIL_USER}>`,
        to: email,
        replyTo: process.env.EMAIL_USER,
        subject: `Thank You for Applying to Tyrand — ${position}`,
        text: `Hi ${fullName},\n\nWe have received your application for the ${position} position at Tyrand.\nOur team will review your application and get back to you within 5–7 business days.\n\nIn the meantime, feel free to explore more about our work at tyrand.dev.\n\nBest regards,\nThe Tyrand Team`,
        html: `
          <div style="background-color: #000000; color: #ffffff; font-family: 'Inter', system-ui, sans-serif; padding: 40px 20px; margin: 0; min-height: 100vh;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #000000; border: 1px solid #a3e635; border-radius: 8px; padding: 40px; box-shadow: 0 4px 20px rgba(163, 230, 53, 0.15);">
              <div style="text-align: center; margin-bottom: 30px;">
                ${logoImgTag}
              </div>
              <h2 style="color: #a3e635; font-size: 24px; font-weight: 600; margin-bottom: 20px; border-bottom: 1px solid rgba(163, 230, 53, 0.3); padding-bottom: 15px;">Thank You for Applying!</h2>
              <p style="font-size: 16px; line-height: 1.6; color: #ffffff; margin-bottom: 15px;">Hi ${fullName},</p>
              <p style="font-size: 16px; line-height: 1.6; color: #e5e5e5; margin-bottom: 15px;">
                We have received your application for the <strong style="color: #a3e635;">${position}</strong> position at Tyrand.
                Our team will review your application and get back to you within 5–7 business days.
              </p>
              <p style="font-size: 16px; line-height: 1.6; color: #e5e5e5; margin-bottom: 30px;">
                In the meantime, feel free to explore more about our work at
                <a href="https://tyrand.dev" style="color: #a3e635; text-decoration: none; font-weight: 500;">tyrand.dev</a>.
              </p>
              <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(163, 230, 53, 0.2);">
                <p style="font-size: 14px; color: #a3e635; margin-bottom: 5px;">Best regards,</p>
                <p style="font-size: 16px; color: #ffffff; font-weight: 600; margin: 0;">The Tyrand Team</p>
                <p style="font-size: 12px; color: #888888; margin-top: 15px;">Helsinki, Finland &bull; <a href="mailto:info.tyrand@gmail.com" style="color: #888888; text-decoration: none;">info.tyrand@gmail.com</a></p>
              </div>
            </div>
          </div>
        `,
        attachments: logoAttachment,
      };

      await transporter.sendMail(mailToTeam);
      await transporter.sendMail(mailToApplicant);
    } catch (emailError) {
      console.error("Email sending failed (application was saved):", emailError);
      emailsSent = false;
    }

    const responseMessage = emailsSent
      ? "Application submitted successfully! You will receive a confirmation email shortly."
      : "Application submitted successfully! Confirmation email may be delayed.";

    return new Response(
      JSON.stringify({ success: true, message: responseMessage }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error submitting career application:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
