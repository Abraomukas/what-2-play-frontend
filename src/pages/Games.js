import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Games() {
	const games = [];

	return (
		<div>
			<Navbar />
			{/* CAROUSEL */}
			<div
				style={{ position: 'relative', minHeight: '100vh' }}
				className='d-flex justify-content-between align-items-center'>
				<div className='container text-center'></div>
			</div>
			<Footer />
		</div>
	);
}

export default Games;
