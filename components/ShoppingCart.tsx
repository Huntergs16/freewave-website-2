'use client';

import Image from "next/image"
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '@/redux/features/cartSlice';


export default function ShoppingCart() {
    const cartItemCount = useSelector(selectCartItemCount);
    return (
        <button name="shopping-cart" className="ml-auto w-max h-max">
            <div className="relative z-10 bg-black text-white font-medium text-sm top-1 left-6 rounded-full flex justify-center items-center w-max h-max px-1">{ cartItemCount }</div>
            <Image src={"/shopping-cart-icon.png"} width={30} height={30} alt="cart"/>
        </button>
    )
}