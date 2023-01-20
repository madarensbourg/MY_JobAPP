import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// DEPENDENCIES
import { Link } from 'react-router-dom';


export default function Header(props) {
	// state declaration: build JSX array of NavBar items
	const initialState = [];
	const [navItems, setNavItems] = useState(initialState);
	const [searchString, setSearchString] = useState('');
	// const [userData, setUserData] = useState({});
	const navigate = useNavigate();

	// add NavBar items to JSX array depending on App login state
	useEffect(() => {
		if (props.isLoggedIn) {
			setNavItems(
				initialState.concat(
					<Nav className='me-auto' key='2'>
						<Nav.Link
							className='log'
							onClick={() => {
								props.setIsLoggedIn(false);
								localStorage.clear();
								console.log(localStorage.token);
							}}>
							Log Out
						</Nav.Link>{' '}
						<Nav.Link className='nav-item' href='/createresume'>
							Add Resume
						</Nav.Link>{' '}
						<Nav.Link className='nav-item' href='/'>
							Home
						</Nav.Link>{' '}
						<Nav.Link className='nav-item' href='/createcoverletter'>
							Create Cover Letter
						</Nav.Link>
					</Nav>
				)
			);
		} else {
			setNavItems(
				initialState.concat([
					<Nav className='me-auto' key='2'>
						<Nav.Link className='nav-item' href='/login' key='2'>
							Log In
						</Nav.Link>{' '}
						<Nav.Link className='nav-item' href='/signup' key='3'>
							Sign Up
						</Nav.Link>{' '}
						<Nav.Link className='nav-item' href='/'>
							Home
						</Nav.Link>
					</Nav>,
				])
			);
		}
	}, [props.isLoggedIn]);

	return <div>{navItems}</div>;
}
