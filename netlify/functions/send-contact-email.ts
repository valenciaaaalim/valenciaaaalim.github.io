import type { Handler } from "@netlify/functions"
import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY

const defaultHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

const handler: Handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: defaultHeaders,
      body: "",
    }
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: defaultHeaders,
      body: JSON.stringify({ error: "Method not allowed" }),
    }
  }

  if (!resendApiKey) {
    console.error("[netlify] Missing RESEND_API_KEY")
    return {
      statusCode: 500,
      headers: defaultHeaders,
      body: JSON.stringify({ error: "Email service not configured" }),
    }
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {}
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers: defaultHeaders,
        body: JSON.stringify({ error: "All fields are required" }),
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: defaultHeaders,
        body: JSON.stringify({ error: "Invalid email format" }),
      }
    }

    const resend = new Resend(resendApiKey)
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "valenciaarlin.halim@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <h3>Message:</h3>
        <p>${String(message).replace(/\n/g, "<br />")}</p>
      `,
    })

    if (error) {
      console.error("[netlify] Resend error:", error)
      return {
        statusCode: 500,
        headers: defaultHeaders,
        body: JSON.stringify({ error: "Failed to send email" }),
      }
    }

    return {
      statusCode: 200,
      headers: defaultHeaders,
      body: JSON.stringify({ success: true, data }),
    }
  } catch (error) {
    console.error("[netlify] Contact form error:", error)
    return {
      statusCode: 500,
      headers: defaultHeaders,
      body: JSON.stringify({ error: "Internal server error" }),
    }
  }
}

export { handler }
