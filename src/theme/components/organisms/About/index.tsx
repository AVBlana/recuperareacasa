import styled from "styled-components";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Image from "../../atoms/Image";
import { SvgIcon, Text } from "../..";
import { theme } from "@/theme/constants";
import { CaretRIcon } from "../../molecules/Icons/CaretRight";
import FullScreenModal from "../../molecules/FullscreenModal";
import { useContext, useState } from "react";
import StepsForm from "../StepsForm";
import { StepsContext, StepsProvider } from "../StepsForm/context";
import { useModal } from "../ModalProvider";

const About = () => {
  const { handleOpenModal, handleCloseModal, isModalVisible } =
    useContext(StepsContext);

  return (
    <>
      <StyledAboutBox>
        <Flex
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              position: "relative",
              top: 0,
              bottom: 0,
              left: -100,
              right: 0,
            }}
          >
            <Image width={900} height={600} src={"/assets/about.png"} alt="" />
          </Box>
          <Box style={{ maxWidth: 600 }}>
            <Text
              big
              semiBold
              secondaryFont
              style={{ color: theme.color.secondary, paddingBottom: 8 }}
            >
              Drespre Recuperare Acasă
            </Text>
            <Box style={{ gap: 10 }}>
              <Text
                style={{ width: 280, paddingBottom: 24 }}
                huge
                secondaryFont
                primary
              >
                Tratăm Persoana, Nu Doar Problema.
              </Text>
              <Text small style={{ lineHeight: "140%" }}>
                Serviciile nostre de recuperare medicală la domiciliu oferă
                programe personalizate ce includ tehnici de terapie manuală,
                masaj, dry needling și kinetoterapie.
              </Text>
              <Text small style={{ lineHeight: "140%" }}>
                Echipa noastră de specialiști asigură ghidare online, oferind
                exerciții și intervenții terapeutice adaptate nevoilor tale
                individuale.
              </Text>
              <Text small style={{ lineHeight: "140%" }}>
                Cu accent pe monitorizare și evaluare constantă, vei experimenta
                o abordare completă pentru recuperarea ta în confortul propriei
                case.
              </Text>
            </Box>

            <Box
              style={{
                gap: 20,
                paddingTop: 40,
                paddingBottom: 40,
                justifyContent: "center",
              }}
            >
              <Text bigger secondaryFont primary semiBold>
                Ce ne diferențiază ?
              </Text>
              <Box style={{ gap: 10 }}>
                <Flex style={{ gap: 20, alignItems: "center" }}>
                  <Box>
                    <SvgIcon size={20} src="/assets/checkedSVG.svg" />
                  </Box>
                  <Text small style={{ lineHeight: "140%" }}>
                    Abordarea inovatoare și gândirea creativă în furnizarea
                    serviciilor de recuperare
                  </Text>
                </Flex>
                <Flex style={{ gap: 20, alignItems: "center" }}>
                  <Box>
                    <SvgIcon size={20} src="/assets/checkedSVG.svg" />
                  </Box>
                  <Text small style={{ lineHeight: "140%" }}>
                    Punctăm nu doar prin calitatea intervențiilor, ci și prin
                    evaluarea continuă și monitorizarea atentă a progresului.
                  </Text>
                </Flex>
                <Flex style={{ gap: 20, alignItems: "center" }}>
                  <Box>
                    <SvgIcon size={20} src="/assets/checkedSVG.svg" />
                  </Box>
                  <Text small style={{ lineHeight: "140%" }}>
                    Întelegem unicitatea ficărui caz și adaptăm soluțiile pentru
                    a asigura cele mai bune rezultate
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Flex
              style={{
                color: theme.color.white,
                background: theme.color.secondary,
                paddingTop: theme.spacings.medium,
                paddingBottom: theme.spacings.medium,
                paddingLeft: theme.spacings.bigger,
                paddingRight: theme.spacings.bigger,
                borderRadius: 20,
                gap: theme.spacings.tiny,
                cursor: "pointer",
                alignItems: "center",
                maxWidth: 200,
              }}
              onClick={handleOpenModal}
            >
              Programeaza-te
              <CaretRIcon size={9} fill="white" />
            </Flex>

            <FullScreenModal
              key={isModalVisible ? "about-modal-key" : "about-no-modal-key"}
              isVisible={isModalVisible}
              onClose={handleCloseModal}
            >
              {isModalVisible && (
                <StepsProvider>
                  <StepsForm onClose={handleCloseModal} />
                </StepsProvider>
              )}
            </FullScreenModal>
          </Box>
        </Flex>
      </StyledAboutBox>
    </>
  );
};

const StyledAboutBox = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding-right: 80px;
`;

export default About;
