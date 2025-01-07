import Footer from '@/components/nav/footer';
import Header from '@/components/nav/header';
import React from 'react';
import Image from 'next/image';

const SellersPage = () => {
  return (
    <div>
      <Header />
      <div className="relative w-full">
        <Image
          src="/error.jpg"
          alt="Error"
          layout="responsive"
          width={700} 
          height={300}
        />
      </div>
    </div>
  );
};

export default SellersPage;