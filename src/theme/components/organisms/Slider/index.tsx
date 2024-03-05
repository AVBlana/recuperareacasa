import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text } from "../..";
import { theme } from "@/theme/constants";
import { rgba } from "polished";
import Flex from "../../atoms/Flex";
import Box from "../../atoms/Box";
import { CaretRIcon } from "../../molecules/Icons/CaretRight";
import Link from "next/link";
import VideoBackground from "../../molecules/VideoBackground/indext";

const Slider = () => {
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
            gap: 30,
            paddingLeft: 80,
          }}
        >
          <Box
            style={{
              width: "75%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text secondaryFont white style={{ fontSize: 100 }}>
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
              }}
            >
              Bine ai venit pe platforma noastră dedicată recuperării la
              domiciliu! Suntem aici pentru tine, punând accentul pe tratarea
              întregii tale persoane, nu doar a problemei de sănătate. Echipa
              noastră de specialiști aduce în casele tale idei inovatoare și
              programe personalizate pentru a-ți îmbunătăți starea de sănătate
              și a te sprijini în călătoria ta către recuperare. Descoperă o
              abordare holistă, unde ne concentrăm asupra ta ca individ, nu doar
              asupra simptomelor tale!
            </Text>
          </Box>
          <Flex>
            <Flex
              style={{
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 8,
                paddingBottom: 8,
                background: theme.color.primary,
                borderBottomLeftRadius: 16,
                borderTopLeftRadius: 16,

                justifyContent: "center",
                alignItems: "center",
                maxWidth: "fit-content",
              }}
            >
              <Text white big secondaryFont>
                Esti pe maini bune!
              </Text>
            </Flex>
            <Link
              href="https://www.youtube.com/watch?v=RBbyRBlLkMQ"
              target="_blank"
              rel="noopener noreferrer"
              style={{ maxWidth: "fit-content" }}
            >
              <Flex
                style={{
                  background: theme.color.secondary,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderBottomRightRadius: 16,
                  borderTopRightRadius: 16,
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Text white big secondaryFont>
                  Vezi video de prezentare
                </Text>
                <CaretRIcon size={16} fill={theme.color.white} />
              </Flex>
            </Link>
          </Flex>
        </Box>
      </ContentContainer>
    </VideoBackgroundWrapper>
  );
};

const GradientLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const VideoBackgroundWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const StyledVideoBG = styled.div`
  position: absolute;
  top: -30%;
  left: -10%;
  width: 110%;
  height: 110%;
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
