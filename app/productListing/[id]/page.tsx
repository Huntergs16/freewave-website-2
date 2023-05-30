'use client';

import { cartItem, productItem } from "@/types/globalTypes";
import { useEffect, useState } from "react";
import { getItem } from "@/app/services/getItem";
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/redux/features/cartSlice';

interface SizeSelected {
    size: string;
    quantity: number;
  }

export default function ItemPage({params}: {
    params: {id: string}
}) {

    const [sizeSelected, setSizeSelected] = useState<SizeSelected | undefined>();

    const [itemData, setItemData] = useState<productItem | undefined>();

    useEffect(() => {
        const fetchData = async () => {
          let productInfo = await getItem({ id: params.id });
          console.log(productInfo)
          setItemData(productInfo)
        };
    
        fetchData();
      }, [params.id]);
    
    return (
        <div className="flex flex-col justify-center items-center min-h-[70vh] h-min w-full px-5 mx-auto font-rajdhani text-black">
        {itemData && (
          <div key={itemData.id} className="h-full w-full grid grid-cols-1 sm:grid-cols-2 justify-center px-1 gap-x-2">
            <div className="relative h-1/2 min-h-[500px] bg-stone-100">
              <Image alt="Product Details" fill={true} style={{ objectFit: "contain", objectPosition: "center" }} src={itemData.img} />
            </div>
            <div className="flex flex-col py-12 sm:px-6">
              <p className="text-3xl font-bold">{itemData?.id}</p>
              <br />
              {itemData.discount[0] ? (
                <span className="flex gap-1 items-center">
                  <p className="sm:text-lg text-base font-semibold line-through">{itemData.price}</p>
                  <p className="sm:text-xl text-lg font-bold text-red-600">{`${itemData.discount[1]} USD`}</p>
                </span>
              ) : (
                <p className="sm:text-xl text-lg font-semibold">{`${itemData.price} USD`}</p>
              )}
              <br />
              <ProductAdd sizeSelected={sizeSelected} setSizeSelected={setSizeSelected} productInfo={itemData} />
            </div>
          </div>
        )}
      </div>
  );
}

function ProductAdd({ sizeSelected, setSizeSelected, productInfo }: {
    sizeSelected: { size: string, quantity: number } | undefined,
    setSizeSelected: React.Dispatch<React.SetStateAction<{ size: string, quantity: number } | undefined>>,
    productInfo: productItem | undefined,
  }) {
    const onSizeClicked = (size: string) => {
      console.log(size)
      console.log(productInfo?.[size])
      setSizeSelected({ size, quantity: productInfo?.[size] || 0 });
    }

    const dispatch = useDispatch();

    const handleAddToCart = () => {
      if (sizeSelected && sizeSelected.quantity > 0) {
        const itemToAdd:cartItem = {
        id: productInfo?.id || "",
        size: sizeSelected?.size || "",
        quantity: 1,
        price: productInfo?.price || "0",
        discount: productInfo?.discount || [false, "0"],
        img: productInfo?.img || "",
      }
        dispatch(addItemToCart(itemToAdd));
      }

    };

    return (
        <div className="flex flex-col justify-center items-center gap-4 min-h-min font-rajdhani text-black">
            <p className="w-full px-2 sm:px-7 text-base font-semibold opacity-80 self-start">Select Size</p>
            <div className="w-full sm:w-[90%] h-min p-1 grid grid-rows-2 grid-cols-3 sm:grid-cols-5 gap-x-2">
                <button onClick={() => onSizeClicked("x-small")} className={`${sizeSelected?.size == "x-small" ? "bg-black bg-opacity-80 text-white border-black":"bg-white"} h-10 border-slate-200 border-2 rounded-md hover:border-black`}>XS</button>
                <button onClick={() => onSizeClicked("small")} className={`${sizeSelected?.size == "small" ? "bg-black bg-opacity-80 text-white border-black":"bg-white"} h-10 border-slate-200 border-2 rounded-md hover:border-black`}>S</button>
                <button onClick={() => onSizeClicked("medium")} className={`${sizeSelected?.size == "medium" ? "bg-black bg-opacity-80 text-white border-black":"bg-white"} h-10 border-slate-200 border-2 rounded-md hover:border-black`}>M</button>
                <button onClick={() => onSizeClicked("large")} className={`${sizeSelected?.size == "large" ? "bg-black bg-opacity-80 text-white border-black":"bg-white"} h-10 border-slate-200 border-2 rounded-md hover:border-black`}>L</button>
                <button onClick={() => onSizeClicked("x-large")} className={`${sizeSelected?.size == "x-large" ? "bg-black bg-opacity-80 text-white border-black":"bg-white"} h-10 border-slate-200 border-2 rounded-md hover:border-black`}>XL</button>
            </div>
            <p className={`${sizeSelected?.quantity === 0 || sizeSelected === undefined ? "text-red-600" : ""} text-xl font-semibold`}>
                {sizeSelected?.quantity === 0
                    ? "Out of stock"
                    : sizeSelected?.quantity !== undefined
                    ? `${sizeSelected.quantity} available`
                    : ""}
                </p>            
            <p className="h-[20vh] max-h-44 overflow-y-scroll">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo deserunt iure at et molestias debitis id dolorem necessitatibus repudiandae alias! Labore quidem numquam corporis! Ullam voluptatibus minima ea sed architecto?
            </p>
            <button onClick={() => handleAddToCart()} disabled={sizeSelected?.quantity === 0 || sizeSelected === undefined} className={`${sizeSelected?.quantity === 0 || sizeSelected === undefined ? "bg-opacity-40" : "bg-opacity-80"} max-w-[70vw] min-h-[60px] max-h-12 flex justify-center items-center text-white font-bold text-lg w-full shadow-2xl p-3 bg-black border-2 rounded-lg`}>
                <p>Add to cart</p>
            </button>
        </div>
    )
}
