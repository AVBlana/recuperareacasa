import styled, { useTheme } from "styled-components";
import ReviewCard from "../../molecules/ReviewCard";
import { useEffect, useState } from "react";
import ReviewForm from "../../molecules/ReviewForm";
import { useReviewContext } from "./ReviewContext";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";

const Review = () => {
  const theme = useTheme();

  const reviews = [
    {
      rating: 5,
      text: "Îl recomand pe Alex! Este foarte priceput in ceea ce face si explica si foarte bine. Este un om cu mult bun simt si respect.",
      reviewer: "Welther Ramona-Franziska",
      title: "Fitness Enthusiast",
    },
    {
      rating: 5,
      text: "Il recomand pe Alex cu mare incredere si caldura!",
      reviewer: "Anda David",
      title: "Athlete",
    },
    {
      rating: 5,
      text: "Recomand ! este un fizioterapeut excepțional. M-a ajutat foarte mult după accidentul la cot pentru recuperare cât și pentru durerile cu spatele. Mulțumesc!",
      reviewer: "Dan Inulescu",
      title: "Dancer",
    },
    {
      rating: 5,
      text: "Cel mai bine îi să fii masat acasă.. merge un somn după! Recomand! Mulțumim Alex!",
      reviewer: "Daniel Ignat",
      title: "Post-Surgery Recovery",
    },
    {
      rating: 5,
      text: "Alex este cel mai bun Fizio Terapeut cu care am lucrat și îl recomand oricui. Este un băiat cu bun simt, foarte dedicat și un bun partener de conversație.",
      reviewer: "Razvan Suditu",
      title: "Patient Care Advocate",
    },
    {
      rating: 5,
      text: "Îl recomand pe Alex datorita experientei, atitudinii profesionale si a prezentei vindecatoare. Împreuna am pus genunchiul meu accidentat din nou în maximă functionalitate. Ave mișcare!",
      reviewer: "Dragos Muntean",
      title: "Patient Care Advocate",
    },
  ];

  const { addReview } = useReviewContext();

  const handleReviewSubmit = (review: any) => {
    addReview(review);
  };

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <StyledReviewContainer>
      <StyledGradientBox />
      <StyledReviewBox>
        <Flex
          style={{
            maxWidth: 1500,
            justifyContent: "space-between",
            flexDirection: theme.media.isMobile ? "column" : "row",
            gap: theme.media.isMobile ? 40 : 0,
          }}
        >
          <ReviewCard
            review={{
              rating: reviews[currentReviewIndex].rating,
              text: reviews[currentReviewIndex].text,
              reviewer: reviews[currentReviewIndex].reviewer,
              title: reviews[currentReviewIndex].title,
              filled: true,
            }}
            onPrevReview={handlePrevReview}
            onNextReview={handleNextReview}
          />
          <ReviewForm onSubmit={handleReviewSubmit} />
        </Flex>
      </StyledReviewBox>

      <StyledImageBox />
    </StyledReviewContainer>
  );
};

const StyledReviewContainer = styled.div`
  position: relative;
  min-height: ${({ theme }) => (theme.media.isMobile ? "800px" : "550px")};
`;

const StyledGradientBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) =>
    theme.media.isMobile
      ? "linear-gradient(to right, #2a5550, rgba(255, 100 , 69, 0) 150%)"
      : "linear-gradient(to right, #2a5550, rgba(255, 69, 0, 0))"};
  z-index: 1;
`;

const StyledReviewBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${({ theme }) =>
    theme.media.isMobile ? "40px 20px" : "100px 80px"};
  z-index: 2;
`;

const StyledImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(./assets/planRecuperare1.jpg);
  background-size: cover;
  background-position: ${({ theme }) =>
    theme.media.isMobile ? "right" : "center"};
  z-index: 0;
`;

export default Review;
