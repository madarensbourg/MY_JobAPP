import { useState, useEffect } from 'react';
import { createUser } from '../../utils/api';

import { useNavigate } from 'react-router-dom';

//STYLES
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SignUp(props) {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	const navigate = useNavigate();

	function handleChange(event) {
		setFormData({ ...formData, [event.target.id]: event.target.value });
	}

	// Handle submit function for login and signup forms
	function handleSubmit(e) {
		e.preventDefault();
		createUser(formData).then((data) => {
			localStorage.token = data.token;
			props.setIsLoggedIn(true);
		});
	}

	// // redirect to home page if logged in
	useEffect(() => {
		if (props.isLoggedIn) {
			navigate('/');
		}
	}, [props.isLoggedIn]);

	return (
		<div>
			<h2>Sign Up</h2>
			<div className='row row-cols-sm-2 row-cols-md-4 mx-auto login'>
				<Form className='mb-3 mx-auto'>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							id='username'
							onChange={handleChange}
							value={formData.username}
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							id='password'
							onChange={handleChange}
							value={formData.password}
							required
						/>
					</Form.Group>

					<Button variant='primary' type='submit' onClick={handleSubmit}>
						Sign Up
					</Button>
				</Form>
			</div>
		</div>
	);
}

export default SignUp;
