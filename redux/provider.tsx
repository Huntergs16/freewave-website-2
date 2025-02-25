"use client";

import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { CookiesProvider } from "react-cookie";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CookiesProvider>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </CookiesProvider>
  );
}
