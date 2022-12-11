import React from 'react';
import './ProjectDetails.css';

// picman photos

import picman1 from './picman/1.png'
import picman2 from './picman/2.png'
import picman3 from './picman/3.png'
import picman4 from './picman/4.png'
import picman5 from './picman/5.png'
import picman6 from './picman/6.png'
import picman7 from './picman/7.png'
import picman8 from './picman/8.png'
import picman9 from './picman/9.png'



const ProjectDetails = () => {
    const projects = [
        {
            id: 1,
            name: 'E-Trade',
            projectDetails: [
                "MERN Stack project where users can sign in/register and buy/sell their used products.",
                "Firebase Authentication and JWT Authorization.",
                "Hosted on Firebase",
                "Important Tools: React.js, Node - Express, MongoDB, Middlewares, React Router DOM, Tailwind, DaisyUI, NPM Packages, Git, Stripe Payment Method",
                "Features: User Authentication, Stripe Payment Method, Private Route, Admin Panel, CRUD Operations, JWT Authorization, MongoDB Database, Firebase Hosting, Firebase Authentication, React Router DOM, Tailwind, DaisyUI, NPM Packages, Git"
            ],
            liveLink: 'https://e-trade-a12.web.app/',
            clientLink: '',
            serverLink: '',
            img: [
                picman1,
                picman2,
                picman3,
                picman4,
                picman5,
                picman6,
                picman7,
                picman8,
                picman9
            ]
        },
        {
            id: 2,
            name: 'PicMan',
            projectDetails: [
                "MERN Stack Project where users can register / sign in and see / provide reviews on services available on the website.also, they can add services if they want",
                "MongoDB Databases, Firebase Authentication, Firebase Hosting, JWT Authorization",
                "Hosted on Firebase",
                "Important Tools: React.js, Node - Express, MongoDB, Middlewares, React Router DOM, Tailwind, DaisyUI, JWT, NPM Packages, Git",
                "Features: User Authentication, Private Route, Admin Panel, CRUD Operations, JWT Authorization, MongoDB Database, Firebase Hosting, Firebase Authentication, React Router DOM, Tailwind, DaisyUI, NPM Packages, Git"
            ],
            liveLink: 'https://picman-a11.web.app/',
            // img: picMan
        },
        {
            id: 3,
            name: 'BrainExercise',
            projectDetails: [
                "React App with Firebase Authentication(email - password, GitHub, google)",
                "An online course - based website where users can sign in /register and see details of any courses",
                "Hosted on Firebase",
                "Important Tools: React.js, Firebase Authentication, Firebase Hosting, React Router DOM, Private Route, Tailwind, DaisyUI, Git",
                "Features: User Authentication, Private Route, Firebase Authentication, Firebase Hosting, React Router DOM, Tailwind, DaisyUI, NPM Packages, Git"
            ],
            liveLink: 'http://brain-exercise-60233.web.app/',
            // img: brainExercise
        },
    ]


    // get the id from url param
    const id = parseInt(window.location.pathname.split('/')[2])
    console.log(id);

    const filteredProject = projects.filter(project => project.id === id);
    console.log(filteredProject[0]);
    return (
        <div className='py-10 lg:w-5/6 w-full lg:px-0 px-4 mx-auto'>
            <p className='text-3xl'>
                {
                    filteredProject[0].name
                }
            </p>

            <div className='projectDetails my-4'>
                <ul>
                    {
                        filteredProject[0].projectDetails.map((detail, index) => <li className='text-lg' key={index}>{index + 1} - {detail}</li>)
                    }
                </ul>
            </div>

            <p className='mt-8 mb-4 text-3xl'>
                Screenshots
            </p>

            <div className='gallery grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    filteredProject[0].img.map((img, index) => <img key={index} src={img} alt="" />)
                }
            </div>
        </div>
    );
};

export default ProjectDetails;