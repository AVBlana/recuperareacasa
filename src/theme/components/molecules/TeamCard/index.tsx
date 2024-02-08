// components/TeamHero.tsx
import React from "react";
import styled from "styled-components";
import Image from "../../atoms/Image";
import { SvgIcon, Text } from "../..";
import Box from "../../atoms/Box";
import { theme } from "@/theme/constants";
import Flex from "../../atoms/Flex";

interface TeamHeroProps {
  name: string;
  title: string;
  imageSrc: string;
  skills: string[];
  experiences: string[];
}

const TeamCard: React.FC<TeamHeroProps> = ({
  name,
  title,
  imageSrc,
  skills,
  experiences,
}) => {
  return (
    <StyledTeamCard>
      <Box style={{ gap: 40 }}>
        <Box>
          <Text
            big
            semiBold
            secondaryFont
            style={{ color: theme.color.secondary }}
          >
            Echipa
          </Text>
          <Text primary huge secondaryFont>
            Cunoaste personalul
          </Text>
        </Box>
        <Box style={{ gap: 20 }}>
          <Text primary secondaryFont semiBold bigger>
            Calificari:
          </Text>
          <Box style={{ gap: 10 }}>
            {skills.map((skill, index) => (
              <Flex key={index} style={{ alignItems: "center", gap: 10 }}>
                <SvgIcon src="/assets/checkedSVG.svg" size={20}></SvgIcon>
                <Text big>{skill}</Text>
              </Flex>
            ))}
          </Box>
        </Box>
        <Box style={{ gap: 20 }}>
          <Text primary secondaryFont semiBold bigger>
            Experiente:
          </Text>
          <Box style={{ gap: 10 }}>
            {experiences.map((experience, index) => (
              <Box key={index} style={{ gap: 10 }}>
                <Text big>{experience}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <Image
            src={imageSrc}
            alt={""}
            width={400}
            height={500}
            style={{ objectFit: "cover", borderRadius: 20 }}
          />
        </Box>
        <Box style={{ alignItems: "center" }}>
          <Text huge secondaryFont primary>
            {name}
          </Text>
          <Text bigger secondaryFont style={{ color: theme.color.secondary }}>
            {title}
          </Text>
        </Box>
      </Box>
    </StyledTeamCard>
  );
};

const StyledTeamCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 230px;
`;

export default TeamCard;
