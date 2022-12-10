import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const ContactForm = () => {
    const [state, handleSubmit] = useForm("xvoyedqj");
    if (state.succeeded) {
        return <p>Thanks! I'll Check and Get back to you ASAP. Good Day</p>;
    }
    return (
        <div>
            <p className='text-2xl'>
                Reach Me Out!
            </p>
            <form onSubmit={handleSubmit}>
                <div className='my-3'>
                    <label htmlFor="email">
                        Your Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className='input input-bordered w-full mt-2'
                    />
                </div>
                <div className='my-3'>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className='input input-bordered w-full mt-2'
                    />
                </div>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <div className='my-3'>
                    <label htmlFor="email">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className='textarea textarea-bordered w-full resize-none mt-2'
                    />
                </div>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" className='btn btn-primary px-10 ml-auto block' disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;