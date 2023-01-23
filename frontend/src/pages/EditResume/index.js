import { updateResume, editResume } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


function EditResume() {
	// STATE
	const [formState, setFormState] = useState({});
	const navigate = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		editResume(id).then((data) => {
			setFormState(data);
		});
	}, [id]);
	console.log(formState);

	function handleChange(event) {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}

	const handleSubmit = (event) => {
		// stops the page from reloading on submit
		event.preventDefault();
		updateResume(id, formState);
		navigate('/');
	};

	return (
		<div className='row row-cols-sm-2 row-cols-md-4 mx-auto'>
			<Form onSubmit={handleSubmit} className='mx-auto'>
				<br></br>
				
				<h3>Edit Resume</h3>

				<Form.Group className='mb-3'>
					<Form.Label>Name: </Form.Label>
					<Form.Control
						type='text'
						id='name'
						name='name'
						onChange={handleChange}
						value={formState.name || ''}
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
						onChange={handleChange}
						value={formState.phonenumber || ''}
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
						onChange={handleChange}
						value={formState.email || ''}
					/>
				</Form.Group>
				<br />

				<Form.Group className='mb-3'>
					<Form.Label>About Me: </Form.Label>
					<Form.Control
						type='text'
						id='aboutme'
						name='aboutme'
						onChange={handleChange}
						value={formState.aboutme || ''}
					/>
				</Form.Group>
				<br />

				<Form.Group className='mb-3'>
					<Form.Label>Education: </Form.Label>
					<Form.Control
						type='text'
						id='education'
						name='education'
						onChange={handleChange}
						value={formState.education || ''}
						required
					/>
				</Form.Group>
				<br />

				<Form.Group className='mb-3'>
					<Form.Label>Experience: </Form.Label>
					<Form.Control
						type='text'
						id='experience'
						name='experience'
						onChange={handleChange}
						value={formState.experience || ''}
						required
					/>
				</Form.Group>
				<br />

				<Form.Group className='mb-3'>
					<Form.Label>Relevant Projects: </Form.Label>
					<Form.Control
						type='text'
						id='relevantprojects'
						name='relevantprojects'
						onChange={handleChange}
						value={formState.relevantprojects || ''}
						required
					/>
				</Form.Group>
				<br />

				<Form.Group className='mb-3'>
					<Form.Label>Skills: </Form.Label>
					<Form.Control
						type='text'
						id='skills'
						name='skills'
						onChange={handleChange}
						value={formState.skills || ''}
					/>
					<Form.Text className='text-muted'>
						<br />
						If you have any issues generating ideas, utlize the API below
					</Form.Text>
					<br />
				</Form.Group>
				<br />

				<Button variant='primary' type='submit'>
					Edit Resume
				</Button>
			</Form>
		</div>
	);
}

export default EditResume;