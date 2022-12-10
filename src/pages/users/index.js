import React from "react";
import { Header } from "../../components/header";
import { UserCard } from "../../components/userCard";
import "./index.css";

export const Users = ({ ...props }) => {
  return (
    <div className="ad">
      <Header />
      <div className="users">
        <div className="users-list">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </div>
  );
};
