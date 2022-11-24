import React from "react";
import { MainGreet } from "./components/mainGreet"
import { MainView } from "./components/mainView";
import "./index.css";

export const Main = ({ ...props }) => {
  return (
    <div className="wraper">
      <MainGreet/>
      <MainView/>
    </div>
  );
};
