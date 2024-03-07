import styled, { useTheme } from "styled-components";
import { Text } from "../..";
import Box from "../../atoms/Box";
import Image from "../../atoms/Image";
import React from "react";

const StepCard = ({
  label,
  title,
  image,
  desc,
}: {
  label: string;
  title: string;
  image: string;
  desc: any;
}) => {
  const theme = useTheme();

  return (
    <>
      <StyledStepCard>
        <Box>
          <Image
            width={theme.media.isMobile ? 200 : 300}
            height={theme.media.isMobile ? 200 : 300}
            alt=""
            src={image}
            style={{
              borderRadius: 150,
              borderStyle: "solid",
              borderWidth: 2,
              borderColor: theme.color.primary,
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          style={{
            gap: 24,
            alignItems: theme.media.isMobile ? "center" : "start",
          }}
        >
          <Text
            big
            secondaryFont
            semiBold
            style={{
              color: theme.color.secondary,
              textAlign: theme.media.isMobile ? "center" : "left",
            }}
          >
            {label}
          </Text>
          <Text
            secondaryFont
            primary
            bigger
            bold
            style={{ textAlign: theme.media.isMobile ? "center" : "left" }}
          >
            {title}
          </Text>
          <Text small>{desc}</Text>
        </Box>
      </StyledStepCard>
    </>
  );
};

const StyledStepCard = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => (theme.media.isMobile ? "column" : "row")};
  gap: 40px;
  align-items: center;
`;

export default StepCard;
