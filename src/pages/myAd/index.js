import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/header";
import { AdCard } from "../../components/adCard";
import "./index.css";

export const MyAd = ({ ...props }) => {
  return (
    <div className="ad">
      <Header />
      <div className="ad-create">
        <NavLink to="create">
          <button className="ad-create-btn">Create new ad</button>
        </NavLink>
      </div>
      <div className="ad-list">
        <AdCard flexDirection={{ flexDirection: "column" }} />
        <AdCard flexDirection={{ flexDirection: "column" }} />
        <AdCard flexDirection={{ flexDirection: "column" }} />
        <AdCard flexDirection={{ flexDirection: "column" }} />
      </div>
    </div>
  );
};
