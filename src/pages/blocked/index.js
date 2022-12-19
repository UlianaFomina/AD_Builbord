import React from "react";
import { Header } from "../../components/header";
import "./index.css";

export const Blocked = ({ ...props }) => {
  return (
    <div className="wrap">
      <Header />
      <div className="blocked-content">
        <p className="blocked-title">your profile has been blocked</p>
        <div className="blocked-btn-box">
        <button className="blocked-btn">
              <p className="blocked-btn-text">Contact the admin</p>
            </button>
        </div>
      </div>
    </div>
  );
};