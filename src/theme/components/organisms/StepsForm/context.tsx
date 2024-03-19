import { ReactNode, createContext } from "react";

import { useState, Dispatch, SetStateAction } from "react";

interface FormData {
  currentStep: number;
  selectedCheckboxes: string[];
  selectedScopes: string[];
  selectedProblems: string[];
  selectedLocalizations: string[];
  selectedAgreementTerms: string[];
  selectedDay: string[];
  selectedNewsletter: string[];
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
  userAp: string;
  userInfo1: string;
  userInfo2: string;
  selectedOption: string;
  isModalVisible: boolean;
}

interface FormHandlers {
  handleOptionChange: (value: string) => void;
  handleUserInfoChange: (value: string, inputId: string) => void;
  handleCheckboxChange: (id: string) => void;
  handleFeedbackChange: (value: string, textareaId: string) => void;
  handleTextAreaChange: (value: string, textareaId: string) => void;
  handleNext: () => void;
  handlePrevious: () => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

interface UseStepFormData extends FormData, FormHandlers {
  setSelectedCheckboxes: Dispatch<SetStateAction<string[]>>;
  setSelectedScopes: Dispatch<SetStateAction<string[]>>;
  setSelectedProblems: Dispatch<SetStateAction<string[]>>;
  setSelectedLocalizations: Dispatch<SetStateAction<string[]>>;
  setSelectedAgreementTerms: Dispatch<SetStateAction<string[]>>;
  setSelectedDay: Dispatch<SetStateAction<string[]>>;
  setSelectedNewsletter: Dispatch<SetStateAction<string[]>>;
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
  setUserAp: Dispatch<SetStateAction<string>>;
  setUserInfo1: Dispatch<SetStateAction<string>>;
  setUserInfo2: Dispatch<SetStateAction<string>>;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const useStepFormData = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [selectedScopes, setSelectedScopes] = useState<string[]>([]);
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [selectedLocalizations, setSelectedLocalizations] = useState<string[]>(
    []
  );
  const [selectedAgreementTerms, setSelectedAgreementTerms] = useState<
    string[]
  >([]);
  const [selectedNewsletter, setSelectedNewsletter] = useState<string[]>([]);
  const [selectedDay, setSelectedDay] = useState<string[]>([]);
  const [userFeedback1, setUserFeedback1] = useState("");
  const [userFeedback2, setUserFeedback2] = useState("");
  const [userInfo1, setUserInfo1] = useState("");
  const [userInfo2, setUserInfo2] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userStreet, setUserStreet] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userBlock, setUserBlock] = useState("");
  const [userFloor, setUserFloor] = useState("");
  const [userSc, setUserSc] = useState("");
  const [userAp, setUserAp] = useState("");

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
      case "Ap":
        setUserAp(value);
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
    switch (id) {
      case "intretinere":
      case "stare-de-bine":
      case "tratament-terapeutic":
        setSelectedScopes((prevScopes) =>
          prevScopes.includes(id)
            ? prevScopes.filter((scope) => scope !== id)
            : [...prevScopes, id]
        );
        break;

      case "durerea":
      case "amorteala":
      case "ameteala":
      case "trigger-point":
      case "tensiunea-musculara":
      case "spate-blocat":
      case "migrene":
      case "altele":
        setSelectedProblems((prevProblems) =>
          prevProblems.includes(id)
            ? prevProblems.filter((problem) => problem !== id)
            : [...prevProblems, id]
        );
        break;

      case "cap":
      case "zona-toracala":
      case "zona-cervicala":
      case "zona-lombara":
      case "zona-bazinului":
      case "zona-membrelor-inferioare":
      case "zona-membrelor-superioare":
      case "altele":
        setSelectedLocalizations((prevLocalizations) =>
          prevLocalizations.includes(id)
            ? prevLocalizations.filter((localization) => localization !== id)
            : [...prevLocalizations, id]
        );
        break;

      case "luni":
      case "marti":
      case "miercuri":
      case "joi":
      case "vineri":
        setSelectedDay((prevDays) =>
          prevDays.includes(id)
            ? prevDays.filter((day) => day !== id)
            : [...prevDays, id]
        );
        break;

      case "agree":
        setSelectedAgreementTerms((prevAgreementTerms) =>
          prevAgreementTerms.includes(id)
            ? prevAgreementTerms.filter(
                (agreementTerms) => agreementTerms !== id
              )
            : [...prevAgreementTerms, id]
        );
        break;

      case "subscribe":
        setSelectedNewsletter((prevNewsletters) =>
          prevNewsletters.includes(id)
            ? prevNewsletters.filter((newsletter) => newsletter !== id)
            : [...prevNewsletters, id]
        );
        break;

      // Add other cases for your localizations checkboxes

      default:
        // Handle the default case if necessary
        break;
    }
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

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    console.warn("@@@", handleCloseModal);
    setIsModalVisible(false);
    // onClose();
  };

  return {
    currentStep,
    selectedCheckboxes,
    selectedScopes,
    selectedProblems,
    selectedLocalizations,
    selectedAgreementTerms,
    selectedDay,
    selectedNewsletter,
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
    userAp,
    userInfo1,
    userInfo2,
    selectedOption,
    isModalVisible,
    handleNext,
    handlePrevious,
    handleOpenModal,
    handleCloseModal,
    setCurrentStep,
    setSelectedCheckboxes,
    setSelectedScopes,
    setSelectedProblems,
    setSelectedLocalizations,
    setSelectedAgreementTerms,
    setSelectedDay,
    setSelectedNewsletter,
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
    setUserAp,
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
