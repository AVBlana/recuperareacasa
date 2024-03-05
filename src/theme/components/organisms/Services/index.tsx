import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Text } from "../..";
import ServiceCard, { ServiceCardProps } from "../../molecules/ServiceCard";
import { theme } from "@/theme/constants";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import { ArrowLeftIcon } from "../../molecules/Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../molecules/Icons/ArrowRightIcon";

interface StyledServiceCardsContainerProps {
  currentIndex: number;
}

const Services = () => {
  const services = [
    {
      label: "200 Ron",
      title: "Terapie Manuală",
      svg: "/assets/headPain.svg",
      image: "/assets/serviciiTerapieManuala.jpg",
      desc: (
        <>
          Echipa noastră de terapeuți experimentați integrează o gamă diversă de
          tehnici manuale pentru a vă oferi o terapie holistică.
          <br />
          <br />
          De la tehnici de chiropractică și streching, până la masaj terapeutic
          și alte metode manuale avansate, abordăm individual nevoile
          dumneavoastră.
          <br />
          <br />
          Această combinație expertă de practici manuale contribuie la
          ameliorarea durerilor, îmbunătățirea flexibilității și promovarea
          stării generale de bine.
          <br />
          <br />
          Descoperiți beneficiile unei terapii manuale comprehensive pentru
          sănătatea și mobilitatea dumneavoastră.
        </>
      ),
    },
    {
      label: "120 Ron",
      title: "Kinetoterapie de Recuperare",
      svg: "/assets/headPain.svg",
      image: "/assets/serviciiKinetoterapie.jpg",
      desc: (
        <>
          Echipa noastră de terapeuți experimentați integrează o gamă diversă de
          tehnici manuale pentru a vă oferi o terapie holistică.
          <br />
          <br />
          De la tehnici de chiropractică și stretching, până la masaj terapeutic
          și alte metode manuale avansate, abordăm individual nevoile
          dumneavoastră.
          <br />
          <br />
          Acestă combinație expertă de practici manuale contribuie la
          ameliorarea durerilor, îmbunătățirea flexibilității și promovarea
          stării generale de bine.
          <br />
          <br />
          Descoperiți beneficiile unei terapii manuale comprehensive pentru
          sănătatea și mobilitatea dumneavoastră.
        </>
      ),
    },
    {
      label: "170 Ron",
      title: "Masaj Sportiv și de Recuperare",
      svg: "/assets/legPain.svg",
      image: "/assets/serviciiMasajSportiv.jpg",
      desc: (
        <>
          Experimentați beneficiile revitalizante ale masajului sportiv și de
          recuperare oferit de echipa noastră dedicată.
          <br />
          <br />
          Proiectat special pentru atleți și persoane active, acest tip de masaj
          nu doar calmează tensiunea musculară, ci și accelerează procesul de
          recuperare după antrenamente intense sau leziuni minore.
          <br />
          <br />
          Prin tehnici experte și personalizate, masajul sportiv și de
          recuperare pe care-l oferim vizează restabilirea flexibilității,
          reducerea inflamației și îmbunătățirea performanței generale.
        </>
      ),
    },
    {
      label: "150 Ron",
      title: "Masaj de Relaxare",
      svg: "/assets/torsoPain.svg",
      image: "/assets/serviciiMasajDeRelaxare.jpg",
      desc: (
        <>
          Bucurați-vă de o evadare totală din stresul zilnic cu serviciile
          noastre de masaj de relaxare.
          <br />
          <br />
          Prin tehnici fine și atenție delicată, vă oferim o experiență de
          relaxare profundă, stimulând simultan producția de endorfine pentru o
          stare generală de bine.
          <br />
          <br />
          Lăsați-vă în mâinile experților noștri pentru a vă elibera de
          tensiunea fizică și mentală, promovând echilibrul și liniștea
          interioară.
        </>
      ),
    },
    {
      label: "30 Ron",
      title: "Aplicare Kinesio Tape",
      svg: "/assets/headPain.svg",
      image: "/assets/serviciiKinesioTape.jpg",
      desc: (
        <>
          Descoperiți beneficiile terapiei cu bandă kinesiologică în cadrul
          serviciilor noastre specializate.
          <br />
          <br />
          Echipa noastră calificată aplică bandajul kinesiologic cu precizie
          pentru a sprijini și a stabiliza mușchii și articulațiile, reducând
          durerea și îmbunătățind funcționalitatea.
          <br />
          <br />
          Indiferent dacă aveți nevoie de susținere în recuperarea după o
          leziune sau de optimizare a performanței sportive, utilizarea
          bandajului kinesiologic poate fi o soluție eficientă și non-invazivă.
        </>
      ),
    },
    {
      label: "30 Ron",
      title: "Electroterapie",
      svg: "/assets/headPain.svg",
      image: "/assets/serviciiElectroTerapie.jpg",
      desc: (
        <>
          Experimentați inovația în recuperare și terapie cu serviciile noastre
          de electroterapie.
          <br />
          <br />
          Folosind tehnologii avansate, oferim tratamente personalizate care
          utilizează stimularea electrică pentru a ameliora durerea, îmbunătăți
          funcția musculară și accelera procesul de vindecare.
          <br />
          <br />
          Echipa noastră de specialiști vă ghidează în această experiență sigură
          și eficientă, aducând beneficiile electroterapiei pentru o recuperare
          optimă.
        </>
      ),
    },
    {
      label: "100 Ron",
      title: "Dry Needling",
      svg: "/assets/headPain.svg",
      image: "/assets/serviciiDryNeedling.jpg",
      desc: (
        <>
          Descoperiți beneficiile terapiei cu ac uscat (dry needling) în cadrul
          serviciilor noastre specializate.
          <br />
          <br />
          Cu ajutorul acestei tehnici precise, terapeuții noștri introduc
          acupunctura în puncte trigger ale mușchilor, eliberând tensiunea și
          ameliorând disconfortul.
          <br />
          <br />
          Procedura non-invazivă contribuie la relaxarea mușchilor,
          îmbunătățirea circulației sanguine și accelerarea procesului de
          vindecare.
          <br />
          <br />
          Redescoperiți mobilitatea și confortul într-o manieră eficientă și
          personalizată.
        </>
      ),
    },
    {
      label: "Inclus",
      title: "Evaluare Neuro-Musculo-Scheletală",
      svg: "/assets/headPain.svg",
      image: "/assets/planRecuperare1.jpg",
      desc: (
        <>
          Beneficiați de o evaluare neuro-musculo-scheletală detaliată și
          personalizată în cadrul serviciilor noastre.
          <br />
          <br />
          Echipa noastră de specialiști înțelege complexitatea conexiunii dintre
          sistemul nervos, mușchi și schelet și utilizează metode avansate
          pentru a analiza funcționalitatea și potențialele probleme.
          <br />
          <br />
          Prin această evaluare meticuloasă, putem identifica disfuncționalități
          și dezvolta un plan de tratament adaptat nevoilor dumneavoastră
          individuale, asigurând recuperare și îmbunătățirea stării de sănătate
          generală.
        </>
      ),
    },
    {
      label: "Inclus",
      title: "Eliberare Fascială IATSM",
      svg: "/assets/headPain.svg",
      image: "/assets/serviciiEliberareFasciala.jpg",
      desc: (
        <>
          Se integrează după necesitate în serviciul de terapie manuală.
          <br />
          <br />
          IATSMT, o componentă valoroasă a terapiei noastre manuale, utilizează
          instrumente specializate pentru a îmbunătăți țesuturile moi.
          <br />
          <br />
          Integrată în abordarea noastră holistică, această tehnică contribuie
          la eliminarea aderențelor, îmbunătățirea circulației și susținerea
          vindecării.
          <br />
          <br />
          Descoperiți eficiența acestei terapii în cadrul tratamentului nostru
          comprehensiv de terapie manuală.
        </>
      ),
    },
    {
      label: "Inclus",
      title: "Cupping",
      svg: "/assets/headPain.svg",
      image: "/assets/serviciiCupping.jpg",
      desc: (
        <>
          Se integrează după necesitate în serviciul de terapie manuală.
          <br />
          <br />
          Descoperiți beneficiile terapiei cu ventuze în cadrul serviciilor
          noastre de recuperare.
          <br />
          <br />
          Această metodă milenară stimulează circulația sanguină și relaxează
          țesuturile, contribuind la ameliorarea tensiunii musculare și
          recuperarea rapidă a mobilității.
          <br />
          <br />
          Experimentați terapia cu ventuze pentru o revitalizare profundă a
          corpului și o cale eficientă către recuperare.
        </>
      ),
    },
    {
      label: "Inclus",
      title: "Flossing",
      svg: "/assets/headPain.svg",
      image: "/assets/serviciiFlossing.jpg",
      desc: (
        <>
          Se integrează după necesitate în serviciul de terapie manuală.
          <br />
          <br />
          Integrăm în procesul nostru de recuperare tehnica avansată a blood
          flow restriction pentru a maximiza eficacitatea terapiei.
          <br />
          <br />
          Această metodă inovatoare, folosind restricția controlată a fluxului
          sanguin, intensifică antrenamentele musculare și accelerează
          recuperarea.
          <br />
          <br />
          Experimentați synergia dintre flossing și blade flow restriction
          pentru rezultate remarcabile în îmbunătățirea flexibilității și
          optimizarea performanțelor tale.
        </>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const containerElement = document.getElementById("service-cards-container");
    if (containerElement) {
      const containerWidth = containerElement.offsetWidth;
      const cardWidth = 325; // Width of your service card, adjust as needed
      const visibleCardsCount = Math.floor(containerWidth / cardWidth);
      setVisibleCards(visibleCardsCount);
    }
  }, []);

  const handleNextCard = () => {
    if (currentIndex < services.length - visibleCards) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
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
              fizice, cât și cele psihice.
              <br />
              <br />
              Echipa noastră de kinetoterapeuți oferă servicii personalizate
              pentru o recuperare completă.
            </Text>
          </Box>

          <Flex style={{ marginLeft: -20 }}>
            <StyledArrowBox
              onClick={handlePrevCard}
              hidden={currentIndex === 0}
            >
              <ArrowLeftIcon size={40} fill={theme.color.secondary} />
            </StyledArrowBox>

            {currentIndex < services.length - visibleCards && (
              <StyledArrowBox onClick={handleNextCard} hidden={!currentIndex}>
                <ArrowRightIcon size={40} fill={theme.color.secondary} />
              </StyledArrowBox>
            )}
          </Flex>
        </Box>
      </StyledControlBox>
      <StyledServiceCardsContainerWrapper id="service-cards-container">
        <StyledServiceCardsContainer currentIndex={currentIndex}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </StyledServiceCardsContainer>
      </StyledServiceCardsContainerWrapper>
    </StyledServicesBox>
  );
};

const StyledServiceCardsContainerWrapper = styled.div`
  overflow: hidden;
`;

const StyledArrowBox = styled.div<{ hidden?: boolean }>`
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
`;

const StyledControlBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  min-width: 310px;
  width: 310px;
`;

const StyledServiceCardsContainer = styled.div<StyledServiceCardsContainerProps>`
  display: flex;
  gap: 15px;
  height: 100%;
  box-sizing: content-box;
  transform: translateX(${(props) => -props.currentIndex * (310 + 15)}px);
  transition: transform 0.3s ease-in-out;
`;

export default Services;
