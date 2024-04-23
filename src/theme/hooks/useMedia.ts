import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";

process.env.NODE_ENV;

export const useMedia = () => {
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
