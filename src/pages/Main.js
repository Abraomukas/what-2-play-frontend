import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

//* PAGES
import Hero from './Hero';

function Main() {
	const sections = [Hero, Hero, Hero];

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			{/* SECTIONS */}
			{sections.map((SectionComponent, index) => (
				<section key={index}>
					<div>
						<SectionComponent />
					</div>
				</section>
			))}

			<Footer />
		</div>
	);
}

export default Main;
