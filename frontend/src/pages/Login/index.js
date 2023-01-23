import { loginToAccount } from '../../utils/api';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//STYLES
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Login(props) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	const navigate = useNavigate();
    const [userError, setUserError] = useState('');

	function handleChange(event) {
		setFormData({ ...formData, [event.target.id]: event.target.value });
	}

	// Handle submit function for login and signup forms
	function handleSubmit(e) {
        e.preventDefault()
        loginToAccount(formData).then((data) => {
			localStorage.token = data.token;
            localStorage.user_id = data.user._id;
			props.setLogInStatus(true);
			navigate('/');
			props.refresh();
		}).catch(function (error) { 
			if (error.response) {
				if (error.response.status === 404) {
					setUserError('You have put in the wrong username.')
				}
				else if (error.response.status === 401) {
					setUserError('You have put in the wrong password.')
				}
			}
		});
	};
	

	// redirect to home page if logged in
	useEffect(() => {
		if (props.isLoggedIn) {
			navigate('/');
		}
	}, [props.isLoggedIn]);

	return (
		<div>
			<h2>Login</h2>
            <p style={{color: 'red'}}>{userError}</p>
			<div className='row row-cols-sm-2 row-cols-md-4 mx-auto'>
				<Form className='mb-3 mx-auto'>
					<Form.Group className='mb-3' >
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='text'
							// placeholder='Enter email'
							id='username'
							onChange={handleChange}
							value={formData.username}
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3' >
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							// placeholder='Password'
							id='password'
							onChange={handleChange}
							value={formData.password}
							required
						/>
					</Form.Group>

					<Button
						variant='primary'
						type='submit'
						onClick={(e) => handleSubmit(e, formData)}>
						Login
					</Button>
				</Form>
			</div>
		</div>
	);
}
