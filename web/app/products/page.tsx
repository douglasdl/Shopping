import { Product } from "@/components/Product";
import { useProducts } from "@/hooks/useProducts";

export default function ProductsPage() {
  const { products } = useProducts();

  return (
    <div>
      <header>
        <h2 className="flex items-center justify-between p-2 font-bold bg-slate-200 text-black w-full rounded-t-md">
          Produtos
          <span></span>
        </h2>
      </header>
      <main>
        {
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
        }
      </main>
    </div>
  )
}