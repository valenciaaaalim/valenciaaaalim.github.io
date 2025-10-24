import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Valencia Arlin Halim — Design × AI × Engineering",
  description:
    "Portfolio of Valencia Arlin Halim: Designer, AI Engineer, and Frontend Developer building interfaces and systems with measurable impact.",
  keywords: ["Valencia Arlin Halim", "Design", "AI", "Engineering", "UX", "Frontend", "Portfolio"],
  authors: [{ name: "Valencia Arlin Halim" }],
  openGraph: {
    title: "Valencia Arlin Halim — Design × AI × Engineering",
    description: "Building interfaces and systems with measurable impact.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
          <footer className="border-t border-border/40 mt-20">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Valencia Arlin Halim. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                  <a
                    href="mailto:valenciaarlin.halim@gmail.com"
                    className="text-muted-foreground hover:text-accent-1 transition-colors"
                  >
                    Email
                  </a>
                  <a
                    href="https://linkedin.com/in/valenciaarlinhalim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent-1 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
