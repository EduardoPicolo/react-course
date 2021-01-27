import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/toast.scss';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route
					exact
					path="/signin"
					render={() =>
						currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
					}
				/>
			</Switch>
			<ToastContainer
				position="bottom-right"
				closeButton={false}
				hideProgressBar
				pauseOnFocusLoss
				pauseOnHover
				newestOnTop={false}
				autoClose={3500}
			/>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
