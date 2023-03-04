import React from "react";
import "@/app/globals.css";
import { AppProps } from "next/app";
import { AuthProvider } from "hooks/useAuth";

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
