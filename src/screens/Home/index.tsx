import Box from "@/theme/components/atoms/Box";
import Gallery from "@/theme/components/organisms/Gallery";
import Footer from "@/theme/components/organisms/Footer";
import Header from "@/theme/components/organisms/Header";
import Review from "@/theme/components/organisms/Review";
import styled, { useTheme } from "styled-components";
import Slider from "@/theme/components/organisms/Slider";
import Services from "@/theme/components/organisms/Services";
import MovingText from "@/theme/components/molecules/MovingText";
import Counters from "@/theme/components/organisms/Counters";
import CTA from "@/theme/components/organisms/CTA";
import InteractiveBox from "@/theme/components/organisms/Interactive";
import About from "@/theme/components/organisms/About";
import Steps from "@/theme/components/organisms/Steps";
import Team from "@/theme/components/organisms/Team";
import { StepsProvider } from "@/theme/components/organisms/StepsForm/context";
import { ReviewProvider } from "@/theme/components/organisms/Review/ReviewContext";

export const HomeScreen = () => {
  const theme = useTheme();

  return (
    <Box
      style={{
        paddingTop: theme.media.isMobile ? 0 : 120,
        background: theme.color.white,
      }}
    >
      <StepsProvider>
        <Header />
      </StepsProvider>

      <Slider />

      <SectionBox id="servicii">
        <Services />
      </SectionBox>

      <MovingText />

      <SectionBox id="despre">
        <StepsProvider>
          <About />
        </StepsProvider>
        <Counters />
      </SectionBox>

      <InteractiveBox />
      <StepsProvider>
        <CTA />
      </StepsProvider>

      <SectionBox
        id="echipa"
        style={{ alignItems: theme.media.isMobile ? "flex-start" : "center" }}
      >
        <Team />
        <Steps />
      </SectionBox>

      <SectionBox id="galerie">
        <Gallery />
      </SectionBox>
      <ReviewProvider>
        <Review />
      </ReviewProvider>

      <SectionBox id="contact">
        <Footer />
      </SectionBox>
    </Box>
  );
};

const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
`;
