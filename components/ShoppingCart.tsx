import Image from "next/image"

export default function ShoppingCart() {
    return (
        <button name="shopping-cart" className="ml-auto w-max h-max">
            <div className="relative z-10 bg-black text-white font-medium text-sm top-1 left-6 rounded-full flex justify-center items-center w-max h-max px-1">10</div>
            <Image src={"/shopping-cart-icon.png"} width={30} height={30} alt="cart"/>
        </button>
    )
}