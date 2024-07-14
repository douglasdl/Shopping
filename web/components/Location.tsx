import { ILocation } from "@/DTOs/ILocation";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

interface LocationProps extends ILocation {
  onDelete?: (id: number) => void
  onToggleDone?: (id: number) => void 
}

export function Location({ id, name, address, onDelete, onToggleDone }:LocationProps) {
  
  function handleDelete() {
    //onDelete(id);
  };

  return (
    <div className="flex items-center justify-evenly w-full gap-1 py-1 bg-slate-200: dark:bg-slate-800/80">
      <Image 
        src={`/images/${name}.png`} 
        alt="" 
        width={48} 
        height={48} 
        className={`bg-white/50 dark:bg-black/50 aspect-square object-cover rounded-lg`}
      />
      <div className={`flex flex-col p-4 rounded-md w-2/3`}>
        <span className={`text-base font-bold capitalize truncate text-black dark:text-white`}>
          {name}
        </span>
        <span className={`flex items-center justify-center text-xs truncate text-black dark:text-white`}>
          {address}
        </span>
      </div>
      <button 
        className="flex items-center justify-center w-10 h-10 p-2 font-bold text-xl rounded-full"
        onClick={handleDelete}
        disabled
      >
        <FaTrashAlt color="gray" size={32} title="Remover" />
      </button>
    </div>
  )
}