// [SGLEE:20240205MON_145800] Created

import { ReactNode } from "react";

import "./PageContainer.css";

export interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = (props: PageContainerProps) => {
  return <div className="page">{props.children}</div>;
};

export default PageContainer;
