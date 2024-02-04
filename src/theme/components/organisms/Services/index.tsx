import { theme } from "@/theme/constants";
import { Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import ServiceCard from "../../molecules/ServiceCard";
import { ArrowLeftIcon } from "../../molecules/Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../molecules/Icons/ArrowRightIcon";
import { useState } from "react";
import styled from "styled-components";

const Services = () => {
  const services = [
    {
      label: 5,
      title:
        "Exceptional physiotherapy services! The team here is knowledgeable, friendly, and helped me recover from my injury with personalized care. Highly recommended!",
      svg: "Emma Thompson",
      image: "/assets/emma-thompson.jpg",
      desc: "lorem20",
    },
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const handleNextService = () => {
    setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrevService = () => {
    setCurrentServiceIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <StyledServicesBox>
        <StyledControlBox>
          <Box>
            <Text big secondaryFont>
              Servicii
            </Text>
            <Text primary secondaryFont style={{ fontSize: 48 }}>
              Gandim diferit
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              porro molestiae ratione, ullam libero corrupti odio blanditiis,
              deserunt amet nesciunt voluptatibus iure? Quibusdam, quis sit
              itaque quaerat quia id fuga.
            </Text>
            <Flex>
              <Box
                style={{ padding: 20, cursor: "pointer" }}
                onClick={handlePrevService}
              >
                <ArrowLeftIcon size={40} fill={theme.color.secondary} />
              </Box>
              <Box
                style={{ padding: 20, cursor: "pointer" }}
                onClick={handleNextService}
              >
                <ArrowRightIcon size={40} fill={theme.color.secondary} />
              </Box>
            </Flex>
          </Box>
        </StyledControlBox>
        <ServiceCard></ServiceCard>
      </StyledServicesBox>
    </>
  );
};
const StyledServicesBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 60px 30px;
`;
const StyledControlBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 310px;
  height: 100%;
`;

export default Services;
