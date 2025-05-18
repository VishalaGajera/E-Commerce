import { createContext, useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../Common/AxiosInstance.js";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    error: categoriesError,
    refetch: refetchCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/category/getAllCategory`);
      return res.data;
    },
    // enabled: !!user && !authLoading,
    gcTime: Infinity,
    staleTime: Infinity,
  });

  const {
    data: productData,
    isLoading: isProductsLoading,
    error: productsError,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ["products", currentPage, selectedCategoryId],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/product/getAllProducts?page=${currentPage}&categoryId=${selectedCategoryId}`
      );
      return res.data;
    },
    // enabled: !!user && !authLoading,
    gcTime: Infinity,
    staleTime: Infinity,
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
