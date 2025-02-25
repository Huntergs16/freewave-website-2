import Image from "next/image";

export default function Header() {
  return (
    <div className='w-full h-min mb-6'>
      <div className='w-full h-min'>
        <div className='relative w-full h-full'>
          <img
            // quality={100}
            src='/FW_header.png'
            alt='Photoshoot'
            loading='eager'
            width={1200} // adjust the width of the image to fit your screen
            height={800} // adjust the height of the image to fit your screen
            className='w-full h-full object-cover object-center pointer-events-none'
            useMap='#image-map'
          />
          <map name='image-map' className='z-30'>
            <area
              className='z-40 block absolute top-[8%] left-[50%] w-[13%] h-[17%] sm:opacity-0 md:opacity-0 lg:opacity-0 hover:opacity-30 focus:opacity-30 active:opacity-60 cursor-pointer bg-white opacity-[.15] rounded-lg'
              href='https://instagram.com/matthewperaltaa?igshid=YmMyMTA2M2Y='
              alt="Matt's Link"
              style={{ touchAction: "manipulation" }}
            />
            <area
              className='z-40 block absolute top-[13%] left-[36%] w-[13%] h-[17%] sm:opacity-0 md:opacity-0 lg:opacity-0 hover:opacity-30 focus:opacity-30 active:opacity-60 cursor-pointer bg-white opacity-[.15] rounded-lg'
              href='https://instagram.com/fwmjaymo?igshid=YmMyMTA2M2Y='
              alt="Jaymos's Link"
              style={{ touchAction: "manipulation" }}
            />
            <area
              className='z-40 block absolute top-[45%] left-[22%] w-[13%] h-[17%] sm:opacity-0 md:opacity-0 lg:opacity-0 hover:opacity-30 focus:opacity-30 active:opacity-60 cursor-pointer bg-white opacity-[.15] rounded-lg'
              href='https://instagram.com/__jaazminn26?igshid=YmMyMTA2M2Y='
              alt="Jazmin's Link"
              style={{ touchAction: "manipulation" }}
            />
            <area
              className='z-40 block absolute top-[46%] left-[62%] w-[13%] h-[17%] sm:opacity-0 md:opacity-0 lg:opacity-0 hover:opacity-30 focus:opacity-30 active:opacity-60 cursor-pointer bg-white opacity-[.15] rounded-lg'
              href='https://instagram.com/tattooprincessbritt?igshid=YmMyMTA2M2Y='
              alt="Brittany's Link"
              style={{ touchAction: "manipulation" }}
            />
          </map>
        </div>
      </div>
    </div>
  );
}
