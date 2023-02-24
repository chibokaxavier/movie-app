import React from 'react'
import "@/app/globals.css"
import { AppProps } from 'next/app'


const MyApp = ({Component,pageProps:{  ...pageProps },}: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp 
