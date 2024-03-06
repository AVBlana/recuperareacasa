// // ThemeProvider.js
// import React, { createContext, useContext } from "react";
// import { DefaultTheme } from "styled-components";

// export const ThemeContext = createContext<DefaultTheme | undefined>(undefined);

// export const ThemeProvider = ({
//   theme,
//   children,
// }: {
//   theme: DefaultTheme;
//   children: JSX.Element | JSX.Element[];
// }) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;

// export const useTheme = () => {
//   const theme = useContext(ThemeContext);
//   if (!theme) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return theme;
// };
