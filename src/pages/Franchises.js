import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Franchises() {
	const games = [];

	return (
		<div>
			<Navbar />
			<div
				style={{ position: 'relative', minHeight: '100vh' }}
				className='d-flex justify-content-between align-items-center'>
				<div className='container text-center'>
					<div>FRANCHISES</div>

					{/* CAROUSEL */}
					<div
						id='carouselExampleFade'
						className='carousel slide carousel-fade'>
						<div className='carousel-inner'>
							<div className='carousel-item active'>
								<img
									src='./images/returnal.webp'
									className='d-block w-100'
									alt='...'
								/>
							</div>
							<div className='carousel-item'>
								<img
									src='./images/profile.jpg'
									className='d-block w-100'
									alt='...'
								/>
							</div>
							<div className='carousel-item'>
								<img
									src='./playstation.svg'
									className='d-block w-100'
									alt='...'
								/>
							</div>
						</div>
						<button
							className='carousel-control-prev'
							type='button'
							data-bs-target='#carouselExampleFade'
							data-bs-slide='prev'>
							<span
								className='carousel-control-prev-icon'
								aria-hidden='true'></span>
							<span className='visually-hidden'>Previous</span>
						</button>
						<button
							className='carousel-control-next'
							type='button'
							data-bs-target='#carouselExampleFade'
							data-bs-slide='next'>
							<span
								className='carousel-control-next-icon'
								aria-hidden='true'></span>
							<span className='visually-hidden'>Next</span>
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Franchises;
