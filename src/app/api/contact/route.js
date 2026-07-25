
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    
    const newContact = new Contact(data);
    await newContact.save();
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    // Email to info.tyrand@gmail.com
    const mailToUs = {
      from: `"Tyrand Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: "New Project Inquiry",
      text: `New Project Inquiry Received\n\nFull Name: ${data.fullName}\nEmail: ${data.email}\nContact Reasons: ${data.contactReasons?.join(", ") || "N/A"}\nBudget: $${data.budget || "N/A"}\nMessage: ${data.message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <img src="https://www.tyrand.dev/image/logo.png" alt="Tyrand Logo" style="width: 180px; margin-bottom: 20px;" />
          <h2 style="color: #333;">New Project Inquiry Received</h2>
          <p><strong>Full Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Contact Reasons:</strong> ${data.contactReasons?.join(", ") || "N/A"}</p>
          <p><strong>Budget:</strong> $${data.budget || "N/A"}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        </div>
      `,
    };
    
    // Email to user (thank you)
    const mailToUser = {
      from: `"Tyrand Team" <${process.env.EMAIL_USER}>`,
      to: data.email,
      replyTo: process.env.EMAIL_USER,
      subject: "Thank You for Contacting Tyrand!",
      text: `Hi ${data.fullName},\n\nWe have received your inquiry and will get back to you soon!\n\nBest regards,\nThe Tyrand Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <img src="https://www.tyrand.dev/image/logo.png" alt="Tyrand Logo" style="width: 180px; margin-bottom: 20px;" />
          <h2 style="color: #333;">Thank You for Contacting Us!</h2>
          <p>Hi ${data.fullName},</p>
          <p>We have received your inquiry and will get back to you soon!</p>
          <p>Best regards,</p>
          <p>The Tyrand Team</p>
        </div>
      `,
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
