import * as React from "react";
import { Button } from "../ui/button";

export function CarouselStyle() {
  return (
    <div
      className="flex items-center sm:flex-row justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/banner.png')`,
      }}
    >
      <div className="text-left px-6 sm:px-12 md:px-20 lg:px-60 pt-10 sm:pt-0 sm:w-1/2">
        <span className="text-white text-sm sm:text-base md:text-lg block">
          Pro. Beyond.
        </span>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          iPhone 14 <strong>Pro</strong>
        </h1>
        <p className="text-white text-xs md:text-base mt-2">
          Created to change everything for the better. For everyone.
        </p>
        <Button variant="outline" className="mt-4 px-6 py-3 text-sm sm:text-base">
          Shop Now
        </Button>
      </div>
    </div>
  );
}