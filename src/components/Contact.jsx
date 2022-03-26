import React from 'react';
import {FaInstagram}from 'react-icons/fa';
const Contact = () => {
  return (
    <div name='contact' className='w-full h-[900px] bg-[#941a1a] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/9dd112ba-6f11-416c-8188-05c5af77e72e" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Get in Touch</p>
            <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - raj229488@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-md' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 rounded-md hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
            <div className='flex justify-center items-center p-4 text-gray-300 mt-20'><p>Made with ❤ by <a href="https://www.instagram.com/aaediie/" target="_blank"><p> ~aaediie<FaInstagram size={20}/></p> </a></p></div>
        </form>

    </div>
  )
}

export default Contact
