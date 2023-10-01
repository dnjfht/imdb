"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
