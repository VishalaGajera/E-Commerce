import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const URL = import.meta.env.VITE_REACT_APP_LOCAL_URL;
  // const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [metadata, setMetadata] = useState(null);
  // const [loading, setLoading] = useState(true);

  // Filters
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");

  const pageSize = 12;

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    error: categoriesError,
    refetch: refetchCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get(`${URL}category/getAllCategory`);
      return res.data;
    },
    gcTime: Infinity,
    staleTime: Infinity
  });

  const {
    data: productData,
    isLoading: isProductsLoading,
    error: productsError,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ["products", currentPage, selectedCategoryId],
    queryFn: async () => {
      const res = await axios.get(
        `${URL}product/getAllProducts?page=${currentPage}&categoryId=${selectedCategoryId}`
      );
      return res.data;
    },
  });

  return (
    <ProductContext.Provider
      value={{
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook
export const useProductContext = () => useContext(ProductContext);
