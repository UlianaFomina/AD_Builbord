import React from "react";
import "./index.css";

export const UserCard = ({ ...props }) => {
    const email = props.email
    const username = props.username
  return (
    <div className="user-card">
      <div className="user-card-content">
        <p className="user-card-title">{username}</p>
        <a href="mailTo:email@mail.com" className="user-card-link">
            {email}
        </a>
      </div>
      <div className="user-card-content">
        <p className=" user-card-status">Status: blocked/active</p>
        <div className="user-card-btn-box">
          <button className="user-card-btn">check devices</button>
          <button className="user-card-btn">block</button>
          <button className="user-card-btn">unblock</button>
        </div>
      </div>
    </div>
  );
};
