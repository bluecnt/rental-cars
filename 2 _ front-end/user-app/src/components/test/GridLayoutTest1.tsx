import { useState } from "react";

interface State {
  modalShow: boolean;
  modelessShow: boolean;
}

const GridLayoutTest1 = () => {
  const [state, setState] = useState<State>({
    modalShow: false,
    modelessShow: false,
  });

  const handleClickShowModal = () => {
    setState((prev) => ({ ...prev, modalShow: true }));
  };

  const handleClickModalClose = () => {
    setState((prev) => ({ ...prev, modalShow: false }));
  };

  const handleClickShowModeless = () => {
    setState((prev) => ({ ...prev, modelessShow: !prev.modelessShow }));
  };

  return (
    <div
      style={{
        margin: "1rem",
        width: "200px",
        height: "200px",
        border: "1px solid blue",
        position: "relative",
        display: "grid",
      }}
    >
      {/* BKGND */}
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "lightgreen",
        }}
      ></div>

      {/* TOP */}
      <div
        style={{
          margin: "0.5rem",
          width: "calc(100% - 1rem)",
          backgroundColor: "lightblue",
          position: "absolute",
        }}
      >
        <button onClick={handleClickShowModal}>show modal</button>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          margin: "0.5rem",
          width: "calc(100% - 1rem)",
          backgroundColor: "lightblue",
          position: "absolute",
          alignSelf: "end",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button type="button" onClick={handleClickShowModeless}>
          show modeless
        </button>
      </div>

      {/* MODAL */}
      {state.modalShow && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "black",
            opacity: "0.5",
          }}
        ></div>
      )}
      {state.modalShow && (
        <div
          style={{
            width: "100px",
            backgroundColor: "white",
            position: "absolute",
            justifySelf: "center",
            alignSelf: "center",
          }}
        >
          <button onClick={handleClickModalClose}>click to close</button>
        </div>
      )}

      {/* MODELESS */}
      {state.modelessShow && (
        <div
          style={{
            marginBottom: "1rem",
            width: "100px",
            backgroundColor: "white",
            position: "absolute",
            justifySelf: "center",
            alignSelf: "flex-end",
          }}
        >
          <div>header</div>
          <div>body</div>
          <div>footer</div>
        </div>
      )}
    </div>
  );
};

export default GridLayoutTest1;
