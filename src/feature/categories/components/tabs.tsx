"use client";
import React, { useState } from 'react';

const tabs = ['New Arrival', 'Bestseller', 'Featured Products'];

export default function Tabs({ onSelect }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex justify-center space-x-6 border-b mb-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveTab(index);
            onSelect(index);
          }}
          className={`pb-2 ${
            activeTab === index
              ? 'text-black border-b-2 border-black'
              : 'text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
