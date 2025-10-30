import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectDescription: z.string().min(10, "Please provide more details about your project"),
});

interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  projectDescription: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as unknown;
    
    // Validate the request body
    const validatedData = contactSchema.parse(body) as ContactFormData;

    // TODO: Replace with your actual email address
    const recipientEmail = process.env.CONTACT_EMAIL ?? "your-email@example.com";

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Use your verified domain
      to: [recipientEmail],
      subject: `New Contact Form Submission from ${validatedData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #1f2937; margin-bottom: 10px;">Contact Information</h3>
            <p><strong>Full Name:</strong> ${validatedData.fullName}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Project Description:</strong><br>${validatedData.projectDescription}</p>
            ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ""}
            ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ""}
          </div>

            <p style="white-space: pre-wrap;">${validatedData.projectDescription}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from your website's contact form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
