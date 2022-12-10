import React from 'react';
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
    return (
        <div className='card bg-gray-700 projectCard'>
            <div className='card-body'>
                <img src={project.img} className="mb-4" alt="" />
                <span className='text-2xl'>{project.name}</span>
                <ul>
                    {
                        project.projectDetails.map((detail, index) => <li key={index}>{detail}</li>)
                    }
                </ul>

                <div className='divider'></div>
                <div className='card-actions mt-auto w-full'>
                    <a href={project.liveLink} className='block w-full'>
                        <button className='btn btn-primary rounded-none w-full'>Live Link</button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;