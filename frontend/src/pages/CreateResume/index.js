import React from 'react';
import { createResume } from '../../utils/api';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function CreateResume() {
	// STATE
	const [formState, setFormState] = useState({});
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		// stops the page from reloading on submit
		event.preventDefault();
		// axios put request
		// axios.post(`http://localhost:5001/trail`, formState)
		createResume(formState);
		navigate('/');
	};

	function handleChange(event) {
		console.log(event.target.id);
		console.log(event.target.value);
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}
	return (
		<div>
			<h2>Add a Resume</h2>
			<div className='row row-cols-sm-2 row-cols-md-4 mx-auto'>
				<Form onSubmit={handleSubmit} className='mx-auto'>
					<Form.Group className='mb-3'>
						<Form.Label>Name:</Form.Label>
						<Form.Control
							type='text'
							id='name'
							name='name'
							placeholder='Your Name'
							onChange={handleChange}
							value={formState.name || ''}
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Email:</Form.Label>
						<Form.Control
							type='text'
							id='email'
							name='email'
							placeholder='Your Email'
							onChange={handleChange}
							value={formState.email || ''}
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Phone Number:</Form.Label>
						<Form.Control
							type='text'
							id='phonenumber'
							name='phonenumber'
							placeholder='Mobile Phone'
							onChange={handleChange}
							value={formState.phonenumber || ''}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>What Makes You Special?:</Form.Label>
						<Form.Control
							type='text'
							id='aboutme'
							name='aboutme'
							placeholder='Why do you love this trail?'
							onChange={handleChange}
							value={formState.aboutme || ''}
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Education:</Form.Label>
						<Form.Control
							type='text'
							id='education'
							name='education'
							placeholder='Enter Your Education'
							onChange={handleChange}
							value={formState.education || ''}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Experience:</Form.Label>
						<Form.Control
							type='text'
							id='experience'
							name='experience'
							placeholder='Enter Your Education'
							onChange={handleChange}
							value={formState.experience || ''}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Relevant Projects:</Form.Label>
						<Form.Control
							type='text'
							id='relevantprojects'
							name='relevantprojects'
							placeholder='Enter Any Relevant Projects'
							onChange={handleChange}
							value={formState.relevantprojects || ''}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Relevant Skills:</Form.Label>
						<Form.Control
							type='text'
							id='skills'
							name='skills'
							placeholder='Enter Any Relevant Projects'
							onChange={handleChange}
							value={formState.skills || ''}
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Create Resume
					</Button>
				</Form>
			</div>
		</div>
	);
}
