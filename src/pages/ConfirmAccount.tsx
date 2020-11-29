import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AppFooter } from "../components/Footer/AppFooter";

type Params = {
  activationCode: string;
};

export const ConfirmAccount = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>("");
  const slug = useParams<Params>();

  useEffect(() => {
    const handleAccountActivation = async () => {
      await axios
        .post(
          `http://api.gruzja.localhost:3001/api/requestVerificationCode/${slug.activationCode}`,
          {},
          {
            withCredentials: true,
          }
        )
        .then((response) => setMessage(response.data.message))
        .catch((error) => {
          setError(error.response.data.message);
        });
    };
    handleAccountActivation();
  }, [slug.activationCode]);
  return (
    <>
      <section style={{ marginTop: "8rem" }}>
        {message ? <div>{message}</div> : ""}
        {error ? (
          <span
            className="recruit__form-heading d-flex justify-content-center align-items-center"
            style={{ color: "#a78a6e" }}
          >
            {error} Please try again later.
          </span>
        ) : (
          ""
        )}
      </section>
      <AppFooter />
    </>
  );
};