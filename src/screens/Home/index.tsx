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

export const HomeScreen = () => {
  return (
    <Box style={{ paddingTop: 120, background: theme.color.white }}>
      <Header />
      <Slider />
      <Services />
      <MovingText />
      <CTA />
      <InteractiveBox />

      <Counters />

      <Text huge bold uppercase yellow>
        test
      </Text>
      <SectionBox id="despre">
        <Text secondaryFont primary huge bolder>
          Sectiune Despre
        </Text>
      </SectionBox>
      <SectionBox id="servicii">
        <Text secondaryFont primary huge bolder>
          Sectiune Servicii
        </Text>
      </SectionBox>
      <SectionBox id="echipa">
        <Text secondaryFont primary huge bolder>
          Sectiune Echipa
        </Text>
      </SectionBox>

      <SectionBox id="contact">
        <Text secondaryFont primary huge bolder>
          Sectiune Contact
        </Text>
      </SectionBox>
      <Gallery />

      <Review />
      <Footer />
    </Box>
  );
};

const SectionBox = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;
