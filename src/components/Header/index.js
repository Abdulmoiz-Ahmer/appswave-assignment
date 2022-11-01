import React from "react";
import { NavLink } from "../NavLink";

export const Header = function () {
  return (
    <header>
      <div className="header-container">
        <div>
          <header>
            <div className="header-box">
              <h2 className="heading">
                Obtaining Transporter Qualification Service
              </h2>
            </div>
          </header>
          <NavLink />
        </div>
        <div>
          <button className="rating-button ">Rate service</button>
        </div>
      </div>
    </header>
  );
};
