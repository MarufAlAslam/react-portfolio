import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;