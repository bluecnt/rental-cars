// [SGLEE:20240205MON_171600]

import { ReactNode } from "react";
import { ProgressBar } from "react-bootstrap";

interface SplashContentProps {
  progbarNow: number;
  children: ReactNode;
}

const SplashContent = (props: SplashContentProps) => {
  return (
    <div
      style={{
        padding: "1rem",

        width: "640px",
        height: "360px",

        border: "1px solid lightgray",

        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          // border: "1px solid blue",

          fontSize: "2rem",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        BLUECNT
      </div>

      <div
        style={{
          // border: "1px solid blue",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          color: "darkblue",
          fontSize: "4rem",
          fontWeight: "bold",

          flex: "1",
        }}
      >
        Rental Cars
      </div>

      <div>{props.children}</div>

      <div
        style={
          {
            // border: "1px solid blue",
          }
        }
      >
        {props.progbarNow > -1 && (
          <ProgressBar id="progbar" min={0} max={30} now={props.progbarNow} />
        )}
      </div>
    </div>
  );
};

export default SplashContent;
