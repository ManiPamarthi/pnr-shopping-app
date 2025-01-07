"use client";
import React, { useState } from 'react';
import CategoryBar from './category-bar';
import Tabs from './tabs';
import ProductGrid from './product-grid';

const products = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
    price: 900,
    image: '/apple.png',
  },
  {
    id: 2,
    name: 'Blackmagic Pocket Cinema Camera 6K',
    price: 2535,
    image: '/galaxy.png',
  },
  {
    id: 3,
    name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium',
    price: 399,
    image: '/phone.png',
  },
  // Add more products...
];

export default function MainLayout() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto p-8">
      <CategoryBar />
      <Tabs onSelect={setActiveTab} />
      <ProductGrid products={products} />
    </div>
  );
}
