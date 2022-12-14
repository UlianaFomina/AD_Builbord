import React from "react";
import { Header } from "../../../../components/header";
import { Link } from "react-scroll";
import video from "../../../../assets/video-bg.mp4";
import "./index.css";

export const MainGreet = ({ ...props }) => {
  return (
    <div className="main-greet-wrap">
      <video
        loop="loop"
        autoPlay="autoplay"
        muted="muted"
        className="main-greet-bg"
      >
        <source src={video} type="video/mp4" />
      </video>
      <Header />
      <div className="main-greet">
        <div className="main-greet-box">
          <p className="main-greet-title">there</p>
          <p className="main-greet-title">should be</p>
          <p className="main-greet-title">an inscription</p>
        </div>
        <Link
          to="main-view"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="main-greet-slider"
        >
          <p className="main-greet-slider-text">View AD</p>
          <svg
            className="main-greet-slider-svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="96px"
            height="96px"
            viewBox="0 0 96 96"
            enableBackground="new 0 0 96 96"
          >
            <switch>
              <foreignObject
                requiredExtensions="&ns_ai;"
                x="0"
                y="0"
                width="1"
                height="1"
              ></foreignObject>
              <g>
                <path
                  d="M44,12v62.344L22.828,53.172c-1.562-1.562-4.094-1.562-5.656,0c-1.562,1.562-1.562,4.095,0,5.657l28,28
			c1.562,1.562,4.095,1.562,5.656,0l28-28C79.609,58.048,80,57.024,80,56c0-1.023-0.391-2.047-1.172-2.828
			c-1.562-1.562-4.095-1.562-5.656,0L52,74.344V12c0-2.208-1.791-4-4-4S44,9.791,44,12z"
                />
              </g>
            </switch>
          </svg>
        </Link>
      </div>
    </div>
  );
};
