import { Checkbox, RadioButton } from "..";
import Box from "../../atoms/Box";
import { Text } from "../..";
import Flex from "../../atoms/Flex";

import StyledFormSection from "../StyledFormSection";
import { theme } from "@/theme/constants";
import Input from "../../atoms/Input";
import { Dispatch, SetStateAction, useContext } from "react";
import { StepsContext } from "../../organisms/StepsForm/context";

interface StepForm2Props {
  //   data: UseStepFormData;
  //   updateData?: Dispatch<SetStateAction<UseStepFormData>>;
}

const StepForm2: React.FC<StepForm2Props> = () => {
  const {
    selectedCheckboxes,
    userName,
    userPhone,
    userEmail,
    userBlock,
    userStreet,
    userNumber,
    userSc,
    selectedOption,
    handleOptionChange,
    handleUserInfoChange,
    handleCheckboxChange,
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
        <Text bigger white secondaryFont bold>
          Pasul 2: Disponibilitatea
        </Text>
      </Flex>
      <StyledFormSection style={{ maxWidth: 400 }}>
        <Text big white secondaryFont bold>
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
          </Flex>
        </Box>
      </StyledFormSection>
      <StyledFormSection>
        <Text big white secondaryFont bold>
          În ce interval de ore sunteți disponibil/ă ?
        </Text>

        <Flex style={{ justifyContent: "space-between" }}>
          <RadioButton
            label="8 - 12"
            value="option1"
            isSelected={selectedOption === "option1"}
            onChange={handleOptionChange}
            groupName="options"
          />
          <RadioButton
            label="12 - 17"
            value="option2"
            isSelected={selectedOption === "option2"}
            onChange={handleOptionChange}
            groupName="options"
          />
          <RadioButton
            label="17 - 20"
            value="option3"
            isSelected={selectedOption === "option3"}
            onChange={handleOptionChange}
            groupName="options"
          />
        </Flex>
      </StyledFormSection>
      <StyledFormSection>
        <Text big white secondaryFont bold>
          Aveți o zi preferată ?
        </Text>
        <Flex style={{ justifyContent: "space-between" }}>
          <Checkbox
            label="Luni"
            id="luni"
            selectedCheckboxes={selectedCheckboxes}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            id="marti"
            label="Marți"
            selectedCheckboxes={selectedCheckboxes}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            id="miercuri"
            label="Miercuri"
            selectedCheckboxes={selectedCheckboxes}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="Joi"
            id="joi"
            selectedCheckboxes={selectedCheckboxes}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            id="vineri"
            label="Vineri"
            selectedCheckboxes={selectedCheckboxes}
            onChange={handleCheckboxChange}
          />
        </Flex>
      </StyledFormSection>
    </>
  );
};

export default StepForm2;
