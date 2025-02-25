"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export default function Navbar() {
  const [menuShow, setMenuShow] = useState<boolean>(false);

  return (
    <>
      <DropdownMenu menuShow={menuShow} setMenuShow={setMenuShow} />
      <div className='text-black grid grid-cols-3 grid-rows-1 justify-center w-full h-[7vh] min-h-[70px] max-h-24 items-center px-10 font-rajdhani'>
        <ul className='font-medium hidden sm:flex sm:flex-wrap mr-auto justify-center items-center gap-x-2 text-sm md:gap-x-5 font-rajdhani'>
          <li className='group transition duration-300 hover:opacity70 text-base md:text-lg text-center'>
            <Link href='/'>
              Home
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-[.05rem] opacity-50 bg-black'></span>
            </Link>
          </li>
          <li className='group transition duration-300 hover:opacity-70 text-base md:text-lg text-center'>
            <Link href='/Shop'>
              Shop
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-[.05rem] opacity-50 bg-black'></span>
            </Link>
          </li>
          <li className='group transition duration-300 hover:opacity70 text-base md:text-lg text-center'>
            <Link href='/Contact'>
              Contact
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-[.05rem] opacity-50 bg-black'></span>
            </Link>
          </li>
          <li className='group transition duration-300 hover:opacity70 text-base md:text-lg text-center'>
            <Link href='/About'>
              About
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-[.05rem] opacity-50 bg-black'></span>
            </Link>
          </li>
        </ul>
        <button
          name='menu-dropdown'
          className='block sm:hidden w-max active:scale-90 active:opacity-70'
          onClick={() => setMenuShow(!menuShow)}
        >
          <img
            src={"/menu-bars-new4.png"}
            // quality={100}
            width={32}
            height={32}
            alt='menu'
          />
        </button>
        <div className='flex h-[10vh] min-h-[60px] justify-center items-center'>
          {/* <img src="/fwa1_nobg.png" alt="FWA logo" className="object-cover pointer-events-none"/> */}
          <div className='relative w-20'>
            <Link href={"/"}>
              <img
                // quality={25}
                width={100}
                height={100}
                src={"/fwa1_nobg.png"}
                className=''
                alt='Freewave Logo'
              />
            </Link>
          </div>
        </div>
        <ShoppingCart />
      </div>
    </>
  );
}

function DropdownMenu({
  menuShow,
  setMenuShow,
}: {
  menuShow: boolean;
  setMenuShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const menuVariants = {
    hidden: {
      x: "-100%", // Start position outside the screen
      transition: {
        duration: 0.2,
        type: "linear", // You can customize the animation type
      },
    },
    visible: {
      x: "0", // End position, fully visible
      transition: {
        duration: 0.2,
        type: "linear", // You can customize the animation type
      },
    },
  };

  return (
    <motion.div
      initial='hidden'
      animate={menuShow ? "visible" : "hidden"}
      variants={menuVariants}
      className='font-rajdhani flex flex-col items-start bg-white justify-center gap-4 w-screen h-screen fixed z-50 font-semibold text-black p-10 pb-40'
    >
      <div className='grid grid-cols-3 place-items-center w-full h-min'>
        <button
          className="flex-grow-0 flex-['2 2 0%'] mr-auto text-4xl font-thin active:scale-50 transition-all duration-75 ease-in"
          onClick={() => setMenuShow(!menuShow)}
        >
          X
        </button>
        <div className='relative w-20'>
          <Link href={"/"}>
            <img
              // quality={25}
              width={100}
              height={100}
              src={"/fwa1_nobg.png"}
              className=''
              alt='Freewave Logo'
            />
          </Link>
        </div>
      </div>
      <hr className={`w-full ${menuShow ? "" : "hidden"}`} />
      <div className='flex-grow flex flex-col justify-start gap-6 items-start w-full'>
        <div className='flex items-center group transition duration-300 w-[80%]'>
          <Link
            className='group transition duration-300 text-2xl'
            onClick={() => setMenuShow(!menuShow)}
            href='/'
          >
            Home
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.05rem] opacity-50 bg-black'></span>
          </Link>
          <img
            className='group-hover:translate-x-10 ml-auto sm:ml-0 sm:rotate-90 group-hover:rotate-0 ease-in-out group-hover:opacity-100 transition-all sm:opacity-0 opacity-100 duration-300'
            src={"/skinny-arrow.png"}
            alt='arrow'
            width={10}
            height={10}
          />
        </div>
        <div className='flex items-center group transition duration-300 w-[80%]'>
          <Link
            className='group transition duration-300 text-2xl'
            onClick={() => setMenuShow(!menuShow)}
            href='/Shop'
          >
            Shop
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.05rem] opacity-50 bg-black'></span>
          </Link>
          <img
            className='group-hover:translate-x-10 ml-auto sm:ml-0 sm:rotate-90 group-hover:rotate-0 ease-in-out group-hover:opacity-100 transition-all sm:opacity-0 opacity-100 duration-300'
            src={"/skinny-arrow.png"}
            alt='arrow'
            width={10}
            height={10}
          />
        </div>
        <div className='flex items-center group transition duration-300 w-[80%]'>
          <Link
            className='group transition duration-300 text-2xl'
            onClick={() => setMenuShow(!menuShow)}
            href='/Contact'
          >
            Contact
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.05rem] opacity-50 bg-black'></span>
          </Link>
          <img
            className='group-hover:translate-x-10 ml-auto sm:ml-0 sm:rotate-90 group-hover:rotate-0 ease-in-out group-hover:opacity-100 transition-all sm:opacity-0 opacity-100 duration-300'
            src={"/skinny-arrow.png"}
            alt='arrow'
            width={10}
            height={10}
          />
        </div>
        <div className='flex items-center group transition duration-300 w-[80%]'>
          <Link
            className='group transition duration-300 text-2xl'
            onClick={() => setMenuShow(!menuShow)}
            href='/About'
          >
            About
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.05rem] opacity-50 bg-black'></span>
          </Link>
          <img
            className='group-hover:translate-x-10 ml-auto sm:ml-0 sm:rotate-90 group-hover:rotate-0 ease-in-out group-hover:opacity-100 transition-all sm:opacity-0 opacity-100 duration-300'
            src={"/skinny-arrow.png"}
            alt='arrow'
            width={10}
            height={10}
          />
        </div>
      </div>
    </motion.div>
  );
}

// const UnderlineHover = ({ text }: { text: string }) => {
//     return (
//       <motion.span
//         whileHover={{ scaleX: 1 }}
//         initial={{ scaleX: 0 }}
//         transition={{ duration: 0.3 }}
//         className="relative text-black"
//       >
//         <span>{text}</span>
//         <motion.span
//           className="absolute bottom-0 left-0 w-full h-px bg-black"
//           style={{ originX: 0, scaleX: 0 }}
//         />
//       </motion.span>
//     );
//   };
