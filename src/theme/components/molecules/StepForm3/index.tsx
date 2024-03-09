import { theme } from "@/theme/constants";
import Button from "../../atoms/Button";
import { Checkbox, Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Input from "../../atoms/Input";
import StyledFormSection from "../StyledFormSection";
import { useContext } from "react";
import { StepsContext } from "../../organisms/StepsForm/context";
import styled, { useTheme } from "styled-components";

interface StepForm3Props {
  //   step1Data: FormData; // Adjust according to your data structure
  //   step2Data: FormData; // Adjust according to your data structure
}

const StepForm3: React.FC<StepForm3Props> = () => {
  const theme = useTheme();

  const {
    selectedCheckboxes,
    selectedScopes,
    selectedLocalizations,
    selectedProblems,
    selectedDay,
    selectedAgreementTerms,
    selectedNewsletter,
    userFeedback1,
    userFeedback2,
    userName,
    userPhone,
    userEmail,
    userBlock,
    userStreet,
    userNumber,
    userSc,
    userAp,
    selectedOption,
    handleCheckboxChange,
  } = useContext(StepsContext);

  return (
    <>
      <Flex
        style={{
          justifyContent: "space-between",
          paddingBottom: 12,
          borderBottomStyle: "solid",
          borderBottomWidth: 1,
          borderColor: theme.color.secondary,
        }}
      >
        <Text
          white
          secondaryFont
          bold
          style={{
            lineHeight: "150%",
            fontSize: theme.media.isMobile ? theme.text.big : theme.text.bigger,
          }}
        >
          Pasul 3: Revizuiește informațiile și trimite
        </Text>
      </Flex>
      <Box>
        <StyledFormSection
          style={{ flexDirection: theme.media.isMobile ? "column" : "row" }}
        >
          <Flex
            style={{
              gap: 40,
              flexDirection: theme.media.isMobile ? "column" : "row",
            }}
          >
            <Box style={{ gap: 10, paddingTop: theme.media.isMobile ? 20 : 0 }}>
              <StyledFormText>Scopul tratamentului:</StyledFormText>
              <StyledInfoBox>{selectedScopes?.join(", ")}</StyledInfoBox>
              <StyledFormText>Natura problemei:</StyledFormText>
              <StyledInfoBox> {selectedProblems?.join(", ")}</StyledInfoBox>
              <StyledFormText>Unde este localizată:</StyledFormText>
              <StyledInfoBox>{selectedLocalizations?.join(", ")}</StyledInfoBox>
              <StyledFormText>Durata problemei:</StyledFormText>
              <StyledInfoBox> {userFeedback1}</StyledInfoBox>
              <StyledFormText>Descriere amanunțită:</StyledFormText>
              <StyledInfoBox>{userFeedback2}</StyledInfoBox>
            </Box>
            <Box style={{ gap: 10 }}>
              <StyledFormText>Prenume:</StyledFormText>
              <StyledInfoBox>{userName}</StyledInfoBox>
              <StyledFormText>Telefon:</StyledFormText>
              <StyledInfoBox>{userPhone}</StyledInfoBox>
              <StyledFormText>Email:</StyledFormText>
              <StyledInfoBox>{userEmail}</StyledInfoBox>
              <StyledFormText>Strada:</StyledFormText>
              <StyledInfoBox>{userStreet}</StyledInfoBox>

              <Flex
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <StyledFormText>Nr:</StyledFormText>
                <StyledInfoBox>{userNumber}</StyledInfoBox>

                <StyledFormText>Bloc:</StyledFormText>
                <StyledInfoBox>{userBlock}</StyledInfoBox>

                <StyledFormText>Scara:</StyledFormText>
                <StyledInfoBox>{userSc}</StyledInfoBox>

                <StyledFormText>Ap:</StyledFormText>
                <StyledInfoBox>{userAp}</StyledInfoBox>
              </Flex>
              <StyledFormText>Interval orar:</StyledFormText>
              <StyledInfoBox>{selectedOption}</StyledInfoBox>

              <StyledFormText>Ziua preferata/e:</StyledFormText>
              <StyledInfoBox>{selectedDay.join(", ")}</StyledInfoBox>
            </Box>
          </Flex>
        </StyledFormSection>
      </Box>

      <StyledFormSection
        style={{
          borderTopWidth: 1,
          borderTopStyle: "solid",
          borderTopColor: theme.color.secondary,
          paddingBottom: 0,
          paddingTop: theme.media.isMobile ? 20 : 0,
        }}
      >
        <Text big white secondaryFont bold>
          Politica de confidențialitate
        </Text>

        <Flex
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 20,
            flexDirection: theme.media.isMobile ? "column" : "row",
          }}
        >
          <Box style={{ alignItems: "center", gap: 20 }}>
            <Flex
              style={{
                gap: 20,
                flexDirection: theme.media.isMobile ? "column" : "row",
              }}
            >
              <Text white small>
                Făcând clic pe „Sunt de acord”, confirmați că ați citit, înțeles
                și sunteți de acord să respectați acești termeni și condiții.
              </Text>
              <Checkbox
                label="Sunt de acord"
                id="agree"
                selectedCheckboxes={selectedAgreementTerms}
                onChange={handleCheckboxChange}
                style={{ minWidth: 140 }}
              />
            </Flex>
            <Flex
              style={{
                gap: 20,
                flexDirection: theme.media.isMobile ? "column" : "row",
              }}
            >
              <Text white small>
                Făcând clic pe „Abonare”, sunteți de acord să primiți buletine
                informative de la noi cu posibilitatea de dezabonare în orice
                moment.
              </Text>
              <Checkbox
                label="Abonare"
                id="subscribe"
                selectedCheckboxes={selectedNewsletter}
                onChange={handleCheckboxChange}
                style={{ minWidth: 140 }}
              />
            </Flex>
          </Box>
        </Flex>
      </StyledFormSection>
    </>
  );
};

const StyledFormText = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => (theme.media.isMobile ? "" : theme.text.big)};
  font-family: ${({ theme }) => theme.text.secondary};
`;
const StyledInfoBox = styled.div`
  padding: 10px;
  background: ${theme.color.white};
  color: ${theme.color.primary};
  border-radius: 10px;
`;

export default StepForm3;
