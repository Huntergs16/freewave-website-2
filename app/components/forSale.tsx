'use client';
import { useState, useEffect } from "react";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import productItem from "@/types/globalTypes";
import { findAll } from "../services/stock";
import Image from 'next/image'

export default function forSale() {
    
  const [stock, setStock] = useState<productItem[]>([]);

  useEffect(() => {
    const fetchStock = async () => {
      const stockData = await findAll();
      setStock(stockData);
    };

    fetchStock();
  }, []);

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full h-min px-5 ">
        {stock.map((item) => (
          <div key={item.id} className="h-[30vh] w-full bg-slate-50 flex flex-col justify-start items-start p-1">
            <div className="relative h-4/5 w-full">
              <Image alt={item.id} fill={true} style={{objectFit:'contain', objectPosition:'center'}} src={item.img} />
            </div>
            <p className="text-xl font-medium">{item.id}</p>
            {item.discount[0]? 
            <span className="flex gap-1"><p className="text-base line-through">${item.price}</p> <p>${item.discount[1]}</p></span> 
              : 
              <p className="text-base">${item.price}</p>}
          </div>
        ))}
      </div>
    )
}