import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Header } from "../../components/header";
import "./index.css";
import AdvertisementService from "../../api/service/AdvertisementService";
import {useNavigate} from "react-router-dom";

export const CreateAd = ({ ...props }) => {
  const { register, handleSubmit } = useForm();

  const [title, setTitle] = useState('');
  const [desk, setDesk] = useState('');
  const [file, setFile] = useState('');
  function onChange(e){
    e.preventDefault();
    setFile(e.target.files[0])
  }

  const navigate = useNavigate()
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
            AdvertisementService.createNewAd(title, desk, file).then(er => {
              console.log("Added new AD")
              navigate('/main')
            });
          })}
        >
          <input
            {...register("title")}
            placeholder="title"
            minLength={3}
            maxLength={20}
            className="create-ad-input"
            required
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            {...register("desk")}
            placeholder="deskription"
            minLength={10}
            className="create-ad-input create-ad-textarea"
            required
            onChange={e => setDesk(e.target.value)}
            value={desk}
          />
          <input
            {...register("img")}
            placeholder="img"
            type="file"
            accept="image/*"
            className="create-ad-input create-ad-file"
            onChange={onChange}
          />
          <button type="submit" className="create-ad-btn">create</button>
        </form>
      </div>
    </div>
  );
};
