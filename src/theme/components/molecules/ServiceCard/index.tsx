import React from "react";
import styled, { useTheme } from "styled-components";
import { SvgIcon, Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Image from "../../atoms/Image";

export interface ServiceCardProps {
  service: {
    label: string;
    title: string;
    svg: string;
    image: string;
    desc: any;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const theme = useTheme();

  return (
    <StyledServiceCard>
      <Image
        src={service.image}
        alt=""
        fill
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          objectFit: "cover",
          borderRadius: 20,
        }}
      />
      <StyledGradientBox />

      <Flex
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 20,
        }}
      >
        <Box>
          <Text
            biggest
            semiBold
            style={{
              color: theme.color.secondary,
              fontSize: theme.media.isMobile
                ? theme.text.big
                : theme.text.biggest,
            }}
          >
            {service.label}
          </Text>
          <Text
            white
            style={{
              fontSize: theme.media.isMobile
                ? theme.text.small
                : theme.text.big,
            }}
          >
            {service.title}
          </Text>
        </Box>
        <Box>
          <SvgIcon size={50} fill={theme.color.white} src={service.svg} />
        </Box>
      </Flex>
      <HiddenDesc>
        <Text
          white
          style={{
            fontSize: theme.media.isMobile
              ? theme.text.smaller
              : theme.text.medium,
            textAlign: "left",
          }}
        >
          {service.desc}
        </Text>
      </HiddenDesc>
    </StyledServiceCard>
  );
};
const HiddenDesc = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(42, 85, 80, 0.7);
  z-index: 2;
  display: flex;
  align-items: start;
  justify-content: start;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 40px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const StyledServiceCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: ${({ theme }) => (theme.media.isMobile ? "280" : "390")}px;
  min-height: ${({ theme }) => (theme.media.isMobile ? "500px" : "100%")};
  padding: 20px;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: background 0.3s ease;

  &:hover {
    ${HiddenDesc} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const StyledGradientBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  z-index: 1;
  border-radius: 20px;
`;

export default ServiceCard;
