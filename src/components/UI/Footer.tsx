"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerSections = {
    destinations: {
      title: "Popular Destinations",
      links: [
        { label: "Goa", href: "/destinations/goa" },
        { label: "Rajasthan", href: "/destinations/rajasthan" },
        { label: "Kerala", href: "/destinations/kerala" },
        { label: "Himachal Pradesh", href: "/destinations/himachal" },
        { label: "Kashmir", href: "/destinations/kashmir" },
        { label: "Uttarakhand", href: "/destinations/uttarakhand" },
      ],
    },
    packages: {
      title: "Travel Packages",
      links: [
        { label: "Golden Triangle", href: "/packages/golden-triangle" },
        { label: "Kerala Backwaters", href: "/packages/kerala-backwaters" },
        { label: "Royal Rajasthan", href: "/packages/rajasthan-royal" },
        { label: "Himalayan Trek", href: "/packages/himalayan-adventure" },
        { label: "Beach Paradise", href: "/packages/goa-beaches" },
        { label: "Temple Circuit", href: "/packages/south-india-temples" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Blog", href: "/blog" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Contact Us", href: "/contact" },
        { label: "Booking Policy", href: "/booking-policy" },
        { label: "Cancellation", href: "/cancellation" },
        { label: "Travel Insurance", href: "/insurance" },
        { label: "Safety Guidelines", href: "/safety" },
      ],
    },
  };

  return (
    <footer className="bg-muted/50 border-t">
      {/* Newsletter Section */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated with Travel Inspiration
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest travel guides, exclusive deals, and destination recommendations directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="font-bold text-xl text-foreground">ExplorIndia</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your trusted companion for exploring the incredible diversity of India. 
              From majestic mountains to pristine beaches, discover your perfect journey with our 
              interactive maps and curated travel experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/book-now">Book Now</Link>
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-muted-foreground">
              © 2024 ExplorIndia. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Follow us:</span>
            <div className="flex space-x-2">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                <Link
                  key={social}
                  href={`/${social.toLowerCase()}`}
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  aria-label={social}
                >
                  {social[0]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                ✓
              </div>
              <span className="text-sm text-muted-foreground">Trusted by 10,000+ travelers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                ★
              </div>
              <span className="text-sm text-muted-foreground">4.8/5 average rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">
                🛡
              </div>
              <span className="text-sm text-muted-foreground">Secure & reliable bookings</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;