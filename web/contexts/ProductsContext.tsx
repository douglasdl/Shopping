"use client"

import { api } from "@/services/api";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface IProduct { 
  created_at?: string
  id: number
  name: string
  quantity?: number
  done?: boolean
  category: number
  priceJPY: number
  unit: string
}
    
export type ProductInput = Omit<IProduct, 'id' | 'created_at'>;
    
interface ProductsProviderProps {
  children: ReactNode;
}
    
interface ProductsContextData {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  listProducts: IProduct[];
  setListProducts: (listProducts: IProduct[]) => void;
  cartProducts: IProduct[];
  setCartProducts: (cartProducts: IProduct[]) => void;
  addProduct: (product: ProductInput) => void;
  deleteProduct: (id: number) => void;
  toggleDone: (id: number) => void;
}
    
export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  
  const [products, setProducts] = useState<IProduct[]>([]);
  const [listProducts, setListProducts] = useState<IProduct[]>([]);
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  
  async function fetchProducts() {
    try {
      const response = await api.get(`rest/v1/products?select=*&order=category`);
      const allProducts = response.data;
  
      setProducts(allProducts);
      
    } catch (error) {
      console.error("Failed to fetch products:", error);
      // Handle the error as needed, e.g., show a toast message
      // const isAppError = error instanceof AppError;
      // const title = isAppError ? error.message : 'Não foi possível buscar as informações. Tente novamente mais tarde.'
  
      // toast.show({
      //     title,
      //     placement: 'top',
      //     bgColor: 'red.500'
      // })
    }
  }

  async function fetchProductsList() {
    try {
      const response = await api.get(`rest/v1/shopping_list?select=*&order=name`);
      const allProducts = response.data;
  
      // Separate products into listProducts and cartProducts based on the done status
      const listProducts = allProducts.filter((product: IProduct) => !product.done);
      const cartProducts = allProducts.filter((product: IProduct) => product.done);
  
      // Set the state for both lists
      setListProducts(listProducts);
      setCartProducts(cartProducts);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      // Handle the error as needed, e.g., show a toast message
      // const isAppError = error instanceof AppError;
      // const title = isAppError ? error.message : 'Não foi possível buscar as informações. Tente novamente mais tarde.'
  
      // toast.show({
      //     title,
      //     placement: 'top',
      //     bgColor: 'red.500'
      // })
    }
  }
  

  async function addProduct(product: ProductInput) {
    try {
      const response = await api.post(`rest/v1/shopping_list`, product);
      console.log(response.data);
      setListProducts((prevProducts) => [...prevProducts, response.data]);
      fetchProductsList();
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  }

  async function deleteProduct(id: number) {
    try {
      await api.delete(`rest/v1/shopping_list?id=eq.${id}`);
      setListProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  }

  async function toggleDone(id: number) {
    const productToUpdate = listProducts.find((product) => product.id === id) || cartProducts.find((product) => product.id === id);
    if (!productToUpdate) return;

    const updatedProduct = { ...productToUpdate, done: !productToUpdate.done };

    try {
      await api.patch(`rest/v1/shopping_list?id=eq.${id}`, {
        done: updatedProduct.done,
      });

      fetchProductsList();
      
    } catch (error) {
      console.error("Failed to update product status:", error);
    }
  }
          
  useEffect(() => {
    fetchProducts();
    fetchProductsList();
  }, []);

  return (
    <ProductsContext.Provider value={{ 
      products, setProducts,
      listProducts, setListProducts,
      cartProducts, setCartProducts,
      addProduct, deleteProduct, 
      toggleDone
    }}>
      { children }
    </ProductsContext.Provider>
  );
}