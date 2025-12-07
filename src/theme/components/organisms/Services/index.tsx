import React, { useState, useRef, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { Text } from "../..";
import ServiceCard, { ServiceCardProps } from "../../molecules/ServiceCard";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import { ArrowLeftIcon } from "../../molecules/Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../molecules/Icons/ArrowRightIcon";

interface StyledServiceCardsContainerProps {
  currentIndex: number;
}

const Services = () => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState(0);

  const services = [
    {
      label: "1 Sedinta / 3 Sedinte",
      title: "Card Cadou",
      svg: "/assets/manualTherapy2.svg",
      image: "/assets/plicuri3_websize.jpg",
      desc: (
        <>
          Oferă celor dragi 1 sau 3 şedințe de Kinetoterapie, Masaj Terapeutic
          sau Terapie Manuală (prețurile conform tarifelor afişate).
          <br />
          <br />
          Beneficiarul care primeşte 3 şedințe cadou poate continua cu un
          abonament suplimentar, necesar sau dorit pentru tratament, beneficiind
          de 10% reducere la plata cash pentru primul abonament.
          <br />
          <br />
          Cardul este valabil o lună de la achiziție, oferind flexibilitate
          pentru programarea şedințelor.
        </>
      ),
    },
    {
      label: "580 Ron / 3 Sedinte",
      title: "Abonament Terapie Manuala Avansată",
      svg: "/assets/manualTherapy2.svg",
      image: "/assets/serviciiTerapieManuala.jpg",
      desc: (
        <>
          Abonamentul nostru de Terapie Manuală Avansată îți oferă acces la
          tehnici terapeutice complexe şi personalizate, efectuate de
          specialişti, direct la domiciliu.
          <br />
          <br />
          Include o varietate de metode, de la masaj terapeutic, manipulări
          osteopatice, Dryneedling, Flossing, Cupping, IASTM pånă la
          Kinesiotaping, pentru recuperare, ameliorarea durerii şi relaxare
          profundă.
          <br />
          <br />
          Beneficiezi de o evaluare inițială gratuită, iar abonamentul este
          valabil pe o lună, cu plata integrală, pentru a-ți asigura o
          experiență fără griji şi rezultate optime.
        </>
      ),
    },

    // {
    //   label: "1600 Ron / 10 Sedinte",
    //   title: "Abonament Masaj",
    //   svg: "/assets/massage.svg",
    //   image: "/assets/serviciiMasajDeRelaxare.jpg",
    //   desc: (
    //     <>
    //       Cu acest abonament, te poți bucura de o serie de sesiuni de masaj
    //       terapeutic de înaltă calitate.
    //       <br />
    //       <br />
    //       Este important să ții cont că evaluarea inițială este tarifată separat
    //       de abonament și nu este inclusă în prețul acestuia.
    //       <br />
    //       <br />
    //       Abonamentul nostru se concentrează exclusiv pe masajul terapeutic, iar
    //       alte servicii sau tratamente vor fi suplimentare și tarifate separat.
    //       <br />
    //       <br />
    //       Valabilitatea abonamentului este pe o perioadă de 6 luni iar plata se
    //       face în două tranșe pentru a-ți oferi o experiență fără griji pe tot
    //       parcursul acestei perioade.
    //     </>
    //   ),
    // },
    {
      label: "1600 Ron / 10 Sedinte",
      title: "Abonament Kinetoterapie Echipată",
      svg: "/assets/kineto.svg",
      image: "/assets/serviciiKinetoterapie.jpg",
      desc: (
        <>
          Acest abonament oferă kinetoteranie la domiciliu cu echipamente
          Scripeți şi accesorii profesionate, pentru Exerciții mult mai
          eficiente decât cele standard.
          <br />
          <br />
          Este ideal pentru recuperare neurologică (paralizii, AVC), recuperare
          post-operatorie (genunchi, şold, protezare), dar şi pentru tonifiere,
          creşterea mobilității şi performanță fizică generală.
          <br />
          <br />
          Vei lucra îndeaproape cu terapeuți specializați, care îți dezvoltă un
          plan personalizat adaptat nevoilor tale, pentru rezultate vizibile şi
          sigure.
          <br />
          <br />
          Evaluarea inițială se tarifează separat. Abonamentul este valabil pe 3
          luni, cu plata în două tranşe pentru flexibilitate financiară.
          <br />
          <br />
          Şedința de masaj terapeutic inclusă se poate efectua suplimentar la 20
          RON per şedință.
        </>
      ),
    },
    {
      label: "1650 Ron / 10 Sedinte",
      title: "Abonament Masaj Terapeutic de Bază",
      svg: "/assets/manualTherapy2.svg",
      image: "/assets/serviciiTerapieManuala.jpg",
      desc: (
        <>
          Acest abonament oferă şedințe de masaj terapeutic orientat spre
          relaxare şi recuperarea musculaturii, ideale pentru sportivi sau
          pentru persoanele care doresc detensionarea muşchilor.
          <br />
          <br />
          Se folosesc tehnici de detensionare, stretching şi masaj clasic, fără
          evaluare medicală sau abordări clinice complexe.
          <br />
          <br />
          Fără nevoie de evaluare inițială, şedințele sunt accesibile şi
          eficiente pentru menținerea confortului muscular şi relaxare.
        </>
      ),
    },
    {
      label: "220 Ron",
      title: "Terapie Manuală",
      svg: "/assets/manualTherapy2.svg",
      image: "/assets/galerieTerapieManuala2.jpg",
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
      label: "160 Ron",
      title: "Dry Needling",
      svg: "/assets/accupuncture.svg",
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
          <br />
          <br />
          Dry needling este o procedură inclusă în cadrul serviciului de terapie
          manuală, astfel încât nu este necesar să fie achitat separate.
        </>
      ),
    },

    {
      label: "165 Ron",
      title: "Kinetoterapie Echipată",
      svg: "/assets/kineto.svg",
      image: "/assets/serviciiKinetoterapie.jpg",
      desc: (
        <>
          Şedința individuală de kinetoterapie la domiciliu concepută pentru
          a-ți menține mobilitatea, tonusul muscular şi postura, folosind
          exerciții adaptate nivelului tău.
          <br />
          <br />
          Exercițiile se pot realiza cu echipamentul pacientului sau cu dotări
          minime furnizate de noi, precum bastoane, benzi elastice sau greutatea
          propriului corp.
          <br />
          <br />
          Ideal pentru persoanele care doresc un program simplu, sigur şi
          eficient, fără echipamente complexe sau şedințe cu aparatură
          profesională.
          <br />
          <br />
          Evaluarea inițială se tarifează separat. Abonamentul este valabil pe 3
          luni, cu plata în două tranşe pentru flexibilitate financiară.
        </>
      ),
    },
    {
      label: "180 Ron",
      title: "Masaj Terapeutic de Bază",
      svg: "/assets/legPain.svg",
      image: "/assets/serviciiMasajSportiv.jpg",
      desc: (
        <>
          Şedința individuală de Masaj Terapeutic de Bază este concepută pentru
          detensionarea musculară, relaxare şi recuperarea uşoară a
          musculaturii, folosind tehnici simple de masaj, stretching şi
          mobilizare.
          <br />
          <br />
          Nu necesită evaluare medicală şi nu include abordări clinice complexe.
          Este ideală pentru sportivi sau persoane care doresc să-şi mențină
          confortul muscular şi flexibilitatea.
          <br />
          <br />
          Durata şi prețul şedinței se stabilesc conform programării.
        </>
      ),
    },
    {
      label: "165 Ron",
      title: "Masaj de Relaxare",
      svg: "/assets/massage.svg",
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
      label: "20 Ron",
      title: "Aplicare Kinesio Tape",
      svg: "/assets/tape.svg",
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
          <br />
          <br />
          Pentru a începe, te rugăm să achiziționezi o rolă personală de 5 metri
          de bandă kinesiotape, care va fi utilizată pentru aplicările
          necesare.Ulterior, fiecare aplicare de kinesiotape va fi tarifată
          separat, la prețul de 20 de lei per aplicare. Rola se poate
          achiziționa la începerea tratamentului de la noi fiind tarifată cu 50
          ron.
        </>
      ),
    },
    {
      label: "30 Ron",
      title: "Electroterapie",
      svg: "/assets/electrotherapy.svg",
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
      label: "70 Ron",
      title: "Evaluare Neuro-Musculo-Scheletală",
      svg: "/assets/bodyScan2.svg",
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
          <br />
          <br />
          Evaluarea este gratuită numai în cazul serviciului de Terapie Manuală
          sau Kinetoterapie
        </>
      ),
    },
    {
      label: "50 Ron",
      title: "Eliberare Fascială IATSM",
      svg: "/assets/fascial.svg",
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
      label: "30 Ron",
      title: "Cupping",
      svg: "/assets/cupping2.svg",
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
      label: "30 Ron",
      title: "Flossing",
      svg: "/assets/flossing.svg",
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (containerRef.current && isMounted) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = 400;
      const visibleCardsCount = Math.floor(containerWidth / cardWidth);
      setVisibleCards(visibleCardsCount);
    }
  }, [isMounted]);

  const handleNextCard = () => {
    const lastVisibleIndex = services.length - visibleCards;
    if (currentIndex < services.length - visibleCards) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, lastVisibleIndex));
    }
  };

  const handlePrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentPosition = e.touches[0].clientX;
    const dx = currentPosition - startX;
    setOffset(dx);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setStartX(0);
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = 280;
      const visibleCardsCount = Math.floor(containerWidth / cardWidth);
      const newIndex = currentIndex - Math.round(offset / cardWidth);
      setCurrentIndex(
        Math.max(0, Math.min(services.length - visibleCardsCount, newIndex))
      );
      setOffset(0);
    }
  };

  return (
    <StyledServicesBox>
      <StyledControlBox>
        <Box style={{ gap: theme.media.isMobile ? 20 : 60 }}>
          <Box style={{ gap: 20 }}>
            <Text
              semiBold
              big
              secondaryFont
              style={{ color: theme.color.secondary }}
            >
              Servicii
            </Text>
            <Text
              primary
              secondaryFont
              style={{
                fontSize: theme.media.isMobile ? theme.text.huge : 48,
                maxWidth: 200,
              }}
            >
              Gândim diferit
            </Text>
            <Text
              style={{
                fontSize: theme.media.isMobile
                  ? theme.text.smaller
                  : theme.text.medium,
              }}
            >
              Specializăm tratamentul kineto pentru a acoperi atât aspectele
              fizice, cât și cele psihice.
              <br />
              <br />
              Echipa noastră de kinetoterapeuți oferă servicii personalizate
              pentru o recuperare completă.
              <br />
              <br />
              Răsplătim loialitatea: obțineți{" "}
              <Text
                semiBold
                style={{
                  color: theme.color.secondary,
                  fontSize: theme.media.isMobile
                    ? theme.text.big
                    : theme.text.biggest,
                }}
              >
                10%
              </Text>{" "}
              reducere pentru următoarele 5 luni după ce parcurgeți 10 ședințe
              în doar 3 luni.
              <br />
              <br />
              Reducerea se aplică exclusiv serviciilor de masaj și kinetoterapie
              sau abonamentelor acestora.
              <br />
              <br />
              Și mai bine, puteți menține sau prelungi această reducere
              continuând să respectați termenii noștri.
            </Text>
          </Box>

          <Flex
            style={{
              display: theme.media.isMobile ? "none" : "flex",
              marginLeft: theme.media.isMobile ? 0 : -20,
              paddingBottom: theme.media.isMobile ? 20 : 0,
            }}
          >
            <StyledArrowBox
              onClick={handlePrevCard}
              hidden={currentIndex === 0}
            >
              <ArrowLeftIcon
                size={theme.media.isMobile ? 30 : 40}
                fill={theme.color.secondary}
              />
            </StyledArrowBox>

            {currentIndex < services.length - visibleCards && (
              <StyledArrowBox onClick={handleNextCard} hidden={!currentIndex}>
                <ArrowRightIcon
                  size={theme.media.isMobile ? 30 : 40}
                  fill={theme.color.secondary}
                />
              </StyledArrowBox>
            )}
          </Flex>
        </Box>
      </StyledControlBox>
      <StyledServiceCardsContainerWrapper
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <StyledServiceCardsContainer
          style={{
            transform: `translateX(
              ${
                theme.media.isMobile
                  ? -Math.min(currentIndex) * (280 + 15) + "px"
                  : -Math.min(currentIndex) * (390 + 15) + "px"
              }
            )`,
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </StyledServiceCardsContainer>
      </StyledServiceCardsContainerWrapper>
    </StyledServicesBox>
  );
};

const StyledServiceCardsContainerWrapper = styled.div`
  overflow: ${({ theme }) => (theme.media.isMobile ? "normal" : "hidden")};
`;

const StyledArrowBox = styled.div<{ hidden?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => (theme.media.isMobile ? "10" : "20")}px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  & > svg {
    fill: ${(props) => props.theme.color.secondary};
    transition: fill 0.3s ease-in-out;
  }

  &:hover > svg {
    fill: ${(props) => props.theme.color.primary};
  }
`;

const StyledServicesBox = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => (theme.media.isMobile ? "column" : "row")};
  padding-top: ${({ theme }) => (theme.media.isMobile ? "40" : "100")}px;
  padding-bottom: ${({ theme }) => (theme.media.isMobile ? "40" : "100")}px;
  padding-left: ${({ theme }) =>
    theme.media.isMobile ? "20" : theme.media.isTablet ? "40" : "80"}px;
  padding-right: ${({ theme }) => (theme.media.isMobile ? "20" : "0")}px;
`;

const StyledControlBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: ${({ theme }) => (theme.media.isMobile ? "0" : "20")}px;
  height: 100%;
  min-width: ${({ theme }) => (theme.media.isMobile ? "280" : "350")}px;
`;

const StyledServiceCardsContainer = styled.div`
  display: flex;
  gap: 15px;
  height: 100%;
  padding-top: ${({ theme }) => (theme.media.isMobile ? 20 : 0)}px;
  box-sizing: content-box;
  transition: transform 0.3s ease-in-out;
`;

export default Services;
