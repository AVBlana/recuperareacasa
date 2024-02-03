import { Spacer, Text } from "@/theme/components";
import Box from "@/theme/components/atoms/Box";
import Flex from "@/theme/components/atoms/Flex";
import Image from "@/theme/components/atoms/Image";
import Modal from "@/theme/components/molecules/Modal";
import Footer from "@/theme/components/organisms/Footer";
import Header from "@/theme/components/organisms/Header";
import Review from "@/theme/components/organisms/Review";
import { useState } from "react";
import styled, { useTheme } from "styled-components";

export const HomeScreen = () => {
  return (
    <Box style={{ paddingTop: 120 }}>
      <Header />

      <Text huge bold uppercase yellow>
        test
      </Text>
      <Gallery />
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

      <SectionBox id="contact">
        <Text white huge bolder>
          Sectiune Contact
        </Text>
      </SectionBox>
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

const Gallery = () => {
  const data = [
    {
      url: "/assets/logoRecuperareAcasa.png",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente cupiditate, asperiores aperiam quas incidunt officia eos aliquam in ducimus et odio ullam atque dolor officiis iure! Velit iure dolores veniam.",
    },
    { url: "/assets/logoRecuperareAcasa.png", title: "descriere" },
    { url: "/assets/logoRecuperareAcasa.png", title: "descriere" },
    { url: "/assets/logoRecuperareAcasa.png", title: "descriere" },
    { url: "/assets/logoRecuperareAcasa.png", title: "descriere" },
    { url: "/assets/logoRecuperareAcasa.png", title: "descriere" },
    { url: "/assets/logoRecuperareAcasa.png", title: "descriere" },
    { url: "/assets/logoRecuperareAcasa.png", title: "descriere" },
  ];
  return (
    <>
      <SectionBox id="galerie">
        <Box style={{ width: "100%" }}>
          <Text white huge bolder>
            Sectiune Galerie
          </Text>
          <Flex style={{ flexWrap: "wrap" }}>
            {data.map((item) => {
              return <GalleryItem item={item} />;
            })}
          </Flex>
        </Box>
      </SectionBox>
    </>
  );
};

const GalleryItem = ({ item }: { item: { url: string; title: string } }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const theme = useTheme();
  return (
    <>
      <StyledGalleryItem
        style={{
          width: "calc(100%/4)",
        }}
      >
        <StyledOverlay onClick={() => setIsModalVisible(true)}>
          <Box
            style={{
              height: 70,
              overflow: "hidden",
              justifyContent: "flex-end",
            }}
          >
            <Text bold style={{ height: 70 }} textOverflow="ellipsis">
              {item.title}
            </Text>
          </Box>
        </StyledOverlay>
        <Modal
          onClose={() => setIsModalVisible(false)}
          isVisible={isModalVisible}
        >
          <Box style={{ width: 600, overflowX: "hidden" }}>
            <Image width={600} height={600} alt="" src={item.url} />

            <Box style={{ flex: 1 }}>
              <Text>{item.title}</Text>
            </Box>
          </Box>
        </Modal>
        <Box
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "calc(100vw / 4)",
          }}
        >
          <Image width={300} height={300} alt="" src={item.url} />
        </Box>
      </StyledGalleryItem>
    </>
  );
};

const StyledOverlay = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacings.big}px;
`;

const StyledGalleryItem = styled.div`
  cursor: pointer;
  position: relative;
  &:hover ${StyledOverlay} {
    opacity: 1;
  }
`;
