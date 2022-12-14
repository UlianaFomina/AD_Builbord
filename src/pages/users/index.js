import React, {useEffect, useState} from "react";
import { Header } from "../../components/header";
import { UserCard } from "../../components/userCard";
import "./index.css";
import UserService from "../../api/service/UserService";
import axios from "axios";

export const Users = ({...props}) => {
    const [users, setUsers] = useState([])
    async function getUsers(){
        try{
            const getUsers = await UserService.fetchUsers();
            setUsers(getUsers.data)
        }catch (e){
            console.log(e.message)
        }
    }
    useEffect( () => {
        getUsers();
    }, [users])
    return (
        <div className="ad">
            <Header/>
            <div className="users">
                <div className="users-list">
                    {users.map(el => {
                        return (<UserCard email={el.email} username={el.username}/>)
                    })}
                </div>
            </div>
        </div>
    );
};
