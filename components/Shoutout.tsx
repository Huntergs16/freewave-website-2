"use client";

import Image from "next/image";
import Link from "next/link";

export default function ShoutOut({
  name,
  image,
  description,
  link,
}: {
  name: string;
  image: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className='flex flex-col items-center gap-4 cursor-pointer'
      target='_blank'
    >
      <img src={image} alt={name} width={200} height={200} />
      <p className='text-2xl'>{name}</p>
      <p className='text-xl'>{description}</p>
    </Link>
  );
}
