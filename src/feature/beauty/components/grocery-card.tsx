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
  { id: 1, name: "Grocerys", image: "/grocery-one.png" },
  { id: 2, name: "Almonds", image: "/grocery-two.png" },
  { id: 3, name: "Oils", image: "/grocery-three.png" },
  { id: 4, name: "Saas", image: "/grocery-four.png" },
  { id: 5, name: "Grocery Mart", image: "/grocery-five.jpg" },
  { id: 6, name: "Rice", image: "/grocery-six.jpg" },
  { id: 7, name: "Flours", image: "/grocery-eight.png" },
  { id: 8, name: "Fruits", image: "/grocery-seven.jpg" },
];

const GroceryCard = () => {
  return (
    <div className="mt-6">
      <Card className="rounded-lg shadow-md">
        <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Grocerys</CardTitle>
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

export default GroceryCard;