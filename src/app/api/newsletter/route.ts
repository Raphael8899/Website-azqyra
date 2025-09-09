import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
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

    // Log the newsletter subscription
    console.log("Newsletter subscription:", {
      email,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
    });

    // TODO: Integrate with your preferred email service provider (ESP)
    // Examples:
    // - Mailchimp: await mailchimp.lists.addListMember(listId, { email_address: email })
    // - ConvertKit: await convertkit.subscribers.create({ email })
    // - Substack: await substack.subscribers.create({ email })
    // - Beehiiv: await beehiiv.subscribers.create({ email })
    // - Ghost: await ghost.members.add({ email })
    
    // TODO: Send welcome email
    // TODO: Add to subscriber database/CRM

    return NextResponse.json(
      { 
        ok: true, 
        message: "Successfully subscribed to newsletter" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
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

