# MY_JobAPP
# MyJob
A space to upload, write and save Resumes and Cover Letters. Future versions will incorporate more specific user profiles.
## Deployed Application through Firebase
[My Job App](https://my-job-app.herokuapp.com/)
## Technologies Used
- React JS
- Bolma (styling)
## Installation instructions
- npm i, to install all dependencies located in package.json
- This application uses MongoDB for all backend functions, and Bolma for all Html Editing
## Application Features
- Able to create and write Resumes/Coverletters by accessing a 3rd party api to store user info
- Sign up and login pages for new and current users
- Full CRUD on Resumes and Cover Letters 
## Approach Taken towards MVP and Completion
Since i am graduating from General assembly i figured i could make the job appilication process easier. I was eager to create an application that would allow a user to generate new resumes and coverletters and store them in the app. Originally I was still thinking of using either a MERN or FERN stack, but with the requirement of storing my resumes as file data but firebase proved to be problematic. This led me to use a MERN  stack for my application. Learning the OpenChat GPT was pretty complicated for me however i was able to figure out how to get it to work. I was still able to complete an application that met my MVP goals which i feel really accomplished about however i would like to focus on styling. i set up the groundwork of the application so that i can work on it later. 
## Unsolved Problems and Hurdles
Learning how to navigate the 3rd party API was a little difficult. Deployement has been very problematic especially wqith the 3rd party api. also the Authentification and user sign up and login has been very  troublesome.
## User Stories:
Login for User (MVP)
As an User I would like to login to the Job Application app and be able to view, add, edit files and remove files so that I can manage the app.

CRUD operations - User (MVP)
As an user, once I am logged in, I should be able to Add a new folder and access it later with the Show folder option
As an user, once I am logged in, I should be able to Edit a folder and access the changed information with the Show folder option. 
As an user, once I am logged in, I should be able to Remove a folder. All files will be stored in firebase so i will use FERN full stack app instead of MERN.

User checks out an AI API
	As a User to the My Job App site, I should be able to ask the API to generate a cover letter based on my job search. (third party API integration of AI API) 
	As a User to the my Job App site, I should be able to add resumes or files to any folder  so that I can share/manage my files with .

### Wireframes:
Check out my WireFrames here!
https://www.figma.com/file/iVXJ9EDv34ngTjDNzoQLAB/Untitled?node-id=2%3A39
## Stretch Goals
- Job Application app to keep track of all of your resumes and cover letters specific to users who sign up
- Full CRUD by user only, on user resumes and cover letters
- More global styling for page compatibility