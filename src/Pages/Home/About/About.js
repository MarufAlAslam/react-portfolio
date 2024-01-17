import React from 'react';

const About = () => {
    const year = new Date().getFullYear() - 1997;
    return (
        <div className='py-10 lg:w-5/6 w-full lg:px-0 px-4 mx-auto' id='about' data-aos="fade-up">
            <h2 className='text-3xl mb-3'>
                About Me
            </h2>

            <p className='text-lg'>
                I'm MD. Maruf Hossain, a Passionate Front-End Developer. I've been Designing & Developing Website for the Last Three Years.
            </p>
            <p className='text-lg'>
                Currently, I'm working as Associate Frontend Developer at CoreXLab Limited. Besides that, I love to Develope my skill on Fullstack web development (MERN). Other than that, I am a freelance web developer at fiverr where I have over 200+ different clients and more than 500 projects completed.
            </p>

            <h2 className='text-3xl mb-3 mt-8'>
                Biography
            </h2>
            <div className='lg:overflow-hidden overflow-x-auto'>
                <table className='table w-full'>
                    <tbody>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                MD. Maruf Hossain
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Age
                            </td>
                            <td>
                                {year}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Father's Name
                            </td>
                            <td>
                                Mizanur Rahman
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Mother's Name
                            </td>
                            <td>
                                MST. Mariom Begum
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Present Address
                            </td>
                            <td>
                                Ka - 20/2, Rasulbaag, Mohakhali, Dhaka 1212
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Permanent Address
                            </td>
                            <td>
                                Kedarpur, Babugonj, Barishal
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Mobile
                            </td>
                            <td>
                                +880 1724783655
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email
                            </td>
                            <td>
                                maruf14@cse.pstu.ac.bd
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default About;