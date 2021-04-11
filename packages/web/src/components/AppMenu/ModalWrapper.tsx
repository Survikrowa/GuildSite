import React, { useState } from "react";
import { LoginForm } from "../Form/LoginForm";
import { RegisterForm } from "../Form/RegisterForm";

type Props = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalFormBody = ({ closeModal }: Props) => {
  const [currentForm, setCurrentForm] = useState("register");
  const [message, setMessage] = useState<string | null>(null);
  return (
    <>
      <span className="recruit__form-heading" style={{ color: "#a78a6e" }}>
        {message ? message : ""}
      </span>

      {currentForm === "register" ? (
        <RegisterForm
          handleFormChange={setCurrentForm}
          setSuccessMessage={setMessage}
        />
      ) : (
        <LoginForm
          handleFormChange={setCurrentForm}
          setIsModalOpen={closeModal}
        />
      )}
    </>
  );
};
