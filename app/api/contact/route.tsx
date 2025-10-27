import { NextResponse } from "next/server"

const netlifyEndpoint =
  process.env.NETLIFY_FUNCTION_URL || process.env.NEXT_PUBLIC_NETLIFY_FUNCTION_URL || ""

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    if (!netlifyEndpoint) {
      console.error("[v0] NETLIFY_FUNCTION_URL not configured")
      return NextResponse.json({ error: "Contact form not available" }, { status: 500 })
    }

    const response = await fetch(netlifyEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("[v0] Netlify function error:", data)
      return NextResponse.json(data, { status: response.status })
    }

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
