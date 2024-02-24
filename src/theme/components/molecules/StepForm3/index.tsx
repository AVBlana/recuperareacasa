import { theme } from "@/theme/constants";
import Button from "../../atoms/Button";
import { Checkbox, Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Input from "../../atoms/Input";
import StyledFormSection from "../StyledFormSection";
import { useContext } from "react";
import { StepsContext } from "../../organisms/StepsForm/context";

interface StepForm3Props {
  //   step1Data: FormData; // Adjust according to your data structure
  //   step2Data: FormData; // Adjust according to your data structure
}

const StepForm3: React.FC<StepForm3Props> = () => {
  const {
    selectedCheckboxes,
    userFeedback1,
    userName,
    userPhone,
    userEmail,
    userBlock,
    userStreet,
    userNumber,
    userSc,
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
          <Text white big secondaryFont>
            Scopul tratamentului:{selectedCheckboxes?.join(", ")}
          </Text>
          <Text white big secondaryFont>
            Natura problemei:{userFeedback1}
          </Text>
          <Text white big secondaryFont>
            Unde este localizată:{selectedCheckboxes?.join(", ")}
          </Text>
          <Text white big secondaryFont>
            Prenume:{userName}
          </Text>
          <Text white big secondaryFont>
            Telefon:{userPhone}
          </Text>
          <Text white big secondaryFont>
            Email:{userEmail}
          </Text>
          <Text white big secondaryFont>
            Strada:{userStreet}
          </Text>
          <Text white big secondaryFont>
            Nr:{userNumber}
          </Text>
          <Text white big secondaryFont>
            Bloc:{userBlock}
          </Text>
          <Text white big secondaryFont>
            Scara:{userSc}
          </Text>
          <Text white big secondaryFont>
            Ap:{}
          </Text>
          <Text white big secondaryFont>
            Interval orar:{selectedOption}
          </Text>
          <Text white big secondaryFont>
            Ziua preferata/e:{selectedCheckboxes.join(", ")}
          </Text>
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
          <Flex style={{ alignItems: "center" }}>
            <Box style={{ gap: 10, minWidth: 140 }}>
              <Checkbox
                label="Sunt de acord"
                id="agree"
                selectedCheckboxes={selectedCheckboxes}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                label="Abonare"
                id="abonare"
                selectedCheckboxes={selectedCheckboxes}
                onChange={handleCheckboxChange}
              />
            </Box>
            <Box style={{ gap: 10 }}>
              <Text white small>
                Făcând clic pe „Sunt de acord”, confirmați că ați citit, înțeles
                și sunteți de acord să respectați acești termeni și condiții.
              </Text>
              <Text white small>
                Făcând clic pe „Abonare”, sunteți de acord să primiți buletine
                informative de la noi cu posibilitatea de dezabonare în orice
                moment.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </StyledFormSection>
    </>
  );
};

export default StepForm3;
