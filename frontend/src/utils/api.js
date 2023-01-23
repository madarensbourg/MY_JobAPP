import axios from 'axios';

// create user
export async function createUser(formData) {
    try{
        console.log('this is forData api', formData);
        const { data } = await axios.post('user/signup', formData)
        return data
    } catch(error){
    console.log(error)
    }
};

// log in to user account
export async function loginToAccount(formData) {
    const { data } = await axios.post('user/login', formData)
    return data
}

//getUser
export async function getUser(userid) {
  const { data } = await axios.get(`user/${userid}`);
  return data;
}
// // find user on mount
// export async function getCurrentUser() {
//     const config = {
// 			headers: {
// 				Authorization: localStorage.token,
// 			},
// 		};
// 		// Grab user data from database
// 		const {data} = await axios.get(
// 			'http://localhost:5001/user/token',
// 			config
// 	    );
// 	return data;
// }

// Create resume Route
export async function createResume(formData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
	const { data } = await axios.post('resume', formData, config);
	return data;
}
// create Coverletter
export async function createCoverletter(formState) {
    const config = {
			headers: {
				Authorization: localStorage.getItem('token'),
			},
		};
    const { data } = await axios.post('coverletter', formState, config)
    return data
};

// edit resume, get data
export async function editResume(id) {
    const editResumeData = await axios.get(`resume/${id}`)
    return editResumeData.data
};

// edit Coverletter, get data
export async function editCoverletter(id) {
    const editCoverLetterData = await axios.get(`coverletter/${id}`)
    return editCoverLetterData.data
};


// update Resume
export async function updateResume(id, formState) {
    const updatedData = await axios.put(`resume/${id}`, formState)
    return updatedData.data
};

// update Coverletter
export async function updateCoverletter(id, formState) {
    const updatedData = await axios.put(`coverletter/${id}`, formState)
    return updatedData.data
};

// delete Resume
export async function deleteResume(id) {
    const deleteData = await axios.delete(`resume/${id}`)
    return console.log('deleted!')
};

// delete Coverletter
export async function deleteCoverletter(id) {
    const deleteData = await axios.delete(`coverletter/${id}`)
    return console.log('deleted!')
};