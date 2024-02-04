import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text } from "../..";
import { theme } from "@/theme/constants";
import { rgba } from "polished";
import Flex from "../../atoms/Flex";
import Box from "../../atoms/Box";
import { CaretRIcon } from "../../molecules/Icons/CaretRight";
import Link from "next/link";

const Slider = () => {
  const [isVideoVisible, setVideoVisibility] = useState(false);

  useEffect(() => {
    setVideoVisibility(true);
  }, []);

  return (
    <VideoBackgroundWrapper>
      {isVideoVisible && (
        <VideoBackground
          src="https://www.youtube.com/embed/T4NgK7SydUQ?autoplay=1&loop=1&mute=1&start=60"
          frameBorder="0"
          allowFullScreen
        ></VideoBackground>
      )}
      <ContentContainer>
        <GradientLayer />
        <Box
          style={{
            position: "relative",
            zIndex: 2,
            justifyContent: "center",
            alignItems: "center",
            gap: 30,
          }}
        >
          <Flex
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 4,
              paddingBottom: 4,
              background: theme.color.primary,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text white big secondaryFont>
              Esti pe maini bune!
            </Text>
          </Flex>

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
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              cum natus est maiores, inventore sit fugiat, voluptatum illum
              harum facere neque qui quaerat dolorum cumque distinctio dicta.
              Quia animi iste rerum repellendus natus beatae ab eaque eos
              recusandae, cumque consequuntur magnam praesentium exercitationem
              vero quas excepturi in voluptate. Sed, in.
            </Text>
          </Box>
          <Link
            href="https://www.youtube.com/watch?v=T4NgK7SydUQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Flex
              style={{
                background: theme.color.secondary,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 8,
                paddingBottom: 8,
                borderRadius: 20,
                gap: 10,
                alignItems: "center",
              }}
            >
              <Text white big>
                Vezi video de prezentare
              </Text>
              <CaretRIcon size={16} fill={theme.color.white} />
            </Flex>
          </Link>
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

const VideoBackground = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140%; /* Adjust the size as needed */
  height: 140%; /* Adjust the size as needed */
  border: none; /* Hide the iframe border */
  object-fit: cover; /* Scale the content while maintaining aspect ratio and cropping the rest */
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
