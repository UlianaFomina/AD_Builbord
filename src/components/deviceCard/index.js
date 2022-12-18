import React from "react";
import "./index.css";
import AdvertisementService from "../../api/service/AdvertisementService";
import DeviceService from "../../api/service/DeviceService";

export const DeviceCard = ({ ...props }) => {
  const status = props.status === true ? "Active" : "Not active"
  const title = props.title;
  const deviceId = Number(props.id);
  const impressionsPerHour = props.impressionsPerHour;

  async function changeDeviceStatus(){
    await DeviceService.toggleDeviceStatus(deviceId)
  }

  return (
    <div className="device-card">
      <div className="device-card-box">
        <p className="device-card-text device-card-title">{title}</p>
        <p className="device-card-text">
          Status: <span className="device-card-text">{status}</span>{" "}
        </p>
      </div>
      <div className="device-card-box">
        <p className="device-card-text device-card-sub">
          {" "}
          Attached AD: <span className="device-card-text"> ad title</span>
        </p>
        <p className="device-card-text device-card-sub">
          {" "}
          Shedule: <span className="device-card-text"> {impressionsPerHour} </span> times per hour
        </p>
        <div className="device-card-btn-container">
          {
            props.status === true
                ? <button className="devices-btn device-card-btn" onClick={changeDeviceStatus}>Hide</button>
                : <button className="devices-btn device-card-btn" onClick={changeDeviceStatus}>Show</button>
          }

          <button className="devices-btn device-card-btn">Attache ad</button>
          <button className="devices-btn device-card-btn"> edit</button>
          <button className="devices-btn device-card-btn">delete</button>
        </div>
      </div>
    </div>
  );
};
