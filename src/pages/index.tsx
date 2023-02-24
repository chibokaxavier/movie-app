import React from 'react'
import Head from 'next/head';
import Header from "@/components/Header"
import Banner from '@/components/Banner';
import requests from 'utils/requests';
import { Movie } from 'typings';


interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

export default function Index ({ netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,}:Props) {
  // console.log(netflixOriginals);
  
  return (
    <>
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
    <Head>
        <title className=''> Movie App</title>
    </Head>
<Header/>
    <main>
       <Banner netflixOriginals={netflixOriginals} />
        <section>
{/* row */}
{/* row */}
{/* row */}
{/* row */}
{/* row */}
{/* row */}
{/* row */}
{/* row */}

        </section>
    </main>
    {/* modal */}
    </div>
  
    </>
   
  )
}

export const  getServerSideProps = async ()=>{
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])
return {

  props:{
    netflixOriginals: netflixOriginals.results,
    trendingNow: trendingNow.results,
    topRated: topRated.results,
    actionMovies: actionMovies.results,
    comedyMovies: comedyMovies.results,
    horrorMovies: horrorMovies.results,
    romanceMovies: romanceMovies.results,
    documentaries: documentaries.results,
  }
}
}