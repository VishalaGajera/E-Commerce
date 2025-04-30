import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const FAQs = () => {
  const [isVisible, setIsVisible] = useState(null);
  const toggleSection = (section) => {
    if (isVisible === section) {
      setIsVisible(null);
    } else {
      setIsVisible(section);
    }
  };

  // const productQuestions = [
  //   {
  //     question: "What should I do if my underwear is not the right size?",
  //     answer:
  //       "When your underwear is not the right size, you may notice several signs. If the waistband feels loose or moves when you bend or squat, it might be too big. Conversely, if it feels tight, digs into your skin, or restricts your movement, it might be too small. Always choose underwear that fits comfortably without causing any discomfort.",
  //   },
  //   {
  //     question: "How can I select the best underwear for me?",
  //     answer:
  //       "Selecting the best underwear involves considering both comfort and fit. Look for underwear that fits snugly without being too tight around the waist and thighs. Ensure there is enough room in the crotch area to prevent discomfort. When choosing underwear, consider factors like fabric, breathability, and support to find the perfect pair for your needs.",
  //   },
  //   {
  //     question: "What is better: boxer briefs or trunks?",
  //     answer:
  //       "Both boxer briefs and trunks have their benefits. Boxer briefs offer more coverage and are ideal for those who prefer extra support and coverage. Trunks, on the other hand, provide a slimmer fit and are great for those who want a sleek look. The choice between the two depends on personal preference and the level of comfort you seek.",
  //   },
  //   {
  //     question: "What should I wear over my boxers?",
  //     answer:
  //       "Boxers are versatile and can be worn under various types of clothing. You can wear boxers under jeans, pants, or even shorts. They provide ample ventilation and comfort, making them a great choice for everyday wear.",
  //   },
  //   {
  //     question: "How often should I replace my underwear?",
  //     answer:
  //       "It's generally recommended to replace your underwear every six to twelve months, depending on how often you wear and wash them. Look out for signs of wear and tear, such as holes, stretched elastic, or fabric thinning, as indicators that it's time for a new pair.",
  //   },
  //   {
  //     question: "Can I wear the same underwear for different activities?",
  //     answer:
  //       "While you can wear the same underwear for various activities, it's best to choose specific types for different purposes. For example, breathable and moisture-wicking fabrics are ideal for workouts, while softer, more relaxed styles are better for lounging or sleeping.",
  //   },
  //   {
  //     question: "What fabrics are best for underwear?",
  //     answer:
  //       "The best fabrics for underwear are those that offer comfort, breathability, and durability. Cotton is a popular choice for its softness and breathability. Modal and bamboo fabrics are also great options, known for their smooth texture and moisture-wicking properties. For activewear, consider fabrics like nylon or polyester blends that provide stretch and quick-drying capabilities.",
  //   }
  // ];
  return (
    <>
      <div className="container">
        <div className="flex flex-col justify-center items-center mb-10 gap-10 w-full">
          <div className="flex flex-col items-center justify-center mx-5">
            <div className="mb-5">
              <h1 className="text-center text-3xl font-bold">
                How can we help you?
              </h1>
              <div className="flex items-center justify-center mt-5">
                <div className='relative flex justify-center items-center'>
                  <div className='w-36 h-0.5 bg-BgGolden z-20'></div>
                  <div className='absolute w-4 h-4 bg-BgGolden rotate-45 z-10'></div>
                  <div className='absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                  <div className='absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                </div>
              </div>
            </div>
            <p>Frequently asked questions</p>
          </div>
          <div className="flex flex-col w-full items-center px-5 gap-3">
            {/* {productQuestions?.map((ques, index) => { */}
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <div key={index} className={`flex flex-col w-full gap-3 border-l-2 border-black rounded-lg p-5 bg-white py-4 ${isVisible === index ? "border-l-BgGolden" : ""}`}>
                  <div
                    className={` font-bold text-lg flex flex-row justify-between items-center cursor-pointer gap-4 w-full ${isVisible === index ? "text-BgGolden" : ""}`}
                    onClick={() => toggleSection(index)}
                  >
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, aperiam?</h2>
                    <span className="flex">
                      <FiPlus className={`duration-75 transform text-2xl ${isVisible === index ? "rotate-45 " : "rotate-0"}`} />
                    </span>
                  </div>
                  <div
                    className={`${isVisible === index ? "block" : "hidden"}`}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium pariatur non minus magnam architecto ducimus perspiciatis aperiam error porro quas, eos quaerat eligendi rerum, officia facere nulla! Qui, vel nulla?
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
