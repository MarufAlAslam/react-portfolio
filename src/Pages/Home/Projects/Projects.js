import React from 'react';
import ProjectCard from './ProjectCard';
import eTrade from './1.png'
import picMan from './2.png'
import brainExercise from './3.png'

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'Jadroo IT',
            projectDetails: [
                "React.js Project to display details and services about a company.",
                "React Router Navigation",
                "Important Tools: React.js, React Router DOM, Tailwind, DaisyUI, NPM Packages, Git"
            ],
            liveLink: 'jadrooit.com',
            img: eTrade
        },
        {
            id: 2,
            name: 'PicMan',
            projectDetails: [
                "MERN Stack Project where users can register / sign in and see / provide reviews on services available on the website.also, they can add services if they want",
                "MongoDB Databases, Firebase Authentication, Firebase Hosting, JWT Authorization",
                "Important Tools: React.js, Node - Express, MongoDB, Middlewares, React Router DOM, Tailwind, DaisyUI, JWT, NPM Packages, Git"
            ],
            liveLink: 'https://picman-a11.web.app/',
            img: picMan
        },
        {
            id: 3,
            name: 'BrainExercise',
            projectDetails: [
                "React App with Firebase Authentication(email - password, GitHub, google)",
                "An online course - based website where users can sign in /register and see details of any courses",
                "Important Tools: React.js, Firebase Authentication, Firebase Hosting, React Router DOM, Private Route, Tailwind, DaisyUI, Git"
            ],
            liveLink: 'http://brain-exercise-60233.web.app/',
            img: brainExercise
        },
    ]
    return (
        <div className='py-10 lg:w-5/6 w-full lg:px-0 px-4 mx-auto' id='projects'>
            <h2 className='text-3xl mb-3'>
                My Projects
            </h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                {
                    projects.map((project, index) => <ProjectCard key={index} project={project}></ProjectCard>)
                }
            </div>

            {/* <div className='mt-8 text-center'>
                <a href="/" className='btn btn-outline'>
                    See More Projects
                </a>
            </div> */}
        </div>
    );
};

export default Projects;