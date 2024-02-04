import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Text } from "../..";
import ServiceCard from "../../molecules/ServiceCard";
import { theme } from "@/theme/constants";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import { ArrowLeftIcon } from "../../molecules/Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../molecules/Icons/ArrowRightIcon";

const Services = () => {
  const services = [
    {
      label: "Head Pain",
      title: "Service 1",
      svg: "/assets/headPain.svg",
      image: "/assets/img1.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reiciendis praesentium eligendi, debitis nostrum labore. Praesentium, magnam dolore magni enim esse consequuntur soluta repellat aspernatur rerum fugiat impedit perspiciatis pariatur ipsa provident animi neque ullam molestiae dignissimos accusamus odit numquam iste a! Iusto porro culpa libero maiores, ratione iste labore.",
    },
    {
      label: "Leg Pain",
      title: "Service 2",
      svg: "/assets/legPain.svg",
      image: "/assets/img2.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est illum corporis, pariatur doloribus magni, dignissimos nisi ut minus vel nam deleniti quam quisquam cumque deserunt odio explicabo modi numquam?",
    },
    {
      label: "Leg Pain",
      title: "Service 3",
      svg: "/assets/torsoPain.svg",
      image: "/assets/img3.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est illum corporis, pariatur doloribus magni, dignissimos nisi ut minus vel nam deleniti quam quisquam cumque deserunt odio explicabo modi numquam?",
    },
    {
      label: "Leg Pain",
      title: "Service 4",
      svg: "/assets/headPain.svg",
      image: "/assets/img4.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est illum corporis, pariatur doloribus magni, dignissimos nisi ut minus vel nam deleniti quam quisquam cumque deserunt odio explicabo modi numquam?",
    },
    {
      label: "Leg Pain",
      title: "Service 5",
      svg: "/assets/headPain.svg",
      image: "/assets/img5.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est illum corporis, pariatur doloribus magni, dignissimos nisi ut minus vel nam deleniti quam quisquam cumque deserunt odio explicabo modi numquam?",
    },
    {
      label: "Leg Pain",
      title: "Service 6",
      svg: "/assets/headPain.svg",
      image: "/assets/img6.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est illum corporis, pariatur doloribus magni, dignissimos nisi ut minus vel nam deleniti quam quisquam cumque deserunt odio explicabo modi numquam?",
    },
    {
      label: "Leg Pain",
      title: "Service 7",
      svg: "/assets/headPain.svg",
      image: "/assets/img7.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est illum corporis, pariatur doloribus magni, dignissimos nisi ut minus vel nam deleniti quam quisquam cumque deserunt odio explicabo modi numquam?",
    },
    // Add more service objects as needed
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const totalItems = services.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleServices = services.slice(startIndex, endIndex);

  return (
    <StyledServicesBox>
      <StyledControlBox>
        <Box style={{ gap: 60 }}>
          <Box style={{ gap: 15 }}>
            <Text
              semiBold
              big
              secondaryFont
              style={{ color: theme.color.secondary }}
            >
              Servicii
            </Text>
            <Text primary secondaryFont style={{ fontSize: 48 }}>
              Gandim diferit
            </Text>
            <Text style={{ width: 200 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              porro molestiae ratione, ullam libero corrupti odio blanditiis,
              deserunt amet nesciunt voluptatibus iure? Quibusdam, quis sit
              itaque quaerat quia id fuga.
            </Text>
          </Box>

          <Flex style={{ marginLeft: -20 }}>
            <StyledArrowBox
              style={{ padding: 20, cursor: "pointer" }}
              onClick={handlePrevPage}
            >
              <ArrowLeftIcon size={40} fill={theme.color.secondary} />
            </StyledArrowBox>
            <StyledArrowBox
              style={{ padding: 20, cursor: "pointer" }}
              onClick={handleNextPage}
            >
              <ArrowRightIcon size={40} fill={theme.color.secondary} />
            </StyledArrowBox>
          </Flex>
        </Box>
      </StyledControlBox>
      <StyledServiceCardsContainer itemsPerPage={itemsPerPage}>
        {visibleServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </StyledServiceCardsContainer>
    </StyledServicesBox>
  );
};

const StyledArrowBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Adjust the scale factor as needed */
  }

  & > svg {
    fill: ${(props) => props.theme.color.secondary}; /* Initial color */
    transition: fill 0.3s ease-in-out;
  }

  &:hover > svg {
    fill: ${(props) => props.theme.color.primary}; /* Hover color */
  }
`;

const StyledServicesBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 60px;
  padding-right: 0px;
  overflow: hidden;
`;

const StyledControlBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  min-width: 310px;
  width: 310px;
`;

const StyledServiceCardsContainer = styled.div<{ itemsPerPage: number }>`
  display: flex;
  flex-wrap: nowrap;
  gap: 15px;
  width: ${(props) => props.itemsPerPage * (310 + 15)}px; /* Adjusted width */
  margin-left: auto;
  box-sizing: content-box;
`;

export default Services;
