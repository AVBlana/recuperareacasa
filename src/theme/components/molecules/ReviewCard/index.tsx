// ReviewCard.tsx
import React from "react";
import styled from "styled-components";
import { theme } from "@/theme/constants";
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
      <Text white biggest style={{ fontStyle: "italic" }}>
        "{review.text}"
      </Text>
      <Flex style={{ justifyContent: "space-between" }}>
        <Flex style={{ alignItems: "center", gap: theme.spacings.medium }}>
          <Box>
            <Image
              width={80}
              height={80}
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
            <Text white secondaryFont biggest>
              {review.reviewer}
            </Text>
            <Text small semiBold style={{ color: theme.color.secondary }}>
              {review.title}
            </Text>
          </Box>
        </Flex>

        <Flex>
          <Box
            style={{ padding: 20, cursor: "pointer" }}
            onClick={onPrevReview}
          >
            <ArrowLeftIcon size={40} fill={theme.color.white} />
          </Box>
          <Box
            style={{ padding: 20, cursor: "pointer" }}
            onClick={onNextReview}
          >
            <ArrowRightIcon size={40} fill={theme.color.white} />
          </Box>
        </Flex>
      </Flex>
    </StyledCardBox>
  );
};

const StyledCardBox = styled.div`
  background: rgba(255, 255, 0, 0);
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 550px;
`;

export default ReviewCard;
