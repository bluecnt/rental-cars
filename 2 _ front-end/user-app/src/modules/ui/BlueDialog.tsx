// [SGLEE:20240225SUN_144300] Created

import "./BlueDialog.css";

import { ReactNode, useEffect } from "react";

interface BlueDialogProps {
  placeholderForPage?: boolean; // true
  useBackdrop?: boolean; // true

  margin?: string;
  width?: string; // 400px
  height?: string;
  justify?: string; // center
  align?: string; // center

  title: string;
  children: ReactNode;
  footerNode?: ReactNode;
}

const BlueDialog = (props: BlueDialogProps) => {
  useEffect(() => {
    // console.log("[BlueDialog] mounted");
  }, []);

  useEffect(() => {
    // console.log("[BlueDialog] rendered");
  });

  return (
    <>
      {/* Placeholder layer */}
      <div
        className="blue-dlg-placeholder"
        style={{
          position:
            props.placeholderForPage === undefined
              ? "fixed"
              : props.placeholderForPage
              ? "fixed"
              : "absolute",
        }}
      >
        {/* Backdrop layer */}
        <div
          className="blue-dlg-backdrop"
          style={{
            opacity:
              props.useBackdrop === undefined
                ? "0.5"
                : props.useBackdrop
                ? "0.5"
                : "0",
            pointerEvents:
              props.useBackdrop === undefined
                ? "auto"
                : props.useBackdrop
                ? "auto"
                : "none",
          }}
        />

        {/* Dialog layer */}
        <div
          className="blue-dlg-container"
          style={{
            margin: props.margin,
            width: props.width ?? "400px",
            height: props.height,
            justifySelf: props.justify ?? "center",
            alignSelf: props.align ?? "center",
          }}
        >
          <div className="blue-dlg-header">{props.title}</div>
          <div className="blue-dlg-body">{props.children}</div>
          {props.footerNode && (
            <div className="blue-dlg-footer">{props.footerNode}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlueDialog;
