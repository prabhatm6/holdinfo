import React from "react";
import "../styles/info.css";

const AverageHead = ({ head, subhead }) => {
  return (
    <div className="info__head">
      <p className="avg__head">{head}</p>
      <p className="avg__subhead">{subhead}</p>
    </div>
  );
};

const Info = () => {
  return (
    <div className="info">
      <AverageHead head="0.28%" subhead="5 Mins" />
      <AverageHead head="1.61%" subhead="1 Hour" />
      <div className="info__main">
        <p className="info__main-head">Best Price To Trade</p>
        <p className="info__main-price">₹ 46,32,958</p>
        <p className="info__main-note">Average BTC/INR net price including commission</p>
      </div>
      <AverageHead head="5.51%" subhead="1 day" />
      <AverageHead head="6.12%" subhead="7 days" />
    </div>
  );
};

export default Info;
