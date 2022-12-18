import React from "react";
import "./index.css";
import UserService from "../../api/service/UserService";

export const UserCard = ({ ...props }) => {
    const email = props.email
    const username = props.username
    const status = props.status === true ? "Blocked" : "Active"
    const userId = props.id

    async function toggleUserStatus(){
        await UserService.toggleUserStatus(userId)
    }

  return (
    <div className="user-card">
      <div className="user-card-content">
        <p className="user-card-title">{username}</p>
        <a href="mailTo:email@mail.com" className="user-card-link">
            {email}
        </a>
      </div>
      <div className="user-card-content">
        <p className=" user-card-status">Status: {status}</p>
        <div className="user-card-btn-box">
          <button className="user-card-btn">check devices</button>
            {
                props.isBlocked === true
                    ? <button className="user-card-btn" onClick={toggleUserStatus}>unblock</button>
                    : <button className="user-card-btn" onClick={toggleUserStatus}>block</button>
            }
        </div>
      </div>
    </div>
  );
};
