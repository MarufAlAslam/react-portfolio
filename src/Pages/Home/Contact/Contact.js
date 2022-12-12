import React from 'react';
import { FiFacebook, FiLinkedin, FiTwitter, FiGithub, FiInstagram } from 'react-icons/fi';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='py-10 lg:w-5/6 w-full lg:px-0 px-4 mx-auto' id='contact'>
            <h2 className='text-3xl mb-3'>
                Contact Me
            </h2>

            <div className='grid lg:grid-cols-2 gird-cols-1 gap-6'>
                <div>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td className='font-bold pl-0'>Email</td>
                                <td>
                                    <a href='mailto:maruf14@cse.pstu.ac.body
                                    ' target='_blank' rel='noreferrer'>
                                        maruf14@cse.pstu.ac.bd
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className='font-bold pl-0'>Phone</td>
                                <td>
                                    <a href='tel:+8801724783655
                                    ' target='_blank' rel='noreferrer'>
                                        +8801724783655
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="pl-0">
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
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    );
};

export default Contact;