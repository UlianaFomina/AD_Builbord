import React from "react";
import { AdCard } from "../../../../components/adCard";
import "./index.css";

export const MainView = ({ ...props }) => {
  return (
    <div className="main-view">
      <AdCard flexDirection={{flexDirection: "row"}}/>
      <AdCard flexDirection={{flexDirection: "row-reverse"}}/>
      <AdCard flexDirection={{flexDirection: "row"}}/>
    </div>
  );
};