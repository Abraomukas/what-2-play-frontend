import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GameBox from '../components/GameBox';

const Genres = () => {
	const genres = [
		{ title: 'RPG' },
		{ title: 'Driving' },
		{ title: 'Sport' },
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
					<div className='row row-cols-5 row-cols-md-5 g-4'>
						{genres.map(({ title }, index) => {
							return (
								<div key={index} className='col'>
									<div className='card'>
										<img
											src='...'
											className='card-img-top'
											alt={`${title} games`}
										/>
										<div className='card-body'>
											<h5 className='card-title'>{title}</h5>
											<p className='card-text'>Lore ipsum.</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Genres;
