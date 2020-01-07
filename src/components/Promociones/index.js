/** @format */

import React from 'react';

const Promociones = () => {
	return (
		<div class='' style={{ padding: '2em', backgroundColor: '#eef4f3' }}>
			<div class='row'>
				<div class='col'>
					<div class='card text-center'>
						<div class='card-body'>
							<i class='fas fa-question-circle fa-3x'></i>

							<h6 style={{ paddingTop: '2.5em' }} class='card-title'>
								¿TENES ALGUNA DUDA?
							</h6>
							<p class='card-text'>Habla con un experto en producto</p>
							<a href='#' class='btn btn-primary'>
								Mas información
							</a>
						</div>
					</div>
				</div>
				<div class='col'>
					<div class='card text-center'>
						<div class='card-body'>
							<i class='fas fa-truck-moving fa-3x'></i>
							<h6 style={{ paddingTop: '1em' }} class='card-title'>
								ENTREGA GRATUITA
							</h6>
							<p class='card-text'>
								Entregas gratuitas para pedidos que superen los S/150
							</p>
							<a href='#' class='btn btn-primary'>
								Más información
							</a>
						</div>
					</div>
				</div>
				<div class='col'>
					<div class='card text-center'>
						<div class='card-body'>
							<i class='fas fa-exchange-alt fa-3x'></i>
							<h6 style={{ paddingTop: '1em' }} class='card-title'>
								CAMBIOS
							</h6>
							<p class='card-text'>
								Tenes 30 dias para solicitar el cambio de tu pedido
							</p>
							<a href='#' class='btn btn-primary'>
								Más información
							</a>
						</div>
					</div>
				</div>
				<div class='col'>
					<div class='card text-center'>
						<div class='card-body'>
							<i class='far fa-check-square fa-3x'></i>
							<h6 style={{ paddingTop: '1em' }} class='card-title'>
								GARANTÍA DE CALIDAD SALOMON
							</h6>
							<p class='card-text'>
								Garantía contra defecto de fabricación de 6 meses
							</p>
							<a href='#' class='btn btn-primary'>
								Más información
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Promociones;
