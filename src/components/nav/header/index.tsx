"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlignJustify,
  Heart,
  ShoppingCart,
  Store,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const desktopLinks = [
  { href: "/cart", icon: <ShoppingCart />, label: "Cart" },
  { href: "/product", icon: <Store />, label: "Products" },
  { href: "/wish-list", icon: <Heart />, label: "Wishlist" },
];

const mobileLinks = [
  { href: "/cart", icon: <ShoppingCart />, label: "Cart" },
  { href: "/product", icon: <Store />, label: "Products" },
  { href: "/wish-list", icon: <Heart />, label: "Wishlist" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:px-6 bg-white dark:bg-gray-900 shadow-md top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
            <Link href="/">MyLogo</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center w-1/3">
            <Input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="dark:text-gray-200 dark:bg-gray-800"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {desktopLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                {link.icon && link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-none shadow-none"
          >
            <AlignJustify />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
  <div className="md:hidden bg-gray-100 dark:bg-gray-800">
    <div className="flex flex-col space-y-2 py-2">
      {mobileLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-4"
        >
          {link.icon && <span className="mr-2">{link.icon}</span>}
          <span>{link.label}</span>
        </Link>
      ))}
    </div>

    {/* Mobile Search Bar */}
    <div className="px-4 py-2">
      <Input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
      />
    </div>
  </div>
)}
      </div>
    </>
  );
}