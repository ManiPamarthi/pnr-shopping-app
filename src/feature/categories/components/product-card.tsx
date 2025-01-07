import { Button } from '@/components/ui/button';
import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-4"
      />
      <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-4">${product.price}</p>
      <Button variant="outline" className="bg-black text-white py-2 px-4 rounded-lg w-full">
        Buy Now
      </Button>
    </div>
  );
}
