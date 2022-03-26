import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
const Home = () => {
  return (
    <div name="home" className='bg-[#030913] w-full h-screen' >
          {/* Container */}
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Aditya Raj
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a passionate Web Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am a passionate self-taught Web Developer. "Trying out things." having an experience of building Web applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks.
            
        </p>
        <a href='https://drive.google.com/file/d/1ifV5yM5KPFFUyBL03Vn1bxJBqqplsqHx/view?usp=sharing' target="_blank">
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>
            Resume
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </a>
          </div>
    </div>
  )
}

export default Home