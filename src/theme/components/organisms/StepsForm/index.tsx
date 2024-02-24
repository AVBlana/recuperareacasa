// StepsForm component
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import StepForm1 from "../../molecules/StepForm1";
import StepForm2 from "../../molecules/StepForm2";
import StepForm3 from "../../molecules/StepForm3";
import Box from "../../atoms/Box";
import { theme } from "@/theme/constants";
import Flex from "../../atoms/Flex";
import Button from "../../atoms/Button";
import useStepFormData, {
  UseStepFormData,
} from "@/theme/hooks/useStepFormData";

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

  //   const {
  //     selectedCheckboxes,
  //     userFeedback1,
  //     userFeedback2,
  //     userName,
  //     userPhone,
  //     userEmail,
  //     userBlock,
  //     userStreet,
  //     userFloor,
  //     userNumber,
  //     userSc,
  //     userInfo1,
  //     userInfo2,
  //     selectedOption,
  //     isModalVisible,
  //     setSelectedCheckboxes,
  //     setUserFeedback1,
  //     setUserFeedback2,
  //     setUserName,
  //     setUserPhone,
  //     setUserEmail,
  //     setUserBlock,
  //     setUserFloor,
  //     setUserStreet,
  //     setUserNumber,
  //     setUserSc,
  //     setUserInfo1,
  //     setUserInfo2,
  //     setSelectedOption,
  //     setIsModalVisible,
  //     handleOptionChange,
  //     handleUserInfoChange,
  //     handleFeedbackChange,
  //     handleTextAreaChange,
  //     handleCheckboxChange,
  //   } = useStepFormData();

  //   const [formData, setFormData] = useState({
  //     selectedCheckboxes,
  //     userFeedback1,
  //     userFeedback2,
  //     userName,
  //     userPhone,
  //     userEmail,
  //     userBlock,
  //     userStreet,
  //     userFloor,
  //     userNumber,
  //     userSc,
  //     userInfo1,
  //     userInfo2,
  //     selectedOption,
  //     isModalVisible,
  //   });

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <StepForm1
            //   data={UseStepFormData}
            //   updateData={updateData}
            //   setSelectedCheckboxes={data.setSelectedCheckboxes}
            //   setUserFeedback1={data.setUserFeedback1}
            //   setUserFeedback2={data.setUserFeedback2}
            //   setUserName={data.setUserName}
            // Add all setter functions here
            />
          </>
        );
      case 2:
        return (
          <>
            <StepForm2
            //   data={data}
            //   updateData={updateData}
            //   setSelectedCheckboxes={data.setSelectedCheckboxes}
            //   setUserFeedback1={data.setUserFeedback1}
            //   setUserFeedback2={data.setUserFeedback2}
            //   setUserName={data.setUserName}
            // Add all setter functions here
            />
          </>
        );
      case 3:
        return (
          <>
            <StepForm3
            //   step1Data={data}
            //   step2Data={data}
            //   setSelectedCheckboxes={data.setSelectedCheckboxes}
            //   setUserFeedback1={data.setUserFeedback1}
            //   setUserFeedback2={data.setUserFeedback2}
            //   setUserName={data.setUserName}
            // Add all setter functions here
            />
          </>
        );
      default:
        return null;
    }
  };
  //   useEffect(() => {
  //     // Update the steps' data based on the current step
  //     if (currentStep === 1) {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         step1Data: formData.step1Data,
  //       }));
  //     } else if (currentStep === 2) {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         step2Data: formData.step2Data,
  //       }));
  //     }
  //     console.log("Component re-rendered. Current step:", currentStep);
  //   }, [currentStep]);

  const handleNext = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const handleBack = () => {
    alert("test");
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
        {renderStep()}

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
