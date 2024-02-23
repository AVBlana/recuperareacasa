import { theme } from "@/theme/constants";
import Button from "../../atoms/Button";
import { Checkbox, Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Input from "../../atoms/Input";
import useStepFormData from "@/theme/hooks/useStepFormData";
import StyledFormSection from "../StyledFormSection";
import { StepFormData } from "@/types/formTypes";

interface StepForm3Props {
  step1Data: StepFormData["step1Data"];
  step2Data: StepFormData["step2Data"];
}

const StepForm3: React.FC<StepForm3Props> = ({ step1Data, step2Data }) => {
  const {
    selectedCheckboxes,
    userFeedback1,
    userFeedback2,
    userName,
    userPhone,
    userEmail,
    userBlock,
    userStreet,
    userFloor,
    userNumber,
    userSc,
    userInfo1,
    userInfo2,
    selectedOption,
    isModalVisible,
    setSelectedCheckboxes,
    setUserFeedback1,
    setUserFeedback2,
    setUserName,
    setUserPhone,
    setUserEmail,
    setUserBlock,
    setUserFloor,
    setUserStreet,
    setUserNumber,
    setUserSc,
    setUserInfo1,
    setUserInfo2,
    setSelectedOption,
    setIsModalVisible,
    handleOptionChange,
    handleUserInfoChange,
    handleFeedbackChange,
    handleTextAreaChange,
    handleCheckboxChange,
  } = useStepFormData();

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
            Scopul tratamentului:{step1Data.selectedCheckboxes.join(", ")}
          </Text>
          <Text white big secondaryFont>
            Natura problemei:{step1Data.userFeedback1}
          </Text>
          <Text white big secondaryFont>
            Unde este localizată:{step1Data.selectedCheckboxes.join(", ")}
          </Text>
          <Text white big secondaryFont>
            Prenume:{step2Data.userName}
          </Text>
          <Text white big secondaryFont>
            Telefon:{step2Data.userPhone}
          </Text>
          <Text white big secondaryFont>
            Email:{step2Data.userEmail}
          </Text>
          <Text white big secondaryFont>
            Strada:{step2Data.userStreet}
          </Text>
          <Text white big secondaryFont>
            Nr:{step2Data.userNumber}
          </Text>
          <Text white big secondaryFont>
            Bloc:{step2Data.userBlock}
          </Text>
          <Text white big secondaryFont>
            Scara:{step2Data.userSc}
          </Text>
          <Text white big secondaryFont>
            Ap:{}
          </Text>
          <Text white big secondaryFont>
            Interval orar:{step2Data.selectedOption}
          </Text>
          <Text white big secondaryFont>
            Ziua preferata/e:{step2Data.selectedCheckboxes.join(", ")}
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
                selectedCheckboxes={selectedCheckboxes}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                label="Abonare"
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
