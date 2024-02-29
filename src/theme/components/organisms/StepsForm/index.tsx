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
    userFeedback1,
    userFeedback2,
    currentStep,
    handleNext,
    handlePrevious,
  } = useContext(StepsContext);

  const totalSteps = 3;

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
      const apiUrl = "localhost:3000/api/sendEmail"; // Relative path to your serverless function

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedScopes,
          selectedProblems,
          selectedLocalizations,
          userFeedback1,
          userFeedback2,
          // ...other form fields
        }),
      });
      if (response.ok) {
        console.log("Email sent successfully!");
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
        </Flex>
      </Box>
    </>
  );
};

export default StepsForm;
