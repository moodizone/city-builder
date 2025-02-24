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
  renameHouse(id: HouseType["id"], name: HouseType["name"]): void;
  updateHouse(id: HouseType["id"], payload: Partial<HouseType>): void;
}

const initialState: ContextType = {
  list: [],
  addHouse() {
    return void 0;
  },
  removeHouse() {
    return void 0;
  },
  renameHouse() {
    return void 0;
  },
  duplicateHouse() {
    return void 0;
  },
  updateHouse() {
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
        addHouse({
          ...house,
          id: generateUniqueId(),
          name: `${house.name} Copy`,
        });
      }
    },
    [houses, addHouse]
  );
  const renameHouse = React.useCallback(
    (id: HouseType["id"], name: HouseType["name"]) => {
      // use index search since I don't want to change the list order after update
      const foundedIndex = houses.findIndex((house) => house.id === id);

      if (foundedIndex !== -1) {
        setHouses((prev) => {
          const prevList = [...prev];
          prevList[foundedIndex] = { ...prevList[foundedIndex], name };
          return prevList;
        });
      }
    },
    [houses]
  );
  const updateHouse = React.useCallback(
    (id: HouseType["id"], payload: Partial<HouseType>) => {
      const foundedIndex = houses.findIndex((house) => house.id === id);

      if (foundedIndex !== -1) {
        setHouses((prev) => {
          const prevList = [...prev];
          prevList[foundedIndex] = { ...prevList[foundedIndex], ...payload };
          return prevList;
        });
      }
    },
    [houses]
  );

  //================================
  // Render
  //================================
  return (
    <HouseContext.Provider
      value={{
        list: houses,
        addHouse,
        removeHouse,
        duplicateHouse,
        renameHouse,
        updateHouse,
      }}
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
