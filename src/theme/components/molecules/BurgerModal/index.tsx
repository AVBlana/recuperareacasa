// BurgerFullScreenModal.js
import React from "react";
import Box from "../../atoms/Box";
import { useTheme } from "styled-components";
import { rgba } from "polished";
import Portal from "../../atoms/Portal";

const BurgerModal = ({
  children,
  isVisible,
  onClose,
}: {
  children: React.ReactNode;
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
            position: "relative",
            zIndex: 1,
            maxHeight: "90vh",
            maxWidth: "90vw",
            borderRadius: 24,

            // Customize styles for the burger menu modal
            background: theme.color.white,
            padding: theme.spacings.medium,
          }}
        >
          {children}
        </Box>
      </Box>
    </Portal>
  );
};

export default BurgerModal;
