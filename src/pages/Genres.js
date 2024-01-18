import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GenreBox from '../components/GenreBox';

const Genres = () => {
	const genres = [
		{ title: 'RPG' },
		{ title: 'Driving' },
		{ title: 'Sports' },
		{ title: 'Shooter' },
		{ title: 'Indie' },
		{ title: 'Fighting' },
		{ title: 'Horror' },
		{ title: 'Simulator' },
		{ title: 'Souls-like' },
		{ title: 'Action - Adventure' },
		{ title: 'MMO' },
		{ title: 'Coop' },
		{ title: 'Battle Royale' },
		{ title: 'Puzzle' },
		{ title: 'Platformer' },
	];

	return (
		<div>
			<Navbar />
			{/* GRID */}
			<div
				style={{ position: 'relative', minHeight: '100vh' }}
				className='d-flex justify-content-between align-items-center'>
				<div className='container text-center'>
					{genres.map((index, title) => {
						return <GenreBox key={index} title={title}></GenreBox>;
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Genres;
