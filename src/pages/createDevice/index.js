import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Header } from "../../components/header";
import "./index.css";
import DeviceService from "../../api/service/DeviceService";
import {useNavigate} from "react-router-dom";

export const CreateDevice = ({ ...props }) => {
  const { register, handleSubmit } = useForm();

  const [title, setTitle] = useState('');
  const [impression, setImpression] = useState('');
  const [ad, setAd] = useState('');
  const navigate = useNavigate()
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
            DeviceService.createNewDevice(title, impression, ad).then(r => {
              navigate('/devices')
            })
          })}
        >
          <input
            {...register("title")}
            placeholder="title"
            minLength={3}
            maxLength={20}
            className="create-dev-input"
            required
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <div className="create-dev-select-box">
            <p className="create-dev-text">Impressions per hour:</p>
            <select
              {...register("amount")}
              className="create-dev-input create-dev-select"
              onChange={e => setImpression(e.target.value)}
              value={impression}
            >
              <option className="create-dev-option" value="1" selected>
                1
              </option>
              <option className="create-dev-option" value="2">2</option>
              <option className="create-dev-option" value="3">3</option>
              <option className="create-dev-option" value="4">4</option>
              <option className="create-dev-option" value="5">5</option>
            </select>
          </div>
          <div className="create-dev-select-box">
            <p className="create-dev-text"> Attach AD: :</p>
            <select
              {...register("amount")}
              className="create-dev-input create-dev-select"
              onChange={e => setAd(e.target.value)}
              value={ad}
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
