
import connectDB from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request) {
  try {
    await connectDB();
    const formData = await request.formData();
    
    const data = {
      fullName: formData.get("fullName"),
      designation: formData.get("designation"),
      productBuilt: formData.get("productBuilt"),
      socialMediaHandle: formData.get("socialMediaHandle"),
      description: formData.get("description"),
    };
    
    const imageFile = formData.get("image");
    if (imageFile && imageFile.size > 0) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${imageFile.name}`;
      const filepath = path.join(process.cwd(), "public", "uploads", filename);
      await writeFile(filepath, buffer);
      data.image = `/uploads/${filename}`;
    }
    
    const newTestimonial = new Testimonial(data);
    await newTestimonial.save();
    
    return new Response(JSON.stringify({ success: true, message: "Testimonial submitted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error submitting testimonial:", error);
    return new Response(JSON.stringify({ success: false, message: "Error submitting testimonial" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
