import React from "react";
import cardImg from "../../assets/card.jpg";
import "./index.css";
import AdvertisementService from "../../api/service/AdvertisementService";
export const AdCard = ({ ...props }) => {
  const pathname = window.location.pathname;
  const id = props.id;
  const title = props.title
  const description = props.description
  const imageUrl = props.imageUrl;
  const username = props.name
  const status = props.status
  return (
    <div style={props.flexDirection} className={pathname === "/main" ? "card" : "ad-card-content"}>
      <div
        className={pathname === "/main" ? "card-content1" : "ad-card-content1"}
      >
        <p className={pathname === "/main" ? "card-title" : "ad-card-title"}>
          {title}
        </p>
        <img className="card-img" alt=""  src={imageUrl} />
        <p className="card-subtitle"> ad from: {username}</p>
      </div>
      <div
        className={pathname === "/main" ? "card-content2" : "ad-card-content2"}
      >
        <p className="card-desk">
          {description}
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
          </div>
          <div className={pathname === "/main" ? "card-btn-box" : "ad-card-btn-box"}>
            <button className="card-btn">
              {
                status === false
                    ? <p className="card-btn-text" onClick={() => AdvertisementService.hideById(id)}>Hide</p>
                    : <p className="card-btn-text" onClick={() => AdvertisementService.hideById(id)}>Show</p>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
