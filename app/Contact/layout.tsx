import { ReactNode } from "react";

export default function ContactLayout({ children }: {children:ReactNode}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <Navbar /> */}
      {children}
    </section>
  )
}
