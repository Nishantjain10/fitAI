"use client";
import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";
import fitAIimg from '@/public/images/flexed-biceps_fitAI.png'
import Image from 'next/image'


interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [activeButton, setActiveButton] = useState('');

  return (
    <div className="md:container font-product md:mx-auto py-10 px-24 flex items-center justify-between">
      <div className="text-4xl font-semibold flex flex-row justify-center items-center gap-1 text-violet-600">
        <Image className="w-10 h-10" src={fitAIimg} alt={""}/> 
        <a href="/">
        <span> fitai. </span>
        </a>
        </div>
      <div className="flex justify-center items-center gap-10 font-medium text-violet-600 text-lg">

        <Link href="/">
        <button
        className="hover:text-violet-700"
        id='home-button'>
          Home
        </button>
        </Link>


        <button
        id='trainer-button'><a href="#trainers">Trainers</a>
        </button>

        
        <Link href="/login">
        <button
        className="bg-violet-600 text-white rounded-md px-4 py-2 hover:bg-violet-500 transition-all"
        id='login-button'>Login</button>
        </Link>


        <Link href="/signup">
        <button 
        className=" border border-hover:border-[#F3BC34] rounded-md px-3 py-2 hover:bg-violet-600 hover:text-white transition-all"
        id='signup-button'>Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
