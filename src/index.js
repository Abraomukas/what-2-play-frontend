import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

const spinnerSizing = { width: '3rem', height: '3rem' };

const spinnerFallback = (
	<div className='d-flex justify-content-center mt-3'>
		<div className='spinner-border' style={spinnerSizing} role='status'>
			<span className='visually-hidden'>Loading...</span>
		</div>
	</div>
);

/**
 * PAGES
 */

import ErrorPage from './pages/Error';
import Main from './pages/Main';
import Genres from './pages/Genres';
import Franchises from './pages/Franchises';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
	},
	{ path: '/genres', element: <Genres />, errorElement: <ErrorPage /> },
	{ path: '/franchises', element: <Franchises />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.Suspense fallback={spinnerFallback}>
		<RouterProvider router={router} />
	</React.Suspense>
);
