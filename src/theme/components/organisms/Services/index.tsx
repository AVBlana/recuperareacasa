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
      desc: "Echipa noastră de terapeuți experimentați integrează o gamă diversă de tehnici manuale pentru a vă oferi o terapie holistică. De la tehnici de chiropractică și streching, pană la masaj terapeutic și alte metode manuale avansate, abordăm individual nevoile dumneavoastră. Acestă combinație expertă de practici manuale contribuie la ameliorarea durerilor, îmbunătățirea flexibilității și promovarea stării generale de bine. Descoperiți beneficiile unei terapii manuale comprehensive pentru sănătatea și mobilitatea dumneavoastră.",
    },
    {
      label: "150 Ron",
      title: "Masaj sportiv și de recuperare",
      svg: "/assets/legPain.svg",
      image: "/assets/img2.jpg",
      desc: "Experimentați beneficiile revitalizante ale masajului sportiv și de recuperare oferit de echipa noastră dedicată. Proiectat special pentru atleți și persoane active, acest tip de masaj nu doar calmează tensiunea musculară, ci și accelerează procesul de recuperare după antrenamente intense sau leziuni minore. Prin tehnici experte și personalizate, masajul sportiv și de recuperare pe care-l oferim vizează restabilirea flexibilitătii, recurerea inflamației și îmbunatățirea performanței generale.",
    },
    {
      label: "150 Ron",
      title: "Masaj de relaxare",
      svg: "/assets/torsoPain.svg",
      image: "/assets/img3.jpg",
      desc: "Bucurați-vă de o evadare totală din stresul zilnic cu serviciile noastre de masaj de relaxare. Prin tehnici fine și atenție delicată, vă oferim o experiență de relaxare profundă, stimulând simultan producția de endorfine pentru o stare generală de bine. Lasati-vă în mâinile experților noștri pentru a vă elibera de tensiunea fizică și mentală, promovând echilibrul și liniștea interioară.",
    },
    {
      label: "30 Ron",
      title: "Aplicare Kinesio tape",
      svg: "/assets/headPain.svg",
      image: "/assets/img4.jpg",
      desc: "Descoperiți beneficiile terapiei cu bandă kinesiologică în cadrul serviciilor nostre specializate. Echipa noastră calificată aplică bandajul kinesiologic cu precizie pentru a sprijini și a stabiliza mușchii și articulațiile, reducând durerea și îmbunatățind funcționaliatea. Indiferent dacă aveți nevoie de susținere în recuperarea după o leziune sau de optimizare a performaței sportive, utilizarea bandajului kinesiologic poate fi o soluție eficientă și non-invazivă.",
    },
    {
      label: "30 Ron",
      title: "Eletroterapie",
      svg: "/assets/headPain.svg",
      image: "/assets/img5.jpg",
      desc: "Experimentați inovația în recuperare și terapie cu serviciile noastre de electroterapie. Folosind tehnologii avansate, oferim tratamente personalizate care utilizează stimularea electircă pentru a ameliora durerea, îmbunătăți funcția musculară și accelera procesul de vindecare. Echipa noastră de specialiști vă ghidează în această experiență sigură și eficientă, aducând beneficiile electroterapiei pentru o recuperare optimă.",
    },
    {
      label: "100 Ron",
      title: "Dry Needling",
      svg: "/assets/headPain.svg",
      image: "/assets/img6.jpg",
      desc: "Descoperiți beneficiile terapiei cu ac uscat (dry needling) în cadrul serviciilor noastre specializate. Cu ajutorul acestei tehnici precise, terapeuții noștri introduc acupunctura în puncte trigger ale mușchilor, eliberând tensiunea și ameliorând disconfortul. Procedura non-invazivă contribuie la relaxarea mușchilor, îmbunătățirea circulației sanguine și accelerarea procesului de vindecare. Redescoperiți mobilitatea și confortul într-o manieră eficientă și personalizată.",
    },
    {
      label: "100 Ron",
      title: "Evaluare neuro-musculo-scheletală",
      svg: "/assets/headPain.svg",
      image: "/assets/img6.jpg",
      desc: "Beneficiați de o evaluare neuro-musculo-scheletală detaliată și personalizată în cadrul serviciilor noastre. Echipa noastră de specialiști întelege complexitatea conexiunii dintre sistemul nervos, mușchi și schelet și utilizează metode avansate pentru a analiza funcționalitatea și potențialele probleme. Prin această evaluare meticuloasă, putem indetifica disfuncționalități și devolta un plan de tratament adaptat nevoilor dumneavoastră individuale, asigurând recuperare și îmbunătățirea stării de sănătate generală.",
    },
    {
      label: "100 Ron",
      title: "Eliberare fascială IATSM",
      svg: "/assets/headPain.svg",
      image: "/assets/img6.jpg",
      desc: "Se integrează după necesitate în serviciul de terapie manuală. IATSMT, o componentă valoroasă a terapiei noastre manuale, utilizează instrumente specializate pentru a îmbunătății țesuturile moi. Integrată în abordarea noastră holistică, această tehnică constribuie la eliminarea aderențelor, îmbunătățește circulația și susține vindecarea. Descoperiți eficiența acestei terapii în cadrul tratamentului nostru comprehensiv de terapie manuală.",
    },
    {
      label: "100 Ron",
      title: "Cupping",
      svg: "/assets/headPain.svg",
      image: "/assets/img6.jpg",
      desc: "Se integrează după necesitate în serviciul de terapie manuală. Descperă beneficiile terapiei cu ventuze în cadrul serviciilor noastre de recuperare. Această metodă milenară stimulează circulația sanguină și relaxează țesuturile, contribuind la ameliorarea tensiunii musculare și recuperarea rapidă a mobilității. Experimentează terapia cu ventuze pentru o revitalizare profundă a corpului și o cale eficientă către recuperare.",
    },
    {
      label: "100 Ron",
      title: "Flossing",
      svg: "/assets/headPain.svg",
      image: "/assets/img6.jpg",
      desc: "Se integrează după necesitate în serviciul de terapie manuală. Integrăm în procesul nostru de recuperare tehnica avansată a 'blood flow restriction' pentru a maximiza eficacitatea terapiei. Această metodă inovatoare, folosind restrictia controlată a fluxului sanguin, intensifică antrenamentele musculare și accelerează recuperarea. Experimentează synergia dintre flossing și blade flow restriction pentru rezultate remarcabile în îmbunătățirea flexibiliății și optimizarea performanțelor tale.",
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
