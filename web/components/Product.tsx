import { IProduct } from "@/contexts/ProductsContext"
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

interface ProductProps extends IProduct {
  onDelete: (id: number) => void
  onToggleDone: (id: number) => void 
}

export function Product({ id, name, quantity = 1, done = false, category, priceJPY, unit, onDelete, onToggleDone }:ProductProps) {
  const doneImageStyle = done ? "brightness-50" : "";
  const doneTextStyle = done ? "line-through decoration-slate-300 text-slate-500" : "text-black dark:text-white";

  function handleDelete() {
    onDelete(id);
  };

  function handleToggleDone() {
    onToggleDone(id);
  };

  const imageName = name;

  return (
    <div className="flex items-center justify-between w-full gap-1 p-1 bg-slate-200: dark:bg-slate-800">
      <Image 
        src={`/images/${imageName}.png`} 
        alt="" 
        width={40} 
        height={40} 
        className={`bg-white/50 dark:bg-black/50 aspect-square object-cover rounded-full ${doneImageStyle}`}
      />
      <div
        onClick={handleToggleDone}
        className={`flex flex-col h-10 w-full px-4 rounded-md`}
      >
        <span className={`text-base font-bold capitalize truncate ${doneTextStyle}`}>
          {name}
        </span>
        <span className={`text-xs truncate ${doneTextStyle}`}>
          {quantity}{unit} - {priceJPY}円
        </span>

      </div>
      <button 
        className="flex items-center justify-center w-10 h-10 p-2 font-bold text-xl rounded-full"
        onClick={handleDelete}
      >
        <FaTrashAlt color="gray" size={32} title="Remover" />
      </button>
    </div>
  )
}