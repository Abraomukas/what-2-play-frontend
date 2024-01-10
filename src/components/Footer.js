import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function Footer() {
	const currentMode = Cookies.get('darkMode') || true;
	const isDarkMode = currentMode === false;

	return (
		<nav
			className={`navbar navbar-expand-lg ${
				isDarkMode ? 'navbar-light bg-light' : 'navbar-dark bg-dark'
			}  h-100 d-flex justify-content-between align-items-center`}>
			{/* GRID CONTAINER */}
			<div className='container p-4'>
				{/* SOCIAL MEDIA */}
				<section className='mb-4'>
					<div className='btn-group' role='group'>
						{/* INSTAGRAM */}
						<Link to='https://www.instagram.com/abraomukas' target='_blank'>
							<button
								type='button'
								className='btn btn-outline-primary'
								style={{ backgroundColor: '#3b5998' }}>
								<i className='fab fa-instagram text-white'></i>
							</button>
						</Link>

						{/* TWITTER */}
						<Link to='https://twitter.com/abraham_g11' target='_blank'>
							<button
								type='button'
								className='btn btn-outline-primary'
								style={{ backgroundColor: '#3b5998' }}>
								<i className='fas fa-x text-white'></i>
							</button>
						</Link>
					</div>
				</section>
				{/* TEXT */}
				<section className='mb-4'>
					<div>
						{/* GRID ROW */}
						<div className='row d-flex justify-content-center'>
							{/* GRID COLUMN */}
							<div className={`col-auto ${isDarkMode ? '' : 'text-white'}`}>
								<p>
									<strong>What 2 Play</strong>
									<small> by Abraomukas</small>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</nav>
	);
}

export default Footer;
