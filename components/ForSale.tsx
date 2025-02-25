"use client";
import React, { useState, useEffect } from "react";
import { productItem } from "@/types/globalTypes";
import { findAll } from "../app/services/stock";
import Image from "next/image";
import Link from "next/link";

export default function ForSale() {
  const [stock, setStock] = useState<productItem[]>([]);

  useEffect(() => {
    const fetchStock = async () => {
      const stockData = await findAll();
      setStock(stockData);
    };

    fetchStock();
  }, []);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-x-1 gap-y-2 w-full h-min px-1 font-rajdhani text-black'>
      {stock.map((item) => (
        <Link
          href={`/productListing/${item.id}`}
          key={item.id}
          className='h-[80vw] min-h-[300px] max-h-[30vh] sm:max-h-[30vh] lg:max-h-[40vh] sm:h-[35vw] w-full flex flex-col justify-start items-start'
        >
          <div className='relative h-[90%] w-full bg-stone-100 overflow-hidden'>
            <img
              className='px-2 py-6 sm:p-4 lg:p-8 h-full w-full'
              alt={item.id}
              // fill={true}
              style={{ objectFit: "contain", objectPosition: "center" }}
              src={item.img}
            />
          </div>
          <p className='sm:text-lg text-sm font-semibold'>{item.id}</p>
          {item.discount[0] ? (
            <span className='flex gap-1 bg-white'>
              <p className='sm:text-sm text-xs line-through'>{item.price}</p>
              <p className='sm:text-sm text-xs'>{`${item.discount[1]} USD`}</p>
            </span>
          ) : (
            <p className='sm:text-sm text-xs bg-white'>{`${item.price} USD`}</p>
          )}
        </Link>
      ))}
    </div>
  );
}
