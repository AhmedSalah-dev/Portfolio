import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import Typewriter from "typewriter-effect";
import { Link } from 'react-scroll';
import hero from '../assets/cropped_image.png'
import { useTheme } from '../context/ThemeContext';


const Home = () => {
  const {theme, toggleTheme} = useTheme();
  
  return (
   <div name="home" className='h-fit w-full dark:bg-gradient-to-b
   from-black via-black to-gray-800'>
    
     <div className=' max-w-screen-lg mx-auto flex flex-col
        items-center justify-between h-full md:flex-row pt-28'>
        <div className='flex flex-col justify-center h-full '>
            <h2 className='text-3xl sm:text-3xl font-light text-gray-700 dark:text-white'>
            <Typewriter
        options={{
          strings: [
            "Welcome to my Portfolio",
            "I'm a Frontend Developer",
          ],
          autoStart: true,
          loop: true,
          delay: 50
        }}
      />
            </h2>
            <h1 className='text-5xl sm:text-6xl text-slate-500 dark:text-gray-200 py-3'>Ahmed Salah</h1>
            <p className='text-gray-500 py-4 max-w-md'>
                I'm a skilled frontend developer with a passion 
                for creating user-friendly and visually appealing web applications.
            </p>
            <div >
                <Link to='Projects' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2
                flex items-center rounded-md bg-gradient-to-r from-black to-gray-400 cursor-pointer  shadow-transparent  hover:shadow-xl hover:shadow-gray-500/70 transition-all duration-300'>
                    Portfolio 
                    <span className='group-hover:rotate-90 duration-300'>
                      <MdArrowRightAlt size={25} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>
        <div className='w-1/2 '>
          <img 
          className='md:scale-75  animate-pulse rounded-full shadow-md hover:shadow-2xl hover:shadow-gray-500/100 transition-shadow duration-300 ' 
          src={hero} alt="" />
        </div>
     </div>
   </div>
  )
}

export default Home