'use client';
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import ShoppingCart from "./ShoppingCart";

export default function Navbar() {
    const [menuShow, setMenuShow] = useState<boolean>(false);

    return (
        <>
            {menuShow ? (<DropdownMenu menuShow={menuShow} setMenuShow={setMenuShow}/>) 
            : 
            (
            <div className="text-black grid grid-cols-3 grid-rows-1 justify-center w-full h-[7vh] min-h-[60px] items-center px-10 font-rajdhani">
                <ul className="font-semibold hidden md:flex md:flex-wrap mr-auto justify-center items-center gap-x-2 text-xs sm:text-sm sm:gap-x-4 md:gap-x-5 font-mono">
                    <li className="hover:opacity-60 hover:underline-offset-4 text-lg underline text-center">
                        <Link href="/" >Home</Link>
                    </li>
                    <li className="hover:opacity-60 hover:underline-offset-4 text-lg underline">
                    <Link href="/Shop" >Shop</Link>
                    </li>
                    <li className="hover:opacity-60 hover:underline-offset-4 text-lg underline text-center">
                        <Link href="/Contact" >Contact</Link>
                    </li>
                    <li className="hover:opacity-60 hover:underline-offset-4 text-lg underline text-center">
                        <Link href="/About" >About</Link>
                    </li>
                </ul>
                <button name="menu-dropdown" className="block md:hidden w-max" onClick={(() => setMenuShow(!menuShow))}>
                    <Image src={"/menu-bars.png"} width={30} height={30} alt="menu"/>
                </button>
                <div className="flex h-[10vh] min-h-[60px] justify-center items-center">
                    {/* <img src="/fwa1_nobg.png" alt="FWA logo" className="object-cover pointer-events-none"/> */}
                    <div className="relative w-20">
                        <Link href={"/"}>
                            <Image quality={25} width={1000} height={1000} src={"/fwa1_nobg.png"} className="" alt="Freewave Logo"/>
                        </Link>
                    </div>
                </div>
                <ShoppingCart />
            </div>
            )
            }
        </>
    )
}

export function DropdownMenu({menuShow, setMenuShow}: {menuShow: boolean, setMenuShow: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <div className="font-rajdhani flex flex-col items-center bg-white justify-center gap-10 w-screen h-screen fixed z-50 font-semibold text-black p-10 pb-40">
            <button className="flex-grow-0 flex-['2 2 0%'] mr-auto text-4xl" onClick={(() => setMenuShow(!menuShow))}>X</button>
            <div className="flex-grow flex flex-col justify-center gap-10 items-center">
                <Link className="hover:underline text-4xl" onClick={(() => setMenuShow(!menuShow))} href="/" >Home</Link>
                <Link className="hover:underline text-4xl" onClick={(() => setMenuShow(!menuShow))} href="/Shop" >Shop</Link>
                <Link className="hover:underline text-4xl" onClick={(() => setMenuShow(!menuShow))} href="/Contact" >Contact</Link>
                <Link className="hover:underline text-4xl" onClick={(() => setMenuShow(!menuShow))} href="/About" >About</Link>
            </div>
        </div>
    )
}