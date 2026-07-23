
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";
import path from "path";

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    
    const newContact = new Contact(data);
    await newContact.save();
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    const logoPath = path.join(process.cwd(), "public", "image", "logo.png");
    
    // Email to info.tyrand@gmail.com
    const mailToUs = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Project Inquiry",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <img src="cid:logo" alt="Tyrand Logo" style="width: 180px; margin-bottom: 20px;" />
          <h2 style="color: #333;">New Project Inquiry Received</h2>
          <p><strong>Full Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Contact Reasons:</strong> ${data.contactReasons?.join(", ") || "N/A"}</p>
          <p><strong>Budget:</strong> $${data.budget || "N/A"}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        </div>
      `,
      attachments: [
        {
          filename: "logo.png",
          path: logoPath,
          cid: "logo",
        },
      ],
    };
    
    // Email to user (thank you)
    const mailToUser = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Thank You for Contacting Tyrand!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <img src="cid:logo" alt="Tyrand Logo" style="width: 180px; margin-bottom: 20px;" />
          <h2 style="color: #333;">Thank You for Contacting Us!</h2>
          <p>Hi ${data.fullName},</p>
          <p>We have received your inquiry and will get back to you soon!</p>
          <p>Best regards,</p>
          <p>The Tyrand Team</p>
        </div>
      `,
      attachments: [
        {
          filename: "logo.png",
          path: logoPath,
          cid: "logo",
        },
      ],
    };
    
    await transporter.sendMail(mailToUs);
    await transporter.sendMail(mailToUser);
    
    return new Response(JSON.stringify({ success: true, message: "Contact submitted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error submitting contact:", error);
    return new Response(JSON.stringify({ success: false, message: "Error submitting contact" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
