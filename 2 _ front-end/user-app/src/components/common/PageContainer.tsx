// [SGLEE:20240205MON_145800] Created

import "./PageContainer.css";

import { _toggleFullScreen } from "../../modules/utils/BluePage";
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = (props: PageContainerProps) => {
  const handleDblClickPage = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const t = e.currentTarget as HTMLDivElement;

    if (t === e.target) {
      _toggleFullScreen();
    }
  };

  return (
    <div className="page" onDoubleClick={handleDblClickPage}>
      {props.children}
    </div>
  );
};

export default PageContainer;
