import React, {useContext, useState} from "react";
import { useForm } from "react-hook-form";
import "./index.css";
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

export const SignIn = ({ ...props }) => {
  let name1 = document.getElementsByClassName("sign-in-wrap");
  let name2 = document.getElementsByClassName("sign-in");

  let el1 = document.getElementsByClassName("sign-up-wrap-leave");
  let el2 = document.getElementsByClassName("sign-up-leave");

  function chageClassNameIn() {
    name1[0].classList.add("sign-in-wrap-leave");
    name1[0].classList.remove("sign-in-wrap");

    name2[0].classList.add("sign-in-leave");
    name2[0].classList.remove("sign-in");
    //--------------------------------------------------//
    el1[0].classList.add("sign-up-wrap-active");
    el1[0].classList.remove("sign-up-wrap-leave");

    el2[0].classList.add("sign-up-active");
    el2[0].classList.remove("sign-up-leave");
  }
  const { register, handleSubmit } = useForm();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {store} = useContext(Context)
  const navigate = useNavigate()

  return (
    <div className="sign-in-wrap">
      <div className="sign-in">
        <div className="auth-content">
          <p className="auth-title sign-in-title">sign in</p>
          <form
            className="auth-form sign-in-form"
            onSubmit={handleSubmit((data) => {
              store.login(username, password).then(r => {
                navigate('/main')
            })
            })}
          >
            <input
              {...register("username")}
              placeholder="username"
              type="text"
              className="auth-input sign-in-form-input"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
            <input
              {...register("password")}
              placeholder="password"
              className="auth-input sign-in-form-input"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <div className="auth-btn-box sign-in-btn-box">
              <button
              type="button"
                onClick={chageClassNameIn}
                className=" auth-btn sign-in-btn"
              >
                <svg className="sign-in-svg" viewBox="0 0 100 100">
                  <g id="Layer_8_copy_4_2_">
                    <path d="M70.787,27.267v8.294c0,0.571-0.305,1.1-0.8,1.385L49.776,48.615c-1.066,0.616-1.066,2.155,0,2.771l20.212,11.669   c0.495,0.286,0.8,0.814,0.8,1.385v8.294c0,1.231-1.333,2.001-2.399,1.385L29.013,51.385c-1.066-0.616-1.066-2.155,0-2.771   l39.375-22.733C69.454,25.266,70.787,26.035,70.787,27.267z" />
                    <path d="M69.987,63.055l-2.376-1.372c-0.013,0.043-0.023,0.09-0.032,0.136l0.409,0.236c0.495,0.286,0.8,0.814,0.8,1.385v8.294   c0,1.008-0.894,1.693-1.803,1.575l1.404,0.81c1.066,0.616,2.399-0.154,2.399-1.385V64.44C70.787,63.868,70.482,63.34,69.987,63.055   z" />
                    <path d="M49.776,48.615l20.212-11.669c0.495-0.286,0.8-0.814,0.8-1.385v-8.294c0-1.115-1.092-1.84-2.091-1.512   c0.054,0.16,0.091,0.328,0.091,0.512v8.294c0,0.571-0.305,1.1-0.8,1.385L47.776,47.615c-0.078,0.052-0.745,0.516-0.8,1.385   c-0.057,0.911,0.609,1.467,0.673,1.518c0.639,0.443,1.277,0.885,1.916,1.328c-0.032-0.112-0.07-0.312,0.019-0.51   c0.011-0.025,0.024-0.049,0.037-0.07C48.725,50.593,48.768,49.196,49.776,48.615z" />
                    <path d="M70.787,27.267v8.294c0,0.571-0.305,1.1-0.8,1.385L49.776,48.615   c-1.066,0.616-1.066,2.155,0,2.771l20.212,11.669c0.495,0.286,0.8,0.814,0.8,1.385v8.294c0,1.231-1.333,2.001-2.399,1.385   L29.013,51.385c-1.066-0.616-1.066-2.155,0-2.771l39.375-22.733C69.454,25.266,70.787,26.035,70.787,27.267z" />
                  </g>
                </svg>
                <p className="auth-btn-text sign-ip-btn-text">Registrate</p>
              </button>
              <input type="submit" className="auth-btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default observer(SignIn)