"use client"

import { Product } from "@/components/Product";
import { Header } from "@/components/Header";
import { IProduct, ProductInput } from "@/contexts/ProductsContext";
import { useProducts } from "@/hooks/useProducts";
import { useEffect, useMemo, useState } from "react";

export default function List() {
  const { listProducts, cartProducts, addProduct, deleteProduct, toggleDone } = useProducts();
  const [newProduct, setNewProduct] = useState("");

  function handleAddProduct() {
    const trimmedProduct = newProduct.trim();
    if (trimmedProduct === "") return;

    const newProductData: ProductInput = {
      name: trimmedProduct,
      quantity: 1,
      category: 1,
      priceJPY: 100,
      unit: "g",
      done: false
    };

    addProduct(newProductData);
    setNewProduct("");
  }

  function handleDeleteProduct(id: number) {
    deleteProduct(id);
  }

  function handleToggleDone(id: number) {
    toggleDone(id);
  }

  // Function to calculate total cost
  const calculateTotalCost = (products: IProduct[]) => {
    return products.reduce((total, product) => {
      if (product.quantity !== undefined) {
        return total + product.priceJPY * product.quantity;
      }
      return total;
    }, 0);
  };

  const listTotalCost = useMemo(() => calculateTotalCost(listProducts), [listProducts]);
  const cartTotalCost = useMemo(() => calculateTotalCost(cartProducts), [cartProducts]);


  useEffect(() => {
    setNewProduct("");
  }, [])
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between w-full p-8">
      <Header title="Lista de Compras" />
      <div className="sticky top-0 w-full bg-black z-10 p-4 shadow-md flex items-center justify-between gap-4">
      <input
          type="text"
          placeholder="Produto"
          className="flex items-center justify-center px-4 py-2 text-black"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <button 
          className="flex items-center justify-center w-10 h-10 px-4 py-2 bg-green-500 rounded-lg font-bold text-xl"
          onClick={handleAddProduct}
        >
          +
        </button>
      </div>
      <div className="flex items-start justify-start flex-col gap-0.5 w-full flex-1 my-8">
      <h2 className="flex items-center justify-between p-2 font-bold bg-slate-200 text-black w-full rounded-t-md">
        Lista
        <span>{listTotalCost}円</span>
      </h2>
        {
          listProducts.map((product) => {
            return (
              <Product 
                key={product.id}
                created_at={product.created_at}
                id={product.id}
                name={product.name}
                quantity={product.quantity}
                done={product.done}
                category={product.category}
                priceJPY={product.priceJPY}
                unit={product.unit}
                onDelete={handleDeleteProduct}
                onToggleDone={handleToggleDone}
              />
            )
          })
        }
        <h2 className="flex items-center justify-between p-2 font-bold bg-slate-200 text-black w-full mt-4 rounded-t-md">
          Carrinho / Cestinha
          <span>{cartTotalCost}円</span>
        </h2>
        {
          cartProducts.map((product) => {
            return (
              <Product 
                key={product.id}
                created_at={product.created_at}
                id={product.id}
                name={product.name}
                quantity={product.quantity}
                done={product.done}
                category={product.category}
                priceJPY={product.priceJPY}
                unit={product.unit}
                onDelete={handleDeleteProduct}
                onToggleDone={handleToggleDone}
              />
            )
          })
        }
      </div>
    </div>
  );
}
