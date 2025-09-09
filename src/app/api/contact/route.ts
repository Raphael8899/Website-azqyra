import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, org, email, area, message } = body;

    // Basic validation
    if (!name || !org || !email) {
      return NextResponse.json(
        { error: "Missing required fields: name, organization, and email are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log("Contact form submission:", {
      name,
      organization: org,
      email,
      priorityArea: area,
      message: message || "(no message)",
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
    });

    // TODO: Integrate with your preferred email service provider
    // Examples:
    // - SendGrid: await sendgrid.send({ ... })
    // - Resend: await resend.emails.send({ ... })
    // - Nodemailer: await transporter.sendMail({ ... })
    // - Postmark: await postmark.sendEmail({ ... })
    
    // TODO: Add to CRM or database
    // Examples:
    // - Airtable: await airtable.create({ ... })
    // - HubSpot: await hubspot.crm.contacts.basicApi.create({ ... })
    // - Notion: await notion.pages.create({ ... })

    // TODO: Send confirmation email to user
    // TODO: Send notification email to team

    return NextResponse.json(
      { 
        ok: true, 
        message: "Contact form submitted successfully. We'll respond within 24 hours." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}

