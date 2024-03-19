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

  // const { reviews, addReview } = useReviewContext();
  const { addReview } = useReviewContext();

  // useEffect(() => {
  //   // Load reviews from localStorage on component mount
  //   const storedReviews = localStorage.getItem("reviews");
  //   if (storedReviews) {
  //     try {
  //       const parsedReviews = JSON.parse(storedReviews);

  //       if (Array.isArray(parsedReviews)) {
  //         // Use spread syntax to add each review individually
  //         parsedReviews.forEach((review) => addReview(review));
  //       } else {
  //         console.error("Parsed reviews is not an array.");
  //       }
  //     } catch (error) {
  //       console.error("Error parsing stored reviews:", error);
  //     }
  //   }
  // }, []); // Run this effect only once on component mount

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
        <Flex>
          <ReviewCard
            review={reviews[currentReviewIndex]}
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
  min-height: ${({ theme }) => (theme.media.isMobile ? "450px" : "550px")};
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
