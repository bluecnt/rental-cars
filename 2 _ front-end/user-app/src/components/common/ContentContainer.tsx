// [SGLEE:20240205MON_151100] Created

import { ReactNode } from "react";
import "./ContentContainer.css";

export interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer = (props: ContentContainerProps) => {
  return <div className="content">{props.children}</div>;
};

export default ContentContainer;
