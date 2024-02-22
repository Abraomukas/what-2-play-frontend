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
		{ title: 'Indie', picture: 'nobody-saves-the-world.webp' },
		{ title: 'Fighting', picture: 'kakarot.webp' },
		{ title: 'Horror', picture: 'until-dawn.webp' },
		{ title: 'Simulator', picture: 'power-wash-sim.webp' },
		{ title: 'Souls-like', picture: 'dark-souls-remastered.webp' },
		{ title: 'Action - Adventure', picture: 'guardians-of-the-galaxy.webp' },
		{ title: 'MMO', picture: 'final-fantasy-xiv.webp' },
		{ title: 'Coop', picture: 'overcooked-2.webp' },
		{ title: 'Battle Royale', picture: 'super-animal-royale.webp' },
		{ title: 'Puzzle', picture: 'chicory.webp' },
		{ title: 'Platformer', picture: 'hollow-knight.webp' },
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
