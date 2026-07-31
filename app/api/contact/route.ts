import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Direct automated email relay to bhavarvishal31@gmail.com
    const response = await fetch("https://formsubmit.co/ajax/bhavarvishal31@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New Portfolio Inquiry from ${name} (${email})`,
        _captcha: "false",
      }),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "Your message has been delivered directly to bhavarvishal31@gmail.com!",
      });
    }

    return NextResponse.json(
      { success: false, error: "Failed to send email relay." },
      { status: 500 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
