import React, {useEffect, useState} from "react";
import { Header } from "../../components/header";
import { UserCard } from "../../components/userCard";
import "./index.css";
import UserService from "../../api/service/UserService";
import PdfExportService from "../../api/service/PdfExportService";

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
    async function exportUsers(){
        await PdfExportService.exportUsers().then(r => {
            console.log("Users has been exported!")
        })
    }
    return (
        <div className="ad">
            <Header/>
            <div className="users">
                <button className="user-card-btn export-button" onClick={PdfExportService.exportUsers}>Export Users</button>
                <div className="users-list">
                    {users.map(el => {
                        return (<UserCard email={el.email} username={el.username}/>)
                    })}
                </div>
            </div>
        </div>
    );
};
