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

    const referer = request.headers.get("referer") || "http://localhost:3000/contact";
    const userAgent = request.headers.get("user-agent") || "Mozilla/5.0";

    // Primary email relay service (FormSubmit)
    try {
      const response = await fetch("https://formsubmit.co/ajax/bhavarvishal31@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: referer,
          "User-Agent": userAgent,
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Portfolio Inquiry from ${name}`,
          _replyto: email,
          _autoresponse: `Thank you ${name} for reaching out to Vishal Bhavar! I have received your message and will get back to you soon.`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const resData = await response.json().catch(() => ({}));

      if (response.ok || resData.success === "true" || resData.success === true) {
        return NextResponse.json({
          success: true,
          message: "Your message has been sent to bhavarvishal31@gmail.com!",
        });
      }

      // If FormSubmit returns activation needed message, treat as successful dispatch
      if (typeof resData.message === "string" && resData.message.includes("Activation")) {
        return NextResponse.json({
          success: true,
          message: "Form submitted! FormSubmit sent an activation email to bhavarvishal31@gmail.com. Please confirm the link in your inbox.",
        });
      }
    } catch (err) {
      console.warn("FormSubmit fetch failed, falling back to Web3Forms:", err);
    }

    // Secondary fallback (Web3Forms API)
    const fallbackRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "c381c81d-6b5d-4a1d-91b2-bf23a416a9a7",
        name,
        email,
        message,
        to_email: "bhavarvishal31@gmail.com",
        subject: `New Portfolio Message from ${name}`,
      }),
    });

    if (fallbackRes.ok) {
      return NextResponse.json({
        success: true,
        message: "Your message has been delivered to bhavarvishal31@gmail.com!",
      });
    }

    return NextResponse.json(
      { success: false, error: "Relay error" },
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

