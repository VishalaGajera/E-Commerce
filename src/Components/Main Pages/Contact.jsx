import React from 'react'
import ContactImg from '../../assets/Images/ContactImg.jpg'
import { BsPhone } from 'react-icons/bs'
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='flex justify-center items-center w-full flex-col bg-white'>
      <div className='flex justify-center items-center  w-full h-full flex-col gap-10'>
        <div className='w-full h-96 flex items-end' style={{
          backgroundImage: `url(${ContactImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <span className='font-extrabold text-5xl p-5 w-80  h-40 text-center'>
            Contact
            <div className="flex items-center justify-center mt-5">
              <div className='relative flex justify-center items-center'>
                <div className='w-36 h-0.5 bg-slate-600 z-20'></div>
                <div className='absolute w-4 h-4 bg-slate-600 rotate-45 z-10'></div>
                <div className='absolute w-4 h-4 left-[75px] bg-slate-600 rotate-45 opacity-50'></div>
                <div className='absolute w-4 h-4 right-[75px] bg-slate-600 rotate-45 opacity-50'></div>
              </div>
            </div>
          </span>
        </div>
        <div className='container'>
          <div className='grid md:grid-cols-2 grid-cols-1 md:p-20 p-0 gap-10 py-10'>
            <div className='w-4/5 md:h-full h-96 flex flex-col justify-start items-start p-10 rounded-xl gap-8'>
              <h2 className="text-4xl font-bold ">We would love to hear from you!</h2>
              <p className=" text-gray-600">
                Thank you for considering Base Foods. We value your inquiries, feedback, and the opportunity to assist you.
                Feel free to reach out to us through the following channels:
              </p>
              <div className="flex items-center gap-3">
                <span className='bg-BgGolden text-white p-3 rounded-full'><FaPhone className="text-2xl" /></span>
                <div className='flex flex-col gap-2'>
                  <span className="font-semibold">Call us</span>
                  <p className="text-xl font-bold">+1 (437) 606-3251</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5 mx-5 bg-BgColor border-BgGolden border-2 rounded-xl p-10'>
              <div className="pb-5">
                <h1 className="font-semibold text-4xl  relative">Write to us</h1>
                {/* <div className="flex items-center justify-center mt-5">
                  <div className='relative flex justify-center items-center'>
                    <div className='w-36 h-0.5 bg-BgGolden z-20'></div>
                    <div className='absolute w-4 h-4 bg-BgGolden rotate-45 z-10'></div>
                    <div className='absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                    <div className='absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                  </div>
                </div> */}
                <p className='mt-5'>Send us a message</p>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='grid grid-cols-2 gap-3 '>
                  <div className='border p-3 rounded-lg bg-white'>
                    <input type="text" name="" id="" placeholder='First Name' className='w-full outline-none bg-transparent' />
                  </div>
                  <div className='border p-3 rounded-lg bg-white'>
                    <input type="text" name="" id="" placeholder='Last Name' className='w-full outline-none bg-transparent' />
                  </div>
                </div>
                <div className='border p-3 rounded-lg bg-white'>
                  <input type="text" name="" id="" placeholder='Subject' className='w-full outline-none bg-transparent' />
                </div>
                <div className='border p-3 rounded-lg bg-white'>
                  <textarea placeholder='Message' className='w-full outline-none bg-transparent' rows={5}></textarea>
                </div>
                <div className='p-3 rounded-lg bg-BgGolden text-white font-bold  text-center text-lg'>
                  <button>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact