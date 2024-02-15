// [SGLEE:20240214WED_123100] Created

import { createContext } from "react";
import { ParkingLotsDTO } from "../modules/dto/ParkingLotDTO";

interface DataContextState {
  parkingLots: ParkingLotsDTO[];
}

interface DataContextType {
  state: DataContextState;
  actions: {
    setParkingLots: (parkingLots: ParkingLotsDTO[]) => void;
  };
}

const DataContext = createContext<DataContextType | null>(null);
