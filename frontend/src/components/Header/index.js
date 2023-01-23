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
								props.setLogInStatus(false);
                                props.setUser({});
								localStorage.clear();
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
<nav class="navbar is-black" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                
                </a>

              <div class="navbar-start">
            <a class="navbar-item">
            <Link to='/'>Home</Link></a>
            <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button has-background-is-danger">
            <strong>
            <Link to='/signup'>Sign Up</Link>
            </strong>
            </a>
            <a class="button has-background-is-danger">
            <Link to='/login'>Login</Link>
            </a>
        </div>
        </div>
      </div>
    </div>
  </div>

        </nav>,
				])
			);
		}
	}, [props.isLoggedIn]);

	return <div>{navItems}</div>;
}
