import { Spacer, Text } from "@/theme/components";
import Box from "@/theme/components/atoms/Box";
import Flex from "@/theme/components/atoms/Flex";
import Gallery from "@/theme/components/organisms/Gallery";
import Modal from "@/theme/components/molecules/Modal";
import Footer from "@/theme/components/organisms/Footer";
import Header from "@/theme/components/organisms/Header";
import Review from "@/theme/components/organisms/Review";
import { theme } from "@/theme/constants";
import { useState } from "react";
import styled, { useTheme } from "styled-components";
import Slider from "@/theme/components/organisms/Slider";
import Services from "@/theme/components/organisms/Services";
import MovingText from "@/theme/components/molecules/MovingText";
import Counter from "@/theme/components/atoms/Counter";
import Counters from "@/theme/components/organisms/Counters";
import CTA from "@/theme/components/organisms/CTA";
import InteractiveBox from "@/theme/components/organisms/Interactive";
import About from "@/theme/components/organisms/About";
import ProcessCard from "@/theme/components/molecules/StepCard";
import Steps from "@/theme/components/organisms/Steps";
import Team from "@/theme/components/organisms/Team";
import { ModalProvider } from "@/theme/components/organisms/ModalProvider";

export const HomeScreen = () => {
  return (
    <Box style={{ paddingTop: 120, background: theme.color.white }}>
      <ModalProvider>
        <Header />
      </ModalProvider>

      <Slider />

      <SectionBox id="servicii">
        <Services />
      </SectionBox>

      <MovingText />

      <SectionBox id="despre">
        <ModalProvider>
          <About />
        </ModalProvider>
        <Counters />
      </SectionBox>

      <InteractiveBox />
      <ModalProvider>
        <CTA />
      </ModalProvider>

      <SectionBox id="echipa" style={{ alignItems: "center" }}>
        <Team />
        <Steps />
      </SectionBox>

      <SectionBox id="galerie">
        <Gallery />
      </SectionBox>

      <Review />

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
