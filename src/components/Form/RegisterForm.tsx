import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Input } from "../Form/Input";

type HofInputs = {
  username: string;
  password: string;
};

export const RegisterForm = () => {
  const { register, handleSubmit, errors } = useForm<HofInputs>();
  const onSubmit: SubmitHandler<HofInputs> = (data) => console.log(data);

  return (
    <form className="recruit__form my-3" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="recruit__form-heading my-4">Formularz rekrutacyjny</h2>
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
        <div className="col-12 d-flex justify-content-end my-3">
          <button type="submit" className="btn recruit__form-submit btn-lg">
            Apply
          </button>
        </div>
      </div>
    </form>
  );
};
