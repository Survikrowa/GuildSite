import React, { useState } from "react";
import { LoginForm } from "../Form/LoginForm";
import { RegisterForm } from "../Form/RegisterForm";

export const ModalFormBody = () => {
  const [currentForm, setCurrentForm] = useState("register");
  return (
    <>
      {currentForm === "register" ? (
        <RegisterForm handleFormChange={setCurrentForm} />
      ) : (
        <LoginForm handleFormChange={setCurrentForm} />
      )}
    </>
  );
};
