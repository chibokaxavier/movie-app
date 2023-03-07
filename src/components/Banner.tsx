import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import { Movie } from "typings";
import { baseUrl } from "constants/movie";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "atoms/modalAtom";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 md:py-16 py-[200px] pb-16 md:space-y-4 lg:h-[80vh] lg:justify-end lg:pb-12">
      <div className=" absolute top-0 left-0 -z-50 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          alt="dd"
          objectFit="cover"
          priority
        />
      </div>

      <h1 className="text-2xl md:text-4xl font-bold lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-sm text-sm md:max-w-lg md:text-lg lg:text-2xl lg:max-w-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-2">
        <button className=" flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl  bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button
          onClick={() => {
            setShowModal(true);
            setCurrentMovie(movie)
          }}
          className="bg-[gray]/70 flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl "
        >
          {" "}
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Banner;
