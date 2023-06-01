import React, { ReactNode } from 'react';

export default function ShopLayout({ children }: {children:ReactNode}) {
  return (
    <section>
      <hr className="mx-auto h-[1px] mb-4 w-[97%] border-opacity-100 border-stone-200 border-[1px]" />
      {children}
    </section>
  )
}
