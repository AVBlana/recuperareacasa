import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      green: string;
      yellow: string;
      white: string;
      black: string;
      red: string;
      gray: string;
    };
    spacings: {
      tiny: number;
      smallest: number;
      smaller: number;
      small: number;
      medium: number;
      big: number;
      bigger: number;
      biggest: number;
      huge: number;
    };
    text: {
      tiny: number;
      smallest: number;
      smaller: number;
      small: number;
      medium: number;
      big: number;
      bigger: number;
      biggest: number;
      huge: number;
      primary: string;
      secondary: string;
    };
    shadow: {
      big: string;
      small: string;
    };
    media: {
      mobile: string;
      tablet: string;
      desktop: string;
      isDesktopOrLaptop: boolean;
      isBigScreen: boolean;
      isMobile: boolean;
      isMobileTiny: boolean;
      isMobileSmallest: boolean;
      isTablet: boolean;
      isTabletOrMobile: boolean;
      isTabletOrMobileDevice: boolean;
      isPortrait: boolean;
      isRetina: boolean;
      isMobileWeb: boolean;
    };
  }
}
