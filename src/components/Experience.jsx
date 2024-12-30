import React, { useEffect } from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import ts from '../assets/typescript.png'
import github from '../assets/github (1).png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
    useEffect(()=> {
        AOS.init({
            duration: 2000,
            easing: 'ease-in-out',
            
            mirror: false
            });
    },[])
    const tech =[
        {
            id:1,
            src:html,
            title:'HTML',
            style: 'shadow-orange-500',
            data : "fade-right"
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style: 'shadow-blue-500',
            data : "fade-down"
        },
        {
            id:3,
            src:js,
            title:'JavaScript',
            style: 'shadow-yellow-500',
            data : "fade-left"
        },
        {
            id:4,
            src:ts,
            title:'TypeScript',
            style: 'shadow-blue-800',
            data : "fade-right"
        },
        {
            id:5,
            src:react,
            title:'React',
            style: 'shadow-blue-600',
            data : "flip-up"
        },
        {
            id:6,
            src:tailwind,
            title:'Tailwind',
            style: 'shadow-sky-400 flex flex-col justify-between pt-8',
            data : "fade-left"
        },
        {
            id:7,
            src:bootstrap,
            title:'BootStrap',
            style: 'shadow-purple-500',
            data : "fade-right"
        },
        {
            id:8,
            src:github,
            title:'Github',
            style: 'shadow-gray-400',
            data : "fade-up"
        },
    ]
    

  return (
    <div 
        name="skills"
        className='dark:bg-gradient-to-b items from-gray-800 to-black w-full
        h-fit '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center
        w-full h-full  text-slate-600 dark:text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4
               border-slate-700 dark:border-gray-500 p-2 inline'>
                    Experience
                </p>
                <p className='py-6 text-xl font-semibold'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-3 sm:grid-cols-3 
            gap-8 text-center py-8 px-12 sm:px-0 '>

                {
                    tech.map(({id,src,title,style,data}) => (
                        <div  data-aos={data}  key={id} className={ `cursor-pointer shadow-md hover:scale-125 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" />
                    <p className='mt-4'>{title}</p>
                </div>
                    ))
                }
               
            </div>
        </div>
    </div>
  )
}

export default Experience