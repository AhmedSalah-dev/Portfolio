import React from 'react'
import productBuilder from '../assets/Product builder.png'
import roseStore from '../assets/RoseStore.png'
import TodoApp from '../assets/TodoApp.jpg'
const Portfolio = () => {


    const porjects=[
        {
            id: 1,
            src:roseStore,
            
        },
        {
            id: 2,
            src:productBuilder,
            demoRef:"https://react-js-product-builder-project.vercel.app/",
            codeRef:"https://github.com/AhmedSalah-dev/Product-Builder-Project.git",
        },
        {
            id: 3,
            src:TodoApp,
            demoRef:"https://fullstack-todo-app-reactjs.vercel.app/",
            codeRef: "https://github.com/AhmedSalah-dev/fullstack-Todo-app-reactjs.git",
        },
    ]
  return (
    <div name="Projects" className='dark:bg-gradient-to-b 
    from-black to-gray-800 w-full text-slate-600 dark:text-white  md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex 
        flex-col justify-center h-full w-full'>
            <div className='pb-8'>
                <p className='text-4xl inline font-bold
                border-b-4 border-slate-700 dark:border-gray-500'>Projects</p>
                <p className='py-6 text-xl font-semibold'>Check out some of my work right here...</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3
             gap-8 px-12 sm:px-0'>
                 {
                     porjects.map(({id,src,codeRef,demoRef}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img 
                            src={src} 
                            alt="Rose Store" 
                            className='rounded-md duration-500 hover:scale-105'
                        />
                            
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 m-4 duration-200
                            hover:scale-105'>
                                <a href={demoRef}>Demo</a>
                            </button>
                            <button className='w-1/2 px-6 m-4 duration-200
                            hover:scale-105'>
                                <a href={codeRef}>Code</a>
                            </button>
                        </div>
                    </div>
                     ))
                 }
            </div>
        </div>
    </div>
  )
}

export default Portfolio