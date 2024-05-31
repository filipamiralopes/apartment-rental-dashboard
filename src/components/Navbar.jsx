import React from "react";
import logoOne from "../assets/logo.png";

const Navbar = () => {
  //#361236
  return (
    <div className="navbar">
      <img src={logoOne} alt="apartment rentals logo" style={{ height: 60 }} />

      <h2>Apartment Rental Lopes&Dias</h2>

      <span> </span>
    </div>
  );
};

export default Navbar;
