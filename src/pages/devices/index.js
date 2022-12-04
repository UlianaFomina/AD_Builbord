import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/header";
import { DeviceCard } from "../../components/deviceCard";
import "./index.css";

export const Devices = ({ ...props }) => {
  return (
    <div className="devices">
      <Header />
      <div className="devices-content">
        <NavLink to="create">
          <button className="devices-btn">create new device</button>
        </NavLink>
        <div className="devices-list">
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
        </div>
      </div>
    </div>
  );
};
