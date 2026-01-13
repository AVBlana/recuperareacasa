import { useState } from "react";
import styled, { useTheme, keyframes } from "styled-components";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Image from "../../atoms/Image";
import { Text } from "../..";

/* -------------------- DATA -------------------- */

const awards = [
  {
    id: "google-reviews-excellence",
    tabLabel: "Șoimii Sănătății",
    title: "Premiul Șoimii Sănătății - 2025",
    description: [
      {
        text: "Suntem onorați să fim recunoscuți ca lideri în sănătate în Florești, Cluj, fiind considerați #1 în servicii de recuperare medicală, pe baza evaluărilor și recenziilor independente online.",
        strong: true,
      },
      {
        text: "Acest premiu reflectă feedback-ul real al pacienților și poziționarea noastră ca prima alegere pentru recuperare și îngrijire de calitate.",
      },
      {
        text: "Mulțumim pacienților noștri pentru încredere și susținere.",
      },
    ],
    image: "/assets/soimiiSanatatii.jpg",
    type: "external-badge",
  },
  {
    id: "golden-5-2025",
    tabLabel: "Golden 5 – 2025",
    title: "Premiul Golden 5 - 2025",
    description: [
      {
        text: "Suntem onorați să fim premiați la nivel național cu distincția “Golden 5 / 2025”, fiind incluși în Top 5 firme din România cu cele mai apreciate servicii de recuperare medicală!",
        strong: true,
      },
      {
        text: "Cu sediul în Florești, Cluj, oferim servicii de kinetoterapie la domiciliu, masaj terapeutic, terapie manuală, chiropractica și exerciții post-AVC.",
      },
      {
        text: "Avem un rating de 5 din 5 stele pe Google Maps, bazat pe peste 127 de recenzii reale de la pacienți mulțumiți.",
      },
      {
        text: "Când cauți kinetoterapie la domiciliu în Cluj sau o firmă de aur în recuperare medicală, ai ajuns exact unde trebuie!",
      },
    ],
    image: "/assets/googleAward1.jpeg",
    type: "external-badge",
  },
];

/* -------------------- COMPONENT -------------------- */

const Awards = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAward = awards[activeIndex];

  return (
    <StyledAwardsBox>
      <Box
        style={{
          justifyContent: "center",
          maxWidth: theme.media.isMobile ? "100%" : 1440,
          margin: "0 auto",
        }}
      >
        {/* SECTION TITLE */}
        <Box
          style={{
            alignItems: "flex-start",
            gap: 16,
            marginBottom: theme.media.isMobile ? 2 : 12,
          }}
        >
          <Text
            big
            semiBold
            secondaryFont
            style={{
              color: theme.color.secondary,
              paddingBottom: 8,
              width: "100%",
            }}
          >
            Premii și recunoașteri
          </Text>
        </Box>

        <Flex
          style={{
            flexDirection: theme.media.isMobile ? "column-reverse" : "row",
            gap: theme.media.isMobile ? 40 : 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            style={{
              flex: 1,
              gap: theme.media.isMobile ? 24 : 32,
              maxWidth: theme.media.isMobile ? "100%" : 600,
              alignItems: theme.media.isMobile ? "center" : "flex-start",
            }}
          >
            {/* Tabs */}
            <AwardsTabs>
              {awards.map((award, index) => (
                <TabButton
                  key={award.id}
                  active={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                >
                  {award.tabLabel}
                </TabButton>
              ))}
            </AwardsTabs>

            {/* Animated Content */}
            <AnimatedContent key={activeAward.id}>
              <Text
                big
                semiBold
                secondaryFont
                style={{ color: theme.color.secondary }}
              >
                {activeAward.title}
              </Text>

              <Box style={{ gap: theme.media.isMobile ? 16 : 24 }}>
                {activeAward.description.map((item, idx) => (
                  <Text
                    key={idx}
                    style={{
                      lineHeight: "150%",
                      fontSize: theme.media.isMobile
                        ? theme.text.small
                        : theme.text.medium,
                      color: theme.color.primary,
                      fontWeight: item.strong ? 600 : 400,
                    }}
                  >
                    {item.text}
                  </Text>
                ))}
              </Box>

              {/* CONDITIONAL CTA */}
              {activeAward.type === "external-badge" && (
                <ExternalBadgeWrapper>
                  {activeAward.id === "google-reviews-excellence" && (
                    <a
                      href="https://www.soimiisanatatii.ro/profile-281452-recuperareacasa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.soimiisanatatii.ro/images/medals/281452/laureat300_black_2_ro.png"
                        alt="RecuperareAcasa - Florești"
                        title="RecuperareAcasa - Florești"
                      />
                    </a>
                  )}

                  {activeAward.id === "golden-5-2025" && (
                    <a
                      href="https://www.firmadeaur.ro/company/recuperareacasa-srl-masaj-kinetoterapie-la-domiciliu-cluj-4384711"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.firmadeaur.ro/company-image/4384711-dark.png"
                        alt="RecuperareAcasa SRL (Masaj/Kinetoterapie la domiciliu) Cluj - Florești"
                        title="RecuperareAcasa SRL (Masaj/Kinetoterapie la domiciliu) Cluj - Florești"
                      />
                    </a>
                  )}
                </ExternalBadgeWrapper>
              )}
            </AnimatedContent>
          </Box>

          {/* IMAGE */}
          <AnimatedContent key={`${activeAward.id}-image`}>
            <Box style={{ flex: 1, alignItems: "center" }}>
              <Box
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: theme.shadow.big,
                }}
              >
                <Image
                  width={theme.media.isMobile ? 320 : 600}
                  height={theme.media.isMobile ? 240 : 450}
                  src={activeAward.image}
                  alt={activeAward.title}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </AnimatedContent>
        </Flex>
      </Box>
    </StyledAwardsBox>
  );
};

/* -------------------- STYLES -------------------- */

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedContent = styled.div`
  animation: ${fadeIn} 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium}px;
`;

const AwardsTabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.small}px;
  flex-wrap: wrap;
`;

const TabButton = styled.button<{ active: boolean }>`
  background: ${({ theme, active }) =>
    active ? theme.color.secondary : theme.color.white};
  color: ${({ theme, active }) =>
    active ? theme.color.white : theme.color.secondary};
  border: 1px solid ${({ theme }) => theme.color.secondary};
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.text.small}px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const AwardsButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.secondary};
  padding: ${({ theme }) => theme.spacings.medium}px
    ${({ theme }) => theme.spacings.bigger}px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  max-width: fit-content;
  transition: transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.secondary};
    transform: scale(1.05);
  }
`;

const ExternalBadgeWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacings.small}px;

  img {
    max-width: 300px;
    width: 100%;
    height: auto;
  }
`;

const StyledAwardsBox = styled.div`
  display: flex;
  padding: ${({ theme }) =>
    theme.media.isMobile
      ? "80px 20px"
      : theme.media.isTablet
      ? "120px 40px"
      : "160px 80px"};
  background: ${({ theme }) => theme.color.white};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.color.secondary},
      transparent
    );
  }
`;

export default Awards;
