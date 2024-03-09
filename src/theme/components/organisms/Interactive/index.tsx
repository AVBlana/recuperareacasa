import styled, { useTheme } from "styled-components";
import Box from "../../atoms/Box";
import { Text } from "../..";
import { theme } from "@/theme/constants";
import Image from "../../atoms/Image";
import { useState, useEffect } from "react";

const interacts = [
  {
    number: "01",
    label: "Evaluăm amănunțit",
    image: "/assets/planRecuperare1.jpg",
  },
  {
    number: "02",
    label: "Personalizăm tratamentul",
    image: "/assets/planRecuperare2.jpg",
  },
  {
    number: "03",
    label: "Aplicăm planul",
    image: "/assets/planRecuperare3.jpg",
  },
  {
    number: "04",
    label: "Reevaluăm",
    image: "/assets/planRecuperare4.jpg",
  },
  {
    number: "05",
    label: "Schimbam tratamentul",
    image: "/assets/planRecuperare5.jpg",
  },
  {
    number: "06",
    label: "Adăugăm fizioterapie",
    image: "/assets/planRecuperare6.jpg",
  },
  {
    number: "07",
    label: "Reeducăm prin kinetoterapie",
    image: "/assets/planRecuperare7.jpg",
  },
  // {
  //   number: "08",
  //   label: "Învătăm pacientul profilaxie,",
  //   image: "/assets/img8.jpg",
  // },
  {
    number: "08",
    label: "Asteptăm review",
    image: "/assets/planRecuperare8.jpg",
  },
];

interface IPropsInteractive {
  number: string;
  label: string;
  image: string;
}

const InteractiveBox: React.FC = () => {
  const theme = useTheme();
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(
    interacts[0].label
  );

  const handleLabelHover = (label: string | null) => {
    setHoveredLabel(label);
  };

  useEffect(() => {
    // Set the default label when the component mounts
    setHoveredLabel(interacts[0].label);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <Box style={{ alignItems: "center" }}>
      <StyledInteractiveBox>
        <LeftBox style={{ justifyContent: "center" }}>
          {interacts.map((interact, index) => (
            <StyledLabelBox
              key={interact.number}
              onMouseEnter={() => handleLabelHover(interact.label)}
              onMouseLeave={() => handleLabelHover(null)}
              hovered={hoveredLabel === interact.label}
              isFirst={index === 0}
            >
              <Text
                big
                secondaryFont
                primary
                style={{
                  color:
                    hoveredLabel === interact.label ||
                    interact.label === interacts[0].label
                      ? theme.color.secondary
                      : theme.color.primary,
                }}
              >
                {interact.number}
              </Text>
              <Text
                huge
                secondaryFont
                primary
                style={{
                  color:
                    hoveredLabel === interact.label ||
                    interact.label === interacts[0].label
                      ? theme.color.secondary
                      : theme.color.primary,
                  fontSize: theme.media.isMobile
                    ? theme.text.bigger
                    : theme.text.huge,
                }}
              >
                {interact.label}
              </Text>
            </StyledLabelBox>
          ))}
        </LeftBox>
        <RightBox>
          <ImageBox>
            <Image
              width={theme.media.isMobile ? 260 : 600}
              height={theme.media.isMobile ? 260 : 600}
              src={
                interacts.find((i) => i.label === hoveredLabel)?.image ||
                interacts[0].image
              }
              alt=""
              style={{
                borderRadius: 1000,
                borderStyle: "solid",
                borderWidth: 3,
                borderColor: theme.color.primary,
                objectFit: "cover",
              }}
            />
          </ImageBox>
        </RightBox>
      </StyledInteractiveBox>
    </Box>
  );
};

const StyledInteractiveBox = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => (theme.media.isMobile ? "column" : "row")};
  align-items: center;
  justify-content: center;
  padding-left: ${({ theme }) => (theme.media.isMobile ? "20" : "80")}px;
  padding-right: ${({ theme }) => (theme.media.isMobile ? "20" : "80")}px;
  padding-bottom: 100px;
  max-width: 1440px;
  gap: ${({ theme }) => (theme.media.isMobile ? "20" : "0")}px;
`;

const LeftBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLabelBox = styled.div<{ hovered: boolean; isFirst: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  cursor: ${({ hovered }) => (hovered ? "pointer" : "default")};
  padding: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.tiny : theme.spacings.small}px;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    transform: scale(1.1); // Increase the scale value as needed
  }

  ${({ isFirst, hovered }) =>
    isFirst &&
    !hovered &&
    `
    color: ${theme.color.secondary};
  `}
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
`;

const ImageBox = styled.div`
  margin: 0 ${({ theme }) => theme.spacings.medium}px;
`;

export default InteractiveBox;
