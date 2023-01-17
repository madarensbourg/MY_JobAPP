import axios from 'axios';

// create user
export async function createUser(formData) {
    const { data } = await axios.post('http://localhost:5001/user/signup', formData)
    return data
};

// log in to user account
export async function loginToAccount(formData) {
    const { data } = await axios.post('http://localhost:5001/user/login', formData)
    return data
}

// Create resume Route
export async function createResume(formData) {
	const { data } = await axios.post('http://localhost:5001/resume', formData);
	return data;
}
// create Coverletter
export async function createCoverletter(formState) {
    const { data } = await axios.post('http://localhost:5001/coverletter', formState)
    return data
};

// edit resume, get data
export async function editResume(id) {
    const editResumeData = await axios.get(`http://localhost:5001/resume/${id}`)
    return editResumeData.data
};

// edit Coverletter, get data
export async function editCoverletter(id) {
    const editCoverLetterData = await axios.get(`http://localhost:5001/coverletter/${id}`)
    return editCoverLetterData.data
};


// update Resume
export async function updateResume(id, formState) {
    const updatedData = await axios.put(`http://localhost:5001/resume/${id}`, formState)
    return updatedData.data
};

// update Coverletter
export async function updateCoverletter(id, formState) {
    const updatedData = await axios.put(`http://localhost:5001/coverletter/${id}`, formState)
    return updatedData.data
};

// delete Resume
export async function deleteResume(id) {
    const deleteData = await axios.delete(`http://localhost:5001/resume/${id}`)
    return console.log('deleted!')
};

// delete Coverletter
export async function deleteCoverletter(id) {
    const deleteData = await axios.delete(`http://localhost:5001/coverletter/${id}`)
    return console.log('deleted!')
};