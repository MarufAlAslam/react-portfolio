import React from 'react';
import BannerImg from './banner.svg';
import Typewriter from 'typewriter-effect';
import { FiFacebook, FiLinkedin, FiTwitter, FiGithub, FiInstagram } from 'react-icons/fi';

const Banner = () => {
    return (
        <div className='py-10 lg:w-5/6 w-full lg:px-0 px-4 mx-auto'>
            <div className='flex lg:flex-row flex-col-reverse justify-banner items-center'>
                <div className='lg:w-1/2 w-full'>
                    <h2 className='lg:text-3xl text-xl mb-2'>Hey!!</h2>
                    <h1 className='lg:text-5xl text-3xl mb-2'>I am <span className='grad font-bold'>Maruf Hossain</span></h1>

                    <h3 className='text-2xl flex items-center'>
                        <span className='block mr-3'>I am a</span>  <Typewriter
                            options={{
                                strings: ['Web Designer', 'Web Developer', 'Freelancer'],
                                autoStart: true,
                                loop: true,
                            }}

                        />
                    </h3>

                    <div className='flex'>
                        <a href="https://www.fiverr.com/webdevmaruf" rel='noreferrer' target="_blank" className='btn btn-outline btn-light mt-5 mr-4'>
                            HIRE ME
                        </a>
                        <a href="https://drive.google.com/file/d/1i-h1LbFfnMgMk3GhFGzP2ipwkGU4JnxL/view?usp=share_link" rel='noreferrer' target="_blank" className='btn btn-outline btn-light mt-5'>
                            DOWNLOAD RESUME
                        </a>

                    </div>

                    <p className='mt-5 text-xl mb-2'>
                        Find Me on:
                    </p>
                    <p className='text-xl flex items-center'>
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
                    </p>

                </div>
                <div className='lg:w-1/2 w-full text-right'>
                    <img src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;