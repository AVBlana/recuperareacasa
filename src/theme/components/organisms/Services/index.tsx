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
      label: "200 Ron",
      title: "Kinetoterapie de recuperare",
      svg: "/assets/headPain.svg",
      image: "/assets/img1.jpg",
      desc: "Kinetoterapie de recuperare - Terapie manuala",
    },
    {
      label: "150 Ron",
      title: "Masaj sportiv și de recuperare",
      svg: "/assets/legPain.svg",
      image: "/assets/img2.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est illum corporis, pariatur doloribus magni, dignissimos nisi ut minus vel nam deleniti quam quisquam cumque deserunt odio explicabo modi numquam?",
    },
    {
      label: "150 Ron",
      title: "Masaj de relaxare",
      svg: "/assets/torsoPain.svg",
      image: "/assets/img3.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est illum corporis, pariatur doloribus magni, dignissimos nisi ut minus vel nam deleniti quam quisquam cumque deserunt odio explicabo modi numquam?",
    },
    {
      label: "30 Ron",
      title: "Aplicare Kinesio tape",
      svg: "/assets/headPain.svg",
      image: "/assets/img4.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est illum corporis, pariatur doloribus magni, dignissimos nisi ut minus vel nam deleniti quam quisquam cumque deserunt odio explicabo modi numquam?",
    },
    {
      label: "30 Ron",
      title: "Eletroterapie",
      svg: "/assets/headPain.svg",
      image: "/assets/img5.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est illum corporis, pariatur doloribus magni, dignissimos nisi ut minus vel nam deleniti quam quisquam cumque deserunt odio explicabo modi numquam?",
    },
    {
      label: "100 Ron",
      title: "Dry Needling",
      svg: "/assets/headPain.svg",
      image: "/assets/img6.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est illum corporis, pariatur doloribus magni, dignissimos nisi ut minus vel nam deleniti quam quisquam cumque deserunt odio explicabo modi numquam?",
    },
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
              Specializăm tratamentul kineto pentru a acoperi atât aspectele
              fizice, cât și cele psihice. Echipa noastră de kinetoterapeuți
              oferă servicii personalizate pentru o recuperare completă.
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
