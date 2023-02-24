import React, { useEffect, useState } from "react";
import {BellIcon, SearchIcon} from "@heroicons/react/outline"
import Link from "next/link";

function Header() {
  const [isScrolled,setIsScrolled]= useState(false)

  useEffect(()=>{
const handleScroll = () =>{
  if (window.scrollY > 0){
    setIsScrolled(true)
  }
  else {
setIsScrolled(false)
  }
}
window.addEventListener("scroll",handleScroll)
  },[])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJE_68H_htQuNeOPdMLNlkoCzVgsBcJr_dw&usqp=CAU"
          alt=""
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden md:flex space-x-4">
          <li className="HeaderLink">Home</li>
          <li className="HeaderLink">TV Shows</li>
          <li className="HeaderLink">Movies</li>
          <li className="HeaderLink">New & Popular</li>
          <li className="HeaderLink">My List</li>
        </ul>
      </div>
      <div className="flex space-x-4 text-sm font-light">
        <SearchIcon className="h-6 w-6 hidden sm:inline"/>
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6"/>
        <Link href='/account'>
          <img src="https://rb.gy/g1pwyx" alt="" className="cursor-pointer" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
