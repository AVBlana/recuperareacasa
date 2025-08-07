import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";

process.env.NODE_ENV;

export const useMedia = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDesktopOrLaptop = useMediaQuery({
    maxWidth: 1224,
  });
  const isDesktopSmall = useMediaQuery({
    maxWidth: 1120,
  });
  const isBigScreen = useMediaQuery({
    minWidth: 1400,
  });
  const isBiggestScreen = useMediaQuery({
    minWidth: 1680,
  });
  const isMobile = useMediaQuery({
    maxWidth: 767,
  });
  const isMobileTiny = useMediaQuery({
    maxWidth: 320,
  });
  const isMobileSmallest = useMediaQuery({
    maxWidth: 348,
  });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1024,
  });
  const isTabletOrMobile = useMediaQuery({
    maxWidth: 991,
  });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  // Return default values during SSR
  if (!isMounted) {
    return {
      isDesktopSmall: false,
      isDesktopOrLaptop: false,
      isBigScreen: false,
      isBiggestScreen: false,
      isMobile: false,
      isMobileTiny: false,
      isMobileSmallest: false,
      isTablet: false,
      isTabletOrMobile: false,
      isTabletOrMobileDevice: false,
      isPortrait: false,
      isRetina: false,
    };
  }

  return {
    isDesktopSmall,
    isDesktopOrLaptop,
    isBigScreen,
    isBiggestScreen,
    isMobile,
    isMobileTiny,
    isMobileSmallest,
    isTablet,
    isTabletOrMobile,
    isTabletOrMobileDevice,
    isPortrait,
    isRetina,
  };
};
