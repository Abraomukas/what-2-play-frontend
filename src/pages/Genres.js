import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Genres() {
	const genres = [
		{ title: 'RPG', image: '' },
		{ title: 'Driving', image: '' },
		{ title: 'Sports', image: '' },
		{ title: 'Shooter', image: '' },
		{ title: 'Indie', image: '' },
		{ title: 'Fighting', image: '' },
		{ title: 'Horror', image: '' },
		{ title: 'Simulator', image: '' },
		{ title: 'Souls-like', image: '' },
		{ title: 'Action - Adventure', image: '' },
		{ title: 'MMO', image: '' },
		{ title: 'Coop', image: '' },
		{ title: 'Battle Royale', image: '' },
		{ title: 'Puzzle', image: '' },
		{ title: 'Platformer', image: '' },
	];

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />
			{/* GRID */}
			<Footer />
		</div>
	);
}

export default Genres;
