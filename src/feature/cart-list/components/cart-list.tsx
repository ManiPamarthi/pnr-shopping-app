"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Apple 14 plus Phone", image: "/phone.png", status: "View" },
  { id: 2, name: "Buds", image: "/buds.png", status: "Out of Stock" },
  { id: 3, name: "Iphone 16 plus ", image: "/apple.png", status: "View" },
  { id: 4, name: "Samsung Galaxy", image: "/galaxy.png", status: "Out of Stock" },
  { id: 5, name: "Vivo Headset", image: "/headset.png", status: "View" },
  { id: 6, name: "Ipad", image: "/ipad.png", status: "Out of Stock" },
  { id: 7, name: "Fastrack Watch", image: "/watch.png", status: "Out of Stock" },
  { id: 8, name: "Nikon Camera", image: "/camera.png", status: "View" },
  { id: 9, name: "Vivo Buds", image: "/buds.png", status: "Out of Stock" },
  { id: 10, name: "Mobile", image: "/apple.png", status: "View" },
];

const CartList = () => {
  return (
    <div className="px-4 space-y-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center gap-6 border rounded-none p-4 shadow-sm bg-white"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div className="flex flex-col flex-grow">
            <p className="text-sm font-medium py-2">{product.name}</p>
            <Button variant="outline">{product.status}</Button>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-4 gap-2">
            <div className="hidden md:flex flex-col gap-2">
              <Button variant="outline">Save for Later</Button>
              <Button variant="outline">Remove</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
