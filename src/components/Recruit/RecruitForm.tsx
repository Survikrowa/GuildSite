import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Input } from "../Form/Input";

type Inputs = {
  igName: string;
  userDescription: string;
  age: string;
  mainAndAlts: string;
  prevExp: string;
  raidDays: string;
  uiScreen: string;
  whereDidUFindUs: string;
  prefRaidLang: string;
};

export const RecruitForm = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="recruit__form my-3" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="recruit__form-heading my-4">Formularz rekrutacyjny</h2>
      <div className="row">
        <div className="col-12 col-lg-4">
          <label className="recruit__form-label" htmlFor="igName">
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
        <div className="col-12 col-lg-4">
          <label className="recruit__form-label " htmlFor="age">
            Age
          </label>
          <Input
            className="recruit__form-input"
            name="age"
            id="age"
            ref={register({ required: true })}
          />
          {errors.age && <p>This field is required</p>}
        </div>
        <div className="col-12 col-lg-4">
          <label className="recruit__form-label" htmlFor="mainAndAlts">
            Main and alts names:
          </label>
          <Input
            className="recruit__form-input"
            name="mainAndAlts"
            id="mainAndAlts"
            ref={register({ required: true })}
          />
          {errors.mainAndAlts && <p>This field is required</p>}
        </div>
        <div className="col-12 col-lg-4">
          <label className="recruit__form-label " htmlFor="prevExp">
            Previous Expierence
          </label>
          <Input
            className="recruit__form-input"
            name="prevExp"
            id="prevExp"
            ref={register({ required: true })}
          />
          {errors.prevExp && <p>This field is required</p>}
        </div>
        <div className="col-12 col-lg-4">
          <label
            className="recruit__form-label "
            htmlFor="raidDays"
            style={{ marginTop: "2.8rem" }}
          >
            Are you ok with playing 3 raids a week, 1830-2300 CEST, what days
            are you preferring to raid on?
          </label>
          <Input
            className="recruit__form-input"
            name="raidDays"
            id="raidDays"
            ref={register({ required: true })}
          />
          {errors.raidDays && <p>This field is required</p>}
        </div>
        <div className="col-12 col-lg-4">
          <label className="recruit__form-label" htmlFor="uiScreen">
            UI Screenshot (imgur link etc)
          </label>
          <Input
            className="recruit__form-input"
            name="uiScreen"
            id="uiScreen"
            ref={register({ required: true })}
          />
          {errors.uiScreen && <p>This field is required</p>}
        </div>
        <div className="col-12 col-lg-4">
          <label className="recruit__form-label " htmlFor="whereDidUFindUs">
            How did you learn about us?:
          </label>
          <Input
            className="recruit__form-input"
            name="whereDidUFindUs"
            id="whereDidUFindUs"
            ref={register({ required: true })}
          />
          {errors.whereDidUFindUs && <p>This field is required</p>}
        </div>
        <div className="col-12 col-lg-4">
          <label
            className="recruit__form-label"
            htmlFor="prefRaidLang"
            style={{ marginTop: "2.1rem" }}
          >
            Overwhelming majority of the guild is Polish, however preferable
            language of in-raid communication is English, are you ok with that?
          </label>
          <Input
            className="recruit__form-input"
            name="prefRaidLang"
            id="prefRaidLang"
            ref={register({ required: true })}
          />
          {errors.prefRaidLang && <p>This field is required</p>}
        </div>
        <div className="col-12 col-lg-8">
          <textarea
            className="recruit__form-textarea"
            name="userDescription"
            placeholder="Why did you chose us/few words about you"
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
