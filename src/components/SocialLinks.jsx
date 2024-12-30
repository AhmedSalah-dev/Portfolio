import React from 'react'
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const links= [
    {
        id:1,
        child: (
            <>
            LinkedIn <FaLinkedinIn size={30}/>
            </>
        ),
        href: 'https://www.linkedin.com/in/ahmed-salah-0a22461b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAPuCN5RHQ1e53toa%2Fvh4XA%3D%3D',
        style: 'rounded-tr-md'
    },
    {
        id:2,
        child: (
            <>
            Github <FaGithub size={30}/>
            </>
        ),
        href: 'https://github.com/AhmedSalah-dev',
        
    },
    {
        id:3,
        child: (
            <>
            Mail <HiOutlineMail size={30}/>
            </>
        ),
        href: 'mailto:midoelshal78@gmail.com',
       
    },
    {
        id:4,
        child: (
            <>
              Resume <BsFillPersonLinesFill/>
            </>
        ),
        href: '/public/Resume.pdf',
        style: 'rounded-br-md',
        download: true
    },
];
const socialLinks = () => {
  return (
    <div className=" lg:flex flex-col top-[35%] left-0 fixed z-20">
       <ul>
        {links.map(({id,child,href,style,download}) => (
            
            <li key={id} className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  lg:hover:ml-[-10px] md:hover:rounded-md duration-300 bg-gray-700 bg-opacity-50 md:bg-gray-700" + 
                " " + 
                style
            }
                 >
                <a href={href} className='flex justify-between items-center
                w-full text-white'download={download} target='_blank' rel='noreferrer'
                >
                    <>
                        {child}
                    </>
                </a>
            </li>
    
        ))}
       </ul>
    </div>
  )
}

export default socialLinks