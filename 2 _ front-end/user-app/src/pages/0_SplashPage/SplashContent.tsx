// [SGLEE:20240205MON_171600]

import "./SplashContent.css";

import { ReactNode } from "react";
import { ProgressBar } from "react-bootstrap";

interface SplashContentProps {
  progbarNow?: number;
  children: ReactNode;
  moreContent?: ReactNode;
}

const SplashContent = (props: SplashContentProps) => {
  console.log(props.progbarNow);
  return (
    <div className="splash-content-container">
      <div className="splash-content-header">BLUECNT</div>
      <div className="splash-content-body">Rental Cars</div>
      <div className="splash-content-footer">{props.children}</div>
      {props.progbarNow && (
        <div>
          <ProgressBar id="progbar" min={1} max={30} now={props.progbarNow} />
        </div>
      )}
      {props.moreContent && <div>{props.moreContent}</div>}
    </div>
  );
};

export default SplashContent;
