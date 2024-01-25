"use client";

// const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
// const IS_STAGING = process.env.NEXT_PUBLIC_IS_STAGING === "true";
// const IS_PRODUCTION = process.env.NEXT_PUBLIC_IS_PRODUCTION === "true";

// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "../types/styled-components";
import { theme } from "../theme/constants";

// const client = new ApolloClient({
//   uri: IS_DEVELOPMENT
//     ? "http://localhost:4000/graphql"
//     : `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
//   cache: new InMemoryCache(),
// });

export const Store = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    // <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    // </ApolloProvider>
  );
};
