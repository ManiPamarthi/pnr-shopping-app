"use client";
import Header from '@/components/nav/header';
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import CartList from '@/feature/cart-list/components/cart-list';
import PriceDetails from '@/feature/cart-list/components/price-details';
import AddressModal from '@/feature/cart-list/components/address-modal';

const CartPage = () => {

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="pt-4 px-8 pr-4">
        <Card className="rounded-none col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
                <CardTitle>Deliver to:</CardTitle>
              <AddressModal />
            </div>
          </CardHeader>
        </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          <CartList />
          <PriceDetails />
        </div>
    </>
  );
}

export default CartPage;
