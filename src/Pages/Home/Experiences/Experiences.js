import React from 'react';
import ExperienceCard from './ExperienceCard';
import './Experiences.css'

const Experiences = () => {
    const experiences = [
        {
            id: 1,
            title: 'Associate Frontend Developer',
            company: 'CoreXLab Limited',
            location: 'Dhaka, Bangladesh',
            duration: 'December, 2022 - Present',
            description: 'React.js, JSX, Tailwind, HTML, CSS, Bootstrap, Component Libraries, Node.js, Express.js, Git, Github, Asana, PostMan, Express Generator, MongoDB, Mongoose, Redux '
        },
        {
            id: 2,
            title: 'Trainer - Responsive web design and Development',
            company: 'LEDP',
            location: 'Dinajpur, Bangladesh',
            duration: 'February, 2021 - May, 2022',
            description: 'Basic Computer, Internet Browsing, HTML, CSS, Bootstrap, Javascript, jQuery, PSD to HTML, XD to HTML, Figma to HTML, WordPress, WooCommerce.'
        },
        {
            id: 3,
            title: 'Freelance Web Developer',
            company: 'Fiverr',
            location: 'Remote',
            duration: 'October, 2020 - Present',
            description: 'HTML, CSS, Javascript, jQuery, Bootstrap, Tailwind, PHP, MySQL, WordPress, Elementor, PSD to HTML, Figma to HTML, XD to HTML.'
        }
    ]
    return (
        <div className='py-10 lg:w-5/6 w-full lg:px-0 px-4 mx-auto' id='experiences'>
            <h2 className='text-3xl mb-3'>
                My Experiences
            </h2>


            <div className='exp-card'>
                {
                    experiences.map((experience, index) => <ExperienceCard key={index} experience={experience}></ExperienceCard>)
                }
            </div>
        </div>
    );
};

export default Experiences;