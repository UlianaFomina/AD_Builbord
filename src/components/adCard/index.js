import React from "react";
import cardImg from "../../assets/card.jpg";
import "./index.css";
export const AdCard = ({ ...props }) => {
  console.log(props.flexDirection);
  return (
    <div style={props.flexDirection} className="card">
      <div className="card-content1">
        <p className="card-title">Card title</p>
        <img className="card-img" alt="" src={cardImg} />
        <p className="card-subtitle"> ad from: username</p>
      </div>
      <div className="card-content2">
        <p className="card-desk">
          There are a number of traditions for weddings that have survived into
          the 21st century. It is still traditional for the bride and groom to
          have their own parties the night before getting married. The groom's
          party is called a 'Stag party', while the bride's is known as a 'Hen
          party'.
        </p>
        <div className="card-btn-wrap">
        <div className="card-btn">
            <p className="card-btn-text">contact the author</p>
          </div>
          <div className="card-btn">
            <p className="card-btn-text">export</p>
          </div>
          <div className="card-btn">
            <p className="card-btn-text">Edit</p>
          </div>
          <div className="card-btn">
            <p className="card-btn-text">Delite</p>
          </div>
        </div>
      </div>
    </div>
  );
};
