import { useState, useEffect } from 'react';
import { createUser } from '../../utils/api';

import { useNavigate } from 'react-router-dom';

//STYLES
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SignUp(props) {
	const navigate = useNavigate();
	const initialState = { username: '', password: '' };
	const [formData, setFormData] = useState(initialState);
	const [userError, setUserError] = useState('');

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	function handleSubmit(event) {
		event.preventDefault();
		createUser(formData)
			.then((data) => {
				localStorage.token = data.token;
				localStorage.user_id = data.user._id;
				navigate('/login');
			})
			.catch(function (error) {
				if (error.response) {
					if (error.response.status === 401) {
						setUserError(
							'This username already exists! Please enter another. '
						);
					}
				}
			});
	}

	// redirect to home page if logged in
	useEffect(() => {
		if (props.isLoggedIn) {
			navigate('/');
		}
	}, [props.isLoggedIn]);

	return (
		<div>
			<h2>Sign Up</h2>
			<p style={{ color: 'red' }}>{userError}</p>
			<div className='row row-cols-sm-2 row-cols-md-4 mx-auto login'>
				<Form className='mb-3 mx-auto'>
					<Form.Group className='mb-3'>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							id='username'
							onChange={handleChange}
							// defaultValue={formData.username}
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							id='password'
							onChange={handleChange}
							// defaultValue={formData.password}
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
