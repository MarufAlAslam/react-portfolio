import React from 'react';
import { Link } from 'react-router-dom';
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
                <div className='card-actions flex justify-between items-center flex-row mt-auto w-full'>
                    <Link to={`/project-details/${project.id}`} className='block'>
                        <button className='btn btn-accent rounded-none'>See Details</button>
                    </Link>
                    <a href={project.liveLink} className='block'>
                        <button className='btn btn-primary rounded-none'>Live Link</button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;