// [SGLEE:20240214WED_123100] Created

import { ReactNode, createContext, useState } from "react";
import { ParkingLotsDTO } from "../modules/dto/ParkingLotDTO";

interface DataContextState {
  mapCenterAddr: string;
  parkingLots: ParkingLotsDTO[];
}

interface DataContextType {
  state: DataContextState;
  actions: {
    setParkingLots: (parkingLots: ParkingLotsDTO[]) => void;
  };
}

interface DataContextProviderProps {
  children: ReactNode;
}

const DataContextTypeInit: DataContextType = {
  state: {
    mapCenterAddr: "건원대로 34번길 32-29", // 구리역
    parkingLots: [],
  },
  actions: {
    setParkingLots: (parkingLots: ParkingLotsDTO[]) => {},
  },
};

const DataContext = createContext<DataContextType>(DataContextTypeInit);

const DataContextProvider = (props: DataContextProviderProps) => {
  const [state, setState] = useState<DataContextState>(
    DataContextTypeInit.state
  );
  const value: DataContextType = {
    state,
    actions: {
      setParkingLots: (parkingLots: ParkingLotsDTO[]) => {
        setState((prev) => ({ ...prev, parkingLots }));
      },
    },
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
