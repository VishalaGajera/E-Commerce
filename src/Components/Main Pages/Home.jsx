import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Aparna_Foods_1 from "/Images/Logo/Aparna_Foods_1.png";
import Maggi from "/Images/Logo/Maggi.png";
import Aashirvaad from "/Images/Logo/Aashirvaad.png";
import gt_logo from "/Images/Logo/gt_logo.png";
import handi from "/Images/Logo/handi.png";
import india_gate from "/Images/Logo/india_gate.png";
import mdh from "/Images/Logo/mdh.png";
import NATIONAL_FOODS from "/Images/Logo/NATIONAL_FOODS.png";
import shan from "/Images/Logo/shan.png";
import sher from "/Images/Logo/sher.png";
import slide1 from "/Images/slider/slide1.png";
import slide2 from "/Images/slider/slide2.png";
import slide3 from "/Images/slider/slide3.png";
import slide4 from "/Images/slider/slide4.png";
import spices from "../../../public/Images/Product/Spices.png";
import rice from "../../../public/Images/Product/rice-removebg-preview.png";
import flour from "../../../public/Images/Product/flour-removebg-preview.png";
import beans from "../../../public/Images/Product/beans.png";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../Providers/ProductCategoryContext";

const Home = () => {
  const navigate = useNavigate();

  const { categories, setSelectedCategoryId } = useProductContext();

  const brand = [
    Maggi,
    Aashirvaad,
    Aparna_Foods_1,
    shan,
    sher,
    NATIONAL_FOODS,
    mdh,
    handi,
    gt_logo,
    india_gate,
  ];

  // const handleSlideChange = (swiper) => {
  //   setActiveIndex(swiper.realIndex);
  // };

  // const CustomPagination = () => {
  //   return (
  //     <div className="flex justify-center items-center gap-1 ">
  //       {Array.from({ length: 5 }).map((_, index) => (
  //         <div
  //           key={index}
  //           className={`h-1 md:w-4 w-3 rounded-full transition-all duration-300 ${
  //             index === activeIndex ? "bg-BgGolden" : "bg-gray-300"
  //           }`}
  //         ></div>
  //       ))}
  //     </div>
  //   );
  // };

  const handleCategoriesClick = (categoryName) => {
    const selectedCategory = categories.find((cat) => cat.name === categoryName);

    if (selectedCategory) {
      setSelectedCategoryId(selectedCategory._id);
    }

    navigate("/products");
  };

  return (
    <div className="flex justify-center items-center bg-white">
      <div className="flex flex-col justify-center items-center">
        <section className="relative md:h-[100vh] sm:h-96 h-72 w-[98.7vw]  overflow-hidden">
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
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{
              dynamicBullets: true,
            }}
            loop
            // className="w-[98.9vw] h-[500px] md:h-[600px] "
            className="h-full w-full overflow-hidden"
          >
            <SwiperSlide className="cursor-pointer" onClick={() => handleCategoriesClick("Rice")}>
              <img src={slide1} alt={"slide 1}"} className="h-full w-full object-fill" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer" onClick={() => handleCategoriesClick("Flours")}>
              <img src={slide2} alt={"slide 2}"} className="h-full w-full object-fill" />
            </SwiperSlide>
            <SwiperSlide
              className="cursor-pointer"
              onClick={() => handleCategoriesClick("Beans & Lentils")}
            >
              <img src={slide3} alt={"slide 3}"} className="h-full w-full object-fill" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer" onClick={() => handleCategoriesClick("Spices")}>
              <img src={slide4} alt={"slide 4}"} className="h-full w-full object-fill" />
            </SwiperSlide>
          </Swiper>
          {/* {sliderImages.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={image} alt={`slide ${index + 1}`} className="h-full w-full" />
                </SwiperSlide>
              )
            })} */}
          <div className="custom-prev absolute top-1/2 transform -translate-y-1/2 md:left-10 left-0 z-10 p-3 cursor-pointer md:border-2 border-BgGolden text-BgGolden rounded-full bg-transparent md:hover:bg-BgGolden md:hover:text-white">
            {/* <BsArrowLeft className="text-2xl" /> */}
          </div>
          <div className="custom-next absolute top-1/2 transform -translate-y-1/2 md:right-10 right-0 z-10 p-3 cursor-pointer md:border-2 border-BgGolden text-BgGolden rounded-full  bg-transparent md:hover:bg-BgGolden md:hover:text-white">
            <BsArrowRight className="text-2xl" />
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
        <div className="flex flex-col gap-10 relative py-20">
          <div className="flex flex-col gap-10 items-center justify-center mx-5">
            <div>
              <h1 className="font-bold md:text-4xl text-3xl text-center">Products</h1>
              <div className="flex items-center justify-center mt-5">
                <div className="relative flex justify-center items-center">
                  <div className="w-36 h-0.5 bg-BgGolden z-20"></div>
                  <div className="absolute w-4 h-4 bg-BgGolden rotate-45 z-10"></div>
                  <div className="absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30"></div>
                  <div className="absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30"></div>
                </div>
              </div>
            </div>
            <p className="lg:w-3/5 w-full text-center md:text-base text-sm">
              At CrossContinents Traders, we are dedicated to bringing you the finest selection of
              Rice, Flours, Beans & Lentils, Spices and many other Spice mixes like MDH and Shan
              sourced from trusted suppliers who share our passion for quality. Each product is
              carefully chosen to ensure it meets our high standards, delivering an authentic taste
              experience to your kitchen. Each item in our collection has been chosen with care to
              ensure it’s fresh, flavorful, and meets the highest quality standards. Whether you're
              an experienced cook or just beginning your culinary journey, our products provide the
              perfect foundation for creating dishes that delight the senses. Let us be part of your
              kitchen with products that bring health, taste, and authenticity to every meal.
            </p>
          </div>

          <div className="grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mx-5">
            <div
              className="md:p-5 p-2 border flex items-center gap-5 bg-red-200 rounded-tr-3xl rounded-bl-3xl cursor-pointer"
              onClick={() => handleCategoriesClick("Flours")}
            >
              <img src={flour} alt="" className="w-20" />
              <div className="flex flex-col md:gap-2 gap-0">
                <h1 className="md:font-bold font-bold md:text-lg text-base">
                  Fresh Flours for All Your Baking and Cooking.
                </h1>
                <p className="md:text-base text-sm">explore sher, Ashirwad, Minar…</p>
              </div>
            </div>
            <div
              className="md:p-5 p-2 border flex items-center gap-5 bg-green-200 rounded-tr-3xl rounded-bl-3xl cursor-pointer"
              onClick={() => handleCategoriesClick("Rice")}
            >
              <img src={rice} alt="" className="w-20" />
              <div className="flex flex-col md:gap-2 gap-0">
                <h1 className="md:font-bold font-bold md:text-lg text-base">
                  Aromatic Rice for Tasty, Fluffy Meals
                </h1>
                <p className="md:text-base text-sm">explore Maharani, Handi, Marhaba</p>
              </div>
            </div>
            <div
              className="md:p-5 p-2 border flex items-center gap-5 bg-blue-200 rounded-tr-3xl rounded-bl-3xl cursor-pointer"
              onClick={() => handleCategoriesClick("Beans & Lentils")}
            >
              <img src={beans} alt="" className="w-20" />
              <div className="flex flex-col md:gap-2 gap-0">
                <h1 className="md:font-bold font-bold md:text-lg text-base">
                  Explore Our Fresh, Quality Beans & Lentils – Perfect for Nutritious, Flavorful
                  Meals!
                </h1>
                <p className="md:text-base text-sm"></p>
              </div>
            </div>
            <div
              className="md:p-5 p-2 border flex items-center gap-5 bg-yellow-200 rounded-tr-3xl rounded-bl-3xl cursor-pointer"
              onClick={() => handleCategoriesClick("Spices")}
            >
              <img src={spices} alt="" className="w-20" />
              <div className="flex flex-col md:gap-2 gap-0">
                <h1 className="md:font-bold font-bold md:text-lg text-base">
                  Traditional Spice Blends for Great Flavor
                </h1>
                <p className="md:text-base text-sm">explore our raw spices, MDH, Shan</p>
              </div>
            </div>
            <div className="absolute top-20 -left-2 -rotate-12 lg:flex hidden transform scale-x-[-1]">
              <img
                src="https://www.mahmoodrice.com/Content/images/parallax/kasik.png"
                alt=""
                className="lg:w-60 w-40"
              />
            </div>
            <div className="absolute top-5 right-0 lg:flex hidden transform scale-x-[-1]">
              <img
                src="https://www.mahmoodrice.com/Content/images/parallax/pirinc.png"
                alt=""
                className="lg:w-60 w-40"
              />
            </div>
          </div>
        </div>

        <div className=" w-full flex flex-col justify-center items-center pb-20 overflow-hidden">
          <div className="flex justify-center items-center flex-col gap-10 px-5">
            <div className="text-center">
              <h1 className="font-bold md:text-4xl text-3xl text-center">Available Brands</h1>
              <div className="flex items-center justify-center mt-5">
                <div className="relative flex justify-center items-center">
                  <div className="w-36 h-0.5 bg-BgGolden z-20"></div>
                  <div className="absolute w-4 h-4 bg-BgGolden rotate-45 z-10"></div>
                  <div className="absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30"></div>
                  <div className="absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30"></div>
                </div>
              </div>
            </div>
            <p className="text-center md:w-3/4 w-full md:text-base text-sm">
              We proudly offer a diverse range of premium brands, handpicked for their quality and
              reputation. Our collection features trusted names across various categories, ensuring
              you find the perfect products to meet your needs. Each brand is known for its
              commitment to excellence, providing you with reliability and style in every purchase.
            </p>
          </div>

          <div className=" relative w-full flex items-center justify-center gap-10 h-32 overflow-hidden">
            {brand?.map((data, index) => {
              return (
                <div
                  className={`item item${index + 1} flex justify-center items-center`}
                  key={index}
                >
                  <img src={data} alt="" className="w-48 h-24" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
