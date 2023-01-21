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
import CreateResume from './pages/CreateResume';
import Header from './components/Header';
import Login from './pages/Login'
import EditCoverletter from './pages/EditCoverletter'
import ShowCoverletter from './pages/ShowCoverletter';





function App() {
	// STATE
	const [myResumes, setMyResumes] = useState([]);
	const [myCoverletters, setMyCoverLettters] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	const [shownResume, setShownResume] = useState({});
	const [shownCoverletter, setShownCoverletter] = useState({});
	const [resumeData, setResumeData] = useState([]);
	const [visibleItem, setVisibleItem] = useState({});

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
		const shownResumeData = await axios.get(
			`http://localhost:5001/resume/${id}`
		);
		console.log('this is shownresume route data', shownResumeData.data);
		setShownResume(shownResumeData.data);
	}

	// function to grab coverletters
	async function getCoverletter(id) {
		const shownCoverletterData = await axios.get(
			`http://localhost:5001/coverletter/${id}`
		);
		console.log('this is showncoverletter route data', shownCoverletterData.data);
		setShownCoverletter(shownCoverletterData.data);
	}

	useEffect(() => {
		getResumes();
		getCoverletters();
	}, []);

	//   async function getIndexRoute() {

	// 	}

	//  async function getUser() {
	// 		const config = {
	// 			headers: {
	// 				Authorization: localStorage.getItem('token'),
	// 			},
	// 		};
	// 		const userData = await axios.get('http://localhost:5001/user', config);
	// 		console.log(userData.data);
	// 		setUser(userData.data);
	// 	}
	// 	// API REQUEST ON COMPONENT MOUNT
	// 	useEffect(() => {
	// 		getIndexRoute();
	// 		if (localStorage.token) {
	// 			getUser();
	// 			setIsLoggedIn(true);
	// 		}
	// 	}, []);

	// 	// `onClick` HANDLER
	// 	const setVisibility = (item) => {
	// 		setVisibleItem(item);
	// 	};

	// 	const handleSubmit = async (e, formData) => {
	// 		e.preventDefault();
	// 		const res = await axios.post(
	// 			`http://localhost:5001/user/${formData.form}`,
	// 			{
	// 				username: formData.username,
	// 				password: formData.password,
	// 			}
	// 		);
	// 		console.log(res.data);
	// 		localStorage.token = res.data.token;
	// 		setIsLoggedIn(true);
	// 	};

	// 	const handleLogOut = () => {
	// 		localStorage.clear();
	// 		setIsLoggedIn(false);
	// 	};

	return (
		<div className='App'>
			<Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
			<h1>Prepare For Your Dream Job Today!</h1>
			<Routes>
				<Route path='/' element={<Home getResumes={getResumes} />} />
				<Route
					path='/login'
					element={
						<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
					}
				/>
				<Route
					path='/signup'
					element={
						<SignUp setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
					}
				/>
				<Route
					path='/resumes'
					element={<Resumes myResumes={myResumes} getResume={getResume} />}
				/>
				<Route
					path='/createresume'
					element={<CreateResume setResumeData={setResumeData} />}
				/>
				<Route
					path='/coverletters'
					element={<Coverletters getCoverletter={getCoverletter} myCoverletters={myCoverletters} />}
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
				<Route
					exact
					path='/mycoverletter/:id'
					element={
						<ShowCoverletter
							shownCoverletter={shownCoverletter}
							isLoggedIn={isLoggedIn}
						/>
					}
				/>
				<Route path='/editresume/:id' element={<EditResume />} />
				<Route path='/editcoverletter/:id' element={<EditCoverletter />} />
			</Routes>
		</div>
	);
}

export default App;
