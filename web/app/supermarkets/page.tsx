"use client"

import { Header } from "@/components/Header";
import { Location } from "@/components/Location";
import { useLocations } from "@/hooks/useLocations";

export default function SuperMarkets() {

  const { locations } = useLocations();

  return (
    <div className="flex min-h-screen flex-col items-center justify-start w-full p-8 ">
      <Header title="Supermercados" />
      <div className="flex flex-col gap-1 p-4 w-full max-w-3xl">
        {
          locations.length > 0 && (
            locations.map((location) => {
              return (
                <Location 
                  key={location.id}
                  id={location.id}
                  name={location.name} 
                  address={location.address}
                />
              )
            })
          )
        }
      </div>
    </div>
  )
}