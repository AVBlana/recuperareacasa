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
  review: {
    rating: number;
    text: string;
    reviewer: string;
    title: string;
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
  return (
    <StyledCardBox>
      <Flex style={{ gap: 8 }}>
        {[...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            size={20}
            fill={
              index < review.rating ? theme.color.secondary : theme.color.gray
            }
          />
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
          gap: theme.media.isMobile ? 60 : 0,
        }}
      >
        <Flex style={{ alignItems: "center", gap: theme.spacings.medium }}>
          <Box>
            <Image
              width={theme.media.isMobile ? 50 : 80}
              height={theme.media.isMobile ? 50 : 80}
              src="/assets/review-bg.jpg"
              alt=""
              style={{
                borderRadius: 50,
                borderStyle: "solid",
                borderColor: theme.color.secondary,
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
    transform: scale(1.1); /* Adjust the scale factor as needed */
  }

  & > svg {
    fill: ${(props) => props.theme.color.white}; /* Initial color */
    transition: fill 0.3s ease-in-out;
  }

  &:hover > svg {
    fill: ${(props) => props.theme.color.secondary}; /* Hover color */
  }
`;

export default ReviewCard;
