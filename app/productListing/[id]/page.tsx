"use client";

import { cartItem, productItem } from "@/types/globalTypes";
import { useEffect, useState } from "react";
import { getItem } from "@/app/services/getItem";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cartSlice";
import { ThreeDots } from "react-loader-spinner";
import Link from "next/link";
import { useCookies } from "react-cookie";

interface SizeSelected {
  size: string;
  quantity: number;
}

export default function ItemPage({ params }: { params: { id: string } }) {
  const [sizeSelected, setSizeSelected] = useState<SizeSelected | undefined>();

  const [quantity, setQuantity] = useState<number>(1);

  const [itemData, setItemData] = useState<productItem | undefined>();

  const [cookies, setCookie, removeCookie] = useCookies(["cookies"]);

  useEffect(() => {
    const fetchData = async () => {
      let productInfo = await getItem({ id: params.id });
      setItemData(productInfo);
    };

    fetchData();
  }, [params.id]);

  return (
    <div className='flex flex-col justify-center gap-4 items-center min-h-[70vh] h-min w-full px-5 mx-auto font-rajdhani text-black'>
      <div className='justify-self-start place-self-start flex items-center group transition duration-300 min-w-[140px] w-[45%] sm:w-max'>
        <Link
          className='group transition duration-300 text-base hover:opacity-70'
          href='/Shop'
        >
          Continue Shopping
          <span className='block sm:max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.05rem] opacity-50 bg-black'></span>
        </Link>
        <img
          className='group-hover:translate-x-10 ml-auto ease-in-out transition-all opacity-100 duration-300'
          src={"/skinny-arrow.png"}
          alt='arrow'
          width={10}
          height={10}
        />
      </div>
      {itemData && (
        <div
          key={itemData.id}
          className='h-full w-full grid grid-cols-1 sm:grid-cols-2 justify-center px-1 gap-x-2'
        >
          <div className='relative h-1/2 min-h-[500px] bg-stone-100'>
            <img
              className='w-full h-full'
              alt='Product Details'
              // fill={true}
              style={{ objectFit: "contain", objectPosition: "center" }}
              src={itemData.img}
            />
          </div>
          <div className='flex flex-col py-12 sm:px-6'>
            <p className='text-3xl font-bold'>{itemData?.id}</p>
            <br />
            {itemData.discount[0] ? (
              <span className='flex gap-1 items-center'>
                <p className='sm:text-lg text-base font-semibold line-through'>
                  {itemData.price}
                </p>
                <p className='sm:text-xl text-lg font-bold text-red-600'>{`${itemData.discount[1]} USD`}</p>
              </span>
            ) : (
              <p className='sm:text-xl text-lg font-semibold'>{`${itemData.price} USD`}</p>
            )}
            <br />
            <ProductAdd
              sizeSelected={sizeSelected}
              setSizeSelected={setSizeSelected}
              productInfo={itemData}
              quantity={quantity}
              setQuantity={setQuantity}
              setCookie={setCookie}
              cookies={cookies}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ProductAdd({
  sizeSelected,
  setSizeSelected,
  productInfo,
  quantity,
  setQuantity,
  setCookie,
  cookies,
}: {
  sizeSelected: { size: string; quantity: number } | undefined;
  setSizeSelected: React.Dispatch<
    React.SetStateAction<SizeSelected | undefined>
  >;
  productInfo: productItem | undefined;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setCookie: any;
  cookies: any;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  const onSizeClicked = (size: string) => {
    setSizeSelected({ size, quantity: productInfo?.[size] || 0 });
  };

  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    setLoading(true);
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
    if (sizeSelected && sizeSelected.quantity > 0) {
      const itemToAdd: cartItem = {
        id: productInfo?.id || "",
        size: sizeSelected?.size || "",
        quantity,
        price: productInfo?.discount[0]
          ? productInfo?.discount[1]
          : productInfo?.price || "0",
        img: productInfo?.img || "",
      };
      dispatch(addItemToCart(itemToAdd));

      //Currently selected products
      const itemKeys: cartItem[] = cookies.itemKeys || [];
      itemKeys.push(itemToAdd);
      setLoading(false);
      // Serialize the array into a string before setting the cookie
      const serializedItemKeys = JSON.stringify(itemKeys);
      setCookie("itemKeys", serializedItemKeys);
      setLoading(false);
      setComplete(true);
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
      setComplete(false);
    } else setLoading(false);
  };

  const handleQuantity = (newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= sizeSelected!.quantity)
      setQuantity(newQuantity);
  };

  return (
    <div className='flex flex-col justify-center items-center gap-4 min-h-min font-rajdhani text-black'>
      <p className='w-full px-2 sm:px-7 text-base font-semibold opacity-80 self-start'>
        Select Size
      </p>
      <div className='w-full md:w-[90%] h-min p-1 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-x-2'>
        <button
          onClick={() => onSizeClicked("x-small")}
          className={`${
            sizeSelected?.size == "x-small"
              ? "bg-black bg-opacity-80 text-white border-black"
              : "bg-white"
          } h-10 border-slate-200 border-2 rounded-md hover:border-black`}
        >
          XS
        </button>
        <button
          onClick={() => onSizeClicked("small")}
          className={`${
            sizeSelected?.size == "small"
              ? "bg-black bg-opacity-80 text-white border-black"
              : "bg-white"
          } h-10 border-slate-200 border-2 rounded-md hover:border-black`}
        >
          S
        </button>
        <button
          onClick={() => onSizeClicked("medium")}
          className={`${
            sizeSelected?.size == "medium"
              ? "bg-black bg-opacity-80 text-white border-black"
              : "bg-white"
          } h-10 border-slate-200 border-2 rounded-md hover:border-black`}
        >
          M
        </button>
        <button
          onClick={() => onSizeClicked("large")}
          className={`${
            sizeSelected?.size == "large"
              ? "bg-black bg-opacity-80 text-white border-black"
              : "bg-white"
          } h-10 border-slate-200 border-2 rounded-md hover:border-black`}
        >
          L
        </button>
        <button
          onClick={() => onSizeClicked("x-large")}
          className={`${
            sizeSelected?.size == "x-large"
              ? "bg-black bg-opacity-80 text-white border-black"
              : "bg-white"
          } h-10 border-slate-200 border-2 rounded-md hover:border-black`}
        >
          XL
        </button>
      </div>
      <p
        className={`${
          sizeSelected?.quantity === 0 || sizeSelected === undefined
            ? "text-red-600"
            : ""
        } text-xl font-semibold`}
      >
        {sizeSelected?.quantity === 0
          ? "Out of stock"
          : sizeSelected?.quantity !== undefined
          ? `${sizeSelected.quantity} available`
          : ""}
      </p>
      <p className='h-[20vh] max-h-44 overflow-y-scroll'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        deserunt iure at et molestias debitis id dolorem necessitatibus
        repudiandae alias! Labore quidem numquam corporis! Ullam voluptatibus
        minima ea sed architecto?
      </p>
      {sizeSelected && (
        <div
          className={`${
            sizeSelected.quantity === 0 ? "opacity-60" : "opacity-100"
          } flex border-black border-solid border-[1px] w-full items-center justify-around text-xl max-w-[400px] h-12 mb-8`}
        >
          <button
            disabled={sizeSelected.quantity === 0}
            onClick={() => handleQuantity(quantity - 1)}
            className='text-3xl sm:text-5xl'
          >
            -
          </button>
          <p className='text-base sm:text-xl'>
            {sizeSelected.quantity === 0 ? "Sold Out" : quantity}
          </p>
          <button
            disabled={sizeSelected.quantity === 0}
            onClick={() => handleQuantity(quantity + 1)}
            className='text-xl sm:text-3xl'
          >
            +
          </button>
        </div>
      )}
      <button
        onClick={() => handleAddToCart()}
        disabled={
          sizeSelected?.quantity === 0 ||
          sizeSelected === undefined ||
          loading ||
          complete
        }
        className={`${
          sizeSelected?.quantity === 0 ||
          sizeSelected === undefined ||
          loading ||
          complete
            ? "bg-opacity-40"
            : "bg-opacity-80 active:scale-90"
        } transition-transform ease-in-out duration-[50ms] max-w-[600px] min-h-[60px] max-h-12 flex justify-center items-center text-white font-bold text-lg w-full shadow-2xl p-3 bg-black border-2 rounded-lg`}
      >
        {loading ? (
          <ThreeDots height={45} width={45} color='#fff' visible={loading} />
        ) : complete ? (
          <img
            loading='eager'
            height={45}
            width={45}
            alt='Succesful add to cart'
            src={"/white-check-mark.png"}
          />
        ) : (
          <p>Add to cart</p>
        )}
      </button>
    </div>
  );
}
