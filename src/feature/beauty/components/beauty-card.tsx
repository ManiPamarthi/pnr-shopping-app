import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Panjabi Salwar", image: "/fasion-one.png" },
  { id: 2, name: "Suit for Men", image: "/fasion-two.jpg" },
  { id: 3, name: "Sweater", image: "/fasion-three.png" },
  { id: 4, name: "Night Ware", image: "/fasion-four.jpg" },
  { id: 5, name: "Shirt", image: "/fasion-five.jpg" },
  { id: 6, name: "Sherwani", image: "/fasion-six.jpg" },
  { id: 7, name: "Kurtha", image: "/fasion-seven.jpg" },
  { id: 8, name: "Blazer", image: "/fasion-eight.jpeg" },
];

const BeautyCard = () => {
  return (
    <div className="mt-6">
      <Card className="rounded-lg shadow-md">
        <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Fashion</CardTitle>
          <Link href="/products">
          <button className="text-sm font-medium text-blue-500 md:hidden">
              View All
            </button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center border rounded-lg p-4"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <p className="text-sm font-medium mt-2">{product.name}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default BeautyCard;