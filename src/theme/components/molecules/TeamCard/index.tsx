import React from "react";
import styled, { useTheme } from "styled-components";
import Image from "../../atoms/Image";
import { SvgIcon, Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";

interface TeamHeroProps {
  name: string;
  title: string;
  imageSrc: string;
  skills: string[];
  experiences: string[];
  imageFit?: "cover" | "contain";
}

const TeamCard: React.FC<TeamHeroProps> = ({
  name,
  title,
  imageSrc,
  skills,
  experiences,
  imageFit = "cover",
}) => {
  const theme = useTheme();

  return (
    <StyledTeamCard>
      <PhotoWrapper>
        <Image
          src={imageSrc}
          alt={name}
          fill
          style={{ objectFit: imageFit, objectPosition: "center top" }}
        />
      </PhotoWrapper>

      <CardContent>
        <IdentityRow>
          <Text
            secondaryFont
            primary
            semiBold
            style={{
              fontSize: theme.media.isMobile ? theme.text.biggest : theme.text.huge,
              lineHeight: "115%",
            }}
          >
            {name}
          </Text>
          <Text
            secondaryFont
            style={{
              color: theme.color.secondary,
              fontSize: theme.media.isMobile ? theme.text.small : theme.text.big,
            }}
          >
            {title}
          </Text>
        </IdentityRow>

        <Divider />

        <TwoColumns>
          <Section>
            <Text primary secondaryFont semiBold style={{ fontSize: theme.text.big, paddingBottom: 10 }}>
              Calificări
            </Text>
            <Box style={{ gap: 8 }}>
              {skills.map((skill, index) => (
                <Flex key={index} style={{ alignItems: "flex-start", gap: 8 }}>
                  <Box style={{ paddingTop: 3, flexShrink: 0 }}>
                    <SvgIcon src="/assets/checkedSVG.svg" size={14} />
                  </Box>
                  <Text style={{ fontSize: theme.text.small, lineHeight: "145%" }}>
                    {skill}
                  </Text>
                </Flex>
              ))}
            </Box>
          </Section>

          <Section>
            <Text primary secondaryFont semiBold style={{ fontSize: theme.text.big, paddingBottom: 10 }}>
              Experiență
            </Text>
            <Box style={{ gap: 8 }}>
              {experiences.map((experience, index) => (
                <Text
                  key={index}
                  style={{ fontSize: theme.text.small, lineHeight: "145%" }}
                >
                  {experience}
                </Text>
              ))}
            </Box>
          </Section>
        </TwoColumns>
      </CardContent>
    </StyledTeamCard>
  );
};

const StyledTeamCard = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => (theme.media.isMobile ? "column" : "row")};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  background: ${({ theme }) => theme.color.white};
  min-height: ${({ theme }) => (theme.media.isMobile ? "auto" : "300px")};
`;

const PhotoWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  align-self: stretch;
  width: ${({ theme }) => (theme.media.isMobile ? "100%" : "240px")};
  height: ${({ theme }) => (theme.media.isMobile ? "280px" : "auto")};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => (theme.media.isMobile ? "20px" : "20px 24px")};
  gap: 12px;
  flex: 1;
  min-width: 0;
`;

const IdentityRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.color.gray};
  opacity: 0.35;
  flex-shrink: 0;
`;

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) =>
    theme.media.isMobile ? "1fr" : "1fr 1fr"};
  gap: ${({ theme }) => (theme.media.isMobile ? "16px" : "24px")};
  flex: 1;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export default TeamCard;
