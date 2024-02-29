// ModalProvider.js

import React, { createContext, useContext, useState, useMemo } from "react";

interface ModalData {
  isModalVisible: boolean;
}

interface ModalHandlers {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

interface UseModalData extends ModalData, ModalHandlers {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext({} as UseModalData);

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const contextValue = useMemo(
    () => ({
      isModalVisible,
      setIsModalVisible,
      handleOpenModal,
      handleCloseModal,
    }),
    [isModalVisible, setIsModalVisible, handleOpenModal, handleCloseModal]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
