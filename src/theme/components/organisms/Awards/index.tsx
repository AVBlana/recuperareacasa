import styled, { useTheme } from "styled-components";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Image from "../../atoms/Image";
import { Text } from "../..";

const Awards = () => {
  const theme = useTheme();

  return (
    <StyledAwardsBox>
      <Box
        style={{
          alignItems: "center",
          justifyContent: "center",
          maxWidth: theme.media.isMobile ? "100%" : 1440,
          margin: "0 auto",
        }}
      >
        {/* Main Content Section */}
        <Flex
          style={{
            flexDirection: theme.media.isMobile ? "column-reverse" : "row",
            gap: theme.media.isMobile ? 40 : 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Content Section - Left Side */}
          <Box
            style={{
              flex: 1,
              gap: theme.media.isMobile ? 24 : 32,
              maxWidth: theme.media.isMobile ? "100%" : 600,
              alignItems: theme.media.isMobile ? "center" : "flex-start",
            }}
          >
            {/* Header Section */}
            <Box
              style={{
                gap: theme.media.isMobile ? 12 : 16,
                alignItems: theme.media.isMobile ? "center" : "flex-start",
              }}
            >
              <Text
                big
                semiBold
                secondaryFont
                style={{
                  color: theme.color.secondary,
                  paddingBottom: 4,
                }}
              >
                Premii si recunoașteri
              </Text>
              <Text
                huge
                secondaryFont
                primary
                style={{
                  lineHeight: "120%",
                  fontSize: theme.media.isMobile
                    ? theme.text.biggest
                    : theme.text.huge,
                }}
              >
                Premiul Golden 5 - 2025
              </Text>
              <Text
                style={{
                  color: theme.color.primary,
                  fontSize: theme.media.isMobile
                    ? theme.text.medium
                    : theme.text.big,
                  lineHeight: "140%",
                }}
              >
                Oferit firmelor din România cu cel mai înalt nivel de
                satisfactie a clientilor.
              </Text>
            </Box>

            {/* Content Details */}
            <Box
              style={{
                gap: theme.media.isMobile ? 16 : 24,
              }}
            >
              <Text
                style={{
                  lineHeight: "150%",
                  fontSize: theme.media.isMobile
                    ? theme.text.medium
                    : theme.text.big,
                  color: theme.color.primary,
                  fontWeight: 600,
                }}
              >
                🏆 Suntem onorați să fim premiați la nivel național cu
                distincția &ldquo;Golden 5 / 2025&rdquo;, fiind incluși în Top 5
                firme din România cu cele mai apreciate servicii de recuperare
                medicală!
              </Text>

              <Text
                style={{
                  lineHeight: "150%",
                  fontSize: theme.media.isMobile
                    ? theme.text.small
                    : theme.text.medium,
                  color: theme.color.primary,
                }}
              >
                📍 Cu sediul în Florești, Cluj, oferim servicii de kinetoterapie
                la domiciliu, masaj terapeutic, terapie manuală, chiropractica
                și exerciții post-AVC.
              </Text>

              <Text
                style={{
                  lineHeight: "150%",
                  fontSize: theme.media.isMobile
                    ? theme.text.small
                    : theme.text.medium,
                  color: theme.color.primary,
                }}
              >
                ⭐ Avem un rating de 5 din 5 stele pe Google Maps, bazat pe
                peste 127 de recenzii reale de la pacienți mulțumiți.
              </Text>

              <Text
                style={{
                  lineHeight: "150%",
                  fontSize: theme.media.isMobile
                    ? theme.text.small
                    : theme.text.medium,
                  color: theme.color.primary,
                }}
              >
                Când cauți kinetoterapie la domiciliu în Cluj sau o firmă de aur
                în recuperare medicală, ai ajuns exact unde trebuie!
              </Text>
            </Box>

            {/* CTA Button - Matching page design */}
            <AwardsButton
              onClick={() =>
                window.open("https://share.google/5IEjsuQDI8zsciZni", "_blank")
              }
            >
              👉 Pentru detalii despre premiu și recenzii
            </AwardsButton>
          </Box>

          {/* Image Section - Right Side */}
          <Box
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: theme.shadow.big,
                transform: "scale(1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0px 8px 24px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = theme.shadow.big;
              }}
            >
              <Image
                width={theme.media.isMobile ? 320 : 600}
                height={theme.media.isMobile ? 240 : 450}
                src="/assets/googleAward1.jpeg"
                alt="Google Award"
                style={{
                  objectFit: "cover",
                  borderRadius: 24,
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </StyledAwardsBox>
  );
};

const AwardsButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.tiny}px;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.secondary};
  padding-top: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.tiny : theme.spacings.medium}px;
  padding-bottom: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.tiny : theme.spacings.medium}px;
  padding-left: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.medium : theme.spacings.bigger}px;
  padding-right: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.medium : theme.spacings.bigger}px;
  border-radius: 20px;
  cursor: pointer;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.secondary};
  transition: transform 0.3s ease;
  max-width: fit-content;
  font-size: ${({ theme }) =>
    theme.media.isMobile ? theme.text.small : theme.text.medium}px;

  &:hover {
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.secondary};
    border-color: ${({ theme }) => theme.color.secondary};
    transform: scale(1.1);
  }
`;

const StyledAwardsBox = styled.div`
  display: flex;
  flex-direction: column;
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
      transparent 0%,
      ${({ theme }) => theme.color.secondary} 50%,
      transparent 100%
    );
  }
`;

export default Awards;
