import React, {useEffect, useState} from "react";
import {AdCard} from "../../../../components/adCard";
import "./index.css";
import UserService from "../../../../api/service/UserService";
import DeviceService from "../../../../api/service/DeviceService";

export const MainView = ({...props}) => {
    const [devices, setDevice] = useState([])

    async function getAd() {
        try {
            const getDevices = await DeviceService.getAllActive();
            setDevice(getDevices.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getAd()
    }, [devices])
    return (
        <div className="main-view">
            {devices.map(device => {
                const advertisements = device.advertisements;
                const username = device.person.username
                let resAd = [];
                let j = 0;
                for(let i = 0; i < advertisements.length; i++) {
                    const ad = advertisements[i];
                    const isAppear = ad.isAppear;
                    if(!isAppear) {
                        if (i/2 === 0) {
                            resAd.push(<AdCard name={username} title={ad.title} description={ad.description} imageUrl={ad.imageUrl}
                                               flexDirection={{flexDirection: "row"}}/>)
                        } else {
                            resAd.push(<AdCard name={username} title={ad.title} description={ad.description} imageUrl={ad.imageUrl}
                                               flexDirection={{flexDirection: "row-reverse"}}/>)
                        }
                        j++;
                    }
                }
                return resAd;
            })}
        </div>
    );
};