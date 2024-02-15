import { ReactNode, createContext, useContext, useState } from "react";

// 상태 정의
export interface MyContextState {
  foreColor: string;
  backColor: string;
}

// 상태와 액션 정의
export interface MyContextType {
  state: MyContextState;
  actions: {
    setForeColor: (color: string) => void;
    setBackColor: (color: string) => void;
  };
}

interface MyContextProviderProps {
  children: ReactNode;
}

// 컨텍스트 초깃값 설정
const MyContextInit: MyContextType = {
  state: {
    foreColor: "blue",
    backColor: "lightblue",
  },
  actions: {
    setForeColor: (color: string) => {},
    setBackColor: (color: string) => {},
  },
};

const MyContext = createContext<MyContextType>(MyContextInit);

const MyContextProvider = (props: MyContextProviderProps) => {
  const [state, setState] = useState<MyContextState>(MyContextInit.state);

  const value: MyContextType = {
    state,
    actions: {
      setForeColor: (color: string) => {
        setState((prev) => ({ ...prev, foreColor: color }));
      },
      setBackColor: (color: string) => {
        setState((prev) => ({ ...prev, backColor: color }));
      },
    },
  };

  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};

export { MyContext as MyCtx, MyContextProvider };
