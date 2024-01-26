"use client";

import { ThemeProvider } from "../types/styled-components";
import { theme } from "../theme/constants";

export const Store = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
