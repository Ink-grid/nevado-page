/** @format */

import React from 'react';
import Navbar from './components/navbar/';
import Carousel from './components/carousel/';
import ItensClazados from './components/ItensCalzados/';
import Promociones from './components/Promociones/';
import Footer from './components/Footer/';

import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Navbar />
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<Carousel />
			</header>
			<div className='App-header'>
				<ItensClazados />
			</div>
			<Promociones />
			<Footer />
		</div>
	);
}

export default App;
