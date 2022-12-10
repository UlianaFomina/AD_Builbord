import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Main } from "../pages/main";
import { Auth } from "../pages/auth";
import { MyAd } from "../pages/myAd";
import { Devices } from "../pages/devices";
import { CreateAd } from "../pages/createAd";
import { CreateDevice } from "../pages/createDevice";
import { Users } from "../pages/users";

export const Routing = ({ ...props }) => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Auth />} />
      <Route path="*" element={<Auth />} />
      <Route path="/main" element={<Main />} />
      <Route path="/ad" element={<MyAd />} />
      <Route path="/ad/create" element={<CreateAd />} />
      <Route path="/devices" element={<Devices />} />
      <Route path="/devices/create" element={<CreateDevice />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};
