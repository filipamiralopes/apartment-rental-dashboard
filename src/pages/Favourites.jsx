import React from 'react';
import { Link } from 'react-router-dom';
import ApartmentCard from '../components/ApartmentCard';

const Favourites = ({
	favRentals,
	handleDeleteUnit,
	handleAddToFavourites,
}) => {
	return (
		<div className="favourites-project">
			<h2>Favourite Apartments:</h2>
			{favRentals.length === 0 ? (
				<p className='pFavorites'>No favorites yet...</p>
			) : (
				favRentals.map((unit) => (
					<ApartmentCard
						key={unit.id}
						rental={unit}
						onDelete={handleDeleteUnit}
						handleAddToFavourites={handleAddToFavourites}
						favRentals={favRentals}
					/>
				))
			)}
		</div>
	);
};

export default Favourites;
