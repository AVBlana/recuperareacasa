import styled, { useTheme } from "styled-components";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Image from "../../atoms/Image";
import { SvgIcon, Text } from "../..";
import { CaretRIcon } from "../../molecules/Icons/CaretRight";
import FullScreenModal from "../../molecules/FullscreenModal";
import { useContext, useState } from "react";
import StepsForm from "../StepsForm";
import { StepsContext, StepsProvider } from "../StepsForm/context";

const About = () => {
  const theme = useTheme();

  const { handleOpenModal, handleCloseModal, isModalVisible } =
    useContext(StepsContext);

  return (
    <>
      <StyledAboutBox>
        <Flex
          style={{
            justifyContent: "center",
            flexDirection: theme.media.isMobile ? "column-reverse" : "row",
          }}
        >
          <Box
            style={{
              position: "relative",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              marginLeft: -40,
              overflow: "hidden",
            }}
          >
            <Image
              width={theme.media.isMobile ? 320 : 900}
              height={theme.media.isMobile ? 250 : 600}
              src={"/assets/about.png"}
              alt=""
            />
          </Box>
          <Box
            style={{
              maxWidth: theme.media.isMobile ? "100%" : 600,
              alignItems: theme.media.isMobile ? "center" : "flex-start",
            }}
          >
            <Text
              big
              semiBold
              secondaryFont
              style={{
                color: theme.color.secondary,
                paddingBottom: 8,
                width: "100%",
              }}
            >
              Despre Noi
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
              <Box>
                <Text
                  style={{
                    lineHeight: "140%",
                    fontSize: theme.media.isMobile
                      ? theme.text.smaller
                      : theme.text.small,
                  }}
                >
                  Serviciile nostre de recuperare medicală la domiciliu oferă
                  programe personalizate ce includ tehnici de terapie manuală,
                  masaj, dry needling și kinetoterapie.
                </Text>
              </Box>
              <Box>
                <Text
                  style={{
                    lineHeight: "140%",
                    fontSize: theme.media.isMobile
                      ? theme.text.smaller
                      : theme.text.small,
                  }}
                >
                  Echipa noastră de specialiști asigură ghidare online, oferind
                  exerciții și intervenții terapeutice adaptate nevoilor tale
                  individuale.
                </Text>
              </Box>
              <Box>
                <Text
                  style={{
                    lineHeight: "140%",
                    fontSize: theme.media.isMobile
                      ? theme.text.smaller
                      : theme.text.small,
                  }}
                >
                  Cu accent pe monitorizare și evaluare constantă, vei
                  experimenta o abordare completă pentru recuperarea ta în
                  confortul propriei case.
                </Text>
              </Box>
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
                  <Text
                    style={{
                      lineHeight: "140%",
                      fontSize: theme.media.isMobile
                        ? theme.text.smaller
                        : theme.text.small,
                    }}
                  >
                    Abordarea inovatoare și gândirea creativă în furnizarea
                    serviciilor de recuperare
                  </Text>
                </Flex>
                <Flex style={{ gap: 20, alignItems: "center" }}>
                  <Box>
                    <SvgIcon size={20} src="/assets/checkedSVG.svg" />
                  </Box>
                  <Text
                    style={{
                      lineHeight: "140%",
                      fontSize: theme.media.isMobile
                        ? theme.text.smaller
                        : theme.text.small,
                    }}
                  >
                    Punctăm nu doar prin calitatea intervențiilor, ci și prin
                    evaluarea continuă și monitorizarea atentă a progresului.
                  </Text>
                </Flex>
                <Flex style={{ gap: 20, alignItems: "center" }}>
                  <Box>
                    <SvgIcon size={20} src="/assets/checkedSVG.svg" />
                  </Box>
                  <Text
                    style={{
                      lineHeight: "140%",
                      fontSize: theme.media.isMobile
                        ? theme.text.smaller
                        : theme.text.small,
                    }}
                  >
                    Întelegem unicitatea ficărui caz și adaptăm soluțiile pentru
                    a asigura cele mai bune rezultate
                  </Text>
                </Flex>
              </Box>
            </Box>
            <AboutButton onClick={handleOpenModal}>
              Programeaza-te
              <CaretRIcon size={9} fill="white" />
            </AboutButton>

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

const AboutButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.tiny}px;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.secondary};
  padding-top: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.tiny : theme.spacings.medium}px;
  padding-bottom: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.tiny : theme.spacings.medium}px;
  padding-left: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.medium : theme.spacings.bigger}px;
  padding-right: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.medium : theme.spacings.bigger}px;
  border-radius: 20px;
  cursor: pointer;
  border-style: solid;
  transition: transform 0.3s ease;
  max-width: fit-content;
  font-size: ${({ theme }) =>
    theme.media.isMobile ? theme.text.small : theme.text.medium}px;

  &:hover {
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.secondary};
    border-color: ${({ theme }) => theme.color.secondary};
    transform: scale(1.1);
    svg {
      fill: ${({ theme }) => theme.color.secondary};
    }
  }
`;

const StyledAboutBox = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding-right: ${({ theme }) => (theme.media.isMobile ? "20" : "80")}px;
  padding-left: ${({ theme }) => (theme.media.isMobile ? "20" : "0")}px;
  padding-bottom ${({ theme }) => (theme.media.isMobile ? "100" : "0")}px;
`;

export default About;
