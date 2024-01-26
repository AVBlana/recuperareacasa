import { Spacer, Text } from "@/theme/components";
import Header from "@/theme/components/organisms/Header";
import styled from "styled-components";

export const HomeScreen = () => {
  return (
    <>
      <Header />
      <Text huge bold uppercase yellow>
        test
      </Text>
      <SectionBox id="about">
        <Text white huge bolder>
          About Section
        </Text>
        {/* Add your about content here */}
      </SectionBox>
      <SectionBox id="services">
        <Text white huge bolder>
          Services Section
        </Text>
        {/* Add your services content here */}
      </SectionBox>
      <SectionBox id="prices">
        <Text white huge bolder>
          Prices Section
        </Text>
        {/* Add your services content here */}
      </SectionBox>
      <SectionBox id="contact">
        <Text white huge bolder>
          Contact Section
        </Text>
        {/* Add your contact content here */}
      </SectionBox>
    </>
  );
};

const SectionBox = styled.div`
  display: flex;
  height: 100vh;
`;
