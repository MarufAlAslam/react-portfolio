import React from 'react';
import './SkillCard.css';

const SkillCard = ({ skill }) => {
    return (
        <div className='skillCard'>
            <p className='text-lg'>{skill}</p>
        </div>
    );
};

export default SkillCard;