
import React from 'react'
import { Movie } from 'typings'
import Image from 'next/legacy/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from 'atoms/modalAtom'

interface Props {
    // movie: Movie| DocumentData
    movie: Movie 
}

const Thumbnail = ({movie}:Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:h-36 md:hover:scale-105'  onClick={() => {
      setShowModal(true);
      setCurrentMovie(movie)}} >

         <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail