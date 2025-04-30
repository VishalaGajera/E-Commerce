import React, { useEffect, useMemo, useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Loader from "./loader";
import axios from "axios";
import { useProductContext } from "../../Providers/ProductCategoryContext";

const Product = () => {
  const [viewFilters, setViewFilters] = useState(false);
  const [selectedPrices, setSelectedPrices] = useState({});
  // const [selectedCategory, setSelectedCategory] = useState("all");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [products, setProducts] = useState([]);
  const productsPerPage = 2;
  const URL = import.meta.env.VITE_REACT_APP_LOCAL_URL;
  // const storeCategory = localStorage.getItem("categories");

  const {
    categories,
    isCategoriesLoading,
    categoriesError,
    productData,
    isProductsLoading,
    productsError,
    currentPage,
    setCurrentPage,
    selectedCategoryId,
    setSelectedCategoryId,
    refetchProducts,
    refetchCategories,
  } = useProductContext();

  useEffect(() => {
    console.log("productData.metaData :", productData?.metaData);
  }, [productData]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // const { data, isFetching, error, refetch } = useQuery({
  //   queryKey: ["fetchProducts"],
  //   queryFn: async () => {
  //     const response = await axios.get(`${URL}product/getAllProducts?page=${currentPage}&categoryId=${selectedCategory}`);
  //     return response.data;
  //   },
  //   initialData: {
  //     products: [],
  //     metadata: {
  //       totalcount: 0,
  //       totalpages: 0,
  //       page: 0,
  //       count: 0,
  //     },
  //   },
  // });

  // const {
  //   data: categoryData,
  //   isFetching: isCategoryFetching,
  //   error: categoryError,
  // } = useQuery({
  //   queryKey: ["fetchCategories"],
  //   queryFn: async () => {
  //     const response = await axios.get(`${URL}category/getAllCategory`);
  //   //   console.log("response :", response);
  //     return response.data;
  //   },
  // });

  const fetchProducts = async () => {
    const initialPrices = productData?.products?.reduce((acc, product) => {
      const firstSize = Object.keys(product.sizes)[0];
      acc[product._id] = firstSize ? product.sizes[firstSize] : null;
      return acc;
    }, {});
    setSelectedPrices(initialPrices);
  };

  useEffect(() => {
    if (productData && !productsError) {
      fetchProducts();
    } else {
      toast.error(productsError?.message);
    }
  }, [productData, productsError]);

  const handleSizeChange = (productId, selectedSize, sizes) => {
    setSelectedPrices((prevPrices) => ({
      ...prevPrices,
      [productId]: sizes[selectedSize],
    }));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategoryId(category);
  };

  useEffect(() => {
    if (selectedCategoryId) {
      refetchProducts();
    }
  }, [selectedCategoryId]);

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const totalpages = productData?.metadata?.totalpages || 0;
  const totalpages = productData?.metadata?.totalpages ?? 1;

  useEffect(() => {
    refetchProducts();
  }, [currentPage]);

  return (
    <div className="flex justify-center items-center bg-BgColor">
      <div className="container h-full">
        <div className="flex flex-col justify-center items-center mx-5 py-10 h-full">
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-bold text-5xl">Products</h1>
            <div className="flex items-center justify-center mt-5">
              <div className="relative flex justify-center items-center">
                <div className="w-36 h-0.5 bg-BgGolden z-20"></div>
                <div className="absolute w-4 h-4 bg-BgGolden rotate-45 z-10"></div>
                <div className="absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30"></div>
                <div className="absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30"></div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1 w-full md:py-20 pt-20  overflow-hidden md:gap-0 gap-5">
            <div className="md:hidden flex justify-center items-center w-full">
              <div
                className="bg-BgGolden border-2 border-BgGolden hover:bg-BgColor hover:text-BgGolden cursor-pointer py-1 w-36 font-bold rounded-lg text-lg text-white"
                onClick={() => setViewFilters(true)}
              >
                <span className="flex justify-center items-center gap-2">
                  <FaFilter />
                  Filter
                </span>
              </div>
            </div>
            <div className="md:flex flex-col gap-1 w-full border-r-2">
              <div
                className={`fixed inset-0 bg-white p-4 transform transition-transform duration-300 ease-in-out md:relative md:p-0 ${
                  viewFilters
                    ? "translate-x-0 overflow-y-scroll z-50"
                    : "translate-x-full"
                } md:translate-x-0 flex flex-col md:gap-1 md:mr-5 ${
                  viewFilters ? "h-full w-full" : ""
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
                <div></div>
                <div className="md:flex flex-col gap-1 w-full">
                  {isCategoriesLoading ? (
                    <p className="p-3">Loading categories...</p>
                  ) : categories?.length ? (
                    categories?.map((menu, index) => (
                      <div
                        key={index}
                        className={`bg-BgColor border-b ${
                          selectedCategoryId === menu._id
                            ? "border-BgGolden"
                            : ""
                        }`}
                      >
                        <div
                          className={`flex flex-row justify-between items-center cursor-pointer p-3 ${
                            selectedCategoryId === menu._id
                              ? "text-BgGolden"
                              : "text-black"
                          }`}
                          onClick={() => {
                            handleCategorySelect(menu._id);
                            setViewFilters(false);
                          }}
                        >
                          <p className="font-bold text-base">{menu.name}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="p-3">No categories found.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <main className="flex-1 md:pl-5">
                {isProductsLoading ? (
                  <div
                    className="flex justify-center items-center"
                    style={{ height: "calc(95vh - 100px)" }}
                  >
                    <Loader />
                  </div>
                ) : (
                  <div
                    className={`grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full`}
                  >
                    {productData?.products?.map((product, index) => {
                      const category = categories?.find(
                        (cat) => cat._id === product.categoryId._id
                      ).name;
                      return (
                        <div
                          key={index}
                          className="bg-white rounded-xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                          <div className="relative overflow-hidden before:block before:content-[''] before:pt-72">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 absolute top-0 left-0 bottom-0 right-0"
                            />
                            <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              {category}
                            </span>
                          </div>
                          <div className="flex flex-col justify-between ">
                          <div className="p-2">
                            <h2 className="text-lg font-semibold mb-2 line-clamp-1">
                              {product.name}
                            </h2>
                          </div>
                            <div className="p-4 bg-gray-50 flex items-center justify-between ">
                              <span className="text-xl font-bold">
                                $
                                {selectedPrices[product._id] !== undefined
                                  ? selectedPrices[product._id].toFixed(2)
                                  : "Select a size"}
                              </span>
                              <select
                                className="border rounded p-2"
                                onChange={(e) => {
                                  const selectedSize = e.target.value;
                                  const selectedPrice =
                                    product.sizes[selectedSize];
                                  handleSizeChange(
                                    product._id,
                                    selectedSize,
                                    product.sizes
                                  );
                                }}
                              >
                                {Object.entries(product.sizes).map(
                                  ([size, price]) => (
                                    <option key={size} value={size}>
                                      {size}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="flex justify-center mt-10">
                  <Pagination
                    count={totalpages}
                    onChange={(e, page) => handlePaginationChange(page)}
                    color="primary"
                  />
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
