import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#3064b3] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Aditya, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>Hi I am Aditya Raj , a third year CSE undergrad student.I am a keen learner and i am always passionate about learning new things.I am a passionate self-taught web developer . My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. i take great care in the experience, architecture, and code quality of the things I build.</p>  
          </div>
        </div>
    </div>
  </div>
  )
}

export default About