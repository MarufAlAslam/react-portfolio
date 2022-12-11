import React from 'react';
import soon from './soon.svg'

const Blogs = () => {
    return (
        <div className='lg:w-5/6 mx-auto w-full text-center py-24'>
            <img src={soon} className='w-96 block mx-auto' alt="" />
            <h2 className='text-2xl font-bold mt-5'>
                Coming Soon...
            </h2>
        </div>
    );
};

export default Blogs;