"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "@/redux/features/cartSlice";
import Link from "next/link";

export default function ShoppingCart() {
  const cartItemCount = useSelector(selectCartItemCount);
  return (
    <Link
      href={"/Cart"}
      className='ml-auto w-max h-max flex items-center justify-center'
    >
      <div className='relative z-10 bg-black text-white font-medium text-sm bottom-[1.05rem] sm:bottom-[1.25rem] left-12 rounded-full flex justify-center items-center w-max h-max px-[0.4rem]'>
        {cartItemCount}
      </div>
      <img src={"/shopping-cart-icon.png"} width={30} height={30} alt='cart' />
    </Link>
  );
}
