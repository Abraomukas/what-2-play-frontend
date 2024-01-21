import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GenreBox from '../components/GenreBox';

const Genres = () => {
	const genres = [
		{ id: 1, title: 'RPG' },
		{ id: 2, title: 'Driving' },
		{ id: 3, title: 'Sports' },
		{ id: 4, title: 'Shooter' },
		{ id: 5, title: 'Indie' },
		{ id: 6, title: 'Fighting' },
		{ id: 7, title: 'Horror' },
		{ id: 8, title: 'Simulator' },
		{ id: 9, title: 'Souls-like' },
		{ id: 10, title: 'Action - Adventure' },
		{ id: 11, title: 'MMO' },
		{ id: 12, title: 'Coop' },
		{ id: 13, title: 'Battle Royale' },
		{ id: 14, title: 'Puzzle' },
		{ id: 15, title: 'Platformer' },
	];

	return (
		<div>
			<Navbar />
			{/* GRID */}
			<div
				style={{ position: 'relative', minHeight: '100vh' }}
				className='d-flex justify-content-between align-items-center'>
				<div className='container text-center'>
					<div>
						<div className='row'>
							{genres.map((genre) => {
								if (genre.id < 6) {
									return (
										<div className='col'>
											<GenreBox key={genre.id} title={genre.title} />
										</div>
									);
								}
							})}
						</div>
						<div className='row'>
							{genres.map((genre) => {
								if (genre.id > 5 && genre.id < 11) {
									return (
										<div className='col'>
											<GenreBox key={genre.id} title={genre.title} />
										</div>
									);
								}
							})}
						</div>
						<div className='row'>
							{genres.map((genre) => {
								if (genre.id > 10) {
									return (
										<div className='col'>
											<GenreBox key={genre.id} title={genre.title} />
										</div>
									);
								}
							})}
						</div>
					</div>

					{/* 					
					{genres.map((genre) => {
						if (genre.id % 5 == 0) {
							console.log('ROW');
						}
						return <GenreBox key={genre.id} title={genre.title} />;
					})}
					 */}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Genres;
