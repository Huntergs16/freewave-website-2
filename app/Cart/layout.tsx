import { ReactNode } from "react";

export default function CartLayout({ children }: {children:ReactNode}) {
  return (
    <section>
      {children}
    </section>
  )
}
