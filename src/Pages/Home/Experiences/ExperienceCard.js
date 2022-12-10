import React from 'react';

const ExperienceCard = ({ experience }) => {
    return (
        <div className='mt-5'>
            <div className='lg:flex justify-between items-center'>
                <div className='lg:w-1/2 w-full'>
                    <p className='text-xl font-bold mt-3'>{experience.title}</p>
                    <p>{experience.company}</p>
                </div>
                <div className='lg:w-1/2 w-full text-right'>
                    <p>{experience.duration}</p>
                    <p>{experience.location}</p>
                </div>
            </div>
            <p className='mt-3'>{experience.description}</p>
        </div>
    );
};

export default ExperienceCard;