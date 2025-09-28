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
//                         <h1 className='font-bold md:text-5xl text-3xl'>ABOUT US</h1>
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

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Mission from "../../../public/Images/Mission.jpg";
// import delivery from "../../../public/Images/delivery.png";
// import Deliery2 from "../../../public/Images/Deliery2.png";
import delivery3 from "../../../public/Images/delivery3.png";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen pb-5">
      <main className="flex-grow">
        <section className="relative md:h-[95vh] h-72">
          {/* <img
            src={aboutImg}
            alt="Fresh salad"
            layout="fill"
            objectFit="cover"
            className='h-full w-full'
          /> */}
          {/* <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next'
            }}
            loop
            modules={[Autoplay, Navigation, Pagination]}
            className="h-full"
          >
            <SwiperSlide> */}
          {/* <video
                src={fresh_spices}
                autoPlay
                loop
                muted
                className="h-full w-full object-fill"
              /> */}
          {/* </SwiperSlide>
            <SwiperSlide> */}
          <img src={delivery3} alt="Delivery" className="h-full w-full  " />
          {/* </SwiperSlide>
          </Swiper>
          <div className="custom-prev absolute top-1/2 transform -translate-y-1/2 md:left-10 left-5 z-10 p-3 cursor-pointer border-2 border-BgGolden text-BgGolden rounded-full animate-bg-fade-out hover:animate-bg-fade-in hover:text-white">
            <BsArrowLeft className='md:text-2xl text-xl' />
          </div>
          <div className="custom-next absolute top-1/2 transform -translate-y-1/2 md:right-10 right-5 z-10 p-3 cursor-pointer border-2 border-BgGolden text-BgGolden rounded-full animate-bg-fade-out hover:animate-bg-fade-in hover:text-white">
            <BsArrowRight className='md:text-2xl text-xl' />
          </div> */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col gap-5 md:items-center items-start justify-center text-white   p-5">
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
            <p className='md:w-3/4 pt-5 md:text-center text-pretty md:text-base text-sm'>At CC Traders, we are dedicated to connecting businesses with the highest quality food products at wholesale prices. With years of experience in the industry, we understand the unique needs of restaurants, retailers, and distributors. Our extensive network of trusted suppliers ensures that we deliver fresh, reliable, and sustainable products to meet the demands of your business. We are your one-stop solution for all your wholesale food needs.
            </p>
          </div> */}
        </section>

        <section className="py-20 px-5 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto space-y-32">

            {/* Who Are We Section */}
            <div className="group">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="lg:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-2 bg-BgGolden/10 text-BgGolden rounded-full text-sm font-semibold uppercase tracking-wide">
                      Our Story
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      Who Are <span className="text-BgGolden">We?</span>
                    </h2>
                    <div className="w-24 h-1 bg-BgGolden rounded-full"></div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    At CC Traders, we are dedicated to connecting businesses with the highest quality
                    food products at wholesale prices. With years of experience in the industry, we
                    understand the unique needs of restaurants, retailers, and distributors.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our extensive network of trusted suppliers ensures that we deliver fresh, reliable, and
                    sustainable products to meet the demands of your business. We are your one-stop
                    solution for all your wholesale food needs.
                  </p>
                </div>

                <div className="lg:w-1/2 relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-BgGolden/20 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgA-QibO2UgJiUMwP8mM5Be-Tsy69PMM8hBQ&s"
                      alt="CC Traders Team"
                      className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Our Mission Section */}
            <div className="group">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                <div className="lg:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-2 bg-BgGolden/10 text-BgGolden rounded-full text-sm font-semibold uppercase tracking-wide">
                      Our Purpose
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      Our <span className="text-BgGolden">Mission</span>
                    </h2>
                    <div className="w-24 h-1 bg-BgGolden rounded-full"></div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our mission at CC Traders is to make high-quality food accessible and affordable for
                    businesses of all sizes. We strive to simplify the food supply chain by offering a
                    seamless and reliable wholesale experience.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    Sustainability, integrity, and customer satisfaction are at the heart of everything we do.
                    We aim to foster long-term partnerships with our clients by consistently delivering fresh,
                    high-grade products and helping them thrive in a competitive marketplace.
                  </p>

                  <div className="space-y-4 pt-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-BgGolden rounded-full"></div>
                      <span className="text-gray-700 font-medium">Quality Assurance</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-BgGolden rounded-full"></div>
                      <span className="text-gray-700 font-medium">Sustainable Sourcing</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-BgGolden rounded-full"></div>
                      <span className="text-gray-700 font-medium">Customer-Centric Approach</span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-BgGolden/20 rounded-3xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500"></div>
                    <img
                      src={Mission}
                      alt="Our Mission"
                      className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

