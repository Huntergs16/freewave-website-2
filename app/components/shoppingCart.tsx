import Image from "next/image"

export default function ShoppingCart() {
    return (
        <button name="shopping-cart" className="ml-auto w-max h-max">
            <div className="absolute z-10 bg-black text-white text-xs sm:text-sm top-5 right-5 rounded-full flex justify-center items-center min-w-min min-h-min px-1">10</div>
            <Image src={"/shopping-cart-icon.png"} width={30} height={30} alt="cart"/>
        </button>
    )
}