//dependencies

const db = require('./');

const admin_user = [
   { username: "migueldarensbourg",
    password: "1234567890"
}
]
const initial_coverletters = [
	{
		name: 'Miguel Darensbourg',
		phonenumber: '(619) 822-4756',
		email: 'madarens@ucsd.edu',
		contactTitle: 'Mr. John Doe Hiring Recruiter johndoe@hiration.com ',
		opening: 'Associate Engineer Software - DevSecOps',
		body: 'I am writing to express my interest in the Associate Engineer Software position at [DevSecOps Company]. I am confident that I have the ideal background and qualifications to make an immediate and positive impact on your team. /n As a recent graduate from [University], I have a degree in Computer Engineering and extensive knowledge of software engineering, DevOps, and security processes. I am passionate about staying up to date with developments in DevSecOps and have a strong understanding of the principles and practices of this field. In addition, I have experience working in various programming languages, such as Python, JavaScript, and Java, as well as experience with cloud platforms, such as AWS and GCP./n During my time at [University], I participated in a variety of software engineering projects, including developing applications for Android and iOS devices. I also worked on developing a web application that integrated a database with a user-friendly interface. My experience in the software development process, combined with my knowledge of DevSecOps principles, makes me a great fit for this position.',
		closing:
			'I am confident that I can bring value to [DevSecOps Company], and I am eager to contribute to the success of your team. I am available for an interview at any time and I look forward to learning more about this position and how I can help your team./nSincerely,/n Miguel Darensbourg',
	},
	{
		name: 'Miguel Darensbourg',
		phonenumber: '(619) 822-4756',
		email: 'madarens@ucsd.edu',
		contactTitle: 'Mr. John Doe Hiring Recruiter johndoe@hiration.com ',
		opening:'Junior Software Developer - Curran.An Emerging full stack web developer with a background in both the arts and sciences and a passion for creativity. I work with fellow prominent designers and developers alike to build interactive and beautiful websites. I have worked as both a web developer  and designer for different clients looking to improve their site performance, build out UI views, UX user testing, or  spearhead a codebase from the ground up. If you need a developer and designer rolled in one, I’m your man.',
		body: 'Curran LLC Remote / Seattle, Washington Full Stack Developer August 2020 - Present + Spearheaded the frontend creation of a marketing website using nuxt.js for the benefits of SEO + Oversaw Google Tag Manager and Analytics to give insight on user behaviour and rollout server side A/B tests  + Maintained and added to custom Laravel CMS, allowing the content and marketing team to add new content with  ease. /n Executed best practice front end strategies, emphasizing site speed, compatibility with web crawlers, cross  browser compatibility and responsive design. /n Reduced landing page bounce rate by 25% and increased pages per session by 45% since hire Freelance Remote  Contract Web Developer and Designer October 2018 - Present + Worked with clients looking to stand up websites in Wordpress, GoDaddy and Shopify, as well as customized  themes to client needs /n Participated in frontend React development for different applications looking for initial funding Collaborated with other developers in a ticketing task flow using Phabricator and Git version control  + Implemented UI designer wireframes and mockups in HTML, CSS, Javascript, React, and Vue /n University of California: San Diego, California Logic Teaching Assistant September 2013 - June 2015  Responsible for one-on-one instruction in logic course materials for a class of over 100 students +Held weekly office hours for students to drop-in and ask questions, as well as proctor all exams for the course + Required to give professional instruction and catered lessons on the nuance of deductive logic. ',
		closing:
			'I am confident that my skills and experience make me an ideal candidate for the software engineering position. I am excited to take on the challenges that this role presents and eager to contribute to the success of your team. Thank you for your time and consideration.',
	},
];

