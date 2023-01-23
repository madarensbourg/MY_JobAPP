import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { deleteResume } from '../../utils/api';

export default function ShowResume({ shownResume, getResumes }) {
	
	console.log(shownResume)
	return (
		<div className='show-resume-bg'>
			<div className='show-hike-section'>
				<h3>Name:</h3>
				<p>{shownResume.name}</p>
				<h3>Email:</h3>
				<p>{shownResume.email}</p>
				<h3>Contact:</h3>
				<p>{shownResume.phonenumber}</p>
				<h3>About Me:</h3>
				<p className='description-text'>{shownResume.aboutme}</p>
				<h3>Education:</h3>
				<p>{shownResume.education}</p>
				<h3>Experience:</h3>
				<p>{shownResume.experience}</p>
				<h3>Relevant Projects:</h3>
				<p>{shownResume.relevantprojects}</p>
				<h3>Skills:</h3>
				<p>{shownResume.skills}</p>
			</div>
			<Link className='underlined-link' to={`/editresume/${shownResume._id}`}>
				Edit Resume
			</Link>{' '}
			<br></br>
			<Link
				className='underlined-link'
				onClick={() => deleteResume(shownResume._id)}
				to='/'>
				Delete Resume
			</Link>{' '}
			<br></br>
		</div>
	);
}
