import React from "react";
import { SignUp } from "./components/signUp";
import { SignIn } from "./components/signIn";
import video from "../../assets/video-bg.mp4";
import "./index.css";

export const Auth = ({ ...props }) => {
  return (
    <div className="auth">
      <video
        loop="loop"
        autoPlay="autoplay"
        muted="muted"
        className="auth-bg"
      >
        <source src={video} type="video/mp4" />
      </video>
      <SignUp />
      <SignIn/>
    </div>
  );
};
