////////////////////////////////////////////////////////////////////////////////
// [SGLEE:20240216FRI_123100] Created
////////////////////////////////////////////////////////////////////////////////

import "./Dimmer.css";

import { ReactNode, useEffect } from "react";

interface DimmerProps {
  targetSizeElemId: string;
  zIndex: number;
  children: ReactNode;
}

const Dimmer = (props: DimmerProps) => {
  useEffect(() => {
    //
  }, []);

  return (
    <div
      style={{
        display: props.children ? "grid" : "none",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: props.zIndex + "",
      }}
    >
      <div className="dimmer-bkgnd" />
      <div className="dimmer-body">{props.children}</div>
    </div>
  );
};

export default Dimmer;
