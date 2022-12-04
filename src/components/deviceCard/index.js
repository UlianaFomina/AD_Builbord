import React from "react";
import "./index.css";

export const DeviceCard = ({ ...props }) => {
  return (
    <div className="device-card">
      <div className="device-card-box">
        <p className="device-card-text device-card-title">device</p>
        <p className="device-card-text">
          Status: <span className="device-card-text">active</span>{" "}
        </p>
      </div>
      <div className="device-card-box">
        <p className="device-card-text device-card-sub">
          {" "}
          Attached AD: <span className="device-card-text"> ad title</span>
        </p>
        <p className="device-card-text device-card-sub">
          {" "}
          Shedule: <span className="device-card-text"> 5 </span> times per hour
        </p>
        <div className="device-card-btn-container">
          <button className="devices-btn device-card-btn">hide</button>
          <button className="devices-btn device-card-btn">Attache ad</button>
          <button className="devices-btn device-card-btn"> edit</button>
          <button className="devices-btn device-card-btn">delete</button>
        </div>
      </div>
    </div>
  );
};
