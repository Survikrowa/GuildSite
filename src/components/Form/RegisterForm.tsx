import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Input } from "./Input";

type HofInputs = {
  username: string;
  password: string;
  email: string;
};

type Props = {
  handleFormChange: React.Dispatch<React.SetStateAction<string>>;
};

export const RegisterForm = ({ handleFormChange }: Props) => {
  const { register, handleSubmit, errors } = useForm<HofInputs>();
  const onSubmit: SubmitHandler<HofInputs> = (data) => console.log(data);

  return (
    <form className="recruit__form my-3" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="recruit__form-heading my-4">Register</h2>
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
        <div className="col-12 col-lg-4">
          <label
            className="recruit__form-label mt-0"
            htmlFor="username"
            style={{ color: "#a78a6e" }}
          >
            Email
          </label>
          <Input
            className="recruit__form-input"
            name="email"
            id="email"
            ref={register({ required: true })}
            type="email"
          />
          {errors.email && <p>This field is required</p>}
        </div>
        <div className="col-12 d-flex justify-content-between my-3">
          <button
            type="button"
            className="changeFormBtn "
            onClick={() => handleFormChange("login")}
          >
            Already registered? Log in
          </button>
          <button type="submit" className="btn recruit__form-submit btn-lg">
            Register
          </button>
        </div>
      </div>
    </form>
  );
};
