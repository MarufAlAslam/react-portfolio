import React from 'react';
import { FiFacebook, FiLinkedin, FiTwitter, FiGithub, FiInstagram } from 'react-icons/fi';
import { GiExplodingPlanet } from 'react-icons/gi';

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                    <GiExplodingPlanet className='text-4xl' />
                    <p className='text-lg'>Copyright © 2022 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end lg:ml-auto lg:mr-0 mr-auto ml-auto">
                    <a href="https://facebook.com/marufalaslam" rel='noreferrer' target="_blank">
                        <FiFacebook className='mr-4 mt-3 text-2xl' />
                    </a>
                    <a href="https://www.linkedin.com/in/webdevmaruff" rel='noreferrer' target="_blank">
                        <FiLinkedin className='mr-4 mt-3 text-2xl' />
                    </a>
                    <a href="https://twitter.com/Maruf23350252" rel='noreferrer' target="_blank">
                        <FiTwitter className='mr-4 mt-3 text-2xl' />
                    </a>
                    <a href="https://github.com/MarufAlAslam" rel='noreferrer' target="_blank">
                        <FiGithub className='mr-4 mt-3 text-2xl' />
                    </a>
                    <a href="https://www.instagram.com/captain_potatoo/" rel='noreferrer' target="_blank">
                        <FiInstagram className='mr-4 mt-3 text-2xl' />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;