import React from "react";
import { useForm } from "react-hook-form";
import { Header } from "../../components/header";
import "./index.css";

export const CreateDevice = ({ ...props }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="ad">
      <Header />
      <div className="create-dev">
        <div className="create-dev-box">
          <p className="create-dev-title">create</p>
          <p className="create-dev-title">your devise</p>
        </div>
        <form
          className="create-dev-form"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <input
            {...register("title")}
            placeholder="title"
            minLength={3}
            maxLength={20}
            className="create-dev-input"
            required
          />
          <div className="create-dev-select-box">
            <p className="create-dev-text">Impressions per hour:</p>
            <select
              {...register("amount")}
              className="create-dev-input create-dev-select"
            >
              <option className="create-dev-option" value="1" selected>
                1
              </option>
              <option className="create-dev-option" value="2">2</option>
              <option className="create-dev-option" value="3">3</option>
              <option className="create-dev-option" value="4">4</option>
              <option className="create-dev-option"value="5">5</option>
            </select>
          </div>
          <div className="create-dev-select-box">
            <p className="create-dev-text"> Attach AD: :</p>
            <select
              {...register("amount")}
              className="create-dev-input create-dev-select"
            >
              <option className="create-dev-option" value="1" selected>
                none
              </option>
              <option className="create-dev-option" value="title1">title1</option>
            </select>
          </div>
          <button type="submit" className="create-dev-btn">
            create
          </button>
        </form>
      </div>
    </div>
  );
};
