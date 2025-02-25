import Image from "next/image";

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center h-36 py-2 w-full mt-auto'>
      <div className='flex items-center justify-center gap-6 p-2'>
        <a
          target='_blank'
          href='https://twitter.com/freewavemvmt?s=11&t=i_T5MVoFls0Dqyr4XCo0LQ'
        >
          <img
            className='opacity-90'
            alt='twitter'
            src={"/twitter-black.png"}
            width={32}
            height={32}
          />
        </a>
        <a
          target='_blank'
          href='https://instagram.com/freewaveathletics?igshid=YmMyMTA2M2Y='
        >
          <img
            className='opacity-90'
            alt='twitter'
            src={"/instagram-icon-black.png"}
            width={32}
            height={32}
          />
        </a>
      </div>
      <hr className='h-[1px] mt-4 mb-4 w-[97%] border-opacity-100 border-stone-1000 border-[1px]' />
      <p className='font-mono text-base text-center'> ©2023 Freewave</p>
    </footer>
  );
}
