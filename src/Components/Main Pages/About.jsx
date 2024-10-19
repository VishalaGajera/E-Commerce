// import React from 'react'
// import aboutImg from '../../assets/Images/ContactImg.jpg'

// const About = () => {
//     return (
//         <div className='flex flex-col justify-center items-center bg-white gap-10'>
//             <div className='flex justify-center items-center w-full h-screen text-white'
//                 style={{
//                     backgroundImage: `url('https://img.freepik.com/premium-photo/online-grocery-shopping-convenience-your-fingertips_1276750-745.jpg')`,
//                     backgroundSize: "cover",
//                     backgroundRepeat: "no-repeat",
//                     backgroundPosition: "center"
//                 }}>
//                 <div className='bg-black w-full h-full bg-opacity-70 flex justify-center items-center text-center '>
//                     <div className='w-2/4 flex items-center gap-4 flex-col'>
//                         <h1 className='font-bold text-5xl'>ABOUT US</h1>
//                         <p className='text-lg'>With over 50 years of experience in the market, HOS Global Foods is the most popular choice for quality South Asian flavors and the largest South Asian distributor in the USA.</p>
//                     </div>
//                 </div>
//             </div>

//             <div className='container'>
//                 <div className='flex flex-col justify-center items-center mx-5'>
//                     <div className='flex items-center justify-center py-10'>
//                         <div className='bg-white rounded-tr-3xl rounded-bl-3xl border-2 border-BgGolden'>
//                             <img src="https://www.mahmoodrice.com/Media/Uploads/4kg_web.png" alt="" className='w-80 h-96' />
//                         </div>
//                         <div className='flex flex-col w-2/4 border-y-2 border-r-2 border-BgGolden bg-white p-8 items-center gap-5'>
//                             <h1 className='font-bold text-3xl'>Content Of Vision</h1>
//                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eum commodi aliquam quis delectus quasi dicta dolores corporis optio voluptate.</p>
//                         </div>
//                     </div>
//                     <div className='flex items-center justify-center py-10'>
//                         <div className='flex flex-col w-2/4  border-y-2 border-l-2 border-BgGolden bg-white p-8 items-center gap-5'>
//                             <h1 className='font-bold text-3xl'>Content Of Vision</h1>
//                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eum commodi aliquam quis delectus quasi dicta dolores corporis optio voluptate.</p>
//                         </div>
//                         <div className='bg-white rounded-tr-3xl rounded-bl-3xl border-2 border-BgGolden'>
//                             <img src="https://www.mahmoodrice.com/Media/Uploads/4kg_web.png" alt="" className='w-80 h-96' />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='flex justify-center items-center h-auto w-full'>
//                 <div className="w-full relative" style={{
//                     backgroundImage: `url('https://img.freepik.com/premium-photo/online-grocery-shopping-convenience-your-fingertips_1276750-745.jpg')`,
//                     backgroundSize: "cover",
//                     backgroundRepeat: "no-repeat",
//                     backgroundPosition: "center"
//                 }}>
//                 <div className='absolute top-0'>
//                     <h1>Our Team</h1>
//                     <div className='flex flex-row justify-center items-center gap-5'>
//                         <div className='flex justify-center items-center flex-col w-96 gap-5'>
//                             <div>
//                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="" />
//                             </div>
//                             <div className='flex justify-center items-center flex-col gap-2'>
//                                 <h1>Nell G. Soni</h1>
//                                 <span>lorem ipsum</span>
//                                 <p className='bg-BgColor p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni ea quo? Obcaecati perspiciatis eligendi incidunt distinctio! Accusantium, veritatis consectetur?</p>
//                             </div>
//                         </div>
//                         <div className='flex justify-center items-center flex-col w-96 gap-5'>
//                             <div>
//                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="" />
//                             </div>
//                             <div className='flex justify-center items-center flex-col gap-2'>
//                                 <h1>Nell G. Soni</h1>
//                                 <span>lorem ipsum</span>
//                                 <p className='bg-BgColor p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni ea quo? Obcaecati perspiciatis eligendi incidunt distinctio! Accusantium, veritatis consectetur?</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About



