"use client";

import { AppProvider } from "./app";

export const Store = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <AppProvider>{children}</AppProvider>;
};
