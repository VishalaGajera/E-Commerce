import React, { useState } from 'react'
import HomeImg from '/Images/Home.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Aparna_Foods_1 from '/Images/Aparna_Foods_1.png';
import Slide1 from '/Images/Slide1.png';
import Slide2 from '/Images/Slide2.png';
import Slide3 from '/Images/Slide3.png';
import Slide4 from '/Images/Slide4.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderImages = [Slide1, Slide2, Slide3, Slide4]

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

  const brand = ["https://hosindia.com/api/public/images/partnerbrands/PI_9Xd3vUQE9Y.png", "https://hosindia.com/api/public/images/partnerbrands/PI_G6wPMvpVxC.png", "https://hosindia.com/api/public/images/partnerbrands/PI_WTFiWhAI4X.png", "https://hosindia.com/api/public/images/partnerbrands/PI_5YqJ44Strd.png", "https://hosindia.com/api/public/images/partnerbrands/PI_GnuEFk07YE.png", "https://hosindia.com/api/public/images/partnerbrands/PI_s2Sp5Qwa8a.png", Aparna_Foods_1]

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
    <div className='flex justify-center items-center bg-white'>
      <div className='flex flex-col justify-center items-center'>
        <section className='relative md:h-[100vh] h-72 w-[98.7vw]  overflow-hidden'>
          {/* <img src={HomeImg} alt="" className='w-full' />
          <div className='absolute text-white md:flex hidden items-center justify-center flex-col gap-4 w-full text-center 2xl:top-32 lg:top-20 top-0 p-5'>
            <h1 className='font-bold 2xl:text-5xl lg:text-4xl text-3xl text-BgColor'>Healthy vegetable that you deserve to eat fresh</h1>
            <p className='2xl:text-2xl lg:text-xl text-base lg:w-1/2 w-2/3 text-BgColor'>We source and sell the very best beef, lamb and pork, sourced with the greatest care from farmer.</p>
            <div className='border rounded-lg bg-white flex items-center gap-3 2xl:p-4 p-2 w-1/3 '>
              <input type="text" name="" id="" className='text-black outline-none bg-transparent w-full' placeholder='What are you looking...' />
              <CiSearch className='text-black text-2xl' />
            </div>
          </div> */}

          {/* <div className='overflow-x-hidden'> */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next'
            }}
            pagination={{
              dynamicBullets: true,
            }}
            loop
            // className="w-[98.9vw] h-[500px] md:h-[600px] "
            className="h-full w-full overflow-hidden"
          >
            <SwiperSlide>
              <img src={Slide1} alt={`slide 1}`} className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide2} alt={`slide 2}`} className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide3} alt={`slide 3}`} className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide4} alt={`slide 4}`} className="h-full w-full object-cover" />
            </SwiperSlide>
            {/* {sliderImages.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={image} alt={`slide ${index + 1}`} className="h-full w-full" />
                </SwiperSlide>
              )
            })} */}
          </Swiper>
          <div className="custom-prev absolute top-1/2 transform -translate-y-1/2 md:left-10 left-5 z-10 p-3 cursor-pointer border-2 border-BgGolden text-BgGolden rounded-full animate-bg-fade-out hover:animate-bg-fade-in hover:text-white">
            <BsArrowLeft className='md:text-2xl text-xl' />
          </div>
          <div className="custom-next absolute top-1/2 transform -translate-y-1/2 md:right-10 right-5 z-10 p-3 cursor-pointer border-2 border-BgGolden text-BgGolden rounded-full animate-bg-fade-out hover:animate-bg-fade-in hover:text-white">
            <BsArrowRight className='md:text-2xl text-xl' />
          </div>
          {/* <SwiperSlide>
               <div
                 className="flex flex-col items-center justify-center w-full h-full bg-cover bg-center"
                 style={{
                   backgroundImage: `url(${image})`,
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
                 }}
               ></div>
             </SwiperSlide> */}
          {/* </div> */}
          {/* <div className='absolute text-white md:flex hidden items-center justify-center flex-col gap-4 w-full text-center 2xl:top-32 lg:top-20 top-0 p-5'>
            <h1 className='font-bold 2xl:text-5xl lg:text-4xl text-3xl text-BgColor'>Healthy vegetable that you deserve to eat fresh</h1>
            <p className='2xl:text-2xl lg:text-xl text-base lg:w-1/2 w-2/3 text-BgColor'>We source and sell the very best beef, lamb and pork, sourced with the greatest care from farmer.</p>
          </div> */}
        </section>
        <div className='flex flex-col gap-10 relative py-20'>
          <div className='flex flex-col gap-10 items-center justify-center mx-5'>
            <div>
              <h1 className='font-bold md:text-4xl text-3xl text-center'>Products</h1>
              <div className="flex items-center justify-center mt-5">
                <div className='relative flex justify-center items-center'>
                  <div className='w-36 h-0.5 bg-BgGolden z-20'></div>
                  <div className='absolute w-4 h-4 bg-BgGolden rotate-45 z-10'></div>
                  <div className='absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                  <div className='absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                </div>
              </div>
            </div>
            <p className='lg:w-3/5 w-full text-center md:text-base text-sm'>At CrossContinents Traders, we are dedicated to bringing you the finest selection of Rice,
              Flours, Beans & Lentils, Spices and many other Spice mixes like MDH and Shan sourced from
              trusted suppliers who share our passion for quality. Each product is carefully chosen to ensure
              it meets our high standards, delivering an authentic taste experience to your kitchen. Each item
              in our collection has been chosen with care to ensure it’s fresh, flavorful, and meets the highest
              quality standards. Whether you're an experienced cook or just beginning your culinary journey,
              our products provide the perfect foundation for creating dishes that delight the senses. Let us
              be part of your kitchen with products that bring health, taste, and authenticity to every meal.</p>
          </div>

          <div className='grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mx-5'>
            <div className='md:p-5 p-2 border flex items-center gap-5 bg-red-200 rounded-tr-3xl rounded-bl-3xl'>
              <img src="https://www.mahmoodrice.com/Media/Uploads/10_kg.png" alt="" className='w-20' />
              <div className='flex flex-col md:gap-2 gap-0'>
                <h1 className='md:font-bold font-bold md:text-lg text-base'>Fresh Flours for All Your Baking and Cooking.</h1>
                <p className='md:text-base text-sm'>explore sher, Ashirwad, Minar…</p>
              </div>
            </div>
            <div className='md:p-5 p-2 border flex items-center gap-5 bg-green-200 rounded-tr-3xl rounded-bl-3xl'>
              <img src="https://www.mahmoodrice.com/Content/images/products/10kg-r.png" alt="" className='w-20' />
              <div className='flex flex-col md:gap-2 gap-0'>
                <h1 className='md:font-bold font-bold md:text-lg text-base'>Aromatic Rice for Tasty, Fluffy Meals</h1>
                <p className='md:text-base text-sm'>explore Maharani, Handi, Marhaba</p>
              </div>
            </div>
            <div className='md:p-5 p-2 border flex items-center gap-5 bg-blue-200 rounded-tr-3xl rounded-bl-3xl'>
              <img src="https://www.mahmoodrice.com/Media/Uploads/4kg_web.png" alt="" className='w-20' />
              <div className='flex flex-col md:gap-2 gap-0'>
                <h1 className='md:font-bold font-bold md:text-lg text-base'>Explore Our Fresh, Quality Beans & Lentils – Perfect for Nutritious,
                  Flavorful Meals!</h1>
                <p className='md:text-base text-sm'></p>
              </div>
            </div>
            <div className='md:p-5 p-2 border flex items-center gap-5 bg-yellow-200 rounded-tr-3xl rounded-bl-3xl'>
              <img src="https://www.mahmoodrice.com/Media/Uploads/4_5_basmati_pirinc_1.png" alt="" className='w-20' />
              <div className='flex flex-col md:gap-2 gap-0'>
                <h1 className='md:font-bold font-bold md:text-lg text-base'>Traditional Spice Blends for Great Flavor</h1>
                <p className='md:text-base text-sm'>explore our raw spices, MDH, Shan</p>
              </div>
            </div>
            <div className='absolute top-20 -left-2 -rotate-12 lg:flex hidden transform scale-x-[-1]'>
              <img src="https://www.mahmoodrice.com/Content/images/parallax/kasik.png" alt="" className='lg:w-60 w-40' />
            </div>
            <div className='absolute top-5 right-0 lg:flex hidden transform scale-x-[-1]'>
              <img src="https://www.mahmoodrice.com/Content/images/parallax/pirinc.png" alt="" className='lg:w-60 w-40' />
            </div>
          </div>
        </div>

        <div className=' w-full flex flex-col justify-center items-center pb-20 overflow-hidden'>
          <div className='flex justify-center items-center flex-col gap-10 px-5'>
            <div className='text-center'>
              <h1 className='font-bold md:text-4xl text-3xl text-center'>Available Brands</h1>
              <div className="flex items-center justify-center mt-5">
                <div className='relative flex justify-center items-center'>
                  <div className='w-36 h-0.5 bg-BgGolden z-20'></div>
                  <div className='absolute w-4 h-4 bg-BgGolden rotate-45 z-10'></div>
                  <div className='absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                  <div className='absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                </div>
              </div>
            </div>
            <p className='text-center md:w-3/4 w-full md:text-base text-sm'>We proudly offer a diverse range of premium brands, handpicked for their quality and
              reputation. Our collection features trusted names across various categories, ensuring
              you find the perfect products to meet your needs. Each brand is known for its
              commitment to excellence, providing you with reliability and style in every purchase.</p>
          </div>

          <div className=' relative w-full flex items-center justify-center gap-10 h-32 overflow-hidden'>
            {brand?.map((data, index) => {
              console.log(index);
              return (
                <div className={`item item${index + 1} flex justify-center items-center`} key={index} >
                  <img src={data} alt="" className="w-48 h-24" />
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home