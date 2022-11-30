import React from "react";
import cardImg from "../../assets/card.jpg";
import "./index.css";
export const AdCard = ({ ...props }) => {
  const pathname = window.location.pathname;

  return (
    <div style={props.flexDirection} className={pathname === "/main" ? "card" : "ad-card-content"}>
      <div
        className={pathname === "/main" ? "card-content1" : "ad-card-content1"}
      >
        <p className={pathname === "/main" ? "card-title" : "ad-card-title"}>
          Card title
        </p>
        <img className="card-img" alt="" src={cardImg} />
        <p className="card-subtitle"> ad from: username</p>
      </div>
      <div
        className={pathname === "/main" ? "card-content2" : "ad-card-content2"}
      >
        <p className="card-desk">
          There are a number of traditions for weddings that have survived into
          the 21st century. It is still traditional for the bride and groom to
          have their own parties the night before getting married. The groom's
          party is called a 'Stag party', while the bride's is known as a 'Hen
          party'.
        </p>
        <div
          className={
            pathname === "/main" ? "card-btn-wrap" : "ad-card-btn-wrap"
          }
        >
          <div className={pathname === "/main" ? "card-btn-box" : "ad-card-btn-box"}>
            <button className="card-btn">
              <p className="card-btn-text">contact the author</p>
            </button>
            <button className="card-btn">
              <p className="card-btn-text">export</p>
            </button>
          </div>
          <div className={pathname === "/main" ? "card-btn-box" : "ad-card-btn-box"}>
            <button className="card-btn">
              <p className="card-btn-text">Edit</p>
            </button>
            <button className="card-btn">
              <p className="card-btn-text">Delete</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
