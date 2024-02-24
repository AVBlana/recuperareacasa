import styled, { useTheme } from "styled-components";
import Flex from "../../atoms/Flex";
import { Checkbox, CloseIcon, Text, TextArea } from "../..";
import Box from "../../atoms/Box";
import Input from "../../atoms/Input";
import { Dispatch, SetStateAction, useContext, useRef, useState } from "react";
import { theme } from "@/theme/constants";
import StyledFormSection from "../StyledFormSection";
import { StepsContext } from "../../organisms/StepsForm/context";

const StepForm1 = () => {
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
  } = useContext(StepsContext);

  const othersRef = useRef<HTMLInputElement>(null);
  const others2Ref = useRef<HTMLInputElement>(null);

  const scopes = [
    {
      label: "Întreținere",
      id: "intretinere",
    },
    {
      label: "Stare de bine",
      id: "stare-de-bine",
    },
    {
      label: "Tratament terapeutic",
      id: "tratament-terapeutic",
    },
  ];

  const problems = [
    {
      label: "Durerea",
      id: "durerea",
    },
    {
      label: "Amorțeală",
      id: "amorteala",
    },
    {
      label: "Amețeală",
      id: "ameteala",
    },
    {
      label: "Trigger point",
      id: "trigger-point",
    },
    {
      label: "Tensiunea musculară",
      id: "tensiunea-musculara",
    },
    {
      label: "Spate blocat",
      id: "spate-blocat",
    },
    {
      label: "Migrene",
      id: "migrene",
    },
    {
      label: "Altele",
      id: "altele",
      onChange: (id: string) => {
        if (!selectedCheckboxes.some((item) => item === "altele")) {
          othersRef?.current?.focus();
        }
        handleCheckboxChange(id);
      },
    },
  ];

  const localizations = [
    {
      label: "Cap",
      id: "cap",
    },
    {
      label: "Zona cervicală",
      id: "zona-cervicala",
    },
    {
      label: "Zona toracală",
      id: "zona-toracala",
    },
    {
      label: "Zona lombară",
      id: "zona-lombara",
    },
    {
      label: "Zona membrelor superioare",
      id: "zona-membrelor-superioare",
    },
    {
      label: "Zona membrelor inferioare",
      id: "zona-membrelor-inferioare",
    },
    {
      label: "Zona bazinului",
      id: "zona-bazinului",
    },
    {
      label: "Altele",
      id: "altele-2",
      onChange: (id: string) => {
        if (!selectedCheckboxes.some((item) => item === "altele-2")) {
          others2Ref?.current?.focus();
        }
        handleCheckboxChange(id);
      },
    },
  ];

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

              <Flex
                style={{
                  justifyContent: "space-between",
                  gap: theme.spacings.medium,
                  flexWrap: "wrap",
                }}
              >
                {scopes.map((scope) => (
                  <Checkbox
                    key={`scope-${scope.id}`}
                    label={scope.label}
                    id={scope.id}
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={handleCheckboxChange}
                    style={{ width: "calc(50% - 10px)" }}
                  />
                ))}
              </Flex>
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
              <Flex
                style={{
                  justifyContent: "space-between",
                  gap: theme.spacings.medium,
                  flexWrap: "wrap",
                }}
              >
                {problems.map((problem) => (
                  <Checkbox
                    key={`problem-${problem.id}`}
                    label={problem.label}
                    id={problem.id}
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={problem.onChange ?? handleCheckboxChange}
                    style={{ width: "calc(50% - 10px)" }}
                  />
                ))}
              </Flex>

              <Input
                // @ts-ignore
                ref={othersRef}
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
              <Flex
                style={{
                  justifyContent: "space-between",
                  gap: theme.spacings.medium,
                  flexWrap: "wrap",
                }}
              >
                {localizations.map((localization) => (
                  <Checkbox
                    key={`localization-${localization.id}`}
                    label={localization.label}
                    id={localization.id}
                    selectedCheckboxes={selectedCheckboxes}
                    onChange={localization.onChange ?? handleCheckboxChange}
                    style={{ width: "calc(50% - 10px)" }}
                  />
                ))}
              </Flex>

              <Input
                // @ts-ignore
                ref={others2Ref}
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
