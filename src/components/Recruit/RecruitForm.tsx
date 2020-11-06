import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Input } from "../Form/Input";

type Inputs = {
  igName: string;
  userDescription: string;
};

export const RecruitForm = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="recruit__form my-3" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="recruit__form-heading my-4">Formularz rekrutacyjny</h2>
      <div className="row">
        <div className="col-12 col-lg-4">
          <label className="recruit__form-label mt-0" htmlFor="igName">
            In game Nickname
          </label>
          <Input
            className="recruit__form-input"
            name="igName"
            id="igName"
            ref={register({ required: true })}
          />
          {errors.igName && <p>This field is required</p>}
        </div>
        <div className="col-12 col-lg-8">
          <textarea
            className="recruit__form-textarea"
            name="userDescription"
            placeholder="Write something about yourself!"
            ref={register({ required: true })}
          ></textarea>
          {errors.userDescription && <p>This field is required</p>}
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
