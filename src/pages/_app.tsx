import React from "react";
import "@/app/globals.css";
import { AppProps } from "next/app";
import { AuthProvider } from "hooks/useAuth";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
};

export default MyApp;
