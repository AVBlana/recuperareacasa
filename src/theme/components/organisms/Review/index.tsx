import styled, { useTheme } from "styled-components";
import ReviewCard from "../../molecules/ReviewCard";
import { useEffect, useState } from "react";
import ReviewForm from "../../molecules/ReviewForm";
import { useReviewContext } from "./ReviewContext";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import { Text } from "../../atoms";
import { StarIcon } from "../../molecules/Icons/StarIcon";

const Review = () => {
  const theme = useTheme();

  const reviews = [
    {
      rating: 5,
      text: "Îl recomand pe Alex! Este foarte priceput in ceea ce face si explica si foarte bine. Este un om cu mult bun simt si respect.",
      reviewer: "Welther Ramona-Franziska",
      title: "Pacient",
    },
    {
      rating: 5,
      text: "Il recomand pe Alex cu mare incredere si caldura!",
      reviewer: "Anda David",
      title: "Pacient",
    },
    {
      rating: 5,
      text: "Recomand ! este un fizioterapeut excepțional. M-a ajutat foarte mult după accidentul la cot pentru recuperare cât și pentru durerile cu spatele. Mulțumesc!",
      reviewer: "Dan Inulescu",
      title: "Pacient",
    },
    {
      rating: 5,
      text: "Cel mai bine îi să fii masat acasă.. merge un somn după! Recomand! Mulțumim Alex!",
      reviewer: "Daniel Ignat",
      title: "Pacient",
    },
    {
      rating: 5,
      text: "Alex este cel mai bun Fizio Terapeut cu care am lucrat și îl recomand oricui. Este un băiat cu bun simt, foarte dedicat și un bun partener de conversație.",
      reviewer: "Razvan Suditu",
      title: "Pacient",
    },
    {
      rating: 5,
      text: "Îl recomand pe Alex datorita experientei, atitudinii profesionale si a prezentei vindecatoare. Împreuna am pus genunchiul meu accidentat din nou în maximă functionalitate. Ave mișcare!",
      reviewer: "Dragos Muntean",
      title: "Pacient",
    },
    {
      rating: 5,
      text: "Alex, un om cu suflet mare. Imi place la el ca stie sa discute cu pacientul in asa fel incat sa creeze o stare de bine. Pe langa faptul ca reuseste sa analizeze problemele ce le poate avea un om, stie sa le si trateze, atat cele fizice cat si cele psihice as putea spune deoarece are un simt dezvoltat de a detensiona punctele inflamate. Eu personal ma inteleg foarte bine cu el si m-a ajutat de-a lungul timpului in diferite probleme cauzate de sporturile pe care le practic. Recomand cu incredere serviciile lui, am trecut prin toate si ma declar multumit.",
      reviewer: "Oproiu Lucian",
      title: "Pacient",
    },
    {
      rating: 5,
      text: "în primul rând e foarte confortabil sa fii vizitat în mediul tău,evitand stresul deplasării,(noi fiind 1 pic mai comozi)în ceea ce priveste pe Alex ii ducem lipsa foarte mult ptr.ca greu am dat de el,am fost foarte mulțumiți de rezultatele muncii lui dar și de el ca persoană ,un tip deschis,comunicativ, dornic sa ajute,I ți doresti ca și prieten,îl recomandăm cu căldură",
      reviewer: "Lőrincz Jutka",
      title: "Pacient",
    },
    {
      rating: 5,
      text: "Un excelent profesionist, cu maini de aur si vaste cunostinte in domeniul medical. Alex este o persoana carismatica si foarte placuta. Recomand cu incredere",
      reviewer: "Dana Oarga",
      title: "Pacient",
    },
    {
      rating: 5,
      text: "Recomand cu încredere! Foarte potrivit masajul pentru orice tip de recuperare.",
      reviewer: "Razvan Todea",
      title: "Pacient",
    },
    {
      rating: 5,
      text: "Cu Alex ca fizioterapeut, am experimentat o îngrijire atentă și personalizată, adaptată nevoilor mele specifice de recuperare. Recomand cu încredere serviciile sale profesionale și abordarea sa dedicată tuturor celor care doresc să-și îmbunătățească performanța și să evolueze în activitatea fizică.",
      reviewer: "Denisa Vlad",
      title: "Pacient",
    },
    {
      rating: 5,
      text: "Pasiune, seriozitate, profesionalism. Mulțumim pentru felul în care ai grijă de Maia.",
      reviewer: "Cristina Metea",
      title: "Pacient",
    },
  ];

  const { addReview } = useReviewContext();

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isReviewSent, setReviewSent] = useState(false);

  const handleReviewSubmit = (review: any) => {
    addReview(review);
    setReviewSent(true);

    setTimeout(() => {
      setReviewSent(false);
    }, 3000);
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const totalReviews = reviews.length;
  const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRatings / totalReviews;

  return (
    <StyledReviewContainer>
      <StyledGradientBox />
      <StyledReviewBox>
        <Flex
          style={{
            gap: 20,
            paddingBottom: 40,
            alignItems: "center",
          }}
        >
          <Text
            white
            secondaryFont
            style={{
              fontSize: theme.media.isMobile
                ? theme.text.big
                : theme.text.biggest,
            }}
          >
            Total Recomandări: {totalReviews}
          </Text>
          <Text
            white
            secondaryFont
            style={{
              fontSize: theme.media.isMobile
                ? theme.text.big
                : theme.text.biggest,
            }}
          >
            Notă: {averageRating.toFixed(1)} / 5{" "}
            <StarIcon size={theme.media.isMobile ? 14 : 20} filled />
          </Text>
        </Flex>
        <Flex
          style={{
            maxWidth: 1500,
            justifyContent: "space-between",
            flexDirection: theme.media.isMobile ? "column" : "row",
            gap: theme.media.isMobile ? 40 : theme.media.isTablet ? 40 : 80,
          }}
        >
          <Box style={{ gap: 40 }}>
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
          </Box>

          <ReviewForm onSubmit={handleReviewSubmit} />
          {isReviewSent ? (
            <NotificationMessage>
              Multumim pentru recenzia ta!
            </NotificationMessage>
          ) : null}
        </Flex>
      </StyledReviewBox>

      <StyledImageBox />
    </StyledReviewContainer>
  );
};

const NotificationMessage = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100000;
`;

const StyledReviewContainer = styled.div`
  position: relative;
  min-height: ${({ theme }) =>
    theme.media.isMobile ? "850px" : theme.media.isTablet ? "850px" : "650px"};
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
    theme.media.isMobile
      ? "40px 20px"
      : theme.media.isTablet
      ? "100px 40px"
      : "100px 80px"};
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
