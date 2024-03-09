import styled, { css, useTheme } from "styled-components";
import { Text } from "../..";
// import { theme } from "@/theme/constants";
import { useMedia } from "@/theme/hooks/useMedia";
import Link from "next/link";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import { CaretRIcon } from "../../molecules/Icons/CaretRight";
import VideoBackground from "../../molecules/VideoBackground/indext";
import { rgba } from "polished";

const Slider = () => {
  const theme = useTheme();

  return (
    <VideoBackgroundWrapper>
      <StyledVideoBG>
        <VideoBackground />
      </StyledVideoBG>

      <ContentContainer>
        <GradientLayer />
        <Box
          style={{
            position: "relative",
            zIndex: 2,
            justifyContent: "center",
            alignItems: "center",
            gap: theme.media.isMobile ? 40 : 30,
            paddingLeft: theme.media.isMobile ? 20 : 80,
            paddingRight: theme.media.isMobile ? 20 : 80,
            paddingTop: theme.media.isMobile ? 20 : 100,
            maxWidth: theme.media.isMobile ? "100%" : "75%",
          }}
        >
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: theme.media.isMobile ? 40 : 30,
            }}
          >
            <Text
              secondaryFont
              white
              style={{
                fontSize: theme.media.isMobile ? "34px" : "100px",
                textAlign: "center",
              }}
            >
              Fizioterapie la tine acasa!
            </Text>
            <Text
              white
              big
              style={{
                lineHeight: "150%",
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
                fontSize: theme.media.isMobile
                  ? theme.text.small
                  : theme.text.big,
              }}
            >
              Bine ai venit pe platforma noastră dedicată recuperării la
              domiciliu!
              <br />
              Suntem aici pentru tine, punând accentul pe tratarea întregii tale
              persoane, nu doar a problemei de sănătate.
              <br />
              <br /> Echipa noastră de specialiști aduce în casele tale idei
              inovatoare și programe personalizate pentru a-ți îmbunătăți starea
              de sănătate și a te sprijini în călătoria ta către recuperare.
              <br />
              <br />
              Descoperă o abordare holistă, unde ne concentrăm asupra ta ca
              individ, nu doar asupra simptomelor tale!
            </Text>
          </Box>
          <Flex>
            <Flex
              style={{
                display: theme.media.isMobile ? "none" : "flex",
                paddingLeft: theme.spacings.bigger,
                paddingRight: theme.spacings.bigger,
                paddingTop: theme.spacings.medium,
                paddingBottom: theme.spacings.medium,
                background: theme.color.primary,
                borderBottomLeftRadius: theme.spacings.big,
                borderTopLeftRadius: theme.spacings.big,

                justifyContent: "center",
                alignItems: "center",
                maxWidth: "fit-content",
              }}
            >
              Esti pe maini bune!
            </Flex>
            <Link
              href="https://www.youtube.com/watch?v=RBbyRBlLkMQ"
              target="_blank"
              rel="noopener noreferrer"
              style={{ maxWidth: "fit-content" }}
            >
              <SliderButton>
                Vezi video de prezentare
                <CaretRIcon
                  size={
                    theme.media.isMobile
                      ? theme.spacings.small
                      : theme.spacings.medium
                  }
                  fill={theme.color.white}
                />
              </SliderButton>
            </Link>
          </Flex>
        </Box>
      </ContentContainer>
    </VideoBackgroundWrapper>
  );
};

const SliderButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.tiny}px;
  align-items: center;
  background: ${({ theme }) => theme.color.secondary};
  cursor: pointer;
  border-top-right-radius: ${({ theme }) => theme.spacings.medium}px;
  border-bottom-right-radius: ${({ theme }) => theme.spacings.medium}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.primary};

  ${({ theme }) => {
    if (theme.media.isMobile) {
      return css`
        font-size: ${theme.text.smaller}px;
        border-top-left-radius: ${theme.spacings.medium}px;
        border-bottom-left-radius: ${theme.spacings.medium}px;
        padding-top: ${theme.spacings.tiny}px;
        padding-bottom: ${theme.spacings.tiny}px;
        padding-left: ${theme.spacings.medium}px;
        padding-right: ${theme.spacings.medium}px;
      `;
    } else {
      return css`
        font-size: ${theme.text.bigger}px;
        padding-top: ${theme.spacings.medium}px;
        padding-bottom: ${theme.spacings.medium}px;
        padding-left: ${theme.spacings.big}px;
        padding-right: ${theme.spacings.big}px;
      `;
    }
  }}

  &:hover {
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};

    svg {
      fill: ${({ theme }) => theme.color.primary};
    }
  }
`;

const GradientLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) =>
    theme.media.isMobile ? rgba(0, 0, 0, 0.6) : rgba(0, 0, 0, 0.4)};
  z-index: 1;
`;

const VideoBackgroundWrapper = styled.div`
  position: relative;
  height: ${({ theme }) => (theme.media.isMobile ? "100vh" : "100vh")};
  width: 100%;
  overflow: hidden;
`;

const StyledVideoBG = styled.div`
  position: absolute;
  top: ${({ theme }) => (theme.media.isMobile ? "-10px" : "-30%")};
  left: ${({ theme }) => (theme.media.isMobile ? "-100%" : "-10%")};
  width: ${({ theme }) => (theme.media.isMobile ? "310%" : "110%")};
  height: ${({ theme }) => (theme.media.isMobile ? "100%" : "110%")};
`;
const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export default Slider;
