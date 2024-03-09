import { Checkbox, CloseIcon, RadioButton } from "..";
import Box from "../../atoms/Box";
import { Text } from "../..";
import Flex from "../../atoms/Flex";

import StyledFormSection from "../StyledFormSection";
import { theme } from "@/theme/constants";
import Input from "../../atoms/Input";
import { Dispatch, SetStateAction, useContext } from "react";
import { StepsContext } from "../../organisms/StepsForm/context";
import { useTheme } from "styled-components";

interface StepForm2Props {
  //   data: UseStepFormData;
  //   updateData?: Dispatch<SetStateAction<UseStepFormData>>;
}

const StepForm2: React.FC<StepForm2Props> = () => {
  const theme = useTheme();

  const {
    selectedCheckboxes,
    selectedDay,
    userName,
    userPhone,
    userEmail,
    userBlock,
    userStreet,
    userNumber,
    userSc,
    userAp,
    selectedOption,
    handleOptionChange,
    handleUserInfoChange,
    handleCheckboxChange,
    handleCloseModal,
  } = useContext(StepsContext);

  const inputStyle = {
    padding: 10,
    borderRadius: 10,
    background: theme.color.white,
    width: "100%",
    color: theme.color.black,
  };

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
            fontSize: theme.media.isMobile ? theme.text.big : theme.text.bigger,
          }}
        >
          Pasul 2: Disponibilitatea
        </Text>
        <Box
          onClick={handleCloseModal}
          style={{ cursor: "pointer", padding: 5 }}
        >
          <CloseIcon size={16} fill={theme.color.white} />
        </Box>
      </Flex>
      <StyledFormSection
        style={{ maxWidth: 400, paddingTop: theme.media.isMobile ? 20 : 0 }}
      >
        <Text
          white
          secondaryFont
          bold
          style={{
            fontSize: theme.media.isMobile ? theme.text.medium : theme.text.big,
          }}
        >
          Să știm cui ne adresăm
        </Text>
        <Box style={{ gap: 10 }}>
          <Flex style={{ gap: 10 }}>
            <Input
              type="text"
              placeholder="Prenume"
              value={userName}
              onChange={(e) => handleUserInfoChange(e.target.value, "Prenume")}
              name="Name"
              id="Name"
              style={inputStyle}
            />
            <Input
              type="text"
              placeholder="Telefon"
              value={userPhone}
              onChange={(e) => handleUserInfoChange(e.target.value, "Telefon")}
              name="Phone"
              id="Phone"
              style={inputStyle}
            />
          </Flex>

          <Input
            type="text"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => handleUserInfoChange(e.target.value, "Email")}
            name="Email"
            id="Email"
            style={inputStyle}
          />
          <Input
            type="text"
            placeholder="Strada"
            value={userStreet}
            onChange={(e) => handleUserInfoChange(e.target.value, "Strada")}
            name="Street"
            id="Street"
            style={inputStyle}
          />
          <Flex style={{ gap: 10 }}>
            <Input
              type="text"
              placeholder="Nr"
              value={userNumber}
              onChange={(e) => handleUserInfoChange(e.target.value, "Nr")}
              name="Nr"
              id="Nr"
              style={inputStyle}
            />
            <Input
              type="text"
              placeholder="Bloc"
              value={userBlock}
              onChange={(e) => handleUserInfoChange(e.target.value, "Bloc")}
              name="Block"
              id="Block"
              style={inputStyle}
            />
            <Input
              type="text"
              placeholder="Scara"
              value={userSc}
              onChange={(e) => handleUserInfoChange(e.target.value, "Scara")}
              name="Sc"
              id="Sc"
              style={inputStyle}
            />
            <Input
              type="text"
              placeholder="Ap"
              value={userAp}
              onChange={(e) => handleUserInfoChange(e.target.value, "Ap")}
              name="Ap"
              id="Ap"
              style={inputStyle}
            />
          </Flex>
        </Box>
      </StyledFormSection>
      <StyledFormSection>
        <Text
          white
          secondaryFont
          bold
          style={{
            fontSize: theme.media.isMobile ? theme.text.medium : theme.text.big,
          }}
        >
          În ce interval de ore sunteți disponibil/ă ?
        </Text>

        <Flex
          style={{
            justifyContent: "space-between",
            flexDirection: theme.media.isMobile ? "column" : "row",
            gap: theme.media.isMobile ? 10 : 0,
          }}
        >
          <RadioButton
            label="8 - 12"
            value="8 - 12"
            isSelected={selectedOption === "8 - 12"}
            onChange={handleOptionChange}
            groupName="options"
          />
          <RadioButton
            label="12 - 17"
            value="12 - 17"
            isSelected={selectedOption === "12 - 17"}
            onChange={handleOptionChange}
            groupName="options"
          />
          <RadioButton
            label="17 - 20"
            value="17 - 20"
            isSelected={selectedOption === "17 - 20"}
            onChange={handleOptionChange}
            groupName="options"
          />
        </Flex>
      </StyledFormSection>
      <StyledFormSection>
        <Text
          white
          secondaryFont
          bold
          style={{
            lineHeight: "150%",
            fontSize: theme.media.isMobile ? theme.text.medium : theme.text.big,
          }}
        >
          Aveți o zi preferată ?
        </Text>
        <Flex
          style={{
            justifyContent: "space-between",
            flexDirection: theme.media.isMobile ? "column" : "row",
            gap: theme.media.isMobile ? 10 : 0,
          }}
        >
          <Checkbox
            label="Luni"
            id="luni"
            selectedCheckboxes={selectedDay}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            id="marti"
            label="Marți"
            selectedCheckboxes={selectedDay}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            id="miercuri"
            label="Miercuri"
            selectedCheckboxes={selectedDay}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="Joi"
            id="joi"
            selectedCheckboxes={selectedDay}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            id="vineri"
            label="Vineri"
            selectedCheckboxes={selectedDay}
            onChange={handleCheckboxChange}
          />
        </Flex>
      </StyledFormSection>
    </>
  );
};

export default StepForm2;
