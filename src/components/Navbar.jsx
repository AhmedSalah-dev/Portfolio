import React, { useState,useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import {useTheme} from '../context/ThemeContext';

const Navbar =() => {
  
  const [nav,setNav]=useState(false);
  const {theme, toggleTheme} = useTheme();

  // handlers 
  const sideNavToggle = () => {setNav(!nav);}
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'Projects'
    },
    {
      id: 4,
      link: 'skills'
    },
    {
      id: 5,
      link: 'contact'
    }
  ];

  return (
    <div className='flex justify-between items-center w-full
    h-20 px-4 text-slate-500 dark:text-white bg-transparent   fixed z-10 bg-opacity-20'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Ahmed</h1>
      </div>

      <ul className='hidden md:flex justify-center py-3 px-6 bg-slate-700 rounded-full '>
        {
          links.map(({id,link}) => (
            <li 
               key={id}
               className='px-4 cursor-pointer capitalize font-medium
               text-gray-300 hover:scale-105'
             >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>    
         </li>
        ))}
      </ul>

       <button 
        onClick={toggleTheme}
        className='absolute  items-center right-3 top-[680px] md:relative flex md:top-0 justify-center md:items-center rounded-full hover:border border-yellow-300 w-10 h-10 bg-gray-600 hover: z-40'>
         <FaRegMoon
        className={`absolute text-3xl transition-transform duration-500 text-white ${
          theme === "dark" ? "rotate-[360deg] opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />

      {/* Light Mode Icon */}
      <FaSun
        className={`absolute text-3xl transition-transform duration-500 ${
          theme ==="dark" ? "opacity-100 scale-100 rotate-[360deg]" : "opacity-0 scale-0"
        }`}
      />
       </button>  

      <div onClick={sideNavToggle} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (
          <ul className='flex flex-col justify-center items-center
          absolute  duration-700 top-0 left-0  w-full h-screen bg-gradient-to-b
          from-black to-gray-800 text-gray-500'>
            {
              links.map(({id,link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-4
                text-4xl'>
              <Link onClick={sideNavToggle} to={link} smooth duration={500}>
                {link}
              </Link>
                </li>
              ))
         }  
          </ul>
      )}

    </div>
  )
}

export default Navbar