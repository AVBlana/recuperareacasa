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
    selectedScopes,
    selectedProblems,
    selectedLocalizations,
    userFeedback1,
    userFeedback2,
    userInfo1,
    userInfo2,
    handleUserInfoChange,
    handleFeedbackChange,
    handleTextAreaChange,
    handleCheckboxChange,
    handleCloseModal,
  } = useContext(StepsContext);

  const othersRef = useRef<HTMLInputElement>(null);
  const others2Ref = useRef<HTMLInputElement>(null);
  const [isAltele1Visible, setIsAltele1Visible] = useState(false);
  const [isAltele2Visible, setIsAltele2Visible] = useState(false);

  const theme = useTheme();

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
        setIsAltele1Visible(!isAltele1Visible);
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
        setIsAltele2Visible(!isAltele2Visible);
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
        <Text
          white
          secondaryFont
          bold
          style={{
            fontSize: theme.media.isMobile ? theme.text.big : theme.text.bigger,
          }}
        >
          Pasul 1: Scopul tratamentului
        </Text>
        <Box
          onClick={handleCloseModal}
          style={{ cursor: "pointer", padding: 5, zIndex: 100 }}
        >
          <CloseIcon size={16} fill={theme.color.white} />
        </Box>
      </Flex>
      <Box style={{ paddingTop: 20, paddingBottom: 20 }}>
        <Text
          white
          style={{
            lineHeight: "150%",
            fontSize: theme.media.isMobile
              ? theme.text.smaller
              : theme.text.big,
          }}
        >
          Completează chestionarul de evaluare pentru a afla mai multe detalii
          despre problema dumneavoastră.
        </Text>
      </Box>
      <Flex
        style={{
          gap: theme.media.isMobile ? 0 : 40,
          flexDirection: theme.media.isMobile ? "column" : "row",
        }}
      >
        <Box style={{ flex: 1 }}>
          <StyledFormSection>
            <Box style={{ gap: 20, fontSize: theme.text.medium }}>
              <Text
                white
                secondaryFont
                semiBold
                style={{
                  fontSize: theme.media.isMobile
                    ? theme.text.small
                    : theme.text.big,
                }}
              >
                Scopul tratamentului:
              </Text>
              <Box
                style={{
                  justifyContent: "space-between",
                  gap: theme.spacings.medium,
                }}
              >
                {scopes.map((scope) => (
                  <Checkbox
                    key={`scope-${scope.id}`}
                    label={scope.label}
                    id={scope.id}
                    selectedCheckboxes={selectedScopes}
                    onChange={handleCheckboxChange}
                  />
                ))}
              </Box>
            </Box>
          </StyledFormSection>
          <StyledFormSection>
            <Text
              white
              secondaryFont
              bold
              style={{
                fontSize: theme.media.isMobile
                  ? theme.text.small
                  : theme.text.big,
              }}
            >
              De cât timp ai problema ?
            </Text>
            <TextArea
              id="Durata"
              placeholder="Descrie de cât timp se manifestă..."
              value={userFeedback1}
              onChange={(value) => handleTextAreaChange(value, "Durata")}
            />
          </StyledFormSection>
          <StyledFormSection style={{ flex: 1, paddingTop: 0 }}>
            <Text
              white
              secondaryFont
              bold
              style={{
                fontSize: theme.media.isMobile
                  ? theme.text.small
                  : theme.text.big,
              }}
            >
              Poți descriere situația amănunțit ?
            </Text>
            <TextArea
              id="Despre"
              placeholder="Descrie situația ta aici..."
              value={userFeedback2}
              onChange={(value) => handleTextAreaChange(value, "Despre")}
            />
          </StyledFormSection>
        </Box>
        <Box style={{ flex: 1 }}>
          <StyledFormSection>
            <Box style={{ gap: 20 }}>
              <Text
                white
                secondaryFont
                bold
                style={{
                  fontSize: theme.media.isMobile
                    ? theme.text.small
                    : theme.text.big,
                }}
              >
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
                    selectedCheckboxes={selectedProblems}
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
                style={{
                  display: isAltele1Visible ? "block" : "none",
                  padding: 10,
                  borderRadius: 10,
                  background: theme.color.white,
                  color: theme.color.black,
                }}
              />
            </Box>
          </StyledFormSection>
          <StyledFormSection>
            <Box style={{ gap: 20 }}>
              <Text
                white
                secondaryFont
                bold
                style={{
                  fontSize: theme.media.isMobile
                    ? theme.text.small
                    : theme.text.big,
                }}
              >
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
                    selectedCheckboxes={selectedLocalizations}
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
                style={{
                  display: isAltele2Visible ? "block" : "none",
                  padding: 10,
                  borderRadius: 10,
                  background: theme.color.white,
                  color: theme.color.black,
                }}
              />
            </Box>
          </StyledFormSection>
        </Box>
      </Flex>
    </>
  );
};

export default StepForm1;
