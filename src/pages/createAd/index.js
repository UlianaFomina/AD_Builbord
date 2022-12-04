import React from "react";
import { useForm } from "react-hook-form";
import { Header } from "../../components/header";
import "./index.css";

export const CreateAd = ({ ...props }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="ad">
      <Header />
      <div className="create-ad">
        <div className="create-ad-box">
          <p className="create-ad-title">create</p>
          <p className="create-ad-title">your ad</p>
        </div>
        <form
          className="create-ad-form"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <input
            {...register("title")}
            placeholder="title"
            minLength={3}
            maxLength={20}
            className="create-ad-input"
            required
          />
          <textarea
            {...register("desk")}
            placeholder="deskription"
            minLength={10}
            className="create-ad-input create-ad-textarea"
            required
          />
          <input
            {...register("img")}
            placeholder="img"
            type="file"
            accept="image/*"
            className="create-ad-input create-ad-file"
          />
          <button type="submit" className="create-ad-btn">create</button>
        </form>
      </div>
    </div>
  );
};
