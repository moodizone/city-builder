"use client";
import * as React from "react";

import { HouseType } from "@/components/house";
import { generateUniqueId } from "@/utils/random";

interface PropsType {
  list: HouseType[];
}

interface ContextType {
  list: HouseType[];
  addHouse(payload: HouseType): void;
  removeHouse(id: HouseType["id"]): void;
  duplicateHouse(id: HouseType["id"]): void;
}

const initialState: ContextType = {
  list: [],
  addHouse() {
    return void 0;
  },
  removeHouse() {
    return void 0;
  },
  duplicateHouse() {
    return void 0;
  },
};

const HouseContext = React.createContext<ContextType>(initialState);
HouseContext.displayName = "HouseContext";

function HouseProvider({ children, list }: React.PropsWithChildren<PropsType>) {
  //================================
  // Init
  //================================
  const [houses, setHouses] = React.useState(list);

  //================================
  // Handlers
  //================================
  const addHouse = React.useCallback((payload: HouseType) => {
    setHouses((prev) => [...prev, payload]);
  }, []);
  const removeHouse = React.useCallback((id: HouseType["id"]) => {
    setHouses((prev) => prev.filter((house) => house.id !== id));
  }, []);
  const duplicateHouse = React.useCallback(
    (id: HouseType["id"]) => {
      const house = houses.find((house) => house.id === id);

      if (house) {
        addHouse({ ...house, id: generateUniqueId() });
      }
    },
    [houses, addHouse]
  );

  //================================
  // Render
  //================================
  return (
    <HouseContext.Provider
      value={{ list: houses, addHouse, removeHouse, duplicateHouse }}
    >
      {children}
    </HouseContext.Provider>
  );
}

function useHouse() {
  const context = React.useContext(HouseContext);
  if (!context) {
    throw new Error("useHouse must be used within a HouseProvider");
  }
  return context;
}

export { HouseProvider, useHouse };
