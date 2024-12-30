import React from 'react'

const About = () => {
  return (
    <div name="about" className='h-fit w-full dark:bg-gradient-to-b
   from-gray-800 to-black text-slate-600 dark:text-white mx-auto py-10'>
        <div className='max-w-screen-lg mx-auto  flex-col
        items-center justify-center h-fit px-4 md:flex-row'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-slate-700 
                dark:border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-2 '>
            Hi, I'm Ahmed Salah, a passionate Frontend Developer with a keen eye for design and a love for crafting interactive, user-friendly web experiences.
             I specialize in turning ideas into responsive and visually appealing websites using HTML, CSS, JavaScript, and frameworks like React.
            I’m always excited to learn new technologies, tackle challenging problems, and grow my skills in the ever-evolving world of web development.
            When I'm not coding, you might find me reading , playing football, and shopping.
            </p>
        </div>
    </div>
  )
}

export default About