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
import SearchBar from "../search-bar/search-bar";
import Logo from "../logo/logo";

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
      <div className="lg:px-6 bg-white top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Search Bar */}
          

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
          
          </div>
        )}
      </div>
    </>
  );
}