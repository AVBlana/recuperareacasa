import React from "react";
import styled from "styled-components";
import { SvgIcon, Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import { theme } from "@/theme/constants";
import { renderToStaticMarkup } from "react-dom/server";

interface ServiceCardProps {
  service: {
    label: string;
    title: string;
    svg: string;
    image: string;
    desc: any;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const descHtml = renderToStaticMarkup(service.desc);

  return (
    <StyledServiceCard
      style={{ backgroundImage: `url(${service.image})` }}
      data-desc={descHtml}
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
      <HiddenDesc
        dangerouslySetInnerHTML={{ __html: descHtml }}
        className="hidden-desc"
      />
    </StyledServiceCard>
  );
};

const StyledServiceCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 310px;
  padding: 20px;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: background 0.3s ease;

  &:hover {
    .hidden-desc {
      opacity: 1;
      visibility: visible;
    }
  }
`;

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
  color: white;
  text-align: left;
  font-size: 14px;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 40px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
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
