import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { integralCF } from "@/app/fonts";

const HappyCustomers = () => {
  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <h1
            className={cn([
              integralCF.className,
              "text-2xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 text-center",
            ])}
          >
            Our Happy Customers
          </h1>
          <p
            className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px] text-center"
          >
            “Get closer than ever to your customers. So close, in fact, that you tell them what they need well before they realize it themselves.”<br />
            <strong>Baji Pamarthi, Co-Founder and former CEO of PNR</strong>
          </p>
          <div>
            <Link
              href="/"
              className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse"
            >
              View All
            </Link>
          </div>
          </section>
          <section className="hidden md:block">
          <Image
            src="/apple.png"
            alt="Happy Customers"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </section>
      </div>
    </header>
  );
};

export default HappyCustomers;
