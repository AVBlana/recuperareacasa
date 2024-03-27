// components/TeamHero.tsx
import React from "react";
import styled, { useTheme } from "styled-components";
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
  const theme = useTheme();
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
                <Box>
                  <SvgIcon
                    src="/assets/checkedSVG.svg"
                    size={theme.media.isMobile ? 14 : 20}
                  />
                </Box>

                <Text
                  style={{
                    fontSize: theme.media.isMobile
                      ? theme.text.smaller
                      : theme.text.big,
                  }}
                >
                  {skill}
                </Text>
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
                <Text
                  style={{
                    fontSize: theme.media.isMobile
                      ? theme.text.smaller
                      : theme.text.big,
                  }}
                >
                  {experience}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box style={{ alignItems: theme.media.isMobile ? "center" : "baseline" }}>
        <Box>
          <Image
            src={imageSrc}
            alt={""}
            width={theme.media.isMobile ? 280 : 400}
            height={theme.media.isMobile ? 280 : 510}
            style={{ objectFit: "contain", borderRadius: 20 }}
          />
        </Box>
        <Box style={{ alignItems: "center", paddingTop: 20 }}>
          <Text
            huge
            secondaryFont
            primary
            style={{
              fontSize: theme.media.isMobile
                ? theme.text.biggest
                : theme.text.huge,
            }}
          >
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
  flex-direction: ${({ theme }) => (theme.media.isMobile ? "column" : "row")};
  gap: ${({ theme }) => (theme.media.isMobile ? "60" : "230")}px;
`;

export default TeamCard;
