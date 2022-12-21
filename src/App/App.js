import React, {useContext, useEffect, useState} from "react";
import {Routing} from "./Routing"
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

function App() {
    const {store} = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
        let username = localStorage.getItem("username");
        let token = localStorage.getItem('token');
        if(token){
            console.log("TOKEN: " + token)
            store.checkAuth()
        }else {
            navigate('/')
        }
        store.getUserByUsername(username).then(value => {
            if(value.data.isBlocked) {
                navigate('/blocked')
            }
        })
    }, [])
    return (
    <>
      <Routing />
    </>
  );
}

export default observer(App);
