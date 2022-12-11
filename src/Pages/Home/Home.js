import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Experiences from './Experiences/Experiences';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Experiences></Experiences>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;