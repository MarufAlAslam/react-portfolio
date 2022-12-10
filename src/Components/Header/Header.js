import React from 'react';

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
                            <li><a href='#about'>About Me</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='/'>Experiences</a></li>
                            <li><a href='/'>Contact Me</a></li>
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl">
                        Maruf's Planet
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#about'>About Me</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='/'>Experiences</a></li>
                        <li><a href='/'>Contact Me</a></li>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a href='https://drive.google.com/file/d/1i-h1LbFfnMgMk3GhFGzP2ipwkGU4JnxL/view?usp=share_link' rel='noreferrer' target="_blank" className="btn rounded-none">DOWNLOAD RESUME</a>
                </div> */}
            </div>
        </div>
    );
};

export default Header;