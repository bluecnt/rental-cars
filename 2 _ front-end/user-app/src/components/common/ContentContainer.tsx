// [SGLEE:20240205MON_151100] Created

import { ReactNode, useEffect, useRef } from "react";
import "./ContentContainer.css";

export interface ContentContainerProps {
  id?: string;
  children: ReactNode;
  dimmedChild?: ReactNode;
}

const ContentContainer = (props: ContentContainerProps) => {
  const refDimmed = useRef<HTMLDivElement>(null);

  // const handleClickContentDimmed = (
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   const t = e.currentTarget as HTMLDivElement;
  //   t.style.display = "none";
  // };

  useEffect(() => {
    if (refDimmed.current) {
      refDimmed.current.style.display =
        refDimmed.current && props.dimmedChild ? "flex" : "none";
    }
  });

  return (
    <div id={props.id} className="content">
      {props.children}
      <div
        ref={refDimmed}
        id={"content-dimmed"}
        className="content-dimmed"
        // onClick={handleClickContentDimmed}
      />
      {props.dimmedChild}
    </div>
  );
};

export default ContentContainer;
