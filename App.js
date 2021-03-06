import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import Footer from './Footer';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
	'pk_test_51HBg2WCiYqYOwGbbDfBWjEDNvBZrI4KvVlLtc1yuwJK9y1fVGerOjPF12mL0Ax9l4QXwASgkLLCK7iaqa7DD3VoL00xwf4KQCj'
);

function App () {
	const [{ }, dispatch] = useStateValue();

	// useEffect <<<<<<< POWERFUL
	// Piece of code which runs based on a given condition

	useEffect(
		() => {
			const unsubscribe = auth.onAuthStateChanged( ( authUser ) => {
				if ( authUser ) {
					// the user is logged in...

					dispatch( {
						type: 'SET_USER',
						user: authUser,
					} );

				} else {
					// the user is logged out...

					dispatch( {
						type: 'SET_USER',
						user: null
					} );
				}
			} );

			return () => {
				// Any cleanup operations go in here...
				unsubscribe();
			};
		},
		[dispatch]
	);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/orders">
						<Header />
						<Orders />
						<Footer />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
						<Footer />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
						<Footer />
					</Route>
					<Route path="/">
						<Header />
						<Home />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
