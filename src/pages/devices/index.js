import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/header";
import { DeviceCard } from "../../components/deviceCard";
import "./index.css";
import AdvertisementService from "../../api/service/AdvertisementService";
import DeviceService from "../../api/service/DeviceService";
import PdfExportService from "../../api/service/PdfExportService";

export const Devices = ({ ...props }) => {
  const [devices, setDevices] = useState([])
  const role = localStorage.getItem('role');
  async function getDevices(){
    try{
      let getDevices;
      if(role === "ADMIN"){
        getDevices = await DeviceService.getAll();
      }else {
        getDevices = await DeviceService.getMyDevices();
      }
      setDevices(getDevices.data)
    }catch (e){
      console.log(e.message)
    }
  }
  useEffect( () => {
    getDevices();
  }, [devices])
  async function exportDevices(){
    await PdfExportService.exportDevice().then(r => {
      console.log("Devices has been exported!")
    })
  }
  return (
    <div className="devices">
      <Header />
      <div className="devices-content">
        {
          role === "ADMIN" ? (<button className="devices-btn" onClick={exportDevices}>Export Devices</button>) : ('')
        }
        <NavLink to="create">
          <button className="devices-btn">create new device</button>
        </NavLink>
        <div className="devices-list">
          {devices.map(el => {
            return (<DeviceCard id={el.id} title={el.title} impressionsPerHour={el.impressionPerHour} status={el.isActive}/>);
          })}
        </div>
      </div>
    </div>
  );
};
