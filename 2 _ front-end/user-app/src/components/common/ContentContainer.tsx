// [SGLEE:20240205MON_151100] Created

import "./ContentContainer.css";

import { ReactNode } from "react";

export interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer = (props: ContentContainerProps) => {
  return <div className="content">{props.children}</div>;
};

export default ContentContainer;
