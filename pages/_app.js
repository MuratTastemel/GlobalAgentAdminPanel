import "../styles/globals.css";
import "../assets/css/style.css";
import "../assets/plugins/bootstrap/css/bootstrap.min.css";
import "../assets/css/dark-style.css";
import "../assets/css/transparent-style.css";
import "../assets/css/skin-modes.css";
import "../assets/css/icons.css";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

import React, { useEffect } from "react";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
}

