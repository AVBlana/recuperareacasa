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
          Descoperă serviciul nostru de recuperare medicală și oferă-i cuiva
          drag un card cadou special!
          <br />
          <br />
          Alege Tipul de Cadou pe Care Dorești Să îl Oferi:
          <br />
          <br />
          • O ședință - 200 RON
          <br />
          • Trei ședințe - 510 RON
          <br />
          <br />
          Ajută-i să-și recapete sănătatea și vitalitatea cu ajutorul
          terapeuților noștri calificați.
          <br />
          <br />
          Un cadou memorabil pentru cei dragi! Valabilitatea cardului este de o
          lună din momentul plății, oferindu-le beneficiarilor oportunitatea de
          a profita de serviciile noastre într-un interval rezonabil de timp.
          <br />
          <br />
          Detalii: Prețul este calculat pentru Terapia Manuală, un serviciu care
          oferă atât posibilitatea unei evaluări inițiale, cât și demararea unui
          plan terapeutic personalizat. Pacientul beneficiază de suport complet,
          indiferent dacă dorește un simplu masaj de relaxare sau are nevoie de
          tratament pentru dureri cronice sau acute.
        </>
      ),
    },
    {
      label: "580 Ron / 3 Sedinte",
      title: "Abonament Terapie Manuala",
      svg: "/assets/manualTherapy2.svg",
      image: "/assets/serviciiTerapieManuala.jpg",
      desc: (
        <>
          Abonamentul nostru de terapie manuală îți permite să experimentezi
          vindecarea și relaxarea într-un mod convenabil și accesibil în trei
          ședințe.
          <br />
          <br />
          Oferind o varietate de tehnici terapeutice, de la masaj terapeutic la
          manipulare osteopatică, Dryneedling, Flossing, Cupping, IATSM,
          Kinesiotape.
          <br />
          <br />
          Cu abonamentul nostru, beneficiezi de o evaluare inițială gratuită.
          <br />
          <br />
          Valabilitatea abonamentului este pe o perioadă de o lună, iar plata se
          face integral pentru a-ți oferi o experiență fără griji și pentru a te
          bucura de beneficiile terapiei manuale fără nicio grijă financiară.
        </>
      ),
    },

    {
      label: "1600 Ron / 10 Sedinte",
      title: "Abonament Masaj",
      svg: "/assets/massage.svg",
      image: "/assets/serviciiMasajDeRelaxare.jpg",
      desc: (
        <>
          Cu acest abonament, te poți bucura de o serie de sesiuni de masaj
          terapeutic de înaltă calitate.
          <br />
          <br />
          Este important să ții cont că evaluarea inițială este tarifată separat
          de abonament și nu este inclusă în prețul acestuia.
          <br />
          <br />
          Abonamentul nostru se concentrează exclusiv pe masajul terapeutic, iar
          alte servicii sau tratamente vor fi suplimentare și tarifate separat.
          <br />
          <br />
          Valabilitatea abonamentului este pe o perioadă de 6 luni iar plata se
          face în două tranșe pentru a-ți oferi o experiență fără griji pe tot
          parcursul acestei perioade.
        </>
      ),
    },
    {
      label: "1500 Ron / 10 Sedinte",
      title: "Abonament Kinetoterapie",
      svg: "/assets/kineto.svg",
      image: "/assets/serviciiKinetoterapie.jpg",
      desc: (
        <>
          Conceput exclusiv pentru terapia prin exerciții, acest abonament îți
          oferă oportunitatea de a-ți îmbunătăți sănătatea și mobilitatea
          într-un mod sigur și eficient.
          <br />
          <br />
          Vei lucra îndeaproape cu terapeuții noștri specializați pentru a
          dezvolta un plan de tratament personalizat, adaptat nevoilor tale
          specifice.
          <br />
          <br />
          Evaluare inițială se tarifează separat.
          <br />
          <br />
          Valabilitatea abonamentului este pe o perioadă de 3 luni iar plata
          abonamentului se face în două tranșe pentru a-ți oferi mai multă
          flexibilitate financiară.
        </>
      ),
    },
    {
      label: "1500 Ron / 10 Sedinte",
      title: "Abonament Mixt",
      svg: "/assets/manualTherapy2.svg",
      image: "/assets/serviciiTerapieManuala.jpg",
      desc: (
        <>
          Abonamentul mixt oferă soluții complete pentru îmbunătățirea sănătății
          la domiciliu, adresând diverse probleme medicale precum cele
          neurologice, post-AVC, spasticitate, post-traumatic, post operator în
          cazul protezei totale de șold sau genunchi și altele.
          <br />
          <br />
          Combinația de kinetoterapie și terapie manuală asigură pacienților
          îngrijire specializată și eficientă în confortul propriului cămin.
          <br />
          <br />
          Sesiunea poate include 20 de minute de terapie manuală și 30 de minute
          de kinetoterapie, sau terapia manuală poate fi integrată în
          exercițiile de kinetoterapie pe parcursul întregii sesiuni.
          <br />
          <br />
          Pentru terapia manuală extinsă de 50 de minute, se poate achiziționa o
          ședință suplimentară cu un cost adițional de 60 de lei. Plata
          abonamentului se face în două tranșe.
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
      label: "160 Ron",
      title: "Kinetoterapie",
      svg: "/assets/kineto.svg",
      image: "/assets/serviciiKinetoterapie.jpg",
      desc: (
        <>
          Serviciul nostru de kinetoterapie se adresează cu precădere
          persoanelor care suferă de AVC, probleme neurologice sau traumatisme,
          oferindu-le un suport specializat în recuperarea funcțională.
          <br />
          <br />
          Prin intermediul terapiei prin mișcare, ne concentrăm pe restabilirea
          și consolidarea funcțiilor motorii afectate, îmbunătățirea
          flexibilității și a forței musculare, precum și pe redobândirea
          independenței și a calității vieții.
          <br />
          <br />
          Terapeuții noștri specializați lucrează îndeaproape cu fiecare pacient
          pentru a dezvolta un program de exerciții adaptat nevoilor lor
          individuale, astfel încât să obțină progrese semnificative în procesul
          de recuperare.
          <br />
          <br />
          Serviciul nostru de kinetoterapie se concentrează exclusiv pe terapia
          prin mișcare, oferind un sprijin specializat pentru recuperare
          medicală.
        </>
      ),
    },
    {
      label: "175 Ron",
      title: "Masaj Terapeutic",
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
      label: "160 Ron",
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

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = 400;
      const visibleCardsCount = Math.floor(containerWidth / cardWidth);
      setVisibleCards(visibleCardsCount);
    }
  }, []);

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
