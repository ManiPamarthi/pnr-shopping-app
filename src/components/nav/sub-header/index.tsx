import React from 'react'
import {
    Camera,
    Gamepad2,
    Headset,
    LaptopMinimalCheck,
    Smartphone,
    Watch,
  } from "lucide-react";
  import Link from "next/link";

const SubHeader = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700">
    <div className="container mx-auto px-4 py-2 flex justify-around text-sm font-medium text-gray-600 dark:text-gray-300">
      <Link
        href="/laptops"
        className="flex items-center space-x-2 hover:text-gray-800 dark:hover:text-white"
      >
        <Smartphone size={20} />
        <span>Phones</span>
      </Link>
      <Link
        href="/mobiles"
        className="flex items-center space-x-2 hover:text-gray-800 dark:hover:text-white"
      >
        <LaptopMinimalCheck size={20} />
        <span>Computers</span>
      </Link>
      <Link
        href="/tablets"
        className="flex items-center space-x-2 hover:text-gray-800 dark:hover:text-white"
      >
        <Watch size={20} />
        <span>Smart Watches</span>
      </Link>
      <Link
        href="/accessories"
        className="flex items-center space-x-2 hover:text-gray-800 dark:hover:text-white"
      >
        <Camera size={20} />
        <span>Cameras</span>
      </Link>
      <Link
        href="/accessories"
        className="flex items-center space-x-2 hover:text-gray-800 dark:hover:text-white"
      >
        <Headset size={20} />
        <span>Headphones</span>
      </Link>
      <Link
        href="/accessories"
        className="flex items-center space-x-2 hover:text-gray-800 dark:hover:text-white"
      >
        <Gamepad2 size={20} />
        <span>Gaming</span>
      </Link>
    </div>
  </div>
  )
}

export default SubHeader;