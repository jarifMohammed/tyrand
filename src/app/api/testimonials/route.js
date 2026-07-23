
import connectDB from "@/lib/db";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  try {
    await connectDB();
    const testimonials = await Testimonial.find({ approved: true }).sort({ createdAt: -1 });
    return new Response(JSON.stringify({ success: true, data: testimonials }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return new Response(JSON.stringify({ success: false, message: "Error fetching testimonials" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
