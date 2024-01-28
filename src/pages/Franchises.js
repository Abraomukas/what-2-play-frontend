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
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Franchises;
