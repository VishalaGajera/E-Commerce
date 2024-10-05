import React, { useState } from 'react'
import { FaCaretUp, FaCaretDown, FaStar, FaShoppingCart, FaEye } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Product = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [viewFilters, setViewFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [gridColumns, setGridColumns] = useState(3);

  const handleItemList = (item) => {
    setSelectedFilters((prev) => [...prev, item]);
  };

  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((item) => item !== filter));
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
  };

  const menuData = [
    {
      title: "Cuisines",
      items: [
        "Italian",
        "Chinese",
        "Mexican",
        "Indian",
        "Japanese",
        "Thai",
        "Mediterranean",
        "American",
      ],
    },
    {
      title: "Dietary Preferences",
      items: [
        "Vegetarian",
        "Vegan",
        "Gluten-Free",
        "Keto",
        "Paleo",
        "Low-Carb",
        "Dairy-Free",
        "Nut-Free",
      ],
    },
    {
      title: "Meal Types",
      items: [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Snacks",
        "Desserts",
        "Beverages",
        "Appetizers",
        "Salads",
      ],
    },
    {
      title: "Price Range",
      items: [
        "$5.00 - $15.00",
        "$15.00 - $30.00",
        "$30.00 - $50.00",
        "$50.00 - $100.00",
        "Above $100.00",
      ],
    },
  ];


  const products = [
    { id: 1, name: "Mahmood Rice", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", price: 29.99, image: "https://www.mahmoodrice.com/Media/Uploads/10_kg.png", rating: 4.5, category: "Basmati" },
    { id: 2, name: "Mahmood Rice", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", price: 59.99, image: "https://www.mahmoodrice.com/Content/images/products/10kg-r.png", rating: 4.5, category: "Basmati" },
    { id: 3, name: "Mahmood Rice", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", price: 89.99, image: "https://www.mahmoodrice.com/Media/Uploads/4kg_web.png", rating: 4.5, category: "Basmati" },
    { id: 4, name: "Mahmood Rice", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", price: 39.99, image: "https://www.mahmoodrice.com/Media/Uploads/4_5_basmati_pirinc_1.png", rating: 4.5, category: "Basmati" },
    { id: 5, name: "Mahmood Rice", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", price: 49.99, image: "https://www.mahmoodrice.com/Media/Uploads/10_kg.png", rating: 4.5, category: "Basmati" },
    { id: 6, name: "Mahmood Rice", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", price: 129.99, image: "https://www.mahmoodrice.com/Content/images/products/10kg-r.png", rating: 4.5, category: "Basmati" },
  ]

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const getGridClass = () => {
    switch (gridColumns) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='container h-full'>
        <div className='flex flex-col justify-center items-center mx-5 py-10 h-full'>
          <div className='flex justify-center items-center flex-col'>
            <h1 className='font-bold text-5xl'>Products</h1>
            <div className="flex items-center justify-center mt-5">
              <div className='relative flex justify-center items-center'>
                <div className='w-36 h-0.5 bg-BgGolden z-20'></div>
                <div className='absolute w-4 h-4 bg-BgGolden rotate-45 z-10'></div>
                <div className='absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30'></div>
                <div className='absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30'></div>
              </div>
            </div>
            <div className='pt-5 w-2/3 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio ad eveniet non eos consequatur, maiores mollitia culpa similique odio?</div>
          </div>
          <div className='grid md:grid-cols-4 grid-cols-1 w-full py-20 h-screen  overflow-hidden'>
            <div className="md:flex flex-col gap-1 w-full border-r-2">
              <div
                className={`fixed inset-0 bg-white p-4 transform transition-transform duration-300 ease-in-out md:relative md:p-0 ${viewFilters ? "translate-x-0 overflow-y-scroll z-50" : "translate-x-full"
                  } md:translate-x-0 flex flex-col md:gap-1 md:mr-5 ${viewFilters ? "h-full w-full" : ""
                  } md:block`}
              >
                <div className="flex justify-between items-center bg-white p-3 md:hidden">
                  <p className="text-lg font-bold">Filters</p>
                  <span
                    className="cursor-pointer text-3xl"
                    onClick={() => setViewFilters(false)}
                  >
                    &times;
                  </span>
                </div>
                <div>
                  {menuData.map((menu, index) => (
                    <div key={index} className="bg-white border-b">
                      <div
                        className={`flex flex-row justify-between items-center cursor-pointer p-3 ${activeCategory === index ? "text-BgGolden" : "text-black"
                          }`}
                        onClick={() => toggleCategory(index)}
                      >
                        <p className="font-bold text-base">{menu.title}</p>
                        <span>
                          {activeCategory === index ? <FaCaretUp /> : <FaCaretDown />}
                        </span>
                      </div>
                      <ul className={`${activeCategory === index ? "block p-3" : "hidden"}`}>
                        {menu?.items &&
                          menu?.items?.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex py-2 gap-2 cursor-pointer border-b">
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="border-t md:hidden">
                  <div className="grid grid-cols-2 p-3">
                    <button
                      className="bg-transparent text-[#A10550] px-2 py-2"
                      onClick={clearAllFilters}
                    >
                      Clear Filters
                    </button>
                    <button
                      className="text-white bg-[#A10550] px-2 py-2"
                      onClick={() => setViewFilters(false)}
                    >
                      Applied Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 no-scrollbar overflow-y-auto ">
              <main className="flex-1 md:px-5">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl font-bold">
                    {/* {selectedSubcategory || selectedCategory || 'All Products'} */}
                  </h1>
                  <div className="flex items-center space-x-2">
                    <span>Showing of {products.length} products</span>
                    <button
                      className={`px-2 py-1 border ${gridColumns === 2 ? 'bg-gray-200' : ''}`}
                      onClick={() => setGridColumns(2)}
                    >
                      II
                    </button>
                    <button
                      className={`px-2 py-1 border ${gridColumns === 3 ? 'bg-gray-200' : ''}`}
                      onClick={() => setGridColumns(3)}
                    >
                      III
                    </button>
                    <button
                      className={`px-2 py-1 border ${gridColumns === 4 ? 'bg-gray-200' : ''}`}
                      onClick={() => setGridColumns(4)}
                    >
                      IIII
                    </button>
                  </div>
                </div>
                <div className={`grid ${getGridClass()} gap-6`}>
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg border-2 overflow-hidden transition-all duration-300 hover:shadow-xl"
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-contain transition-transform duration-300 hover:scale-105"
                        />
                        {hoveredProduct === product.id && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4 transition-opacity duration-300">
                            <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200">
                              <FaShoppingCart className="text-xl text-gray-800" />
                            </button>
                            <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200">
                              <FaEye className="text-xl text-gray-800" />
                            </button>
                          </div>
                        )}
                        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 flex items-center justify-between">
                        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product