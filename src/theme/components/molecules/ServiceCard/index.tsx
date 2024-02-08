import React from "react";
import styled from "styled-components";
import { SvgIcon, Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import { theme } from "@/theme/constants";

interface ServiceCardProps {
  service: {
    label: string;
    title: string;
    svg: string;
    image: string;
    desc: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <StyledServiceCard
      style={{ backgroundImage: `url(${service.image})` }}
      data-desc={service.desc}
    >
      <StyledGradientBox />

      <Flex
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 2,
        }}
      >
        <Box style={{ maxWidth: 120 }}>
          <Text semiBold style={{ color: theme.color.secondary }}>
            {service.label}
          </Text>
          <Text white>{service.title}</Text>
        </Box>
        <Box>
          <SvgIcon size={50} fill={theme.color.white} src={service.svg} />
        </Box>
      </Flex>
    </StyledServiceCard>
  );
};

const StyledServiceCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 310px;
  padding: 20px;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: background 0.3s ease;

  &:hover {
    &[data-desc]:before {
      content: attr(data-desc);
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
      color: white;
      text-align: center;
      border-radius: 20px;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
      padding-top: 40px;
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
