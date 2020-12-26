import React from 'react';
import './HoverProduct.css';
import { useStateValue } from './StateProvider';

function HoverProduct(id, title, price, info) {
	const [ { hover }, dispatch ] = useStateValue();

	const removeHover = () => {
		dispatch({
			type: 'SET_HOVER',
			id: id,
			hover: false,
		});
	};

	return (
		<div className="hoverProduct">
			<h4>{title}</h4>
			<p className="hoverProduct__info">{info}</p>
			<p className="hoverProduct__price">
				<small>₹</small>
				<strong>{price}</strong>
			</p>
			<button onClick={removeHover}> X </button>
		</div>
	);
}

export default HoverProduct;
