import { useMedia } from "@/theme/hooks/useMedia";
import { ReactNode, createContext, useState } from "react";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import { theme } from "../theme/constants";

import isPropValid from "@emotion/is-prop-valid";
import { useServerInsertedHTML } from "next/navigation";

const AppContext = createContext({} as {});

function useApp() {
  const Media = useMedia();
  const Theme = { ...theme, media: Media };

  return {
    Media,
    Theme,
  };
}

const AppProvider = ({ children, ...props }: { children: ReactNode }) => {
  const value = useApp();

  return (
    <AppContext.Provider value={value}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={value.Theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // Filter out custom props that should not be forwarded to DOM elements
  const customProps = [
    "height",
    "width",
    "bolder",
    "hovered",
    "isFirst",
    "secondaryFont",
    "lineHeight",
    "letterSpacing",
    "light",
    "semiBold",
    "bold",
    "textAlign",
    "whiteSpace",
    "textOverflow",
    "ellipsis",
    "uppercase",
    "lowercase",
    "capitalize",
    "primary",
    "red",
    "white",
    "black",
    "yellow",
    "tiny",
    "smallest",
    "smaller",
    "small",
    "medium",
    "big",
    "bigger",
    "biggest",
    "huge",
    "hasLine",
    "horizontal",
    "padding",
    "size",
    "filled",
    "src",
    "selected",
    "visible",
    "animate",
  ];

  const shouldForwardProp = (propName: string, elementToBeRendered: any) => {
    if (typeof elementToBeRendered === "string") {
      return isPropValid(propName) && !customProps.includes(propName);
    }
    return true;
  };

  if (typeof window !== "undefined") {
    return (
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        {children}
      </StyleSheetManager>
    );
  }

  return (
    <StyleSheetManager
      sheet={styledComponentsStyleSheet.instance}
      shouldForwardProp={shouldForwardProp}
    >
      {children}
    </StyleSheetManager>
  );
}
