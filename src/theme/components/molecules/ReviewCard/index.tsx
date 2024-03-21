// ReviewCard.tsx
import React from "react";
import styled, { useTheme } from "styled-components";
import { Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Image from "../../atoms/Image";
import { ArrowLeftIcon } from "../Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../Icons/ArrowRightIcon";
import { StarIcon } from "../Icons/StarIcon";

interface ReviewCardProps {
  review?: {
    rating: number;
    text: string;
    reviewer: string;
    title: string;
    filled: boolean;
  };
  onPrevReview: () => void;
  onNextReview: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  onPrevReview,
  onNextReview,
}) => {
  const theme = useTheme();

  if (!review) {
    return null;
  }
  return (
    <StyledCardBox>
      <Flex style={{ gap: 8 }}>
        {[...Array(5)].map((_, index) => (
          <StarIcon key={index} size={20} filled={index < review.rating} />
        ))}
      </Flex>
      <Text
        white
        style={{
          lineHeight: "150%",
          fontStyle: "italic",
          fontSize: theme.media.isMobile ? theme.text.big : theme.text.biggest,
        }}
      >
        {review.text}
      </Text>
      <Flex
        style={{
          justifyContent: "space-between",
          flexDirection: theme.media.isMobile ? "column" : "row",
          gap: theme.media.isMobile ? 20 : 0,
        }}
      >
        <Flex style={{ alignItems: "center", gap: theme.spacings.medium }}>
          <Box>
            <Image
              width={theme.media.isMobile ? 50 : 50}
              height={theme.media.isMobile ? 50 : 50}
              src="/assets/user.svg"
              alt=""
              style={{
                borderRadius: 50,
                borderStyle: "solid",
                borderColor: theme.color.primary,
              }}
            />
          </Box>
          <Box>
            <Text
              white
              secondaryFont
              style={{
                fontSize: theme.media.isMobile
                  ? theme.text.medium
                  : theme.text.bigger,
              }}
            >
              {review.reviewer}
            </Text>
            <Text
              small
              semiBold
              style={{
                color: theme.color.secondary,
                fontSize: theme.media.isMobile
                  ? theme.text.smaller
                  : theme.text.small,
              }}
            >
              {review.title}
            </Text>
          </Box>
        </Flex>

        <Flex>
          <StyledArrowBox
            style={{ padding: theme.media.isMobile ? 10 : 20 }}
            onClick={onPrevReview}
          >
            <ArrowLeftIcon size={theme.media.isMobile ? 30 : 40} />
          </StyledArrowBox>
          <StyledArrowBox
            style={{ padding: theme.media.isMobile ? 10 : 20 }}
            onClick={onNextReview}
          >
            <ArrowRightIcon size={theme.media.isMobile ? 30 : 40} />
          </StyledArrowBox>
        </Flex>
      </Flex>
    </StyledCardBox>
  );
};

const StyledCardBox = styled.div`
  background: rgba(255, 255, 0, 0);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme.media.isMobile ? 30 : 60)}px;
  max-width: 550px;
`;

const StyledArrowBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  & > svg {
    fill: ${(props) => props.theme.color.white};
    transition: fill 0.3s ease-in-out;
  }

  &:hover > svg {
    fill: ${(props) => props.theme.color.secondary};
  }
`;

export default ReviewCard;
