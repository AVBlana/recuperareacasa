import { Spacer, Text } from "@/theme/components";
import Box from "@/theme/components/atoms/Box";
import Footer from "@/theme/components/organisms/Footer";
import Header from "@/theme/components/organisms/Header";
import styled from "styled-components";

export const HomeScreen = () => {
  return (
    <Box style={{ paddingTop: 120 }}>
      <Header />
      <Text huge bold uppercase yellow>
        test
      </Text>
      <SectionBox id="despre">
        <Text white huge bolder>
          Sectiune Despre
        </Text>
      </SectionBox>
      <SectionBox id="servicii">
        <Text white huge bolder>
          Sectiune Servicii
        </Text>
      </SectionBox>
      <SectionBox id="echipa">
        <Text white huge bolder>
          Sectiune Echipa
        </Text>
      </SectionBox>
      <SectionBox id="galerie">
        <Text white huge bolder>
          Sectiune Galerie
        </Text>
      </SectionBox>
      <SectionBox id="contact">
        <Text white huge bolder>
          Sectiune Contact
        </Text>
      </SectionBox>
      <Footer />
    </Box>
  );
};

const SectionBox = styled.div`
  display: flex;
  height: 100vh;
`;