const initial_resumes = [
    {
        name: "Miguel Darensbourg",
        phonenumber: "(619) 822-4756",
        email: "madarens@ucsd.edu",
        aboutme: "Mr. Darensbourg is the Environmental Specialist at JL StormWater Consultants, Inc.  with over 3 years of Erosion and Sediment Control Implementation & Management. He also has government and commercial experience managing permit applications at the State and Federal levels providing Environmental Consulting for construction, industrial, and municipal projects.  He has a B.S. in Human Biology and is a certified Qualified Industrial Storm Water Practitioner (QISP). A lot of his experiences stem from working closely with the San Diego Regional Water Quality Control Board (responsible for the construction section of the Storm Water Unit overseeing all construction sites within Region 9 as well as CALTRANS construction projects prior to the adoption of their statewide permit). He obtains regulatory compliance by providing technical and analytical support to address complex environmental issues using cost-effective strategies.\n Mr. Darensbourg is a (QSP) In-Training and assists a Trainer of Record for the Qualified SWPPP Practitioner (QSP) and Qualified SWPPP Developer (QSD) Training Courses.  He has assisted in conducting training classes for the City of San Diego & County of San Diego. He has attended numerous training classes including the Water Pollution Control Manager (WPCM), QSP/QSD training course, along with the North County Transit District Roadway Worker Protection course.",
        education: "BS in Human Biology - 2021, University Of California San Diego.\n Associate of Science, Biology, 2019, San Diego Mesa College.",
        experience: "SubContract With BCD Construction,\n 2016-2018, JL StormWater Consultants, INC. 2021-Current.",
        skills: "NCTD Worker Safety Trained 2021. Visual Trash Assessment Training November 2021,2022. \n Caltrans Water Pollution Control Manager – January 2022.\n Qualified SWPPP Practitioner Training Certification – 2021.\n High Priority Outfall Inspection Training, 2021.",
        relevantprojects: "San Marcos Creek District Infrastructure Project, San Marcos, California:  Mr. Darensbourg was hired by the City of San Marcos to provide ongoing environmental consulting services for the City’s Infrastructure Project.  He regularly attends weekly progress meetings to discuss the project with regards to BMP requirements.  His role as specialist includes conducting all the required site inspections as well as collects storm water samples from qualifying events.  He is the data entry person for the SMARTS Database and uploads the required reports when necessary.\n Grossmont Union High School District, La Mesa, California:  JL Stormwater was hired by Grossmont Union High School District (District) as one of the on-call consultants to oversee the implementation of the District’s storm water program with regards to redevelopment and new development.  The service contract is a five (5) year as-needed contract. Currently, Mr. Darensbourg is implementing the Storm Water Pollution Prevention Plans on Grossmont Union High School, Mt. Miguel High School, Valhalla High School, and Western Hills Highschool. \n City of San Diego as Needed Storm Water and Environmental Monitoring, San Diego, California: Mr. Darensbourg provides on-going consulting services to the City of San Diego as a subconsultant to Wood.  Recent projects included the research and development of a database to track the locations of all projects that have current permits to discharge non-stormwater to the City of San Diego’s MS4.  The project included compiling a list of current permits within the City of San Diego’s boundaries and then identifying all discharges who have coverage under that permit.  These permits included the Low Threat Discharge Permits, Discharge of Waste to Land, Groundwater Discharges, Cannabis, 401 Water Quality Certifications, and US Army Corps of Engineers Section 404 Permits."
    }, {
        name: "Miguel Darensbourg",
        phonenumber: "(619) 822-4756",
        email: "madarens@ucsd.edu",
	    aboutme: "I'm a goal oriented Software Engineer with a keen interest in design and creative technology. My knowledge of the health-care industry as well as software development contributes to my multidisciplinary mindset. I'm very passionate about empowering my community through the power of software. That along with my interpersonal skills warrant my success in anything I set out to achieve.",
	    education: "BS in Human Biology - 2021, University Of California San Diego.\n Associate of Science, Biology, 2019, San Diego Mesa College. General Assembly, Software Engineering Immersive Course, January 2023",
	    experience: "Company Name - Title, City, ST DATES   \n Delivered an exceptional customer experience; consistently ranked within the top ten service centers. Provided first point of contact for customers, acknowledged client and addressed needs. Expanded role and proactively learned additional skills to improve the overall company brand image. Consistently met individual and team goals; drove revenue and increased sales by 14% within one year \n Company Name - Title, City ST DATES \n Recruited, trained and managed a staff of 10 people.  Developed marketing content and maintained relationships with existing customers to build our brand. Increased monthly sales from $20,000 per month to $200,000 per month during 6 months period.",
	    relevantprojects: "Portfolio - https://madarensbourg.github.io/MyPortfolio/ Used HTML5 and CSS3 to create the visual of my portfolio page. Used Javascript and jQuery to create the project slider and animated burger icon.Applied Git throughout the process for version control and tested features. \n CRUD MyApp - https://crud-myapp-production.up.railway.app/destination Used HTML5, CSS3, Bootstrap, and jQuery to create views of journal app. Implemented authentication with sign up / log in / log out functions using Passport.js and BCrypt. Built the app with full CRUD functionality using Javascript on Node.js and Express frameworks; data stored using MongoDB database through Mongoose",
	    skills: "LANGUAGES: JavaScript, SQL, PHP, Python, HTML, CSS. PROFICIENCIES: Database Architecture, Problem Solving, Linux/Unix, Optimization, Strategic Planning, Agile Scrum Team, Computer Architecture, Operating Systems, Data Structures, Version Repository, Web API, Node.js, Data Analysis, Web Scraping, Front-End Web Development, Full-Stack Web Development, Postgres, Apple IOS,"
    }
]


db.Resume.deleteMany({}, (err, resumes) => {
	if (err) {
		console.log('Error occured in remove', err);
	} else {
		console.log('Removed all resumes');
	}

	db.User.deleteMany({}, (err, user) => {
		if (err) {
			console.log('Error occured in remove', err);
		} else {
			console.log('Removed all users');
		}
	});

	db.Coverletter.deleteMany({}, (err, coverletter) => {
		if (err) {
			console.log('Error occured in remove', err);
		} else {
			console.log('Removed all coverletters');
		}
	});

	db.Resume.create(initial_resumes, (err, resumes) => {
		if (err) {
			console.log('Error on creating resumes:', err);
		} else {
			console.log('Created', resumes.length, 'resumes');
		}
	});

	db.Coverletter.create(initial_coverletters, (err, coverletters) => {
		if (err) {
			console.log('Error on creating coverletters:', err);
		} else {
			console.log('Created', coverletters.length, 'coverletters');
		}
	});

	db.User.create(admin_user, (err, user) => {
		if (err) {
			console.log('Error on creating user:', err);
		} else {
			console.log('Created', user.length, 'user');
		}
	});
});