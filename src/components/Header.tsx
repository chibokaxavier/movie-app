import React, { useEffect, useState } from "react";
import {BellIcon, SearchIcon} from "@heroicons/react/outline"
import Link from "next/link";
import useAuth from "hooks/useAuth";

function Header() {
  const [isScrolled,setIsScrolled]= useState(false)
const {logout} =useAuth()
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
          src="https://media.istockphoto.com/id/1265725883/vector/spotlight-icon-symbol-design-template.jpg?s=612x612&w=0&k=20&c=7xELFYe9iJ3H5ubC_Dlnk-1rcUZ95NTRYDYUEOTTqOE="
          alt=""
          width={50}
          height={50}
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
        {/* <Link href='/account'> */}
          <img onClick={logout} src="https://rb.gy/g1pwyx" alt="" className="cursor-pointer" />
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Header;
