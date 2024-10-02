import React from 'react'
import ContactImg from '../../assets/Images/ContactImg.jpg'

const Contact = () => {
  return (
    <div className='flex justify-center items-center w-full flex-col bg-BgColor'>
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
            <div className='flex flex-col gap-5 mx-5'>
              <div className="py-10">
                <h1 className="font-bold text-4xl relative">Contact</h1>
                <div className="flex items-center justify-start mt-5">
                  <div className='relative flex justify-center items-center'>
                    <div className='w-36 h-0.5 bg-BgGolden z-20'></div>
                    <div className='absolute w-4 h-4 bg-BgGolden rotate-45 z-10'></div>
                    <div className='absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                    <div className='absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veritatis facere atque doloremque vero error dolor fugit eveniet magni quae!</p>
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
            <div className='w-full md:h-full h-96'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59508.554943760646!2d72.8530944!3d21.2205568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726921156735!5m2!1sen!2sin" className='w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact