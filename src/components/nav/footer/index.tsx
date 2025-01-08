"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-wrap justify-between space-y-6 md:space-y-0">
          {/* About Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-gray-400">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">About</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <p className="text-sm text-gray-400">Email: info@mywebsite.com</p>
            <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2025 MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
