import React from 'react'
//packages
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// BOOTSTRAP
import Card from 'react-bootstrap/Card';
import resumepng from '../../assets/resumepng.png';
import clpic from '../../assets/clpic.jpeg'

export default function Home({ getResumes }) {

    // console.log(region);
    return (
			<main className='center-item'>
				<h1 className='hikers-hub-title'>Begin your Profile!</h1>
				<Card>
					<Link className='link' onClick={() => getResumes('CA')} to='/resumes'>
						<Card.Img variant='top' src={resumepng} />
						<Card.Body>
							<Card.Text>
								From sandy beaches to snow-capped mountains, California has a
								hike for lovers of any terrain.
							</Card.Text>
						</Card.Body>
					</Link>
				</Card>
				<br />

				<Card>
					<Link
						className='link'
						onClick={() => getResumes('OR')}
						to='/coverletters'>
						<Card.Img variant='top' src={clpic} />
						<Card.Body>
							<Card.Text>
								Adventure your way through lush forests and maybe even encounter
								a world-renowned winery or two.
							</Card.Text>
						</Card.Body>
					</Link>
				</Card>
			</main>
		);
};