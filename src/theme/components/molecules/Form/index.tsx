import { useState } from "react";
import {
  Checkbox,
  CloseIcon,
  TextArea,
  SvgIcon,
  Text,
  InputBox,
  RadioButton,
} from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import { theme } from "@/theme/constants";
import Input from "../../atoms/Input";
import styled from "styled-components";
import Modal from "../Modal";

const Form = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [userFeedback, setUserFeedback] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOptionChange = (value: any) => {
    setSelectedOption(value);
  };

  const handleUserInfoChange = (value: string) => {
    setUserInfo(value);
  };

  const handleFeedbackChange = (value: string) => {
    setUserFeedback(value);
  };

  return (
    <>
      <Box style={{ alignItems: "flex-end", pointerEvents: "none" }}>
        <Box
          style={{
            background: theme.color.primary,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            padding: 40,
            gap: 20,
            width: "40%",
          }}
        >
          <Flex
            style={{
              justifyContent: "space-between",
              paddingBottom: 12,
              borderBottomStyle: "solid",
              borderBottomWidth: 1,
              borderColor: theme.color.secondary,
            }}
          >
            <CloseIcon
              size={16}
              fill={theme.color.white}
              onClick={() => {
                setIsModalVisible(false);
              }}
            />

            <Text big white secondaryFont bold>
              Chestionar evaluare obiectivă
            </Text>
          </Flex>

          <StyledFormBox>
            <Box>
              <Text bigger secondaryFont white lineHeight={"140%"}>
                Completează chestionarul de evaluare pentru a afla mai multe
                detalii despre problema dumneavoastră și a afla disponibilitatea
                orei de tratament dorita de tine.
              </Text>
            </Box>
            <Box style={{ gap: 20, fontSize: theme.text.medium }}>
              <Text big white secondaryFont>
                Scopul tratamentului:
              </Text>
              <Box style={{ gap: 10 }}>
                <Checkbox
                  label="Întreținere"
                  selectedCheckboxes={selectedCheckboxes}
                  setSelectedCheckboxes={setSelectedCheckboxes}
                />
                <Checkbox
                  label="Tratament pentru o stare de bine"
                  selectedCheckboxes={selectedCheckboxes}
                  setSelectedCheckboxes={setSelectedCheckboxes}
                />
                <Checkbox
                  label="Tratament terapeutic ce vizează o problemă"
                  selectedCheckboxes={selectedCheckboxes}
                  setSelectedCheckboxes={setSelectedCheckboxes}
                />
              </Box>
            </Box>
          </StyledFormBox>
          <StyledFormBox style={{ gap: 20 }}>
            <Text big white secondaryFont bold>
              De cât timp ai problema ?
            </Text>
            <TextArea
              placeholder="Povestește-ne despre problema ta..."
              value={userFeedback}
              onChange={handleFeedbackChange}
            />
          </StyledFormBox>
          <StyledFormBox>
            <Box style={{ gap: 20 }}>
              <Text big white secondaryFont bold>
                Natura problemei este?
              </Text>
              <Flex>
                <Box style={{ gap: 10, flex: 1 }}>
                  <Checkbox
                    label="Durerea"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                  <Checkbox
                    label="Amorțeală"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                  <Checkbox
                    label="Amețeală"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                  <Checkbox
                    label="Trigger point"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                </Box>
                <Box style={{ gap: 10, flex: 1 }}>
                  <Checkbox
                    label="Tensiunea musculară"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                  <Checkbox
                    label="Spate blocat"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                  <Checkbox
                    label="Migrene"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                  <Checkbox
                    label="Altele"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                </Box>
              </Flex>

              <Input
                type="text"
                placeholder="Altele"
                value={userInfo}
                name="Others"
                id="1"
              />
            </Box>
          </StyledFormBox>
          <StyledFormBox>
            <Box style={{ gap: 20 }}>
              <Text big white secondaryFont bold>
                Unde este localizată ?
              </Text>
              <Flex>
                <Box style={{ gap: 10, flex: 1 }}>
                  <Checkbox
                    label="Cap"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                  <Checkbox
                    label="Zona cervicală"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                  <Checkbox
                    label="Zona toracală"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                  <Checkbox
                    label="Zona lombară"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                </Box>
                <Box style={{ gap: 10, flex: 1 }}>
                  <Checkbox
                    label="Zona membrelor superioare"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                  <Checkbox
                    label="Zona membrelor inferioare"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                  <Checkbox
                    label="Zona bazinului"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                  <Checkbox
                    label="Altele"
                    selectedCheckboxes={selectedCheckboxes}
                    setSelectedCheckboxes={setSelectedCheckboxes}
                  />
                </Box>
              </Flex>

              <Input
                type="text"
                placeholder="Altele"
                value={userInfo}
                name="Others"
                id="2"
              />
            </Box>
          </StyledFormBox>
          <StyledFormBox>
            <Text big white secondaryFont bold>
              Dacă dorești poți face în căsuța de mai jos o descriere mai
              amănunțită a situației cu care te confrunți
            </Text>
            <TextArea
              placeholder="Descrie situația ta aici..."
              value={userFeedback}
              onChange={handleFeedbackChange}
            />
          </StyledFormBox>
          <StyledFormBox>
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
          </StyledFormBox>
          <StyledFormBox>
            <Text big white secondaryFont bold>
              Unde este localizată ?
            </Text>
            <Flex style={{ justifyContent: "space-between" }}>
              <Checkbox
                label="Luni"
                selectedCheckboxes={selectedCheckboxes}
                setSelectedCheckboxes={setSelectedCheckboxes}
              />
              <Checkbox
                label="Marți"
                selectedCheckboxes={selectedCheckboxes}
                setSelectedCheckboxes={setSelectedCheckboxes}
              />
              <Checkbox
                label="Miercuri"
                selectedCheckboxes={selectedCheckboxes}
                setSelectedCheckboxes={setSelectedCheckboxes}
              />
              <Checkbox
                label="Joi"
                selectedCheckboxes={selectedCheckboxes}
                setSelectedCheckboxes={setSelectedCheckboxes}
              />
              <Checkbox
                label="Vineri"
                selectedCheckboxes={selectedCheckboxes}
                setSelectedCheckboxes={setSelectedCheckboxes}
              />
            </Flex>
          </StyledFormBox>
        </Box>
      </Box>
    </>
  );
};

const StyledFormBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: ${theme.color.secondary};
  gap: 20px;
`;

export default Form;
