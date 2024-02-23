import { useState } from "react";

const useStepFormData = () => {
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

  const handleOptionChange = (value: any) => {
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

  const handleCheckboxChange = (label: string) => {
    setSelectedCheckboxes((prevCheckboxes) => {
      if (prevCheckboxes.includes(label)) {
        return prevCheckboxes.filter((checkbox) => checkbox !== label);
      } else {
        return [...prevCheckboxes, label];
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

export default useStepFormData;
