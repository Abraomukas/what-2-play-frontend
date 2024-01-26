import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GameBox from '../components/GameBox';

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
					<div class='row row-cols-5 row-cols-md-5 g-4'>
						<div class='col'>
							<div class='card'>
								<img src='...' class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>
										This is a longer card with supporting text below as a
										natural lead-in to additional content. This content is a
										little bit longer.
									</p>
								</div>
							</div>
						</div>
						<div class='col'>
							<div class='card'>
								<img src='...' class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>
										This is a longer card with supporting text below as a
										natural lead-in to additional content. This content is a
										little bit longer.
									</p>
								</div>
							</div>
						</div>
						<div class='col'>
							<div class='card'>
								<img src='...' class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>
										This is a longer card with supporting text below as a
										natural lead-in to additional content.
									</p>
								</div>
							</div>
						</div>
						<div class='col'>
							<div class='card'>
								<img src='...' class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>
										This is a longer card with supporting text below as a
										natural lead-in to additional content. This content is a
										little bit longer.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Genres;
