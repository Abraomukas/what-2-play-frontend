import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Genres = () => {
	const genres = [
		{ title: 'RPG', picture: 'final-fantasy-xvi.webp' },
		{ title: 'Driving', picture: 'nfs-unbound.webp' },
		{ title: 'Sport', picture: 'nba-2k23.webp' },
		{ title: 'Shooter', picture: 'borderlands-2.webp' },
		{ title: 'Indie' },
		{ title: 'Fighting' },
		{ title: 'Horror' },
		{ title: 'Simulator' },
		{ title: 'Souls-like', picture: 'returnal.webp' },
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
				className='d-flex justify-content-between align-items-center my-5'>
				<div className='container text-center'>
					<div className='row row-cols-5 row-cols-md-5 g-4'>
						{genres.map(({ title, picture }, index) => {
							return (
								<div key={index} className='col'>
									<div className='card'>
										<img
											src={`./images/${picture}`}
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
