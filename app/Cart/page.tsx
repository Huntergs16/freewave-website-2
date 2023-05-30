'use client';

import { connect } from 'react-redux';
import { RootState } from '@/redux/store';
import { cartItem } from '@/types/globalTypes';
import { updateCartItemQuantity } from '@/redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';

interface CartProps {
  cartItems: cartItem[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {

  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-3 font-rajdhani">
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-3xl">Your Cart</p>
        {cartItems.length > 0 ? (
          <ul className='flex flex-col items-center w-full gap-4 sm:w-5/6'>
            <li className='grid grid-cols-5 place-items-center w-full text-sm'>
                <p>Product</p>
                <p></p>
                <p></p>
                <p>Quantity</p>
                <p>Total</p>
            </li>
            <hr className='w-full mb-10'/>
            {cartItems.map((item) => (
              <li key={item.id} className='grid grid-cols-5 place-items-center w-full'>
                <Link href={`/productListing/${item.id}`} key={item.id}>
                  <div className='bg-stone-100'>
                    <Image className="px-2 py-6" height={150} width={150} style={{objectFit:'contain', objectPosition:'center'}} alt={item.id} src={item.img} />
                  </div>
                </Link>
                <div className='justify-self-start flex gap-2 flex-col justify-start items-start text-sm py-6 px-3'>
                  <p className='font-bold text-lg'>{item.id}</p>
                  <p>${item.price}</p>
                  <p>Size: {item.size}</p>
                </div>
                <div></div>
                <div className='flex border-black border-solid border-[1px] w-full items-center justify-around text-xl'>
                  <button onClick={() => dispatch(updateCartItemQuantity({itemId: item.id, quantity: item.quantity - 1}))} className='text-5xl'>-</button>
                  {item.quantity}
                  <button onClick={() => dispatch(updateCartItemQuantity({itemId: item.id, quantity: item.quantity + 1}))} className='text-3xl'>+</button>
                </div>
                <div>${Number(item.price) * item.quantity}</div>
              </li>
            ))}
          </ul>
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
