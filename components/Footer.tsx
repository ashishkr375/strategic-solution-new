'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const mainServices = [
  { name: "Business Setup", href: "/services/business-setup" },
  { name: "Taxation Services", href: "/services/taxation" },
  { name: "Audit & Assurance", href: "/services/audit" },
  { name: "Compliance Services", href: "/services/compliance" },
  { name: "Bank Account Opening", href: "/services/bank-account" },
  { name: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" }
]

const aboutLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
//   { name: "Blogs", href: "/blogs" },
  { name: "FAQs", href: "/faqs" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" }
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" }
]

export default function Footer() {
  return (
    <footer className="bg-[#001233] text-white">
      {/* Contact Banner */}
      <div className="bg-amber-400 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <h2 className="text-3xl font-bold text-[#001233] sm:text-4xl">CONTACT US NOW</h2>
            <div className="flex flex-col items-end gap-2">
              <a href="tel:+97152-403-7229" className="text-xl font-semibold text-[#001233] hover:underline">
                (+971) 52-403-7229
              </a>
              <a href="mailto:info@strategicsolutions.com" className="text-xl font-semibold text-[#001233] hover:underline">
                info@strategicsolutions.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Main Services */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400">MAIN SERVICES</h3>
            <ul className="mt-6 space-y-4">
              {mainServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 transition-colors hover:text-white">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400">ABOUT NEOM</h3>
            <ul className="mt-6 space-y-4">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Form */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400">SUBSCRIBE NOW</h3>
            <form className="mt-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:bg-white/20 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-amber-400 px-8 py-3 font-semibold text-[#001233] transition-all hover:bg-amber-500"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* WhatsApp QR */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400">WHATSAPP</h3>
            <div className="mt-6">
              <Image
                src="https://i.postimg.cc/0QZqT0NS/image.png"
                alt="WhatsApp QR Code"
                width={200}
                height={200}
                className="rounded-lg bg-white p-2"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="https://i.postimg.cc/fWrTg8XQ/image-removebg-preview-21.png"
              alt="Strategic Solutions"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-400">
              © 2025 Strategic Solutions TAX ACCOUNTING AND MANAGEMENT.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full bg-white/10 p-2 text-gray-300 transition-colors hover:bg-white/20 hover:text-white"
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 