import React, { useEffect } from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

function Genres() {
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

	const rows = [];
	console.log('BEFORE - ' + rows);
	for (let i = 0; i < genres.length; i += 5) {
		rows.push(genres.slice(i, i + 5));
	}
	console.log('AFTER - ' + rows);

	return (
		<div>
			<Navbar />
			{/* GRID */}
			<div
				style={{ position: 'relative', minHeight: '100vh' }}
				className='d-flex justify-content-between align-items-center'>
				<div className='container text-center'>
					{rows.map((row, rowIndex) => {
						<div key={rowIndex} className='row'>
							{row.map((title, index) => {
								<div key={index} className='col'>
									{title}
								</div>;
							})}
						</div>;
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Genres;
