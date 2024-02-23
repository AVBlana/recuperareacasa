// StepsForm component
import React, { useEffect, useState } from "react";
import StepForm1 from "../../molecules/StepForm1";
import StepForm2 from "../../molecules/StepForm2";
import StepForm3 from "../../molecules/StepForm3";
import Box from "../../atoms/Box";
import { theme } from "@/theme/constants";
import Flex from "../../atoms/Flex";
import Button from "../../atoms/Button";
import { StepFormData } from "@/types/formTypes";

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
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState<StepFormData>({
    step1Data: {
      selectedCheckboxes: [],
      userFeedback1: "",
      userInfo1: "",
    },
    step2Data: {
      selectedCheckboxes: [],
      userName: "",
      userPhone: "",
      userEmail: "",
      userStreet: "",
      userNumber: "",
      userBlock: "",
      userSc: "",
      selectedOption: "",
    },
  });

  useEffect(() => {
    // Update the steps' data based on the current step
    if (currentStep === 1) {
      setFormData((prevData) => ({
        ...prevData,
        step1Data: formData.step1Data,
      }));
    } else if (currentStep === 2) {
      setFormData((prevData) => ({
        ...prevData,
        step2Data: formData.step2Data,
      }));
    }
  }, [currentStep]);

  const handleNext = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const handleCloseModal = () => {
    onClose();
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
        {currentStep === 1 && (
          <StepForm1
            data={formData.step1Data}
            updateData={(data) =>
              setFormData((prevData) => ({ ...prevData, step1Data: data }))
            }
          />
        )}
        {currentStep === 2 && (
          <StepForm2
            data={formData.step2Data}
            updateData={(data) =>
              setFormData((prevData) => ({ ...prevData, step2Data: data }))
            }
          />
        )}
        {currentStep === 3 && (
          <StepForm3
            step1Data={formData.step1Data}
            step2Data={formData.step2Data}
          />
        )}

        <Flex style={{ gap: 10, paddingTop: 20 }}>
          {currentStep > 1 && (
            <Button label="Înapoi" onClick={handleBack} style={buttonStyle} />
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
              onClick={handleCloseModal}
              style={buttonStyle}
            />
          )}
        </Flex>
      </Box>
    </>
  );
};

export default StepsForm;
