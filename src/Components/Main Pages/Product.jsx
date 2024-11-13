import React, { useEffect, useState } from 'react'
// import { FaCaretUp, FaCaretDown, FaStar, FaShoppingCart, FaEye } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { RxCross2 } from "react-icons/rx";
// import { Link } from 'react-router-dom';
import { FaFilter } from "react-icons/fa";

const Product = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [viewFilters, setViewFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState("");
  const productsPerPage = 16;
  // const [viewFilters, setShowFilters]=useState(false);
  const [gridColumns, setGridColumns] = useState(3);
  const [price, setPrice] = useState("");

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
      title: "Beans & Lentils",
      // items: [
      //   "Whole Red Lentils",
      //   "Red Split Lentils",
      //   "Red Football Lentils",
      //   "Lairds Lentils",
      //   "Eston Lentils",
      //   "8mm Chickpeas",
      //   "9mm Chickpeas",
      //   "Yellow Split Peas",
      //   "Whole Yellow Peas",
      //   "Whole Green Peas",
      //   "Whole Green Peas",
      //   "Urad Gota",
      //   "Urad Dal",
      //   "Urad Whole (Australian) ",
      //   "Urad Whole",
      //   "Urad Chilka",
      //   "Black Eyed Beans - Premium Quality",
      //   "Light Red Kidney Beans",
      //   "Dark Red Kidney Beans",
      //   "Toor Dal Dry",
      //   "Toor Whole",
      //   "Moong Whole Jumb",
      // ],
    },
    {
      title: "Flours",
      // items: [
      //   "Sher Besan 40lb",
      //   "Sher Durum Atta 20lb ",
      //   "Sher Whole Wheat Atta 20lb ",
      //   "Sher Besan 4lb ",
      //   "Sher Corn Flour 4lb ",
      //   "Sher Corn Flour 8lb ",
      //   "Sher Corn Flour 20lb ",
      //   "Golden Temple Durum Atta",
      //   "Golden Temple Wheat Atta Purple",
      // ],
    },
    {
      title: "Rice",
      // items: [
      //   "IC 1121 Basmati Long Grain Steam Rice 40lbs(Blue) ",
      //   "IC 1121 Basmati Long Grain Steam Rice 10lbs(Blue)",
      //   "IC 1121 Basmati Long Grain Creamy Sella Rice 40lbs(Pink) ",
      //   "IC 1121 Basmati Long Grain Creamy Sella Rice 10lbs(Pink) ",
      //   "IC Rozana Basmati 40lbs ",
      //   "IC Rozana Basmati 10lbs ",
      //   "Marhaba Basmati Steam Rice(40lbs) ",
      //   "Handi Golden Sella Basmati Ric"
      // ],
    },
    {
      title: "Spices",
      // items: [
      //   "Bay Leaves",
      //   "Black Cardamom",
      //   "Black Pepper Ground",
      //   "Black Pepper Whole",
      //   "Chilli Powder Extra Hot",
      //   "Chilli Powder Kashmiri",
      //   "Chilli Powder Regular",
      //   "Chilli Whole",
      //   "Cinnamon Ground",
      //   "Cinnamon Whole Roll",
      //   "Cinnamon Whole Flat",
      //   "Clove Powder",
      //   "Clove Whole",
      //   "Coriander Ground",
      //   "Coriander Whole",
      //   "Crushed Chilli (Chilli Flakes)",
      //   "Cumin Ground",
      // ],
    },
  ];

  const products = [
    {
      "image": "/Images/Beans_Lentils/Whole_Red_Lentils_(Masoor_Whole).png",
      "name": "Whole Red Lentils (Masoor Whole)",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 0.81,
      "sizes": [
        {
          "55LB": 44.55,
        }
      ],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Red_Split_Lentils_(Masoor_Dal).png",
      "name": "Red Split Lentils (Masoor Dal)",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 0.89,
      "sizes": [
        {
          "55LB": 48.95,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Red_Football_Lentils_(Masoor_Gota).png",
      "name": "Red Football Lentils (Masoor Gota)",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 0.94,
      "sizes": [
        {
          "55LB": 51.70,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Lairds_Lentils_(Large_Green_Lentils).png",
      "name": "Lairds Lentils (Large Green Lentils)",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.17,
      "sizes": [
        {
          "55LB": 64.35,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Eston_Lentils.png",
      "name": "Eston Lentils",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.10,
      "sizes": [
        {
          "55LB": 60.50,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/8mm_Chickpeas.png",
      "name": "8mm Chickpeas",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 0.99,
      "sizes": [
        {
          "55LB": 54.45,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/9mm_Chickpeas.png",
      "name": "9mm Chickpeas",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.12,
      "sizes": [
        {
          "55LB": 61.60,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Yellow_Split_Peas.png",
      "name": "Yellow Split Peas",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 0.74,
      "sizes": [
        {
          "55LB": 40.70,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Whole_Yellow_Peas.png",
      "name": "Whole Yellow Peas",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 0.69,
      "sizes": [
        {
          "55LB": 37.95,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Whole_Green_Peas.png",
      "name": "Whole Green Peas",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 0.81,
      "sizes": [
        {
          "55LB": 44.55,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Urad_Gota.png",
      "name": "Urad Gota",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.79,
      "sizes": [
        {
          "55LB": 98.45,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Urad_Dal.png",
      "name": "Urad Dal",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.59,
      "sizes": [
        {
          "55LB": 87.70,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Urad_Whole_(Australian).png",
      "name": "Urad Whole (Australian)",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.85,
      "sizes": [
        {
          "55LB": 101.75,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Urad_Whole.png",
      "name": "Urad Whole",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.55,
      "sizes": [
        {
          "55LB": 85.25,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Urad_Chilka.png",
      "name": "Urad Chilka",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.62,
      "sizes": [
        {
          "55LB": 89.10,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Black_Eyed_Beans_Premium_Quality.png",
      "name": "Black Eyed Beans - Premium Quality",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.29,
      "sizes": [
        {
          "55LB": 70.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Light_Red_Kidney_Beans.png",
      "name": "Light Red Kidney Beans",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.36,
      "sizes": [
        {
          "50LB": 68.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Dark_Red_Kidney_Beans.png",
      "name": "Dark Red Kidney Beans",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.38,
      "sizes": [
        {
          "55LB": 75.90,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Toor_Dal_Dry.png",
      "name": "Toor Dal Dry",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.69,
      "sizes": [
        {
          "55LB": 92.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Toor_Whole.png",
      "name": "Toor Whole",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.83,
      "sizes": [
        {
          "55LB": 100.65,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Moong_Dal.png",
      "name": "Moong Dal",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.43,
      "sizes": [
        {
          "55LB": 78.65,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Moong_Whole_Jumbo_(Australian).png",
      "name": "Moong Whole Jumbo (Australian)",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.38,
      "sizes": [
        {
          "55LB": 75.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Moong_Whole_(Medium).png",
      "name": "Moong Whole (Medium)",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.31,
      "sizes": [
        {
          "55LB": 71.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Moong_Chilka.png",
      "name": "Moong Chilka",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.46,
      "sizes": [
        {
          "55LB": 80.30,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Moth_Beans.png",
      "name": "Moth Beans",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.48,
      "sizes": [
        {
          "55LB": 81.40,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Chana_Dal.png",
      "name": "Chana Dal",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.20,
      "sizes": [
        {
          "55LB": 66.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Kala_Chana.png",
      "name": "Kala Chana",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.14,
      "sizes": [
        {
          "55LB": 62.70,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Val_Whole.png",
      "name": "Val Whole",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 0.99,
      "sizes": [
        {
          "55LB": 54.45,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Black_Beans.png",
      "name": "Black Beans",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.59,
      "sizes": [
        {
          "55LB": 87.45,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Pinto_Beans.png",
      "name": "Pinto Beans",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.66,
      "sizes": [
        {
          "50LB": 83.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Cranberry_Beans_(50lbs).png",
      "name": "Cranberry Beans",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.58,
      "sizes": [
        {
          "50LB": 79.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Jumbo_Fava_Beans.png",
      "name": "Jumbo Fava Beans",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.76,
      "sizes": [
        {
          "55LB": 96.80,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Whole_Fava_Beans.png",
      "name": "Whole Fava Beans",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 0.76,
      "sizes": [
        {
          "50LB": 38.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Split_Fava_Beans.png",
      "name": "Split Fava Beans",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.00,
      "sizes": [
        {
          "50LB": 49.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Baby_Lima_Beans.png",
      "name": "Baby Lima Beans",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.86,
      "sizes": [
        {
          "55LB": 102.30,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Conventional_White_Quinoa.png",
      "name": "Conventional White Quinoa",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 2.02,
      "sizes": [
        {
          "55LB": 111.10,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Conventional_Red_Quinoa.png",
      "name": "Conventional Red Quinoa",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 2.04,
      "sizes": [
        {
          "55LB": 112.20,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Conventional_Black_Quinoa.png",
      "name": "Conventional Black Quinoa",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 2.63,
      "sizes": [
        {
          "55LB": 144.65,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Beans_Lentils/Brown_Flax.png",
      "name": "Brown Flax",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Beans & Lentils",
      "price_per_lb": 1.13,
      "sizes": [
        {
          "50LB": 56.50,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Flours/Sher_Besan_40lb.png",
      "name": "Sher Besan",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Flours",
      "price_per_lb": 1.35,
      "sizes": [
        {
          "40LB": 53.99,
        }, {
          "4LB": 5.49,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Flours/Sher_Durum_Atta_20lb.png",
      "name": "Sher Durum Atta",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Flours",
      "price_per_lb": 0.76,
      "sizes": [
        {
          "20LB": 15.29,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Flours/Sher_Whole_Wheat_Atta_20lb.png",
      "name": "Sher Whole Wheat Atta",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Flours",
      "price_per_lb": 0.82,
      "sizes": [
        {
          "20LB": 16.30,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Flours/Sher_Corn_Flour_4lb.png",
      "name": "Sher Corn Flour",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Flours",
      "price_per_lb": 1.37,
      "sizes": [
        {
          "4LB": 5.49,
        },
        {
          "8LB": 9.99,
        },
        {
          "20LB": 17.70,
        }
      ],
      "rating": 5
    },
    {
      "image": "/Images/Flours/Golden_Temple_Durum_Atta.png",
      "name": "Golden Temple Durum Atta",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Flours",
      "price_per_lb": 0.85,
      "sizes": [
        {
          "20LB": 17.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Flours/Golden_Temple_Wheat_Atta_Purple.png",
      "name": "Golden Temple Wheat Atta Purple ",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Flours",
      "price_per_lb": 0.85,
      "sizes": [
        {
          "20LB": 17.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Rice/IC_1121_Basmati_Long_Grain_Steam_Rice_10lbs_(Pink).png",
      "name": "IC 1121 Basmati Long Grain Steam Rice",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Rice",
      "price_per_lb": 1.38,
      "sizes": [
        {
          "40LB": 55.00,
        }, {
          "10LB": 15.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Rice/IC_1121_Basmati_Long_Grain_Steam_Rice_10lbs_(Pink).png",
      "name": "IC 1121 Basmati Long Grain Creamy Sella Rice",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Rice",
      "price_per_lb": 1.25,
      "sizes": [
        {
          "40LB": 50.00,
        }, {
          "10LB": 13.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Rice/IC_Rozana_Basmati_10lbs.png",
      "name": "IC Rozana Basmati",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Rice",
      "price_per_lb": 1.10,
      "sizes": [
        {
          "40LB": 44.00,
        }, {
          "10LB": 11.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Rice/Handi_Golden_Sella_Basmati_Rice.png",
      "name": "Marhaba Basmati Steam Rice",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Rice",
      "price_per_lb": 1.10,
      "sizes": [
        {
          "40LB": 44.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Rice/Handi_Golden_Sella_Basmati_Rice.png",
      "name": "Handi Golden Sella Basmati Rice",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Rice",
      "price_per_lb": 1.12,
      "sizes": [
        {
          "40LB": 44.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Bay_Leaves.png",
      "name": "Bay Leaves",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 7.29,
      "sizes": [
        {
          "1LB": 7.29,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Black_Cardamom.png",
      "name": "Black Cardamom",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 15.49,
      "sizes": [
        {
          "1LB": 15.49,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Black_Pepper_Ground.png",
      "name": "Black Pepper Ground",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 6.59,
      "sizes": [
        {
          "1LB": 6.59,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Black_Pepper_Groun.png",
      "name": "Black Pepper Whole",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 6.50,
      "sizes": [
        {
          "1LB": 6.50,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Chilli_Powder_Extra_Hot.png",
      "name": "Chilli Powder Extra Hot",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 4.59,
      "sizes": [
        {
          "1LB": 4.59,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Chilli_Powder_Kashmiri.png",
      "name": "Chilli Powder Kashmiri",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 4.69,
      "sizes": [
        {
          "1LB": 4.69,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Chilli_Powder_Regular.png",
      "name": "Chilli Powder Regular",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 3.99,
      "sizes": [
        {
          "1LB": 3.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Chilli_Whole.png",
      "name": "Chilli Whole",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 6.69,
      "sizes": [
        {
          "1LB": 6.69,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Cinnamon_Ground.png",
      "name": "Cinnamon Ground",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 5.29,
      "sizes": [
        {
          "1LB": 5.29,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Cinnamon_Whole_Roll.png",
      "name": "Cinnamon Whole Roll",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 7.59,
      "sizes": [
        {
          "1LB": 7.59,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Cinnamon_Whole_Flat.png",
      "name": "Cinnamon Whole Flat",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 3.99,
      "sizes": [
        {
          "1LB": 3.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Clove_Powder.png",
      "name": "Clove Powder",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 13.79,
      "sizes": [
        {
          "1LB": 13.79,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Clove_Whole.png",
      "name": "Clove Whole",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 12.69,
      "sizes": [
        {
          "1LB": 12.69,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Coriander_Ground.png",
      "name": "Coriander Ground",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 2.59,
      "sizes": [
        {
          "1LB": 2.59,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Coriander_Whole.png",
      "name": "Coriander Whole",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 2.59,
      "sizes": [
        {
          "1LB": 2.59,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Crushed_Chilli_(Chilli_Flakes).png",
      "name": "Crushed Chilli (Chilli Flakes)",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 4.99,
      "sizes": [
        {
          "1LB": 4.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Cumin_Ground.png",
      "name": "Cumin Ground",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 5.69,
      "sizes": [
        {
          "1LB": 5.69,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Cumin_Whole.png",
      "name": "Cumin Whole",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 5.69,
      "sizes": [
        {
          "1LB": 5.69,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Fennel_Powder.png",
      "name": "Fennel Powder",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 3.19,
      "sizes": [
        {
          "1LB": 3.19,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Fennel_Seed.png",
      "name": "Fennel Seed",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 3.19,
      "sizes": [
        {
          "1LB": 3.19,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Garam_Masala.png",
      "name": "Garam Masala",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 4.50,
      "sizes": [
        {
          "1LB": 4.50,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Garlic_Powder.png",
      "name": "Garlic Powder",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 3.49,
      "sizes": [
        {
          "1LB": 3.49,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Green_Cardamom.png",
      "name": "Green Cardamom",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 24.99,
      "sizes": [
        {
          "1LB": 24.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Mace_Spice_300gm.png",
      "name": "Mace Spice",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 34.00,
      "sizes": [
        {
          "1LB": 22.50,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Black_Mustard_Seed_Medium.png",
      "name": "Black Mustard Seed Medium",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 1.39,
      "sizes": [
        {
          "1LB": 1.39,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Black_Mustard_Seed_Big.png",
      "name": "Black Mustard Seed Big",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 1.39,
      "sizes": [
        {
          "1LB": 1.39,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Nutmeg_Powder.png",
      "name": "Nutmeg Powder",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 11.29,
      "sizes": [
        {
          "1LB": 11.29,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Nutmeg_Whole.png",
      "name": "Nutmeg Whole",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 10.49,
      "sizes": [
        {
          "1LB": 10.49,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Onion_Powder.png",
      "name": "Onion Powder",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 3.99,
      "sizes": [
        {
          "1LB": 3.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Spanish_Paprika.png",
      "name": "Spanish Paprika",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 3.79,
      "sizes": [
        {
          "1LB": 3.79,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Star_Anise.png",
      "name": "Star Anise",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 8.99,
      "sizes": [
        {
          "1LB": 8.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Turmeric_Ground.png",
      "name": "Turmeric Ground",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 2.59,
      "sizes": [
        {
          "1LB": 2.59,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Sesame_seed.png",
      "name": "Sesame Seed",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 3.19,
      "sizes": [
        {
          "1LB": 3.19,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Sesame_Seed_Black.png",
      "name": "Sesame Seed Black",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 3.49,
      "sizes": [
        {
          "1LB": 3.49,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Poppy_Seed_White.png",
      "name": "Poppy Seed White",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 5.19,
      "sizes": [
        {
          "1LB": 5.19,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Pathar_Phool.png",
      "name": "Pathar Phool",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 14.99,
      "sizes": [
        {
          "1LB": 14.99,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Dry_Mint.png",
      "name": "Dry Mint",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 4.49,
      "sizes": [
        {
          "1LB": 4.49,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Deggi_Mirch.png",
      "name": "Deggi Mirch",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 6.00,
      "sizes": [
        {
          "1LB": 6.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Kasoori_Methi.png",
      "name": "Kasoori Methi (2.2kg)",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 7.27,
      "sizes": [
        {
          "2.2LB": 16.00,
        }],
      "rating": 5
    },
    {
      "image": "/Images/Spices/Peanut_Red_skin_small.png",
      "name": "Peanut Red Skin Small",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "category": "Spices",
      "price_per_lb": 1.99,
      "sizes": [
        {
          "1LB": 1.99,
        }],
      "rating": 5
    },
    // {
    //   "image": "/Images/Spices/Peanut_Red_Skin_Big.png",
    //   "name": "Peanut Red Skin Big",
    //   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    //   "category": "Spices",
    //   "price_per_lb": 2.49,
    //    "1L: 2.49,
    //   "rating": 5
    // },
    // {
    //   "image": "/Images/Spices/.png",
    //   "name": "Handi Fried Onion (12 * 400)",
    //   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    //   "category": "Spices",
    //   "price_per_lb": 3.07,
    //   "price_per_bag": 32.50,
    //   "rating": 5
    // }
  ]

  useEffect(() => {
    handleCategorySelect(localStorage.getItem("categories"));
  }, [])

  // const toggleCategory = (index) => {
  //   setActiveCategory(activeCategory === index ? null : index);
  // };

  // const getGridClass = () => {
  //   switch (gridColumns) {
  //     case 2:
  //       return "grid-cols-1 sm:grid-cols-2";
  //     case 3:
  //       return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  //     case 4:
  //       return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4";
  //     default:
  //       return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  //   }
  // };

  // Handle category selection
  const handleCategorySelect = (category) => {
    console.log(category);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Filter products by the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleChange = (event, value) => {
  console.log(value);
  
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [prices, setPrices] = useState({});

  // useEffect(() => {
  //   const initialPrices = currentProducts?.reduce((acc, product) => {
  //     acc[product?.name] = product?.sizes[0]?.price_per_bag;
  //     return acc;
  //   }, {});
  //   setPrices(initialPrices);
  // }, [currentProducts]);

  // const handleSizeChange = (productName, selectedSize) => {
  //   // Update only the selected product's price based on selected size
  //   setPrices((prevPrices) => ({
  //     // ...prevPrices,
  //     [productName]: selectedSize.price_per_bag
  //   }));
  //   console.log(prices);
  // };

  const [selectedPrices, setSelectedPrices] = useState(
    products.reduce((acc, product) => {
      acc[product.name] = product.sizes[0][Object.keys(product.sizes[0])[0]]; // Default price from the first size
      return acc;
    }, {})
  );

  // Handle size change for a specific product
  const handleSizeChange = (productName, selectedSize) => {
    const price = selectedSize[Object.keys(selectedSize)[0]]; // Get the price using the key
    setSelectedPrices((prevPrices) => ({
      ...prevPrices,
      [productName]: price,
    }));
  };
  
  // const renderPagination = () => {
  //   const pageNumbers = [];
  //   for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
  //     pageNumbers.push(i);
  //   }
  //   return (
  //     <div
  //       className={`flex justify-center mt-4 items-center ${
  //         pageNumbers.length === 1 ? "hidden" : "block"
  //       }`}
  //     >
  //       <button
  //         className={`p-3 mx-1 text-sm text-gray-600 rounded-full hover:bg-gray-200 focus:outline-none ${
  //           currentPage === 1 ? "hidden" : "flex"
  //         }`}
  //         onClick={() => handlePageChange(currentPage - 1)}
  //       >
  //         <FiChevronLeft className="text-xl" />
  //       </button>
  //       {pageNumbers.map((number) => (
  //         <button
  //           key={number}
  //           className={`px-5 py-3 mx-1 text-sm rounded-full ${
  //             number === currentPage
  //               ? "bg-[#f7f7f7] text-black"
  //               : "bg-transparent text-gray-600"
  //           } hover:bg-[#f7f7f7] focus:outline-none`}
  //           onClick={() => handlePageChange(number)}
  //         >
  //           {number}
  //         </button>
  //       ))}
  //       <button
  //         className={`p-3 mx-1 text-sm text-gray-600 rounded-full hover:bg-gray-200 focus:outline-none ${
  //           currentPage === pageNumbers.length ? "hidden" : "flex"
  //         }`}
  //         onClick={() => handlePageChange(currentPage + 1)}
  //       >
  //         <FiChevronRight className="text-xl" />
  //       </button>
  //     </div>
  //   );
  // };

  // const indexOfLastProduct = currentPage * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = products.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // );

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", 
  //   });
  // };
  return (
    <div className='flex justify-center items-center bg-BgColor'>
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
            {/* <div className='pt-5 w-2/3 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio ad eveniet non eos consequatur, maiores mollitia culpa similique odio?</div> */}
          </div>
          <div className='grid md:grid-cols-4 grid-cols-1 w-full md:py-20 pt-20  overflow-hidden md:gap-0 gap-5'>
            <div className='md:hidden flex justify-center items-center w-full'>
              <div className='bg-BgGolden border-2 border-BgGolden hover:bg-BgColor hover:text-BgGolden cursor-pointer py-1 w-36 font-bold rounded-lg text-lg text-white' onClick={() => setViewFilters(true)}>
                <span className='flex justify-center items-center gap-2'><FaFilter />Filter</span>
              </div>
            </div>
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
                  {/*{menuData.map((menu, index) => (
                    <div key={index} className="bg-BgColor border-b">
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
                            <li key={itemIndex} className="flex py-2 gap-2 cursor-pointer">
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}*/}
                </div>
                <div className="md:flex flex-col gap-1 w-full">
                  {menuData.map((menu, index) => {
                    return (
                      <div key={index} className={`bg-BgColor border-b ${selectedCategory === menu.title ? "border-BgGolden" : ""}`}>
                        <div
                          className={`flex flex-row justify-between items-center cursor-pointer p-3 ${selectedCategory === menu.title ? "text-BgGolden" : "text-black"}`}
                          // onClick={() => toggleCategory(index)}
                          onClick={() => { handleCategorySelect(menu.title); setViewFilters(false) }}
                        >
                          <p className="font-bold text-base">{menu.title}</p>
                          {/* <span>{activeCategory === index ? <FaCaretUp /> : <FaCaretDown />}</span> */}
                        </div>
                        {/* <ul className={`${activeCategor   y === index ? "block p-3" : "hidden"}`}>
                        {menu?.items?.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex py-2 gap-2 cursor-pointer"
                            onClick={() => handleCategorySelect(menu.title)} // Select the category
                          >
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul> */}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <main className="flex-1 md:pl-5">
                {/* <div className={`grid ${getGridClass()} gap-6`}> */}
                <div className={`grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full`}>
                  {currentProducts.map((product, index) => {

                    // const [price, setPrice] = useState(product.sizes[0]?.price_per_bag || 0); // Default to 0 if sizes are not available

                    // useEffect(() => {
                    //   if (product.sizes && product.sizes.length > 0) {
                    //     setPrice(product.sizes[0].price_per_bag); // Set initial price on load
                    //   }
                    // }, [product.sizes]);
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl"
                        onMouseEnter={() => setHoveredProduct(index)}
                        onMouseLeave={() => setHoveredProduct(null)}
                      >
                        <div className="relative overflow-hidden before:block before:content-[''] before:pt-72">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 absolute top-0 left-0 bottom-0 right-0"
                          />
                          <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <div className='h-44 flex flex-col justify-between'>
                          <h2 className="text-xl font-semibold mb-2 p-4">{product.name}</h2>
                          <div className="p-4 bg-gray-50 flex items-center justify-between">
                            {/* {product.sizes && product.sizes.length > 1 ? (
                            <> */}
                            {/* <span className="text-xl font-bold">${prices[product.name]}</span> */}
                            <span className="text-xl font-bold">${selectedPrices[product.name] || product.sizes[0][Object.keys(product.sizes[0])[0]]}</span>
                            <select
                              className="border rounded p-2"
                              // onChange={(e) => {
                              //   const selectedSize = product.sizes.find(size => size.size_LB === e.target.value);
                              //   if (selectedSize) {
                              //     handleSizeChange(product.name, selectedSize);
                              //     // console.log(product.name, "-", selectedSize.price_per_bag);
                              //   }
                              // }}
                              onChange={(e) => {
                                const selectedSize = product.sizes.find(size => Object.keys(size)[0] === e.target.value);
                                if (selectedSize) {
                                  handleSizeChange(product.name, selectedSize);
                                }
                              }}
                            >
                              {product?.sizes?.map((size, i) => {
                                const [key, value] = Object.entries(size)[0];
                                return (
                                  <option key={i} value={key}>
                                    {key}
                                  </option>
                                )
                              })}
                            </select>
                            {/* </>
                          ) : (
                            <>
                              <span className="text-xl font-bold">${product.sizes[0].price_per_bag}</span>
                              <span>{product.sizes[0].size_LB}</span>
                            </>
                          )} */}
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  {/* {currentProducts.map((product, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl border-2  overflow-hidden transition-all duration-300 hover:shadow-xl h-fit"
                      onMouseEnter={() => setHoveredProduct(index)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <div className="p-4 h-full">
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                      </div>
                      <div className="p-4 bg-gray-50 flex items-center justify-between">
                        <span className="text-xl font-bold">${product.price_per_bag}</span>
                        <span>{product.size_LB}</span>
                      </div>
                    </div>
                  ))}
                  {hoveredProduct === index && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4 transition-opacity duration-300">
                      <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200">
                        <FaShoppingCart className="text-xl text-gray-800" />
                      </button>
                      <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200">
                        <FaEye className="text-xl text-gray-800" />
                      </button>
                    </div>
                  )}
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        "size_LB":"1LB",className={`h-5 w-5 ${i < Math.floor(product
                        .rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    "size_LB":"1LB",<span className="ml-2 text-sm text-gray-600">{product
                    .rating.toFixed(1)}</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                    Add to Cart
                  </button> */}
                </div>
                <div className="flex justify-center mt-10">
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handleChange}
                    renderItem={(item) => (
                      <PaginationItem
                        components={{ previous: FiChevronLeft, next: FiChevronRight }}
                        {...item}
                      />
                    )}
                    siblingCount={0}
                    boundaryCount={2}
                    hideNextButton={false}
                    hidePrevButton={false}
                  />
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