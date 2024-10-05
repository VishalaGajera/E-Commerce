import React, { useState } from 'react'
import HomeImg from '../../assets/Images/Home.jpg'
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import FAQs from './FAQs';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const blog = [
    {
      id: 1,
      imageUrl: "https://www.mahmoodrice.com/content/images/tarif/sebzeli-pilav.jpg",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta nulla atque libero ex alias provident reprehenderit sequi veritatis? Blanditiis?"
    },
    {
      id: 2,
      imageUrl: "https://www.mahmoodrice.com/content/images/tarif/1.jpg",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta nulla atque libero ex alias provident reprehenderit sequi veritatis? Blanditiis?"
    },
    {
      id: 3,
      imageUrl: "https://www.mahmoodrice.com/Media/Uploads/nasi-goreng.png",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta nulla atque libero ex alias provident reprehenderit sequi veritatis? Blanditiis?"
    },
    {
      id: 4,
      imageUrl: "https://www.mahmoodrice.com/Media/Uploads/curry-vegetable-basmati-rice.png",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta nulla atque libero ex alias provident reprehenderit sequi veritatis? Blanditiis?"
    },
    {
      id: 5,
      imageUrl: "https://www.mahmoodrice.com/Media/Uploads/eggfoo.jpg",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta nulla atque libero ex alias provident reprehenderit sequi veritatis? Blanditiis?"
    },
  ]

  const brand = ["https://hosindia.com/api/public/images/partnerbrands/PI_9Xd3vUQE9Y.png", "https://hosindia.com/api/public/images/partnerbrands/PI_G6wPMvpVxC.png", "https://hosindia.com/api/public/images/partnerbrands/PI_WTFiWhAI4X.png", "https://hosindia.com/api/public/images/partnerbrands/PI_5YqJ44Strd.png", "https://hosindia.com/api/public/images/partnerbrands/PI_GnuEFk07YE.png", "https://hosindia.com/api/public/images/partnerbrands/PI_s2Sp5Qwa8a.png"]

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const CustomPagination = () => {
    return (
      <div className="flex justify-center items-center gap-1 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`h-1 md:w-4 w-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-BgGolden" : "bg-gray-300"
              }`}
          ></div>
        ))}
      </div>
    );
  };
  return (
    <div className='flex justify-center items-center bg-BgColor'>
      <div className='flex flex-col justify-center items-center'>
        <div className='relative flex flex-col justify-center items-center w-full'>
          <img src={HomeImg} alt="" className='w-full' />
          <div className='absolute text-white flex items-center justify-center flex-col gap-4 w-full text-center top-32'>
            <h1 className='font-bold text-5xl text-BgColor'>Healthy vegetable that you deserve to eat fresh</h1>
            <p className='text-2xl w-1/2 text-BgColor'>We source and sell the very best beef, lamb and pork, sourced with the greatest care from farmer.</p>
            <div className='border rounded-lg bg-white flex items-center gap-3 p-4 w-1/3 '>
              <input type="text" name="" id="" className='text-black outline-none bg-transparent w-full' placeholder='What are you looking...' />
              <CiSearch className='text-black text-2xl' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-10 relative py-10'>
          <div className='flex flex-col gap-10 items-center justify-center mx-5'>
            <div>
              <h1 className='font-bold text-4xl'>Products</h1>
              <div className="flex items-center justify-center mt-5">
                <div className='relative flex justify-center items-center'>
                  <div className='w-36 h-0.5 bg-BgGolden z-20'></div>
                  <div className='absolute w-4 h-4 bg-BgGolden rotate-45 z-10'></div>
                  <div className='absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                  <div className='absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                </div>
              </div>
            </div>
            <p className='md:w-3/5 w-full text-center'>Mahmood Rice is specially cleaned and inspected by the quality control team, and then packaged to meet the needs of different consumer groups in various markets around the world. Our basic activities such as paddy husk separation, rice cleaning, and thickness grading are carried out in a first-class rice processing plant, and polishing, length grading, color sorting and packaging are all completed in-house to offer high-quality products.</p>
          </div>
          <div className='grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mx-5'>
            <div className='md:p-5 p-2 border flex items-center gap-5 bg-red-200 rounded-tr-3xl rounded-bl-3xl'>
              <img src="https://www.mahmoodrice.com/Media/Uploads/10_kg.png" alt="" className='w-20' />
              <div className='flex flex-col gap-2'>
                <h1 className='font-semibold md:text-xl text-lg'>Spring Cleaning for home appliance</h1>
                <p>Get your clean on supplies.</p>
              </div>
            </div>
            <div className='md:p-5 p-2 border flex items-center gap-5 bg-green-200 rounded-tr-3xl rounded-bl-3xl'>
              <img src="https://www.mahmoodrice.com/Content/images/products/10kg-r.png" alt="" className='w-20' />
              <div className='flex flex-col gap-2'>
                <h1 className='font-semibold md:text-xl text-lg'>Spring Cleaning for home appliance</h1>
                <p>Get your clean on supplies.</p>
              </div>
            </div>
            <div className='md:p-5 p-2 border flex items-center gap-5 bg-blue-200 rounded-tr-3xl rounded-bl-3xl'>
              <img src="https://www.mahmoodrice.com/Media/Uploads/4kg_web.png" alt="" className='w-20' />
              <div className='flex flex-col gap-2'>
                <h1 className='font-semibold md:text-xl text-lg'>Spring Cleaning for home appliance</h1>
                <p>Get your clean on supplies.</p>
              </div>
            </div>
            <div className='md:p-5 p-2 border flex items-center gap-5 bg-yellow-200 rounded-tr-3xl rounded-bl-3xl'>
              <img src="https://www.mahmoodrice.com/Media/Uploads/4_5_basmati_pirinc_1.png" alt="" className='w-20' />
              <div className='flex flex-col gap-2'>
                <h1 className='font-semibold md:text-xl text-lg'>Spring Cleaning for home appliance</h1>
                <p>Get your clean on supplies.</p>
              </div>
            </div>
            <div className='absolute top-5 right-0 md:flex hidden'>
              <img src="https://www.mahmoodrice.com/Content/images/parallax/kasik.png" alt="" className='lg:w-60 w-40' />
            </div>
            <div className='absolute lg:top-0 top-24 left-0 rotate-180 md:flex hidden'>
              <img src="https://www.mahmoodrice.com/Content/images/parallax/kasik.png" alt="" className='lg:w-60 w-40' />
            </div>
          </div>
        </div>
        <div className='w-full flex justify-start items-start h-full'>
          <img src="https://www.mahmoodrice.com/Content/images/parallax/pirinc.png" alt="" className='w-64 hidden md:flex' />
          <div className='flex justify-center items-center flex-col text-center gap-10 md:w-2/3 w-full py-10 h-full mx-5'>
            <div>
              <h1 className='font-bold text-4xl'>About us</h1>
              <div className="flex items-center justify-center mt-5">
                <div className='relative flex justify-center items-center'>
                  <div className='w-36 h-0.5 bg-BgGolden z-20'></div>
                  <div className='absolute w-4 h-4 bg-BgGolden rotate-45 z-10'></div>
                  <div className='absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                  <div className='absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                </div>
              </div>
            </div>
            <p className='text-lg md:w-5/6 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium saepe iure a nihil commodi, corrupti reprehenderit illum ab velit iusto voluptatum neque, odio sit vitae tempora. Voluptatum dolorem officiis esse ipsum nostrum voluptates sint, vel magnam quo dolorum ullam hic reprehenderit neque est distinctio nemo fugit perferendis enim totam nobis.</p>
          </div>
        </div>
        <div className='relative w-full flex justify-center items-center text-white' style={{
          backgroundImage: 'url(https://www.mahmoodrice.com/content/images/tariflerbg.jpg)',
          backgroundPosition: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <div className='absolute -top-40 lg:right-0 -right-10 hidden md:flex'>
            <img src="https://www.mahmoodrice.com/Content/images/parallax/domates.png" alt="" className='lg:w-80 w-72' />
          </div>
          <div className='flex justify-center items-center flex-col gap-5 mx-5 py-20'>
            <img src="https://www.mahmoodrice.com/Content/images/svg/en/tarifler-beyaz.svg" alt="" className='w-40' />
            <span>
              <FaAngleDown className='text-3xl' />
            </span>
            <p className='md:w-4/5 text-center'>Be sure to take a look at these recipes to prepare delicious meals with Mahmood Rice and add health to your tables.</p>
          </div>
          <div>

          </div>
        </div>
        {/* <div className='container'> */}
          <div className='flex flex-col justify-center items-center bg-white py-10'>
            <div className='py-10'>
              <h1 className='font-bold text-4xl'>Our Blogs</h1>
              <div className="flex items-center justify-center mt-5">
                <div className='relative flex justify-center items-center'>
                  <div className='w-36 h-0.5 bg-BgGolden z-20'></div>
                  <div className='absolute w-4 h-4 bg-BgGolden rotate-45 z-10'></div>
                  <div className='absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                  <div className='absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                </div>
              </div>
            </div>
            {/* <div className='grid grid-cols-4 gap-5 '> */}
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={4}
              spaceBetween={24}
              loop={true}
              onSlideChange={handleSlideChange}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".custom-next-blog",
                prevEl: ".custom-prev-blog",
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
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              // className="flex md:flex-row flex-col  md:container w-72 md:p-5"
              className="grid grid-cols-4 gap-5 mx-5"
            >
              {blog?.map((data, index) => (
                <SwiperSlide className='flex flex-col justify-center items-center rounded-tr-3xl rounded-bl-3xl border-2 border-BgGolden overflow-hidden cursor-pointer'>
                  <div className='w-full'>
                    <img src={data.imageUrl} alt="" className='w-full h-72' />
                  </div>
                  <div className='flex flex-col gap-3 p-5'>
                    <h1 className='font-bold text-2xl'>{data.title}</h1>
                    <p>{data.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex flex-row gap-2 items-center pt-5">
              <span className="custom-prev-blog md:text-xl text-lg cursor-pointer border-2 border-BgGolden text-BgGolden rounded-tr-xl rounded-bl-xl md:p-2 p-1 text-BgPurple bg-BgLightPurple">
                <BsArrowLeft />
              </span>
              <span className="">
                <CustomPagination />
              </span>
              <span className="custom-next-blog md:text-xl text-lg cursor-pointer border-2 border-BgGolden text-BgGolden rounded-tr-xl rounded-bl-xl md:p-2 p-1 text-BgPurple bg-BgLightPurple">
                <BsArrowRight />
              </span>
            </div>
            {/* </div> */}
          </div>

        {/* </div> */}


        <div className='relative w-full flex flex-col justify-center items-center py-10 gap-10'>
          <div className='flex justify-center items-center flex-col gap-3'>
            <div>
              <h1 className='font-bold text-4xl'>Our Partner Brands</h1>
              <div className="flex items-center justify-center mt-5">
                <div className='relative flex justify-center items-center'>
                  <div className='w-36 h-0.5 bg-BgGolden z-20'></div>
                  <div className='absolute w-4 h-4 bg-BgGolden rotate-45 z-10'></div>
                  <div className='absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                  <div className='absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                </div>
              </div>
            </div>
            <p className='text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatem commodi corporis eos eius ipsa eum quos id alias cupiditate.  </p>
          </div>
          <div className='flex items-center justify-center gap-10 animate-loop-scroll'>
            {brand?.map((data, index) => {
              console.log(data);
              return (
                <div className='flex justify-center items-center' key={index}>
                  <img src={data} alt="" className='w-60' />
                </div>
              )
            })
            }
          </div>
        </div>


        <div className='w-full flex justify-center items-center '>
          <div className='flex flex-col justify-center items-center py-10 bg-white'>
            <div className='flex flex-col justify-center items-center gap-3 py-10'>
              <div>
                <h1 className='font-bold text-4xl'>Testimonal</h1>
                <div className="flex items-center justify-center mt-5">
                  <div className='relative flex justify-center items-center'>
                    <div className='w-36 h-0.5 bg-BgGolden z-20'></div>
                    <div className='absolute w-4 h-4 bg-BgGolden rotate-45 z-10'></div>
                    <div className='absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                    <div className='absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                  </div>
                </div>
              </div>
              <p className='w-2/3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, repudiandae deserunt culpa dolore corporis ut?</p>
            </div>
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={3}
              spaceBetween={24}
              loop={true}
              onSlideChange={handleSlideChange}
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
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              // className="flex md:flex-row flex-col  md:container w-72 md:p-5"
              className="grid grid-cols-4 gap-5 md:p-5 p-0 mx-5 "
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <SwiperSlide className='flex flex-col justify-center items-center rounded-2xl border-l-4 border-b-4 border border-BgGolden overflow-hidden p-5 gap-5 bg-white'>
                  <div className='flex justify-between items-center w-full text-BgGolden'>
                    <span className='flex justify-center items-center gap-1 text-xl'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                    <FaQuoteLeft className='text-3xl' />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid dolores nemo consectetur doloremque. Asperiores debitis, tempore aspernatur perspiciatis nihil et consequatur nam ad maiores qui provident, libero, quia ex?</p>
                  </div>
                  <div className='flex justify-start items-center gap-3 w-full'>
                    <img src="https://hongo.themezaa.com/wp-content/uploads/2018/07/image-1-1.png.webp" alt="" className='rounded-full w-14' />
                    <div>
                      <h1 className='text-lg font-bold'>Shoko Mugikura</h1>
                      <p className='text-sm'>Apple Studio</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex flex-row gap-2 items-center py-5">
              <span className="custom-prev-review md:text-xl text-lg cursor-pointer border-2 border-BgGolden text-BgGolden rounded-tr-xl rounded-bl-xl md:p-2 p-1 text-BgPurple bg-BgLightPurple">
                <BsArrowLeft />
              </span>
              <span className="">
                <CustomPagination />
              </span>
              <span className="custom-next-review md:text-xl text-lg cursor-pointer border-2 border-BgGolden text-BgGolden rounded-tr-xl rounded-bl-xl md:p-2 p-1 text-BgPurple bg-BgLightPurple">
                <BsArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center md:w-2/3 w-full py-10'>
          <FAQs />
        </div>
      </div>
    </div>
  )
}

export default Home