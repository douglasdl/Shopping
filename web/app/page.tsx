import { Header } from "@/components/Header";
import Link from "next/link";

export default function Home() {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-start w-full p-8">
      <Header title="Minhas Compras" hasIcon={false} />
      <nav className="flex flex-col w-full text-2xl p-4 mt-8">
        <ul className="flex flex-col items-center justify-center gap-4">
          <li className="flex items-center justify-between w-full rounded p-4 bg-slate-700 hover:bg-slate-800 hover:cursor-pointer">
            <Link href="/list">Minha Lista</Link>
          </li>
          <li className="flex items-center justify-between w-full rounded p-4 bg-slate-700 hover:bg-slate-800 hover:cursor-pointer">
            <Link href="/categories">Categorias</Link>
          </li>
          <li className="flex items-center justify-between w-full rounded p-4 bg-slate-700 hover:bg-slate-800 hover:cursor-pointer">
            <Link href="/products">Produtos</Link>
          </li>
          <li className="flex items-center justify-between w-full rounded p-4 bg-slate-700 hover:bg-slate-800 hover:cursor-pointer">
            <Link href="/supermarkets">Super Mercados</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}