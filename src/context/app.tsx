import { useMedia } from "@/theme/hooks/useMedia";
import { ReactNode, createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/constants";

const AppContext = createContext({} as {});

function useApp() {
  const Media = useMedia();
  const Theme = { ...theme, Media };

  return {
    Media,
    Theme,
  };
}

const AppProvider = ({ children }: { children: ReactNode }) => {
  const value = useApp();

  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={value.Theme}>{children}</ThemeProvider>;
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
