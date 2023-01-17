import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function Login () {
	const history = useHistory();
	const [name, setName] = useState( '' );
	const [email, setEmail] = useState( '' );
	const [password, setPassword] = useState( '' );
	const [{ user, userName }, dispatch] = useStateValue();

	const login = ( event ) => {
		event.preventDefault();

		dispatch( {
			type: 'SET_USERNAME',
			userName: name
		} );

		auth
			.signInWithEmailAndPassword( email, password )
			.then( ( auth ) => {
				//logging in n go to home page...

				history.push( '/' );
			} )
			.catch( ( e ) => alert( e.message ) );

	};

	const register = ( event ) => {
		event.preventDefault();

		dispatch( {
			type: 'SET_USERNAME',
			userName: name
		} );

		auth
			.createUserWithEmailAndPassword( email, password )
			.then( ( auth ) => {
				//registered user and logged in...
				history.push( '/' );
				// console.log(auth)
			} )
			.catch( ( e ) => alert( e.message ) );
	};

	return (
		<div className="Login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg"
					alt=""
				/>
			</Link>
			{
				!user && <div className="login__container">
					<h1>Sign In</h1>
					<form onSubmit={login}>
						<h5>First Name</h5>
						<input value={name} onChange={( event ) => setName( event.target.value )} type="text" />
						<h5>Email *</h5>
						<input value={email} onChange={( event ) => setEmail( event.target.value )} type="email" />
						<h5>Password *</h5>
						<input
							value={password}
							onChange={( event ) => setPassword( event.target.value )}
							type="password"
							autoComplete="on"
						/>
						<button type="submit">Sign In</button>
					</form>
					<p>
						By continuing, you agree to Amazon's <strong>Conditions of Use</strong> and{' '}
						<strong>Privacy Notice</strong>
					.
				    </p>
					<p>New to Amazon ?</p>
					<button onClick={register} type="submit">
						Create an Amazon account
				</button>
				</div>
			}

		</div>
	);
}

export default Login;
