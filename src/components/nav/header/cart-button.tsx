"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartButton = () => {
  //const { cart } = useAppSelector((state: RootState) => state.carts);

  return (
    <Link href="/" className="relative mr-[14px] p-1">
      <ShoppingCart />
      {/*{cart && cart.totalQuantities > 0 && (
        <span className="border bg-black text-white rounded-full w-fit-h-fit px-1 text-xs absolute -top-3 left-1/2 -translate-x-1/2">
          {cart.totalQuantities}
        </span>
      )}*/}
    </Link>
  );
};

export default CartButton;
