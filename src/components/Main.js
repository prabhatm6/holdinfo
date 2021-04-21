import React from "react";
import RowData from "./RowData";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Main = () => {
  return (
    <div className="main">
      <Link className="main__img top">
        <img src="/images/hero-banner-1.png" alt="banner-2" />
      </Link>

      <div className="table__wrapper">
        <table className="table">
          <thead>
            <tr>
              <th className="table__headsrno">#</th>
              <th>platform</th>
              <th>last traded price</th>
              <th>Buy/sell price</th>
              <th>Difference</th>
              <th>savings</th>
            </tr>
          </thead>

          <tbody>
            <RowData
              logoPath={"/images/wazirlogo.png"}
              srno={1}
              platform={"WazirX"}
              lastTradePrice={"₹ 47,05,550"}
              buyPrice={"₹ 47,05,246 / ₹ 47,05,550"}
              difference={"8.31%"}
              savings={"₹ 3,61,212"}
            />
            <RowData
              logoPath={"/images/bitbns.png"}
              srno={2}
              platform={"bitbns"}
              lastTradePrice={"₹ 47,05,550"}
              buyPrice={"₹ 47,05,246 / ₹ 47,05,550"}
              difference={"8.31%"}
              savings={"₹ 3,42,186"}
            />

            <RowData
              logoPath={"/images/Giotus.png"}
              srno={3}
              platform={"Giotus"}
              lastTradePrice={"₹ 47,05,550"}
              buyPrice={"₹ 47,05,246 / ₹ 47,05,550"}
              difference={"8.31%"}
              savings={"₹ 3,42,186"}
            />
            <RowData
              logoPath={"/images/colod.png"}
              srno={4}
              platform={"Colodax"}
              lastTradePrice={"₹ 47,05,550"}
              buyPrice={"₹ 47,05,246 / ₹ 47,05,550"}
              difference={"8.31%"}
              savings={"₹ 3,42,186"}
            />
            <RowData
              logoPath={"/images/zebpay.png"}
              srno={5}
              platform={"Zebpay"}
              lastTradePrice={"₹ 47,05,550"}
              buyPrice={"₹ 47,05,246 / ₹ 47,05,550"}
              difference={"8.31%"}
              savings={"₹ 3,42,186"}
            />
            <RowData
              logoPath={"/images/coin.png"}
              srno={6}
              platform={"CoinDCX"}
              lastTradePrice={"₹ 47,05,550"}
              buyPrice={"₹ 47,05,246 / ₹ 47,05,550"}
              difference={"-39.40%"}
              savings={"₹ 16,79,230"}
              falling={true}
            />
          </tbody>
        </table>
      </div>

      <Link className="main__img bottom">
        <img src="/images/hero-banner-2.png" alt="banner-2" />
      </Link>
    </div>
  );
};

export default Main;
