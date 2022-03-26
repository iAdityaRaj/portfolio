import React from 'react';
import ChatappImg from '../assets/chatapp.png';
import realEstate from '../assets/realestate.jpg'
import dia_prediction from '../assets/diaPred2.png'
import SeeNews from '../assets/Seenews.png'
import Tsa from '../assets/tsa.png'
import pf from '../assets/portfolio.png'
import inb from '../assets/iNotebook.png'

const Projects = () => {
  return (
    <div name='work' className='w-full md:h-[900px] text-gray-300 bg-[#3174d8]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-white-600'>
          Projects
        </p>
        <p className='py-6'> Check out some of my projects</p>
      </div>

{/* Container */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
        <div
          style={{ backgroundImage: `url(${ChatappImg})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-xl font-bold text-white tracking-wider'>
              Chat app in React JS 
            </span>
            <div className='pt-8 text-center'>
              <a href='https://github.com/iAdityaRaj/hangout-chats' target="_blank">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                  View
                </button>
              </a>
             
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${dia_prediction} )`  }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-xl font-bold text-white tracking-wider'>
              Diabetes prediction using ML
            </span>
            <div className='pt-8 text-center'>
              <a href='https://github.com/iAdityaRaj/diabetes_prediction' target="_blank">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                 View
                </button>
              </a>
              
            </div>
          </div>
        </div>
          {/* Grid Item */}
        <div
          style={{ backgroundImage: `url(${SeeNews})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-xl font-bold text-white tracking-wider'>
              React JS News App
            </span>
            <div className='pt-8 text-center'>
              <a href='https://github.com/iAdityaRaj/Seenews-app' target="_blank">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  View
                </button>
              </a>
              
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Tsa})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-xl font-bold text-white tracking-wider'>
              Twitter Sentiment Analysis
            </span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  View
                </button>
              </a>
              
            </div>
          </div>
        </div>
          {/* Grid Item */}
        <div
          style={{ backgroundImage: `url(${pf})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-xl font-bold text-white tracking-wider'>
              Portfolio in react js
            </span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  View
                </button>
              </a>
              
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${inb})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-xl font-bold text-white tracking-wider'>
              Cloud based notebook
            </span>
            <div className='pt-8 text-center'>
              <a href='https://github.com/iAdityaRaj/cloudnotebook' target="_blank">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  View
                </button>
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  )
}

export default Projects