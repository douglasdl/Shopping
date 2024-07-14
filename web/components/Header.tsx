import Link from "next/link";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";

interface HeaderProps {
  title: string
  hasIcon?: boolean
  url?: string
}

export function Header({ title, hasIcon = true, url = "/" }: HeaderProps) {
  return (
    <header className="flex items-center justify-start w-full gap-4"> 
      {
        hasIcon === true ? (
          <Link href={url} target="_self">
            <FiChevronLeft size={32} />
          </Link>
        ) : (
          <div className="w-8 h-8"/>
        )
      }
      <h1 className="text-2xl font-bold text-black dark:text-white text-center flex-1 truncate">
        {title}
      </h1>
      <div className="w-8 h-8"/>
    </header>
  )
}