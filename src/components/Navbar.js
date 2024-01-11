import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import i18next from 'i18next';

const languages = [
	{ name: 'Español', country_code: 'es' },
	{ name: 'Deutsch', country_code: 'de' },
	{ name: 'English', country_code: 'gb' },
];

const sections = [
	{ label: 'Games', to: '/games' },
	{ label: 'Genres', to: '/genres' },
];

function Navbar() {
	useEffect(() => {}, []);
	const darkMode = Cookies.get('darkMode');

	if (!darkMode) {
		Cookies.set('darkMode', false);
	}

	const currentMode = Cookies.get('darkMode') || false;
	const currentLngCode = Cookies.get('i18next') || 'es';

	const [isDarkMode, setIsDarkMode] = useState(currentMode);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoginStatus = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	return (
		<nav
			className={`navbar navbar-expand-lg ${
				isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
			}  h-100 d-flex justify-content-between align-items-center`}>
			<div className='navbar-left'>
				{/* LINKS */}
				<button
					className='navbar-brand navbar-toggler'
					type='button'
					data-mdb-toggle='collapse'
					data-mdb-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<i className='fas fa-bars' />
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						{/* SECTIONS */}
						{sections.map(({ label, to }, index) => {
							return (
								<li key={index} className='nav-item'>
									<Link key={index} className='nav-link' to={to}>
										<strong>{label}</strong>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className='navbar-middle'>
				{/* BRAND*/}
				<div className='navbar-middle d-flex align-items-center mx-auto'>
					<a href='/'>
						<img
							src='./images/logo.svg'
							height='80'
							alt='H&D Logo'
							loading='lazy'
							style={{
								filter: isDarkMode
									? 'brightness(0) invert(1) grayscale(1)'
									: '',
							}}
						/>
					</a>
				</div>
			</div>
			<div className='navbar-right'>
				<div className='container'>
					{!isLoggedIn ? (
						<div className='row d-flex align-items-center'>
							<div className='col'>
								{/* DARK MODE */}
								<div className='dropdown'>
									<a
										className='text-reset me-3'
										href='#'
										role='button'
										aria-expanded='false'
										onClick={() => {
											Cookies.set('darkMode', !isDarkMode);
											setIsDarkMode(!isDarkMode);
										}}>
										{isDarkMode ? (
											<i className='fas fa-sun' style={{ color: '#ffffff' }} />
										) : (
											<i className='fas fa-moon' style={{ color: '#000000' }} />
										)}
									</a>
								</div>
							</div>
							<div className='col'>
								{/* LANGUAGES */}
								<div className='dropdown'>
									<a
										className='text-reset me-3 dropdown-toggle hidden-arrow'
										href='#'
										id='navbarDropdownMenuLink'
										role='button'
										data-mdb-toggle='dropdown'
										aria-expanded='false'>
										<i
											className='fas fa-globe'
											style={{
												color: isDarkMode ? '#ffffff' : '#000000',
											}}></i>
									</a>
									<ul
										className='dropdown-menu dropdown-menu-end'
										aria-labelledby='navbarDropdownMenuLink'>
										{languages.map(({ name, country_code }, index) => {
											return (
												<li key={index}>
													<button
														key={index}
														className='dropdown-item'
														onClick={() => {
															i18next.changeLanguage(country_code);
															window.location.reload();
														}}
														disabled={country_code === currentLngCode}>
														<span
															key={index}
															className={`fi fi-${country_code} fis mx-3`}
															style={{
																opacity:
																	country_code === currentLngCode ? 0.5 : 1,
															}}
														/>

														{name}
													</button>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
							<div className='col'>
								{/* LOGIN */}
								<div className='d-grid'>
									<div>
										<button
											className='btn btn-primary'
											type='button'
											style={{ minWidth: '100px' }}
											onClick={() => {
												setIsLoggedIn(!isLoggedIn);
											}}>
											acceso
										</button>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div className='row d-flex align-items-center'>
							<div className='col'>
								{/* DARK MODE */}
								<div className='dropdown'>
									<a
										className='text-reset me-3'
										href='#'
										role='button'
										aria-expanded='false'
										onClick={() => {
											Cookies.set('darkMode', !isDarkMode);
											setIsDarkMode(!isDarkMode);
										}}>
										{isDarkMode ? (
											<i className='fas fa-sun' style={{ color: '#ffffff' }} />
										) : (
											<i className='fas fa-moon' style={{ color: '#000000' }} />
										)}
									</a>
								</div>
							</div>
							<div className='col'>
								{/* LANGUAGES */}
								<div className='dropdown'>
									<a
										className='text-reset me-3 dropdown-toggle hidden-arrow'
										href='#'
										id='navbarDropdownMenuLink'
										role='button'
										data-mdb-toggle='dropdown'
										aria-expanded='false'>
										<i
											className='fas fa-globe'
											style={{
												color: isDarkMode ? '#ffffff' : '#000000',
											}}></i>
									</a>
									<ul
										className='dropdown-menu dropdown-menu-end'
										aria-labelledby='navbarDropdownMenuLink'>
										{languages.map(({ name, country_code }, index) => {
											return (
												<li key={index}>
													<button
														key={index}
														className='dropdown-item'
														onClick={() => {
															i18next.changeLanguage(country_code);
															window.location.reload();
														}}
														disabled={country_code === currentLngCode}>
														<span
															key={index}
															className={`fi fi-${country_code} fis mx-3`}
															style={{
																opacity:
																	country_code === currentLngCode ? 0.5 : 1,
															}}
														/>

														{name}
													</button>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
							<div className='col'>
								{/* PROFILE */}
								<img
									src='./images/profile.jpg'
									alt='Bootstrap'
									width='45'
									height='45'
								/>
							</div>
							<div className='col'>
								{/* LOGOUT */}
								<div className='d-grid'>
									<div>
										<button
											className='btn btn-danger'
											type='button'
											style={{ minWidth: '100px' }}
											onClick={() => {
												setIsLoggedIn(!isLoggedIn);
											}}>
											salir
										</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
