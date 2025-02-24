import { useState, useCallback } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState({
    title: "Confirm Action",
    message: "Are you sure you want to proceed?",
    confirmText: "Yes",
    cancelText: "No",
    onConfirm: () => {},
    onCancel: () => {},
  });

  const openModal = useCallback((props = {}) => {
    setModalProps((prev) => ({ ...prev, ...props }));
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalProps({
      title: "Confirm Action",
      message: "Are you sure you want to proceed?",
      confirmText: "Yes",
      cancelText: "No",
      onConfirm: () => {},
      onCancel: () => {},
    });
  }, []);

  return { isOpen, openModal, closeModal, modalProps };
};
