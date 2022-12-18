import React, {useContext, useState} from "react";
import { useForm } from "react-hook-form";
import "./index.css";
import {Context} from "../../../../index";
import {useNavigate} from "react-router-dom";
import AuthService from "../../../../api/service/AuthService";

export const SignUp = ({ ...props }) => {
  let name1 = document.getElementsByClassName("sign-up-wrap");
  let name2 = document.getElementsByClassName("sign-up");

  let el1 = document.getElementsByClassName("sign-in-wrap-leave");
  let el2 = document.getElementsByClassName("sign-in-leave");

  function chageClassName() {
    name1[0].classList.add("sign-up-wrap-leave");
    name1[0].classList.remove("sign-up-wrap-active");

    name2[0].classList.add("sign-up-leave");
    name2[0].classList.remove("sign-up-active");
    //-----------------------------------//
    el1[0].classList.add("sign-in-wrap");
    el1[0].classList.remove("sign-in-wrap-leave");

    el2[0].classList.add("sign-in");
    el2[0].classList.remove("sign-in-leave");
  }

  const { register, handleSubmit } = useForm();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate()

  return (
    <div className="sign-up-wrap">
      <div className="sign-up">
        <div className="auth-content">
          <p className="auth-title sign-up-title">Registration</p>
          <form
            className="auth-form"
            onSubmit={handleSubmit((data) => {
              AuthService.registration(username, email, password).then(r => {
                chageClassName()
              })
            })}
          >
            <input
              {...register("username")}
              placeholder="username"
              className="auth-input sign-up-form-input"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
            <input
              {...register("email")}
              placeholder="email"
              type="email"
              className="auth-input sign-up-form-input"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <input
              {...register("password")}
              placeholder="password"
              className="auth-input sign-up-form-input"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <div className="auth-btn-box">
              <input type="submit" className="auth-btn" />
              <button
              type="button"
                onClick={chageClassName}
                className=" auth-btn sign-up-btn"
              >
                <p className="auth-btn-text">Sign in</p>
                <svg 
                  className="sign-up-svg"
                  version="1.1"
                  viewBox="0 0 100 100"
                >
                  <g id="Layer_8_copy_4_3_">
                    <path d="M28.213,27.267v8.294c0,0.571,0.305,1.1,0.8,1.385l20.212,11.669c1.066,0.616,1.066,2.155,0,2.771L29.013,63.055   c-0.495,0.286-0.8,0.814-0.8,1.385v8.294c0,1.231,1.333,2.001,2.399,1.385l39.375-22.733c1.066-0.616,1.066-2.155,0-2.771   L30.612,25.881C29.546,25.266,28.213,26.035,28.213,27.267z" />
                    <path d="M69.987,48.615L30.612,25.881c-0.193-0.112-0.395-0.164-0.597-0.19l37.972,21.923c1.066,0.616,1.066,2.155,0,2.771   L28.612,73.119c-0.1,0.058-0.205,0.092-0.308,0.126c0.308,0.914,1.401,1.398,2.308,0.874l39.375-22.733   C71.054,50.77,71.054,49.23,69.987,48.615z" />
                    <path
                      d="M28.213,27.267v8.294c0,0.571,0.305,1.1,0.8,1.385l20.212,11.669   c1.066,0.616,1.066,2.155,0,2.771L29.013,63.055c-0.495,0.286-0.8,0.814-0.8,1.385v8.294c0,1.231,1.333,2.001,2.399,1.385   l39.375-22.733c1.066-0.616,1.066-2.155,0-2.771L30.612,25.881C29.546,25.266,28.213,26.035,28.213,27.267z"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
