import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Resumes from './pages/Resumes';
import Coverletters from './pages/Coverletters';
import ShowResume from './pages/ShowResume';
import EditResume from './pages/EditResume';





function App() {
	// STATE
	const [myResumes, setMyResumes] = useState([]);
	const [myCoverletters, setMyCoverLettters] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	const [shownResume, setShownResume] = useState({});
	const [shownCoverletter, setShownCoverletter] = useState({});
	// const [region, setRegion] = useState('');

	// function to grab resumes
	async function getResumes() {
		const allResumes = await axios.get(`http://localhost:5001/resume`);
		setMyResumes(allResumes.data);
	}

	async function getCoverletters() {
		const allCoverletters = await axios.get(
			`http://localhost:5001/coverletter`
		);
		setMyCoverLettters(allCoverletters.data);
	}
	// function to grab resumes 
	async function getResume(id) {
		const shownResumeData = await axios.get(`http://localhost:5001/resume/${id}`);
		console.log('this is shownresume route data', shownResumeData.data);
		setShownResume(shownResumeData.data);
	}
	useEffect(() => {
		getResumes();
		getCoverletters();

	}, []);

	return (
		<div className='App'>
			<h1>welcome world</h1>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/signup'
					element={
						<SignUp setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
					}
				/>
				<Route
					path='/resumes'
					element={<Resumes myResumes={myResumes} getResume={getResume}/>}
				/>
				<Route
					path='/coverletters'
					element={
						<Coverletters
							getCoverletters={getCoverletters}
							myCoverletters={myCoverletters}
						/>
					}
				/>
				<Route
					exact
					path='/myresume/:id'
					element={
						<ShowResume
							shownResume={shownResume}
							getResumes={getResumes}
							isLoggedIn={isLoggedIn}
						/>
					}
				/>
				<Route path='/editresume/:id' element={<EditResume />} />
			</Routes>
		</div>
	);
}

export default App;
