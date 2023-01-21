import React, { useEffect } from 'react';
import { createResume } from '../../utils/api';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Configuration, OpenAIApi } from 'openai';

export default function CreateResume({ setResumeData }) {
	// STATE
	const [formState, setFormState] = useState({});
	const navigate = useNavigate();
	const [searchString, setSearchString] = useState('');
	const [response, setResponse] = useState();

	function handleChange2(event) {
		setSearchString(event.target.value);
	}

	async function handleSubmit2(event) {
		event.preventDefault();

		const configuration = new Configuration({
			apiKey: process.env.REACT_APP_OPENAI_API_KEY,
		});
		const openai = new OpenAIApi(configuration);
		const data = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt: searchString,
			temperature: 0.6,
			max_tokens: 1399,
			top_p: 1,
			frequency_penalty: 1,
			presence_penalty: 1,
		});
		// console.log(data.data.choices[0].text);
		setResponse(data.data.choices[0].text);
	}

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
						<Form.Label>Name: </Form.Label>
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
					<br />

					<Form.Group className='mb-3'>
						<Form.Label>Email: </Form.Label>
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
					<br />

					<Form.Group className='mb-3'>
						<Form.Label>Phone Number: </Form.Label>
						<Form.Control
							type='text'
							id='phonenumber'
							name='phonenumber'
							placeholder='Mobile Phone'
							onChange={handleChange}
							value={formState.phonenumber || ''}
						/>
					</Form.Group>
					<br />

					<Form.Group className='mb-3'>
						<Form.Label>What Makes You Special?: </Form.Label>
						<Form.Control
							type='text'
							id='aboutme'
							name='aboutme'
							placeholder='Write about yourself'
							onChange={handleChange}
							value={formState.aboutme || ''}
							required
						/>
					</Form.Group>
					<br />

					<Form.Group className='mb-3'>
						<Form.Label>Education: </Form.Label>
						<Form.Control
							type='text'
							id='education'
							name='education'
							placeholder='Enter Your Education'
							onChange={handleChange}
							value={formState.education || ''}
						/>
					</Form.Group>
					<br />

					<Form.Group className='mb-3'>
						<Form.Label>Experience: </Form.Label>
						<Form.Control
							type='text'
							id='experience'
							name='experience'
							placeholder='Enter Your Experience'
							onChange={handleChange}
							value={formState.experience || ''}
						/>
					</Form.Group>
					<br />

					<Form.Group className='mb-3'>
						<Form.Label>Relevant Projects: </Form.Label>
						<Form.Control
							type='text'
							id='relevantprojects'
							name='relevantprojects'
							placeholder='Enter Any Relevant Projects'
							onChange={handleChange}
							value={formState.relevantprojects || ''}
						/>
					</Form.Group>
					<br />

					<Form.Group className='mb-3'>
						<Form.Label>Relevant Skills: </Form.Label>
						<Form.Control
							type='text'
							id='skills'
							name='skills'
							placeholder='Enter Any Relevant Projects'
							onChange={handleChange}
							value={formState.skills || ''}
						/>
					</Form.Group>
					<br />

					<Button variant='primary' type='submit'>
						Create Resume
					</Button>
				</Form>
			</div>
			<div>
				<h2>Stuck? Ask the AI for Suggestions!</h2>
			
				<Form onSubmit={handleSubmit2} className='d-flex'>
					<Form.Control
						type='search'
						placeholder='Stuck? Search here!'
						className='me-2'
						aria-label='Search'
						name='searchString'
						onChange={handleChange2}
						value={searchString}
					/>
					<br />
					<br />

					<Button
						type='submit'
						variant='outline-success'
						// onClick={() => {
						// 	setUserData = {userData}
						// }}
					>
						Search
					</Button>
				</Form>
				<h2>Your Answer will Appear Here!</h2>

				<p>{response && response}</p>
			</div>
		</div>
	);
}
