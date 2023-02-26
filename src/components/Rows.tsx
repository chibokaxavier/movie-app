import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import { Movie } from "typings";
import Thumbnail from "./Thumbnail";
interface Props {
  title: String;
  movies: Movie[];
}

const Rows = ({ title, movies }: Props) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="text-[#e5e5e5] text-sm  w-56 font-semibold transition duration-200 hover:text-white">{title}</h2>
      <div className="relative md:-ml-2 group">
        <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition  hover:scale-125 group-hover:opacity-100" />
        
        <div className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
            {movies.map((movie)=>(
              <Thumbnail key={movie.id}  movie={movie}/>  
            ))} 
        
        </div>


        <ChevronRightIcon className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0  transition  hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default Rows;
