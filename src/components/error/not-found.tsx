"use client";

import { CircleX } from 'lucide-react';
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen md:">
      <CircleX size={60} />
      <h1 className="font-bold text-3xl">Page not found</h1>
    </div>
  )
}

export default NotFound;