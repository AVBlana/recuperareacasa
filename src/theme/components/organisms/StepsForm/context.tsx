import { ReactNode, createContext } from "react";

import { useState, Dispatch, SetStateAction } from "react";

interface FormData {
  currentStep: number;
  selectedCheckboxes: string[];
  userFeedback1: string;
  userFeedback2: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  userBlock: string;
  userStreet: string;
  userFloor: string;
  userNumber: string;
  userSc: string;
  userInfo1: string;
  userInfo2: string;
  selectedOption: string;
  isModalVisible: string; // It seems like this should be a boolean, but I'm keeping it as a string based on your implementation.
}

interface FormHandlers {
  handleOptionChange: (value: string) => void;
  handleUserInfoChange: (value: string, inputId: string) => void;
  handleCheckboxChange: (id: string) => void;
  handleFeedbackChange: (value: string, textareaId: string) => void;
  handleTextAreaChange: (value: string, textareaId: string) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

interface UseStepFormData extends FormData, FormHandlers {
  setSelectedCheckboxes: Dispatch<SetStateAction<string[]>>;
  setUserFeedback1: Dispatch<SetStateAction<string>>;
  setUserFeedback2: Dispatch<SetStateAction<string>>;
  setUserName: Dispatch<SetStateAction<string>>;
  setUserPhone: Dispatch<SetStateAction<string>>;
  setUserEmail: Dispatch<SetStateAction<string>>;
  setUserBlock: Dispatch<SetStateAction<string>>;
  setUserFloor: Dispatch<SetStateAction<string>>;
  setUserStreet: Dispatch<SetStateAction<string>>;
  setUserNumber: Dispatch<SetStateAction<string>>;
  setUserSc: Dispatch<SetStateAction<string>>;
  setUserInfo1: Dispatch<SetStateAction<string>>;
  setUserInfo2: Dispatch<SetStateAction<string>>;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  setIsModalVisible: Dispatch<SetStateAction<string>>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const useStepFormData = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [userFeedback1, setUserFeedback1] = useState("");
  const [userFeedback2, setUserFeedback2] = useState("");
  const [userInfo1, setUserInfo1] = useState("");
  const [userInfo2, setUserInfo2] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalVisible, setIsModalVisible] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userStreet, setUserStreet] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userBlock, setUserBlock] = useState("");
  const [userFloor, setUserFloor] = useState("");
  const [userSc, setUserSc] = useState("");

  const handleNext = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleUserInfoChange = (value: string, inputId: string) => {
    switch (inputId) {
      case "Prenume":
        setUserName(value);
        break;
      case "Telefon":
        setUserPhone(value);
        break;
      case "Email":
        setUserEmail(value);
        break;
      case "Strada":
        setUserStreet(value);
        break;
      case "Nr":
        setUserNumber(value);
        break;
      case "Bloc":
        setUserBlock(value);
        break;
      case "Scara":
        setUserSc(value);
        break;
      case "Altele1":
        setUserInfo1(value);
        break;
      case "Altele2":
        setUserInfo2(value);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (id: string) => {
    setSelectedCheckboxes((prevCheckboxes) => {
      if (prevCheckboxes.includes(id)) {
        return prevCheckboxes.filter((checkbox) => checkbox !== id);
      } else {
        return [...prevCheckboxes, id];
      }
    });
  };

  const handleFeedbackChange = (value: string, textareaId: string) => {
    if (textareaId === "Durata") {
      setUserFeedback1(value);
    } else if (textareaId === "Despre") {
      setUserFeedback2(value);
    }
  };

  const handleTextAreaChange = (value: string, textareaId: string) => {
    handleFeedbackChange(value, textareaId);
  };

  return {
    currentStep,
    selectedCheckboxes,
    userFeedback1,
    userFeedback2,
    userName,
    userPhone,
    userEmail,
    userBlock,
    userStreet,
    userFloor,
    userNumber,
    userSc,
    userInfo1,
    userInfo2,
    selectedOption,
    isModalVisible,
    handleNext,
    handlePrevious,
    setCurrentStep,
    setSelectedCheckboxes,
    setUserFeedback1,
    setUserFeedback2,
    setUserName,
    setUserPhone,
    setUserEmail,
    setUserBlock,
    setUserFloor,
    setUserStreet,
    setUserNumber,
    setUserSc,
    setUserInfo1,
    setUserInfo2,
    setSelectedOption,
    setIsModalVisible,
    handleOptionChange,
    handleUserInfoChange,
    handleFeedbackChange,
    handleTextAreaChange,
    handleCheckboxChange,
  };
};

export const StepsContext = createContext({} as UseStepFormData);
export const StepsProvider = ({ children }: { children: ReactNode }) => {
  const values = useStepFormData();

  return (
    <StepsContext.Provider value={values}>{children}</StepsContext.Provider>
  );
};
