import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/header";
import { AdCard } from "../../components/adCard";
import "./index.css";
import UserService from "../../api/service/UserService";
import AdvertisementService from "../../api/service/AdvertisementService";
import PdfExportService from "../../api/service/PdfExportService";

export const MyAd = ({ ...props }) => {
    const [advertisement, setAdvertisement] = useState([])
    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username")
    async function getAdvertisement(){
        try{
            let getAdvertisement = [];
            if(role === "USER"){
                getAdvertisement = await AdvertisementService.getMyAd();
            }else {
                getAdvertisement = await AdvertisementService.getAll();
            }
            setAdvertisement(getAdvertisement.data)
        }catch (e){
            console.log(e.message)
        }
    }
    useEffect( () => {
        getAdvertisement();
    }, [advertisement])
    async function exportAdvertisement(){
        await PdfExportService.exportAdvertisement().then(r => {
            console.log("Advertisement has been exported!")
        })
    }
  return (
    <div className="ad">
      <Header />
      <div className="ad-create">
            {
                role === "ADMIN"
                    ? (<button className="ad-create-btn export" onClick={exportAdvertisement}>Export Advertisement</button>)
                    :
                    (
                        <NavLink to="create">
                            <button className="ad-create-btn">Create New Advertisement</button>
                        </NavLink>
                    )
            }
      </div>
      <div className="ad-list">
          {advertisement.map(el => {
              return (<AdCard name = {username} status={el.isAppear} id={el.id} title={el.title} description={el.description} imageUrl={el.imageUrl} flexDirection={{ flexDirection: "column" }} />)
          })}
      </div>
    </div>
  );
};
