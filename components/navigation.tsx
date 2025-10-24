"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentPageLabel = navItems.find((item) => item.href === pathname)?.label || "Home"

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 glass-card">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-display text-xl font-bold">
            <span className="gradient-text">Valencia Halim</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[var(--accent-magenta)] relative",
                    "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[var(--accent-magenta)] after:transition-all hover:after:w-full",
                    pathname === item.href ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <div className="relative overflow-hidden w-32">
              <div
                className={cn(
                  "font-medium text-sm transition-transform duration-300 ease-out whitespace-nowrap",
                  scrolled ? "translate-x-0" : "translate-x-full",
                )}
              >
                {currentPageLabel}
              </div>
            </div>
            <button
              className="text-foreground hover:text-[var(--accent-magenta)] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 glass-card">
          <ul className="container max-w-[1200px] mx-auto px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block text-base font-medium transition-colors hover:text-[var(--accent-magenta)] py-2",
                    pathname === item.href ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
