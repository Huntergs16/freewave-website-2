'use client';

import { connect } from 'react-redux';
import { RootState } from '@/redux/store';
import { cartItem } from '@/types/globalTypes';
import { updateCartItemQuantity, selectCartTotalPrice } from '@/redux/features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';

interface CartProps {
  cartItems: cartItem[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {

  const dispatch = useDispatch();
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-3 font-rajdhani">
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-3xl">Your Cart</p>
        {cartItems.length > 0 ? (
          <div className='w-full flex flex-col gap-2'>
            <div className='grid grid-cols-5 place-items-center w-full text-sm'>
              <p>Product</p>
              <p></p>
              <p></p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            <hr className='w-full'/>
            <ul className='flex flex-col items-center w-full gap-4 sm:w-5/6'>
              {cartItems.map((item) => (
                <li key={item.id} className='grid grid-cols-5 place-items-center w-full'>
                  <Link href={`/productListing/${item.id}`} key={item.id}>
                    <div className='bg-stone-100'>
                      <Image className="p-2" height={150} width={150} style={{objectFit:'contain', objectPosition:'center'}} alt={item.id} src={item.img} />
                    </div>
                  </Link>
                  <div className='justify-self-start flex gap-2 flex-col justify-start items-start text-sm py-6 px-3'>
                    <p className='font-bold text-lg'>{item.id}</p>
                    <p>${item.price}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <div></div>
                  <div className='flex border-black border-solid border-[1px] w-full items-center justify-around text-xl'>
                    <button onClick={() => dispatch(updateCartItemQuantity({itemId: item.id, quantity: item.quantity - 1}))} className='text-3xl sm:text-5xl'>-</button>
                      <p className='text-base sm:text-xl'>{item.quantity}</p>
                    <button onClick={() => dispatch(updateCartItemQuantity({itemId: item.id, quantity: item.quantity + 1}))} className='text-xl sm:text-3xl'>+</button>
                  </div>
                  <div>${Number(item.price) * item.quantity}</div>
                </li>
              ))}
            </ul>
            <hr className='w-full'/>
            <div className='ml-auto gap-6 p-2 w-max max-w-[50vw] flex flex-col place-items-start'>
              <div>
                <p className='text-lg font-semibold'>Subtotal: ${totalPrice}</p>
                <p className='text-xs'>Taxes and shipping calculated at checkout</p>
              </div>
              <button className='border border-black w-full py-2 px-4 hover:opacity-70'>Check out</button>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    cartItems: state.cart.items,
  };
};

export default connect(mapStateToProps)(Cart) as React.FC;
