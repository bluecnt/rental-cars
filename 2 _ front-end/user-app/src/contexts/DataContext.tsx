// [SGLEE:20240214WED_123100] Created

import { ReactNode, createContext, useState } from "react";
import { ParkingLotsDTO } from "../modules/dto/ParkingLotDTO";
import UserDTO from "../modules/dto/UserDTO";

interface DataContextState {
  userDTO: UserDTO;
  mapCenterAddr: string;
  // rentStartTime: Date;
  // rentEndTime: Date;
  parkingLots: ParkingLotsDTO[];
}

interface DataContextType {
  state: DataContextState;
  actions: {
    setUserDTO: (userDTO: UserDTO) => void;
    // setRentTime: (startTime: Date, endTime: Date) => void;
    setParkingLots: (parkingLots: ParkingLotsDTO[]) => void;
  };
}

interface DataContextProviderProps {
  children: ReactNode;
}

const DataContextTypeInit: DataContextType = {
  state: {
    userDTO: new UserDTO(),
    // rentStartTime: new Date(),
    // rentEndTime: new Date(),
    mapCenterAddr: "건원대로 34번길 32-29", // 구리역
    parkingLots: [],
  },
  actions: {
    setUserDTO: (userDTO: UserDTO) => {},
    // setRentTime: (startTime: Date, endTime: Date) => {},
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
      setUserDTO: (userDTO: UserDTO) => {
        setState((prev) => ({ ...prev, userDTO }));
      },
      // setRentTime: (startTime: Date, endTime: Date) => {
      //   setState((prev) => ({
      //     ...prev,
      //     rentStartTime: startTime,
      //     rentEndTime: endTime,
      //   }));
      // },
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
