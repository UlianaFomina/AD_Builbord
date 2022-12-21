import React, {useContext} from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import {Main} from "../pages/main";
import {Auth} from "../pages/auth";
import {MyAd} from "../pages/myAd";
import {Devices} from "../pages/devices";
import {CreateAd} from "../pages/createAd";
import {CreateDevice} from "../pages/createDevice";
import {Users} from "../pages/users";
import {NotFound} from "../pages/notFound";
import {Blocked} from "../pages/blocked";
import {Context} from "../index";

export const Routing = ({...props}) => {
    const location = useLocation();
    const username = localStorage.getItem("username");
    const {store} = useContext(Context)
    const navigate = useNavigate()

    store.getUserByUsername(username).then(value => {
        if (value.data.isBlocked) {
            navigate('/blocked')
        }
    })
    return (
        <Routes location={location}>
            <Route path="/" element={<Auth/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/ad" element={<MyAd/>}/>
            <Route path="/ad/create" element={<CreateAd/>}/>
            <Route path="/devices" element={<Devices/>}/>
            <Route path="/devices/create" element={<CreateDevice/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/notFound" element={<NotFound/>}/>
            <Route path="/blocked" element={<Blocked/>}/>
        </Routes>
    );
};
