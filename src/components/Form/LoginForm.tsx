import React, { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Input } from "./Input";
import axios from "axios";
import { useHistory } from "react-router-dom";

type HofInputs = {
  username: string;
  password: string;
};

type Props = {
  handleFormChange: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginForm = ({ handleFormChange, setIsModalOpen }: Props) => {
  const { register, handleSubmit, errors } = useForm<HofInputs>();
  const [error, setError] = useState<string | null>("");
  const history = useHistory();

  const onSubmit: SubmitHandler<HofInputs> = ({ username, password }) => {
    axios
      .post(
        "http://api.gruzja.localhost:3001/api/users/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data) {
          setError(null);
          setIsModalOpen(false);
          history.replace("/panel");
        }
      })
      .catch((error) => {
        if (!error.response) {
          setError("Something went wrong! Server error");
        }
      });
  };
  return (
    <form className="recruit__form my-3" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="recruit__form-heading my-4">Login</h2>
      <span className="recruit__form-heading" style={{ color: "#a78a6e" }}>
        {error ? error : ""}
      </span>
      <div className="row">
        <div className="col-12 col-lg-4">
          <label
            className="recruit__form-label mt-0"
            htmlFor="username"
            style={{ color: "#a78a6e" }}
          >
            Username
          </label>
          <Input
            className="recruit__form-input"
            name="username"
            id="username"
            ref={register({ required: true })}
          />
          {errors.username && <p>This field is required</p>}
        </div>
        <div className="col-12 col-lg-4">
          <label
            className="recruit__form-label mt-0"
            htmlFor="username"
            style={{ color: "#a78a6e" }}
          >
            Password
          </label>
          <Input
            className="recruit__form-input"
            name="password"
            id="password"
            ref={register({ required: true })}
            type="password"
          />
          {errors.password && <p>This field is required</p>}
        </div>
        <div className="col-12 d-flex justify-content-between my-3">
          <button
            type="button"
            className="changeFormBtn "
            onClick={() => handleFormChange("register")}
          >
            Don't have account? Register!
          </button>
          <button type="submit" className="btn recruit__form-submit btn-lg">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};
