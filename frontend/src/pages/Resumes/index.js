import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ShowResumes({ getResumes, myResumes, getResume }) {
	return (
		<>
			{myResumes.map((resume, i) => {
				return (
					<Container className='review show-resume-section' key={i}>
						<Row>
							<Col md='auto'>
								<h4>{resume.name}</h4>
							</Col>
						</Row>
						<Row>
							<Col md='auto'>
								<h5 className='review-title'>{resume.phonenumber}</h5>
							</Col>
							<Col md='auto'>
								<h5>{resume.email}</h5>
							</Col>
						</Row>
						<Row>
							<Col md='auto'>
								<h5>{resume.aboutme} / 5</h5>
							</Col>
						</Row>
						<Row>
							<Col md='auto'>
								<p>{resume.experience}</p>
							</Col>
						</Row>
						<Link
							className='underlined-link'
							onClick={() => getResume(resume._id)}
							to={'/myresume/' + resume._id}>
							Show Resume
						</Link>
					</Container>
				);
			})}
		</>
	);
}
