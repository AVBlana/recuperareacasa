"use client";

import { useTheme } from "styled-components";
import Box from "../../atoms/Box";
import { ReactNode } from "react";
import { rgba } from "polished";
import Portal from "../../atoms/Portal";

const Modal = ({
  children,
  isVisible,
  onClose,
}: {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
}) => {
  const theme = useTheme();
  return (
    <Portal>
      <Box
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: rgba(theme.color.black, 0.8),
          alignItems: "center",
          justifyContent: "center",
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
          zIndex: 1000,
        }}
      >
        <Box
          onClick={onClose}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        ></Box>
        <Box
          style={{
            // background: theme.color.white,
            minWidth: 320,
            maxHeight: "90vh",
            position: "relative",
            zIndex: 1,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {children}
        </Box>
      </Box>
    </Portal>
  );
};

export default Modal;
