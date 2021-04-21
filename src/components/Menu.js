import React from "react";

const Menu = () => {
  return (
    <nav className="navbar">
      <div className="navbar__head">
        <img src="/images/logo-hod.png" />
        <p className="navbar__header">Powered By Finstreet</p>
      </div>

      <div className="navbar__menu">
        <select>
          <option>INR</option>
        </select>
        <select>
          <option>BTC</option>
          <option>ETH</option>
          <option>USDT</option>
        </select>
        <button>BUY BTC</button>
      </div>

      <div className="navbar__right">
        <div className="navbar__timer">
          <p>60</p>
        </div>

        <button>
          <i class="bx bxl-telegram"></i>
          <span>Connect Telegram</span>
        </button>

        <label class="navbar__switch">
          <input type="checkbox" />
          <span class="navbar__slider"></span>
        </label>
      </div>
    </nav>
  );
};

export default Menu;
