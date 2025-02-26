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
  { id: 1, name: "Wireless Buds", image: "/buds.png" },
  { id: 2, name: "Camera", image: "/camera.png" },
  { id: 3, name: "Mobile", image: "/galaxy.png" },
  { id: 4, name: "HeadSet", image: "/headset.png" },
  { id: 5, name: "I Pad", image: "/ipad.png" },
  { id: 6, name: "Apple Phone", image: "/phone.png" },
  { id: 7, name: "Smart Watch", image: "/watch.png" },
  { id: 8, name: "Apple", image: "/phone2.png" },
];

const ElectronicsCard = () => {
  return (
    <div className="mt-6">
      <Card className="rounded-lg shadow-md">
        <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Best Electronics</CardTitle>
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

export default ElectronicsCard;
