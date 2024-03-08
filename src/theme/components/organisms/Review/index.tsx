import styled, { useTheme } from "styled-components";
import ReviewCard from "../../molecules/ReviewCard";
import { useState } from "react";

const Review = () => {
  const theme = useTheme();

  const reviews = [
    {
      rating: 5,
      text: "Exceptional physiotherapy services! The team here is knowledgeable, friendly, and helped me recover from my injury with personalized care. Highly recommended!",
      reviewer: "Emma Thompson",
      image: "/assets/emma-thompson.jpg",
      title: "Fitness Enthusiast",
    },
    {
      rating: 4,
      text: "I had a positive experience with this physiotherapy clinic. The staff was professional, and the facilities were well-maintained. They provided effective treatment that significantly improved my mobility.",
      reviewer: "Michael Rodriguez",
      image: "/assets/michael-rodriguez.jpg",
      title: "Athlete",
    },
    {
      rating: 5,
      text: "The physiotherapists at this clinic are top-notch. They took the time to understand my condition and tailored a treatment plan that worked wonders. I'm grateful for their expertise and dedication.",
      reviewer: "Sophia Lee",
      image: "/assets/sophia-lee.jpg",
      title: "Dancer",
    },
    {
      rating: 4,
      text: "I visited this physiotherapy center for rehabilitation after surgery. The staff was caring, and the exercises they prescribed were effective in speeding up my recovery. I'm satisfied with the results.",
      reviewer: "Daniel Harper",
      image: "/assets/daniel-harper.jpg",
      title: "Post-Surgery Recovery",
    },
    {
      rating: 5,
      text: "Outstanding service! The physiotherapists here are not only skilled but also compassionate. They went above and beyond to ensure I felt comfortable throughout my sessions. My recovery exceeded my expectations.",
      reviewer: "Olivia Miller",
      image: "/assets/olivia-miller.jpg",
      title: "Patient Care Advocate",
    },
  ];

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
        <ReviewCard
          review={reviews[currentReviewIndex]}
          onPrevReview={handlePrevReview}
          onNextReview={handleNextReview}
        />
      </StyledReviewBox>
      <StyledImageBox />
    </StyledReviewContainer>
  );
};

const StyledReviewContainer = styled.div`
  position: relative;
  min-height: ${({ theme }) => (theme.media.isMobile ? "450px" : "550px")};
`;

const StyledGradientBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, #2a5550, rgba(255, 69, 0, 0));
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
  background-position: center;
  z-index: 0;
`;

export default Review;
