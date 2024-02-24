import styled, { useTheme } from "styled-components";
import Flex from "../../atoms/Flex";
import { Checkbox, CloseIcon, Text, TextArea } from "../..";
import Box from "../../atoms/Box";
import Input from "../../atoms/Input";
import { Dispatch, SetStateAction, useState } from "react";
import { theme } from "@/theme/constants";
import StyledFormSection from "../StyledFormSection";
import useStepFormData, {
  UseStepFormData,
} from "@/theme/hooks/useStepFormData";

interface StepForm1Props {
  //   data: UseStepFormData;
  //   updateData?: Dispatch<SetStateAction<UseStepFormData>>;
}

const StepForm1: React.FC<StepForm1Props> = () => {
  const {
    selectedCheckboxes,
    userFeedback1,
    userFeedback2,
    userInfo1,
    userInfo2,
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
          Pasul 1: Scopul tratamentului
        </Text>
      </Flex>
      <Box style={{ paddingTop: 20, paddingBottom: 20 }}>
        <Text bigger secondaryFont white lineHeight={"140%"}>
          Completează chestionarul de evaluare pentru a afla mai multe detalii
          despre problema dumneavoastră și pentru a afla disponibilitatea orei
          de tratament dorită de tine.
        </Text>
      </Box>
      <Box>
        <Flex style={{ gap: 40 }}>
          <StyledFormSection>
            <Box style={{ gap: 20, fontSize: theme.text.medium }}>
              <Text big white secondaryFont semiBold>
                Scopul tratamentului:
              </Text>
              <Box style={{ gap: 10 }}>
                <Checkbox
                  label="Întreținere"
                  selectedCheckboxes={selectedCheckboxes}
                  onChange={handleCheckboxChange}
                />
                <Checkbox
                  label="Stare de bine"
                  selectedCheckboxes={selectedCheckboxes}
                  onChange={handleCheckboxChange}
                />
                <Checkbox
                  label="Tratament terapeutic"
                  selectedCheckboxes={selectedCheckboxes}
                  onChange={handleCheckboxChange}
                />
              </Box>
            </Box>
            <StyledFormSection style={{ paddingTop: 0 }}>
              <TextArea
                id="Durata"
                placeholder="De cât timp ai problema ?..."
                value={userFeedback1}
                onChange={(value) => handleTextAreaChange(value, "Durata")}
              />
            </StyledFormSection>
          </StyledFormSection>

          <StyledFormSection>
            <Box style={{ gap: 20 }}>
              <Text big white secondaryFont bold>
                Natura problemei este?
              </Text>
              <Flex style={{ gap: 20 }}>
                <Box style={{ gap: 10 }}>
                  <Checkbox
                    label="Durerea"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                  <Checkbox
                    label="Amorțeală"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                  <Checkbox
                    label="Amețeală"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                  <Checkbox
                    label="Trigger point"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                </Box>
                <Box style={{ gap: 10, flex: 1 }}>
                  <Checkbox
                    label="Tensiunea musculară"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                  <Checkbox
                    label="Spate blocat"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                  <Checkbox
                    label="Migrene"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                  <Checkbox
                    label="Altele"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                </Box>
              </Flex>

              <Input
                type="text"
                placeholder="Altele"
                value={userInfo1}
                onChange={(e) =>
                  handleUserInfoChange(e.target.value, "Altele1")
                }
                name="Altele1"
                id="Altele1"
              />
            </Box>
          </StyledFormSection>
          <StyledFormSection>
            <Box style={{ gap: 20 }}>
              <Text big white secondaryFont bold>
                Unde este localizată ?
              </Text>
              <Flex style={{ gap: 20 }}>
                <Box style={{ gap: 10 }}>
                  <Checkbox
                    label="Cap"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                  <Checkbox
                    label="Zona cervicală"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                  <Checkbox
                    label="Zona toracală"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                  <Checkbox
                    label="Zona lombară"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                </Box>
                <Box style={{ gap: 10, flex: 1 }}>
                  <Checkbox
                    label="Zona membrelor superioare"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                  <Checkbox
                    label="Zona membrelor inferioare"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                  <Checkbox
                    label="Zona bazinului"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                  <Checkbox
                    label="Altele"
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                  />
                </Box>
              </Flex>

              <Input
                type="text"
                placeholder="Altele"
                value={userInfo2}
                onChange={(e) =>
                  handleUserInfoChange(e.target.value, "Altele2")
                }
                name="Altele2"
                id="Altele2"
              />
            </Box>
          </StyledFormSection>
        </Flex>
        <Flex style={{ gap: 40 }}>
          <StyledFormSection style={{ flex: 1, paddingTop: 0 }}>
            <Text big white secondaryFont bold>
              Poți descriere situația amănunțit ?
            </Text>
            <TextArea
              id="Despre"
              placeholder="Descrie situația ta aici..."
              value={userFeedback2}
              onChange={(value) => handleTextAreaChange(value, "Despre")}
            />
          </StyledFormSection>
        </Flex>
      </Box>
    </>
  );
};

export default StepForm1;