import React from 'react'
import aboutImg from '../../assets/Images/ContactImg.jpg'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen pb-5">
      <main className="flex-grow">
        <section className="relative md:h-[80vh] h-52">
          <img
            src={aboutImg}
            alt="Fresh salad"
            layout="fill"
            objectFit="cover"
            className='h-full w-full'
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col gap-5 md:items-center items-start justify-center text-white p-5">
            <div>
            <h1 className="md:text-6xl text-2xl font-bold">About Us</h1>
            <div className="flex items-center justify-center mt-3">
                <div className='relative flex justify-center items-center'>
                  <div className='md:w-36 w-24 h-0.5 bg-white z-20'></div>
                  <div className='absolute w-4 h-4 bg-white rotate-45 z-10'></div>
                  <div className='absolute w-4 h-4 md:left-[75px] left-[53px] bg-white rotate-45 opacity-50'></div>
                  <div className='absolute w-4 h-4 md:right-[75px] right-[53px] bg-white rotate-45 opacity-50'></div>
                </div>
              </div>
            </div>
            <p className='md:w-1/2 pt-5 md:text-center text-pretty md:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id quibusdam voluptatem expedita consequatur quod, quidem veritatis repudiandae deserunt dolores!</p>
          </div>
        </section>

        <section className="max-w-full px-5 my-16 flex flex-col  gap-20">
          <div className="flex md:flex-row flex-col items-center justify-center md:gap-0 gap-5">
            <div className="">
              <img
                src="https://www.mahmoodrice.com/Media/Uploads/4kg_web.png  "
                alt="Product image"
                width={300}
                height={300}
                className="rounded-tr-3xl rounded-bl-3xl md:border-r-2 md:border-l-0 border-l-2 border-b-2 border-BgGolden bg-BgColor"
              />
            </div>
            <div className="md:w-1/2  md:text-center text-start bg-BgColor px-5 py-10 border-r-2 border-BgGolden md:border-t-2 border-b-2 md:border-b-0 rounded-r-3xl">
              <h2 className="md:text-3xl text-2xl font-bold mb-4">Content of vision</h2>
              <p className="text-gray-600 md:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="flex  md:flex-row flex-col items-center justify-center md:gap-0 gap-5">
            <div className="md:order-2 order-first">
              <img
                src="https://www.mahmoodrice.com/Media/Uploads/4kg_web.png"
                alt="Product image"
                width={300}
                height={300}
                className="rounded-br-3xl rounded-tl-3xl border-l-2 border-b-2 border-BgGolden bg-BgColor"
              />
            </div>
            <div className="md:w-1/2 md:text-center text-start bg-BgColor px-5 py-10 md:border-l-2 border-r-2 md:border-r-0 border-BgGolden md:border-t-2 border-b-2 md:border-b-0 rounded-l-3xl">
              <h2 className="md:text-3xl text-2xl font-bold mb-4">Content of mission</h2>
              <p className="text-gray-600 md:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </section>

        {/* <section className="relative py-16 h-screen mb-20 overflow-hidden">
          <div className='relative w-full h-full'>
            <img
              src={aboutImg}
              alt="Fresh vegetables"
              layout="fill"
              objectFit="contain"
              className='h-[50vh] w-full'
            />
            <div className='gradient-blur '></div>
            <div className='gradient-blur2'></div>
            <div className='gradient-blur3'></div>
          </div>
          <div className="absolute top-16 bg-opacity-50 w-full h-[50vh] bg-black flex justify-center items-center flex-col gap-5 text-black mx-auto">
            <div className='pt-96'>
              <h2 className="text-5xl font-bold text-white mb-10 text-center">Our Team</h2>
              <div className="flex justify-center items-center space-x-8">
                <span className="w-fit h-fit custom-prev-review md:text-xl text-lg cursor-pointer border-2 border-BgGolden text-BgGolden rounded-tr-xl rounded-bl-xl md:p-2 p-1 text-BgPurple bg-BgLightPurple">
                  <BsArrowLeft />
                </span>
                {[...Array(2)].map((i) => (
                  <div key={i} className="p-6 rounded-lg w-96 flex flex-col gap-3">
                    <div className='rounded-tr-3xl rounded-bl-3xl  p-1 border-2 border-white w-80 h-72'>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
                        alt={`Team member ${i}`}
                        className="bg-white rounded-tr-3xl rounded-bl-3xl p-10 w-full h-full"
                      />
                    </div>
                    <div className='flex gap-2 items-center flex-col'>
                      <h3 className="text-xl font-bold text-center text-BgGolden">Neil G. Soni</h3>
                      <p className="text-center text-BgGolden">Position</p>
                      <p className="bg-BgColor p-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                ))}
                <span className="h-fit w-fit custom-next-review md:text-xl text-lg cursor-pointer border-2 border-BgGolden text-BgGolden rounded-tr-xl rounded-bl-xl md:p-2 p-1 text-BgPurple bg-BgLightPurple">
                  <BsArrowRight />
                </span>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  )
}

{/* <Swiper
                  modules={[Autoplay, Navigation]}
                  slidesPerView={2}
                  spaceBetween={24}
                  loop={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".custom-next-review",
                    prevEl: ".custom-prev-review",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                  }}
                  className="grid grid-cols-4 gap-5 md:p-5 p-0"
                >
                  {[...Array(2)].map((i) => (
                    <SwiperSlide key={i} className="p-6 rounded-lg w-96">
                      <div className='rounded-tr-3xl rounded-bl-3xl  p-1 border-2 border-white w-80 h-80'>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
                          alt={`Team member ${i}`}
                          className="bg-white rounded-tr-3xl rounded-bl-3xl p-10 w-full h-full"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-center mb-2 text-BgGolden">Neil G. Soni</h3>
                      <p className="text-center mb-4 text-BgGolden">Position</p>
                      <p className="bg-BgColor p-3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </SwiperSlide>
                  ))}
                </Swiper> */}