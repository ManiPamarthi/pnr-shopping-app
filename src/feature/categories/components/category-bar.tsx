import { Camera, Gamepad2, Headphones, LaptopMinimal, Smartphone, Watch } from 'lucide-react';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Adjust the import path based on your project structure

const categories = [
  { name: 'Phones', icon: <Smartphone /> },
  { name: 'Smart Watches', icon: <Watch /> },
  { name: 'Cameras', icon: <Camera /> },
  { name: 'Headphones', icon: <Headphones /> },
  { name: 'Computers', icon: <LaptopMinimal /> },
  { name: 'Gaming', icon: <Gamepad2 /> },
];

export default function CategoryBar() {
  return (
    <div className="flex flex-wrap gap-4 justify-center sm:justify-start p-4">
      {categories.map((category, index) => (
        <Card
          key={index}
          className="w-1/2 sm:w-auto text-center p-2 sm:p-4 bg-white dark:bg-gray-800 dark:text-white border rounded-lg shadow-md dark:border-gray-600"
        >
          <CardHeader>
            <div className="text-3xl sm:text-2xl flex justify-center text-gray-900 dark:text-white">{category.icon}</div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{category.name}</CardTitle>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
