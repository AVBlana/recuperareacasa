import styled from "styled-components";
import Box from "../../atoms/Box";
import { Text } from "../..";
import { theme } from "@/theme/constants";
import Image from "../../atoms/Image";
import { useState, useEffect } from "react";

const interacts = [
  {
    number: "01",
    label: "Cap",
    image: "/assets/img1.jpg",
  },
  {
    number: "02",
    label: "Membre superioare",
    image: "/assets/img2.jpg",
  },
  {
    number: "03",
    label: "Cervical",
    image: "/assets/img3.jpg",
  },
  {
    number: "04",
    label: "Toracal",
    image: "/assets/img4.jpg",
  },
  {
    number: "05",
    label: "Lombar",
    image: "/assets/img5.jpg",
  },
  {
    number: "06",
    label: "Zona Bazinului",
    image: "/assets/img6.jpg",
  },
  {
    number: "07",
    label: "Membre inferioare,",
    image: "/assets/img7.jpg",
  },
];

interface IPropsInteractive {
  number: string;
  label: string;
  image: string;
}

const InteractiveBox: React.FC = () => {
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
    <StyledInteractiveBox>
      <LeftBox>
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
            width={600}
            height={600}
            src={interacts.find((i) => i.label === hoveredLabel)?.image || ""}
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
  );
};

const StyledInteractiveBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 100px 80px;
  gap: 60px;
`;

const LeftBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 250px;
`;

const StyledLabelBox = styled.div<{ hovered: boolean; isFirst: boolean }>`
  display: flex;
  flex-direction: row;
  cursor: ${({ hovered }) => (hovered ? "pointer" : "default")};
  padding: ${({ theme }) => theme.spacings.small}px;
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
