import { createContext } from "react";

interface ColorState {
  color: string;
}

interface ColorContextType {
  state: ColorState;
  actions: {
    setColor: (color: string) => void;
  };
}

const ColorContext = createContext<ColorContextType | null>(null);

/*
ParkingLotMgmt

customers-mgmt
parking-lots-mgmt
*/
