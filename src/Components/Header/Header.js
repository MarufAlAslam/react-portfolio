import React from 'react';
import { GiExplodingPlanet } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-gray-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#experiences'>Experiences</a></li>
                            <li><a href='#about'>About Me</a></li>
                            <li><a href='#contact'>Contact Me</a></li>
                            <li><Link to='/payoneer'>Payoneer</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn bg-transparent border-none normal-case text-2xl">
                        <GiExplodingPlanet className='mr-2 text-5xl' /> WebDevMaruf
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/#skills'>Skills</a></li>
                        <li><a href='/#projects'>Projects</a></li>
                        <li><a href='/#experiences'>Experiences</a></li>
                        <li><a href='/#about'>About Me</a></li>
                        <li><a href='/#contact'>Contact Me</a></li>
                        <li><Link to='/payoneer'>Payoneer</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;