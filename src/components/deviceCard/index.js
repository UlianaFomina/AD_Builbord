import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import img from "../../assets/card.jpg";
import "./index.css";
import AdvertisementService from "../../api/service/AdvertisementService";
import DeviceService from "../../api/service/DeviceService";
import PdfExportService from "../../api/service/PdfExportService";

export const DeviceCard = ({ ...props }) => {
  const status = props.status === true ? "Active" : "Not active";
  const title = props.title;
  const deviceId = Number(props.id);
  const impressionsPerHour = props.impressionsPerHour;
  const { handleSubmit } = useForm();
  const [isVisible, setIsVisible] = useState(false)
  const [advertisement, setAdvertisement] = useState([])
  const [advertisementDevice, setAdDev] = useState([])
  async function getAdvertisement(){
    try{
      let getAdvertisement = [];
      getAdvertisement = await AdvertisementService.getMyAd(true);
      setAdvertisement(getAdvertisement.data)
    }catch (e){
      console.log(e.message)
    }
  }

  async function getById() {
    try {
      let getDevices = [];
      getDevices = await DeviceService.getById(deviceId);
      setAdDev(getDevices.data.advertisements)
    } catch (e) {
      console.log(e.message)
    }
  }
  useEffect( () => {
    getAdvertisement();
    getById()
  }, [advertisement, advertisementDevice])
  async function changeDeviceStatus() {
    await DeviceService.toggleDeviceStatus(deviceId);
  }

  async function attachAd(deviceId, adId) {
    await DeviceService.attachAdvertisementToDevice(deviceId, adId)
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
          Attached AD:
          {advertisementDevice.map((el, i) => {
            if(advertisementDevice.length === i + 1) {
              return (<span className="device-card-text"> {el.title}</span>)
            }else {
              return (<span className="device-card-text"> {el.title},</span>)
            }
          })}
        </p>
        <p className="device-card-text device-card-sub">
          {" "}
          Shedule:{" "}
          <span className="device-card-text"> {impressionsPerHour} </span> times
          per hour
        </p>
        <div className="device-card-btn-container">
          {props.status === true ? (
            <button
              className="devices-btn device-card-btn"
              onClick={changeDeviceStatus}
            >
              Hide
            </button>
          ) : (
            <button
              className="devices-btn device-card-btn"
              onClick={changeDeviceStatus}
            >
              Show
            </button>
          )}
          <button onClick={() => setIsVisible(true)} className="devices-btn device-card-btn">Attache ad</button>
        </div>
      </div>
      <div className={isVisible ? "device-attache-active" : "device-attache"}>
        <div className="device-attache-content">
          <div className="device-attache-head">
            <p className="device-attache-title">Attache ad</p>
            <button onClick={() => setIsVisible(false)} type="button" className="device-attache-btn-close">
              <svg viewBox="0 0 612.043 612.043" className="device-attache-svg">
                <path
                  d="M397.503,306.011l195.577-195.577c25.27-25.269,25.27-66.213,0-91.482c-25.269-25.269-66.213-25.269-91.481,0
				                L306.022,214.551L110.445,18.974c-25.269-25.269-66.213-25.269-91.482,0s-25.269,66.213,0,91.482L214.54,306.033L18.963,501.61
				                c-25.269,25.269-25.269,66.213,0,91.481c25.269,25.27,66.213,25.27,91.482,0l195.577-195.576l195.577,195.576
				                c25.269,25.27,66.213,25.27,91.481,0c25.27-25.269,25.27-66.213,0-91.481L397.503,306.011z"
                />
              </svg>
            </button>
          </div>
          <div
            className="device-attache-form"
          >
            {advertisement.map(el => {
              return(
                  <button type="submit" onClick={() => attachAd(deviceId, el.id)} className="device-attache-btn">
                    <p className="device-attache-text">{el.title}</p>
                    <img alt="img" src={el.imageUrl} className="device-attache-img" />
                  </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
