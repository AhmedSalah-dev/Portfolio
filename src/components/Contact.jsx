import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen dark:bg-gradient-to-b
    from-black to-gray-800 p-4 dark:text-white text-slate-600'>
        <div className='flex flex-col p-4 justify-center
         max-w-screen-lg mx-auto h-full'>
            <div pb-8>
                <p className='text-4xl font-bold inline border-b-4 border-slate-700 dark:border-gray-500'>
                    Contact
                </p>
                <p className='py-6 text-xl font-semibold'>submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/bwnnmpea" 
                 className='flex flex-col w-full md:w-1/2'
                 method='POST'>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Enter Your name' 
                        className='p-2 bg-transparent border-2 rounded-md 
                        dark:text-white focus:outline-none'
                     />
                     <input 
                        type="email" 
                        name='email' 
                        placeholder='Enter Your Email'
                        className='my-4 p-2 bg-transparent border-2 rounded-md 
                       dark:text-white focus:outline-none'
                     />
                     <textarea
                        name='message'
                        rows="10"
                        placeholder='Enter Your Message'
                        className='p-2 bg-transparent border-2 rounded-md 
                        dark:text-white focus:outline-none'
                    ></textarea>

                    <button className='  text-white px-6 py-3 my-8 mx-auto flex
                     items-center rounded-md bg-gradient-to-r from-black to-gray-400  shadow-transparent  hover:shadow-xl hover:shadow-gray-500/70  hover:scale-110 transition-all duration-700 '>
                        Let's talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact