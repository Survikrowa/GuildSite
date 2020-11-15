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

export const LoginForm = ({ handleFormChange }: Props) => {
  const { register, handleSubmit, errors } = useForm<HofInputs>();
  const onSubmit: SubmitHandler<HofInputs> = (data) => console.log(data);

  return (
    <form className="recruit__form my-3" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="recruit__form-heading my-4">Login</h2>
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
