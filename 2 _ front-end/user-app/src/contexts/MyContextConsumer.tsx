import { useContext } from "react";
import { MyContextType, MyCtx } from "./MyContext";

const MyContextConsumer = () => {
  const value = useContext<MyContextType>(MyCtx);

  const handleClickForeColor = () => {
    value.actions.setForeColor("blue " + new Date());
  };

  const handleClickBackColor = () => {
    value.actions.setBackColor("lightblue " + new Date());
  };

  return (
    <div>
      <div>foreColor: {value.state.foreColor}</div>
      <div>backColor: {value.state.backColor}</div>
      <div>
        foreColor:
        <button onClick={handleClickForeColor}>변경</button>
      </div>
      <div>
        backColor:
        <button onClick={handleClickBackColor}>변경</button>
      </div>
    </div>
  );
};

export default MyContextConsumer;
