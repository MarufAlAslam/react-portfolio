import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Experiences from './Experiences/Experiences';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Experiences></Experiences>
        </div>
    );
};

export default Home;