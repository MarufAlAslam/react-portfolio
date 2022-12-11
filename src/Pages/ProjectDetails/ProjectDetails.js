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


// eTrade photos
import etrade1 from './e-trade/1.png'
import etrade2 from './e-trade/2.png'
import etrade3 from './e-trade/3.png'
import etrade4 from './e-trade/4.png'
import etrade5 from './e-trade/5.png'
import etrade6 from './e-trade/6.png'
import etrade7 from './e-trade/7.png'
import etrade8 from './e-trade/8.png'
import etrade9 from './e-trade/9.png'

// brain exercise photos
import brain1 from './brain-exercise/1.png'
import brain2 from './brain-exercise/2.png'
import brain3 from './brain-exercise/3.png'
import brain4 from './brain-exercise/4.png'
import brain5 from './brain-exercise/5.png'
import brain6 from './brain-exercise/6.png'
import brain7 from './brain-exercise/7.png'
import brain8 from './brain-exercise/8.png'
import brain9 from './brain-exercise/9.png'




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
                "Features: User Authentication, Stripe Payment Method, Private Route, Admin Panel, CRUD Operations, JWT Authorization, MongoDB Database, Firebase Hosting, Firebase Authentication, React Router DOM, Tailwind, DaisyUI, NPM Packages, Git",
                "admin details: adminEmail: admin@admin.com adminPass: 123456"
            ],
            liveLink: 'https://e-trade-a12.web.app/',
            clientLink: 'https://github.com/MarufAlAslam/mern-product-resale-client',
            serverLink: 'https://github.com/MarufAlAslam/mern-product-resale-server',
            img: [
                etrade1,
                etrade2,
                etrade3,
                etrade4,
                etrade5,
                etrade6,
                etrade7,
                etrade8,
                etrade9
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
            clientLink: 'https://github.com/MarufAlAslam/mern-pickman-client',
            serverLink: 'https://github.com/MarufAlAslam/mern-pickman-server',
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
            clientLink: 'https://github.com/MarufAlAslam/brain-exercise-client',
            serverLink: 'https://github.com/MarufAlAslam/brain-exercise-server',
            img: [
                brain1,
                brain2,
                brain3,
                brain4,
                brain5,
                brain6,
                brain7,
                brain8,
                brain9
            ]
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

            <div className='divider'></div>

            <a href={filteredProject[0].liveLink} className='text-primary text-2xl block mt-3'>
                Live Link
            </a>
            <a href={filteredProject[0].clientLink} className='text-primary text-2xl block mt-3'>
                Client Side Repo Link
            </a>
            <a href={filteredProject[0].serverLink} className='text-primary text-2xl block mt-3'>
                Server Side Repo Link
            </a>

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