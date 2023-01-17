import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SignUp from './pages/SignUp';
import Home from './pages/Home';





function App() {

	// STATE
	const [myResumes, setMyResumes] = useState([]);
  const [coverletters, setCoverletters] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	const [shownResume, setShownResume] = useState({});
  const [shownCoverletter, setShownCoverletter] = useState({});
	const [region, setRegion] = useState('');
	

	// // Get all resume
	async function getAllResumes() {
		const { data } = await axios.get('http://localhost:5001/resume');
		return data;
	}

	return (
		<div className='App'>
			<h1>welcome world</h1>
			<Routes>

				<Route path='/' element={<Home getTrails={getTrails} />} />

				<Route
					path='/signup'
					element={
						<SignUp setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
					}
				/>
				<Route
					path='/resumes'
					element={
						<Resumes getAllResumes={getAllResumes} myResumes={myResumes} />
					}
				/>
				/>
			</Routes>
		</div>
	);
}

export default App;
