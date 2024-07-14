"use client"

import { ILocation } from "@/DTOs/ILocation";
import { api } from "@/services/api";
import { createContext, ReactNode, useEffect, useState } from "react";
    
export type LocationInput = Omit<ILocation, 'id' | 'created_at'>;
    
interface LocationsProviderProps {
  children: ReactNode;
}
    
interface LocationsContextData {
  locations: ILocation[];
  setLocations: (locations: ILocation[]) => void;
  createLocation: (location: LocationInput) => void;
  fetchLocations: (id: number) => void;
  updateLocation: (id: number) => void;
  deleteLocation: (id: number) => void;
}
    
export const LocationsContext = createContext<LocationsContextData>(
  {} as LocationsContextData
);

export function LocationsProvider({ children }: LocationsProviderProps) {
  
  const [locations, setLocations] = useState<ILocation[]>([]);
  
  async function fetchLocations() {
    try {
      const response = await api.get(`rest/v1/locations?select=*&order=name`);
      const allLocations = response.data;
  
      setLocations(allLocations);
      
    } catch (error) {
      console.error("Failed to fetch Locations:", error);
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

  async function createLocation(location: LocationInput) {
    try {
      const response = await api.post(`rest/v1/locations`, location);
      console.log(response.data);
      setLocations((prevLocations) => [...prevLocations, response.data]);
      fetchLocations();
    } catch (error) {
      console.error("Failed to add Location:", error);
    }
  }

  async function deleteLocation(id: number) {
    try {
      await api.delete(`rest/v1/locations?id=eq.${id}`);
      setLocations((prevLocations) => prevLocations.filter((location) => location.id !== id));
    } catch (error) {
      console.error("Failed to delete Location:", error);
    }
  }

  async function updateLocation(id: number) {
    try {
      await api.put(`rest/v1/locations?id=eq.${id}`);
      setLocations((prevLocations) => prevLocations.filter((location) => location.id !== id));
    } catch (error) {
      console.error("Failed to update Location:", error);
    }
  }

          
  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <LocationsContext.Provider value={{ 
      locations, setLocations,
      createLocation, fetchLocations, updateLocation, deleteLocation
    }}>
      { children }
    </LocationsContext.Provider>
  );
}