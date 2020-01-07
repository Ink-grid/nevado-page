/** @format */

import React, { useEffect } from 'react';
import './style.css';

const Navbar = () => {
	const stopPropagation = () => {
		let id = document.getElementsByClassName('megamenu');
		Array.from(id).forEach(element => {
			element.addEventListener('click', e => {
				e.stopPropagation();
			});
		});
	};

	useEffect(() => {
		stopPropagation();
	}, []);

	return (
		<nav
			style={{ backgroundColor: '#1c1c1c' }}
			class='navbar navbar-dark navbar-expand-lg fixed-top'
			id='mainNav'>
			<div class='container'>
				<a class='navbar-brand' href='/#'>
					<img
						src='https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/edicion%20de%20nevado-27.png?alt=media&token=f347cf7d-81e5-4dd2-a150-a76ba01d9e6f'
						alt='nevado'
						height='100'
					/>
				</a>
				<button
					data-toggle='collapse'
					data-target='#navbarResponsive'
					class='navbar-toggler navbar-toggler-right'
					type='button'
					data-toogle='collapse'
					aria-controls='navbarResponsive'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<i class='fa fa-bars'></i>
				</button>
				<div class='collapse navbar-collapse' id='navbarResponsive'>
					<ul class='nav navbar-nav ml-auto text-uppercase'>
						<li class='nav-item dropdown megamenu-li'>
							<a
								class='nav-link'
								href='#'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								HOMBRE
							</a>
							<div
								style={{
									color: '#ffffff',
									borderTopStyle: 'groove',
									borderTopWidth: '5px',
									borderTopColor: 'black',
									backgroundColor: '#1c1c1c'
								}}
								class='dropdown-menu megamenu'
								aria-labelledby='dropdown01'>
								<div class='row'>
									<div class='col-sm-6 col-lg-3'>
										<h6>CALZADO</h6>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#HOLA'>
											zapato de cuero
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											Runnig
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											botas
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											casual
										</a>
									</div>
									<div class='col-sm-6 col-lg-3'>
										<h6>INDUMENTARIA</h6>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											polos
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											camisas
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											pantalones
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											sueters
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											blusas
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											short
										</a>
									</div>
									<div class='col-sm-6 col-lg-3'>
										<h6>ACCESORIOS</h6>
									</div>
								</div>
							</div>
						</li>

						<li class='nav-item dropdown megamenu-li'>
							<a
								class='nav-link'
								href=''
								id='dropdown02'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								Mujer
							</a>
							<div
								style={{
									color: '#ffffff',
									borderTopStyle: 'groove',
									borderTopWidth: '5px',
									borderTopColor: 'black',
									backgroundColor: '#1c1c1c'
								}}
								class='dropdown-menu megamenu'
								id='dropdown02'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								<div class='row'>
									<div class='col-sm-6 col-lg-3'>
										<h6>CALZADO</h6>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#HOLA'>
											zapato de cuero
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											Runnig
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											botas
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											casual
										</a>
									</div>
									<div class='col-sm-6 col-lg-3'>
										<h6>INDUMENTARIA</h6>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											polos
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											camisas
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											pantalones
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											sueters
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											blusas
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											short
										</a>
									</div>
									<div class='col-sm-6 col-lg-3'>
										<h6>ACCESORIOS</h6>
										{/* <p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Necessitatibus in veritatis, facilis eligendi sunt, culpa
											autem harum porro earum.
										</p> */}
									</div>
								</div>
							</div>
						</li>
						<li class='nav-item dropdown'>
							<a
								class='nav-link'
								href='#'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								data-hover='dropdown'
								aria-expanded='true'>
								PROMOCIONES
							</a>
						</li>
						<li class='nav-item dropdown megamenu-li'>
							<a
								class='nav-link'
								href=''
								id='dropdown02'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								Creciendo juntos
							</a>
							<div
								style={{
									color: '#ffffff',
									borderTopStyle: 'groove',
									borderTopWidth: '5px',
									borderTopColor: 'black',
									backgroundColor: '#1c1c1c'
								}}
								class='dropdown-menu megamenu'
								aria-labelledby='dropdown01'>
								<div class='row'>
									<div class='col-sm-9 col-lg-9'>
										<h6>SERVICIOS</h6>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#HOLA'>
											asesoramiento gratuito
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											apoyo empresarial b2b
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											acceso a productos de alta rotacion y disponibilidad en el
											menor plazo
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											mejor condicion de pago
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											servicio de informacion tecnicas y analiticas
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											capacitacion y entrenamientos
										</a>
										<a
											style={{ color: '#878787' }}
											class='dropdown-item'
											href='#'>
											informes actualizacion y tenencias
										</a>
									</div>
								</div>
							</div>
						</li>
						<li class='nav-item dropdown'>
							<a
								class='nav-link'
								href='#'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								data-hover='dropdown'
								aria-expanded='true'>
								Contacto
							</a>
						</li>
						<form class='form-inline'>
							<input
								class='form-control mr-sm-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							<button
								class='btn btn-outline-success my-2 my-sm-0'
								type='submit'>
								Search
							</button>
						</form>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
