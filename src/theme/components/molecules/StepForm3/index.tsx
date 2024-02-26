import { theme } from "@/theme/constants";
import Button from "../../atoms/Button";
import { Checkbox, Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Input from "../../atoms/Input";
import StyledFormSection from "../StyledFormSection";
import { useContext } from "react";
import { StepsContext } from "../../organisms/StepsForm/context";
import styled from "styled-components";

interface StepForm3Props {
  //   step1Data: FormData; // Adjust according to your data structure
  //   step2Data: FormData; // Adjust according to your data structure
}

const StepForm3: React.FC<StepForm3Props> = () => {
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
        <Text bigger white secondaryFont bold>
          Pasul 3: Revizuiește informațiile și trimite
        </Text>
      </Flex>
      <Box>
        <StyledFormSection>
          <Flex style={{ gap: 40 }}>
            <Box style={{ gap: 10 }}>
              <Text white big secondaryFont>
                Scopul tratamentului:
              </Text>

              <StyledInfoBox>{selectedScopes?.join(", ")}</StyledInfoBox>
              <Text white big secondaryFont>
                Natura problemei:
              </Text>
              <StyledInfoBox> {selectedProblems?.join(", ")}</StyledInfoBox>

              <Text white big secondaryFont>
                Unde este localizată:
              </Text>
              <StyledInfoBox>{selectedLocalizations?.join(", ")}</StyledInfoBox>
              <Text white big secondaryFont>
                Durata problemei:
              </Text>
              <StyledInfoBox> {userFeedback1}</StyledInfoBox>
              <Text white big secondaryFont>
                Descriere amanunțită:
              </Text>
              <StyledInfoBox>{userFeedback2}</StyledInfoBox>
            </Box>
            <Box style={{ gap: 10 }}>
              <Text white big secondaryFont>
                Prenume:
              </Text>
              <StyledInfoBox>{userName}</StyledInfoBox>
              <Text white big secondaryFont>
                Telefon:
              </Text>
              <StyledInfoBox>{userPhone}</StyledInfoBox>

              <Text white big secondaryFont>
                Email:
              </Text>
              <StyledInfoBox>{userEmail}</StyledInfoBox>

              <Text white big secondaryFont>
                Strada:
              </Text>
              <StyledInfoBox>{userStreet}</StyledInfoBox>

              <Flex
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Text white big secondaryFont>
                  Nr:
                </Text>
                <StyledInfoBox>{userNumber}</StyledInfoBox>

                <Text white big secondaryFont>
                  Bloc:
                </Text>
                <StyledInfoBox>{userBlock}</StyledInfoBox>

                <Text white big secondaryFont>
                  Scara:
                </Text>
                <StyledInfoBox>{userSc}</StyledInfoBox>

                <Text white big secondaryFont>
                  Ap:
                </Text>
                <StyledInfoBox>{userAp}</StyledInfoBox>
              </Flex>
              <Text white big secondaryFont>
                Interval orar:
              </Text>
              <StyledInfoBox>{selectedOption}</StyledInfoBox>

              <Text white big secondaryFont>
                Ziua preferata/e:
              </Text>
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
          }}
        >
          <Box style={{ alignItems: "center", gap: 20 }}>
            <Flex style={{ gap: 20 }}>
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
            <Flex style={{ gap: 20 }}>
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

const StyledInfoBox = styled.div`
  padding: 10px;
  background: ${theme.color.white};
  color: ${theme.color.primary};
  border-radius: 10px;
`;

export default StepForm3;
