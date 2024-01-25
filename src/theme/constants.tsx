import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    primary: "#4340D6",
    green: "#00cb6a",
    yellow: "#f3ba2f",
    white: "white",
    black: "black",
    red: "#f26666",
    gray: "#c2c2c2",
  },
  spacings: {
    tiny: 8,
    smallest: 10,
    smaller: 12,
    small: 14,
    medium: 16,
    big: 24,
    bigger: 30,
    biggest: 40,
    huge: 50,
  },
  text: {
    tiny: 8,
    smallest: 10,
    smaller: 12,
    small: 14,
    medium: 15,
    big: 16,
    bigger: 20,
    biggest: 24,
    huge: 32,
    bold: "Roboto_700Bold",
    semiBold: "Roboto_500Medium",
    regular: "Roboto_400Regular",
  },
  shadow: {
    big: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    small: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  media: {
    tablet: "768px",
    desktop: "1024px",
    isDesktopOrLaptop: true,
    isBigScreen: false,
    isMobile: false,
    isMobileTiny: false,
    isMobileSmallest: false,
    isTablet: false,
    isTabletOrMobile: false,
    isTabletOrMobileDevice: false,
    isPortrait: false,
    isRetina: false,
    isMobileWeb: false,
  },
};

export { theme };
