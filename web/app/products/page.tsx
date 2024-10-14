import { Header } from "@/components/Header";
// import { Product } from "@/components/Product";
// import { useProducts } from "@/hooks/useProducts";

export default function ProductsPage() {
  // const { products } = useProducts();

  return (
    <div>
      <Header title="Produtos" />
      
      <main>
        {/* {
          products.map((product) => {
            // id, quantity, unit, name[], country, category, barcode, maker_id
            return (
              
              <Product 
                key={product.id}
                id={product.id}
                name={product.name[0]}
                quantity={product.quantity}
                done={false}
                category={product.category}
                priceJPY={product.priceJPY}
                unit={product.unit}
                onDelete={()=>{}}
                onToggleDone={()=>{}}
              />
            )
          })
        } */}
      </main>
    </div>
  )
}