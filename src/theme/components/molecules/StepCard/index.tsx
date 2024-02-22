import styled from "styled-components";
import { Text } from "../..";
import Box from "../../atoms/Box";
import Image from "../../atoms/Image";
import { theme } from "@/theme/constants";
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
  return (
    <>
      <StyledStepCard>
        <Box>
          <Image
            width={230}
            height={400}
            alt=""
            src={image}
            style={{
              borderRadius: 20,
              borderStyle: "solid",
              borderWidth: 2,
              borderColor: theme.color.primary,
              objectFit: "cover",
            }}
          />
        </Box>
        <Box style={{ gap: 24 }}>
          <Text
            big
            secondaryFont
            semiBold
            style={{ color: theme.color.secondary }}
          >
            {label}
          </Text>
          <Text secondaryFont primary bigger bold>
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
  flex-direction: row;
  gap: 40px;
  align-items: center;
  max-width: 600px;
`;

export default StepCard;
