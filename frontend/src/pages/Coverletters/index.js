import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ShownCoverletters({ getCoverletters, myCoverletters, getCoverletter }) {
	return (
		<>
			{myCoverletters.map((coverletter, i) => {
				return (
					<Container className='review show-resume-section' key={i}>
						<Row>
							<Col md='auto'>
								<h4>{coverletter.name}</h4>
							</Col>
						</Row>
						<Row>
							<Col md='auto'>
								<h5 className='review-title'>{coverletter.phonenumber}</h5>
							</Col>
							<Col md='auto'>
								<h5>{coverletter.email}</h5>
							</Col>
						</Row>
						<Row>
							<Col md='auto'>
								<h5>{coverletter.contactTitle} / 5</h5>
							</Col>
						</Row>

						<Link
							className='underlined-link'
							onClick={() => getCoverletter(coverletter._id)}
							to={'/mycoverletter/' + coverletter._id}>
							Show Cover Letter
						</Link>
					</Container>
				);
			})}
		</>
	);
}
