import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProductsProvider } from "@/contexts/ProductsContext";
import { LocationsProvider } from "@/contexts/LocationsContext";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping",
  description: "Shopping List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="text-black dark:text-white">
      <body className={inter.className}>
        <ProductsProvider>
          <LocationsProvider>
            {children}
            <ToastContainer />
          </LocationsProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}