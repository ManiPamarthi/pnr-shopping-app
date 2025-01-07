"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Fash OS Gel Facewash", image: "/phone.png", status: "Out of Stock" },
  { id: 2, name: "Adhesive Tape", image: "/buds.png", status: "Out of Stock" },
  { id: 3, name: "Power Back Cover", image: "/apple.png", status: "Out of Stock" },
  { id: 4, name: "Fash OS Gel Facewash", image: "/phone.png", status: "Out of Stock" },
  { id: 5, name: "Adhesive Tape", image: "/buds.png", status: "Out of Stock" },
  { id: 6, name: "Power Back Cover", image: "/apple.png", status: "Out of Stock" },
  { id: 7, name: "Fash OS Gel Facewash", image: "/phone.png", status: "Out of Stock" },
  { id: 8, name: "Adhesive Tape", image: "/buds.png", status: "Out of Stock" },
  { id: 9, name: "Power Back Cover", image: "/apple.png", status: "Out of Stock" },
  { id: 10, name: "Power Back Cover", image: "/apple.png", status: "Out of Stock" },
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
            <p className="text-sm font-medium">{product.name}</p>
            <p className="text-sm text-red-500">{product.status}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="outline">Save for Later</Button>
            <Button variant="outline" className="text-red-500">Remove</Button>
          </div>
        </div>
      ))}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md border-t">
        <div className="flex justify-end">
          <Button
            variant="outline"
            className="bg-orange-500 text-black px-6 py-2 text-sm font-medium"
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
