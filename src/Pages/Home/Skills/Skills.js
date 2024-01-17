import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
    const comfortable = [
        'C',
        'C++',
        'HTML',
        'CSS',
        'JavaScript',
        'ES6',
        'Bootstrap',
        'Tailwind',
        'React.js',
        'Express.js',
        'React Router DOM',
        'Daisy Ui',
        'Material Ui',
        'Flowbyte',
        'jQuery',
        'CSS Media Query',
        'MongoDB',
        'Firebase',
        'Mongoose.js',
    ]

    const familiar = [
        'Redux',
        'Node.js',
        'React Native'
    ]

    const tools = [
        'VS code',
        'Git',
        'CLI',
        'Vercel',
        'Browsers',
        'NPM',
        'Chrome Dev Tool',
        'Postman',
        'Netlify',
        'Express Generator'
    ]
    return (
        <div className='py-10 lg:w-5/6 w-full lg:px-0 px-4 mx-auto' id='skills'>
            <h2 className='text-3xl mb-3'>
                My Skills
            </h2>
            <p className='text-xl'>
                Comfortable
            </p>
            <div className='grid lg:grid-cols-5 grid-cols-2 mb-5'>
                {
                    comfortable.map((skill, index) => <SkillCard key={index} skill={skill}></SkillCard>)
                }
            </div>
            <p className='text-xl'>
                Familiar with
            </p>
            <div className='grid lg:grid-cols-5 grid-cols-2 mb-5'>
                {
                    familiar.map((skill, index) => <SkillCard key={index} skill={skill}></SkillCard>)
                }
            </div>
            <p className='text-xl'>
                Tools
            </p>
            <div className='grid lg:grid-cols-5 grid-cols-2 mb-5'>
                {
                    tools.map((skill, index) => <SkillCard key={index} skill={skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default Skills;