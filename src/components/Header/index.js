import React from "react";
import { NavLink } from "../NavLink";

export const Header = function () {
  return (
    <header className="header-container">
      <div>
        <h2 className="heading">Obtaining Transporter Qualification Service</h2>
        <NavLink />
      </div>
      <button className="rating-button" data-testid="ratingBtn">
        Rate service
      </button>
    </header>
  );
};
