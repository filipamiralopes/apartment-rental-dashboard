import React from 'react';
import logoOne from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
	//#361236
	return (
		<div className="navbar">
			<img
				src={logoOne}
				alt="apartment rentals logo"
				style={{ height: 60 }}
			/>
			<Link to="/">
				<h2>Apartment Rental Lopes&Dias</h2>
			</Link>
			<span> </span>
		</div>
	);
};

export default Navbar;
