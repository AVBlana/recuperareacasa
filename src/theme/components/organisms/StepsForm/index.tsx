// StepsForm component
import { theme } from "@/theme/constants";
import React, { useContext, useMemo, useState } from "react";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import Flex from "../../atoms/Flex";
import StepForm1 from "../../molecules/StepForm1";
import StepForm2 from "../../molecules/StepForm2";
import StepForm3 from "../../molecules/StepForm3";
import { StepsContext } from "./context";
import { CloseIcon } from "../..";
import styled from "styled-components";

interface StepsFormProps {
  onClose: () => void;
}

const buttonStyle = {
  color: theme.color.white,
  background: theme.color.secondary,
  paddingTop: theme.spacings.tiny,
  paddingBottom: theme.spacings.tiny,
  paddingLeft: theme.spacings.medium,
  paddingRight: theme.spacings.medium,
  borderRadius: 12,
  cursor: "pointer",
  width: "fit-content",
};

const StepsForm: React.FC<StepsFormProps> = ({ onClose }) => {
  const {
    selectedScopes,
    selectedProblems,
    selectedLocalizations,
    selectedAgreementTerms,
    selectedNewsletter,
    selectedOption,
    selectedDay,
    userFeedback1,
    userFeedback2,
    userName,
    userEmail,
    userPhone,
    userSc,
    userBlock,
    userAp,
    userNumber,
    userStreet,
    currentStep,
    handleNext,
    handlePrevious,
  } = useContext(StepsContext);

  const totalSteps = 3;
  const [isStepsFormSent, setStepsFormSent] = useState(false);

  const renderStep = useMemo(() => {
    switch (currentStep) {
      case 1:
        return <StepForm1 />;
      case 2:
        return <StepForm2 />;
      case 3:
        return <StepForm3 />;
      default:
        return null;
    }
  }, [currentStep]);

  const handleCloseModal = () => {
    onClose();
  };

  const handleSendMail = async () => {
    try {
      const apiUrl = "/api/sendEmail"; // Relative path to your server action

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedScopes,
          selectedProblems,
          selectedLocalizations,
          selectedAgreementTerms,
          selectedNewsletter,
          selectedOption,
          selectedDay,
          userFeedback1,
          userFeedback2,
          userName,
          userEmail,
          userPhone,
          userSc,
          userBlock,
          userAp,
          userNumber,
          userStreet,
          // ... other form fields
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        setStepsFormSent(true);
        setTimeout(() => {
          setStepsFormSent(false);
          onClose();
        }, 3000);
      } else {
        console.error("Failed to send email.");
      }
    } catch (error: any) {
      console.error("Error sending email:", error.message);
    }
  };

  return (
    <>
      <Box
        style={{
          background: theme.color.primary,
          borderRadius: 20,
          padding: 40,
        }}
      >
        <Flex style={{ flex: 1, justifyContent: "end", paddingBottom: 20 }}>
          <Box
            onClick={handleCloseModal}
            style={{ cursor: "pointer", padding: 5 }}
          >
            <CloseIcon size={16} fill={theme.color.white} />
          </Box>
        </Flex>

        {renderStep}

        <Flex style={{ gap: 10, paddingTop: 20 }}>
          {currentStep > 1 && (
            <Button
              label="Înapoi"
              onClick={handlePrevious}
              style={buttonStyle}
            />
          )}
          {currentStep < totalSteps && (
            <Button
              label="Următorul"
              onClick={handleNext}
              style={buttonStyle}
            />
          )}
          {currentStep === totalSteps && (
            <Button
              label="Trimite"
              onClick={handleSendMail}
              style={buttonStyle}
            />
          )}
          {isStepsFormSent ? (
            <NotificationMessage>
              Vă mulțumim pentru trimiterea informațiilor. Mesajul dumneavoastră
              a fost recepționat cu succes. Veți fi contactați în maxim 48 de
              ore, fie telefonic, fie pe adresa de email specificată în cazul în
              care nu se răspunde la telefon.
            </NotificationMessage>
          ) : null}
        </Flex>
      </Box>
    </>
  );
};

const NotificationMessage = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  color: white;
  max-width: 280px;
  padding: 10px 20px;
  border-radius: 20px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100000;
`;

export default StepsForm;
