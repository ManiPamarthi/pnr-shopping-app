import React from 'react'
import { Button } from '@/components/ui/button';

const Sale = () => {
  return (
    <div
      className="flex items-center justify-center h-[83vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('/sale.png')`,
      }}
    >
      <div className="text-left px-6 sm:px-12 md:px-20 lg:px-60">
        <span className="text-white text-sm sm:text-base md:text-lg block">
          Pro. Beyond.
        </span>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          iPhone 14 <strong>Pro</strong>
        </h1>
        <p className="text-white text-xs sm:text-sm md:text-base mt-2">
          Created to change everything for the better. For everyone.
        </p>
        <Button variant="outline" className="mt-4">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Sale;