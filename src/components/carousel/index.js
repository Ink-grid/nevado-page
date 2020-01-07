/** @format */

import React from 'react';

const Carousel = () => {
	return (
		<div
			style={{ height: '100px' }}
			id='carouselExampleControls'
			className='carousel slide'
			data-ride='carousel'>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img
						className='d-block w-100'
						height='450'
						src='http://www.hdfondos.eu/pictures/2014/1126/1/colorful-vector-shoe-curves-wallpaper-65611.jpg'
						alt='First slide'
					/>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						height='450'
						src='https://wallpaperstock.net/wallpapers/thumbs1/54206hd.jpg'
						alt='Second slide'
					/>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						height='450'
						src='http://www.hdfondos.eu/preview/get_photo/641023/1280/960'
						alt='Third slide'
					/>
				</div>
			</div>
			<a
				className='carousel-control-prev'
				href='#carouselExampleControls'
				role='button'
				data-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='sr-only'>Previous</span>
			</a>
			<a
				className='carousel-control-next'
				href='#carouselExampleControls'
				role='button'
				data-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='sr-only'>Next</span>
			</a>
		</div>
	);
};

export default Carousel;
