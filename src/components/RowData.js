import React from "react";
import { Link } from "react-router-dom";

const RowData = ({
  srno,
  platform,
  logoPath,
  lastTradePrice,
  buyPrice,
  difference,
  savings,
  falling,
}) => {
  return (
    <>
      <tr className="table__row spacer">
        <td className="table__srno">{srno}</td>
        <td>
          <Link className="table__platform">
            <img src={logoPath} />
            <span>{platform}</span>
          </Link>
        </td>
        <td className="table__tradePrice">{lastTradePrice}</td>
        <td className="table__buyPrice">{buyPrice}</td>
        <td
          className={falling ? "trade__difference falling" : `trade__differnce`}
        >
          {difference}
        </td>
        <td className={falling ? "trade__savings falling" : `trade__savings`}>
          {falling ? (
            <i className="bx bx-caret-down"></i>
          ) : (
            <i className="bx bx-caret-up"></i>
          )}
          <span>{savings}</span>
        </td>
      </tr>
    </>
  );
};

export default RowData;
