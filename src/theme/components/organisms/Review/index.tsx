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
      text: "Am ajuns la Alex la recomandarea mătușii mele, care lucrează ca recepționer la clinica unde el era terapeut. Faptul că a fost recomandat de un membru al familiei mi-a inspirat încredere de la bun început, dar după ce am lucrat cu el, am înțeles perfect de ce este atât de căutat. Alex este un terapeut manual extrem de profesionist și empatic, care m-a ajutat enorm. M-am simțit în siguranță și înțeles pe parcursul tratamentului, iar rezultatele au vorbit de la sine.Îl recomand cu toată încrederea oricui caută un specialist dedicat și de încredere!",
      reviewer: "Flaviu Balint",
      title: "Student-actor",
    },
    {
      rating: 5,
      text: "Foarte bun in ceea ce face, apreciez rabadrea si impilcarea lui Alex. Astept de fiecare data sa revina la mine acasa pentru un masaj revigorant !",
      reviewer: "Luca Oarga",
      title: "Consultant Imobiliar",
    },
    {
      rating: 5,
      text: "Dupa multe vizite medicale care doar au dust la mai multe analize si alte vizite, recuperarea medicala oferita de Alex m-a scapat de dureri si m-a ajutat sa revin la o viata mai activa, flexibila si fara durere. Apreciez foarte mult faptul ca de fiecare mi-a explicat starea in care ma aflam si ma indrumat in sedintele noastre. Recomand cu incredere si caldura serviciile, de altfel cum am si recomandat altor pacienti de ai lui.",
      reviewer: "Constantin",
      title: "Inginer",
    },
    {
      rating: 5,
      text: "Am avut placerea de a lucra impreuna cu Alex inca din iunie 2022 la o problema la un deget, aveam mobilitatea degetului redus drastica dar cu ajutor lui Alex am reusit sa imi recapat in proportie de 93% mobilitatea. . Am continuat sa lucrez impreuna cu el si cu orice alta accidentare de care m am lovit ca sportiv. Este un kinetoterapeut exceptional si profesionist. Intotdeauna este deschis sa ti raspunda la orice intrebari ai avea si sa te indrume sa intelege ce este de evitat si ce este recolandat sa faci ca sa te mentii sanatos, sa scapi de probleme si sa eviti accidentarile.",
      reviewer: "Szabi Kis",
      title: "Agent Vanzari",
    },
    {
      rating: 5,
      text: "Il recomand pe Alex pentru competenta lui profesionala, capacitatea de a rezolva cazuri mai deosebite si pentru ca este empatic si pune suflet in ceea ce face! Si face bine!",
      reviewer: "Camelia",
      title: "",
    },
    {
      rating: 5,
      text: "Apelez cu foarte mare încredere la serviciile lui Valentin! Este profesionist în adevaratul sens al cuvantului!",
      reviewer: "Todea Gabriel",
      title: "Antreprenor",
    },
    {
      rating: 5,
      text: "Alex e de un profesionalism desăvârșit, își ia timp să analizeze informațiile, explică clar potențialele cauze ale afecțiunilor, precum și modul în care acționează tratamentul aplicat. E foarte dedicat în rezolvarea problemei, nu fușerește și oferă soluții gândite și de bun simț. Recomand cu încredere!",
      reviewer: "Lia",
      title: "IT",
    },
    {
      rating: 5,
      text: "Dupa antrenamentele intense sau cursele de alergare, apelez cu incredere la Alex sa ma puna inapoi pe picioare si sa imi revitalizeze musculatura.",
      reviewer: "Anca",
      title: "Programator",
    },
    {
      rating: 5,
      text: "Sunt foarte mulțumit de serviciile lui Valentin, mi-a explicat de la început problema pe care o aveam, cauza acesteia și în cele din urmă rezolvarea. Totul ca la carte, recomand cu încredere.",
      reviewer: "Cătălin",
      title: "Inginer",
    },
    {
      rating: 5,
      text: "VA multmesc frumos pentru modul profesional si dariurea in recuperarea mamei mele dupa operatie, recomand",
      reviewer: "Cecilia Stoian",
      title: "",
    },
    {
      rating: 5,
      text: "Profesionist, energie faină, îl recomand cu încredere!",
      reviewer: "Hutanu Călin",
      title: "Tehnician dentar",
    },
    {
      rating: 5,
      text: "Il recomand cu incredere pe acest tanar cu experienta, cu mult bun simt, intotdeauna cauta sa ajute, este foarte pregatit profesional si iti explica in detaliu. Il recomand din toata inima! Cu cea mai mare incredere, este persoana potrivită sa ajute!",
      reviewer: "Ada",
      title: "Administrator",
    },
    {
      rating: 5,
      text: "Îl recomand cu drag pe Alex, mereu ne dă sfaturi super bune, și simți că vrea să te ajute cu adevărat, nu o face doar pentru un profit.",
      reviewer: "Norbi Major",
      title: "Pacient",
    },
    {
      rating: 5,
      text: "Prima sedinta de kineto a decurs foarte bine, spatele meu e deja mai fericit.Iar faptul ca vine acasa e un mare plus pentru mine, fiind mama cu un bebelus de 5 luni. Pe langa punctualitate, energie pozitiva si calma (apreciez mult asta caci da o stare de bine si de relaxare per total), imi mai place ca Alexandru explica foarte bine ceea ce face. De asemenea, e tare de omenie. Intr-un cuvant: PROFESIONALISM",
      reviewer: "Cristina Angela Varariu",
      title: "Pacienta",
    },

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
  height: auto;
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
  position: relative;
  padding: ${({ theme }) =>
    theme.media.isMobile
      ? "40px 20px"
      : theme.media.isTablet
      ? "100px 40px"
      : "100px 80px"};
  z-index: 2;
  height: auto;
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
