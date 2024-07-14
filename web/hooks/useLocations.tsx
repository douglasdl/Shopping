"use client"

import { LocationsContext } from "@/contexts/LocationsContext";
import { useContext } from "react";

export function useLocations() {
  const context = useContext(LocationsContext);

  return context;
}