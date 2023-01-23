import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { deleteCoverletter } from '../../utils/api';

export default function ShowCoverletter({ shownCoverletter }) {
	
	return (
		<div className='show-resume-bg'>
			<div className='show-hike-section'>
				<h3>Name:</h3>
				<p>{shownCoverletter.name}</p>
				<h3>Phone Number:</h3>
				<p>{shownCoverletter.phonenumber}</p>
				<h3>Email:</h3>
				<p>{shownCoverletter.email}</p>
				<h3>Point of Contact:</h3>
				<p className='description-text'>{shownCoverletter.contactTitle}</p>
				<h3>Opening Statement</h3>
				<p>{shownCoverletter.opening}</p>
				<h3>Body Paragraph:</h3>
				<p>{shownCoverletter.body}</p>
				<h3>Closing Statement:</h3>
				<p>{shownCoverletter.closing}</p>
			</div>
			<Link className='underlined-link' to={`/editcoverletter/${shownCoverletter._id}`}>
				Edit Coverletter
			</Link>{' '}
			<br></br>
			<Link
				className='underlined-link'
				onClick={() => deleteCoverletter(shownCoverletter._id)}
				to='/'>
				Delete Cover Letter
			</Link>{' '}
			<br></br>
		</div>
	);
}
