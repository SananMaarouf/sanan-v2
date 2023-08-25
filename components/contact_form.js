import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm('mqkvqyvz');
    return (
        <form className='form-control' onSubmit={handleSubmit}>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-col justify-around'>
                    <section>
                        <label htmlFor="name" className="label">
                            <span className='label-text text-2xl text-white'>Name</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="input-md mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </section>

                    <section>
                        <label htmlFor="email" className="label">
                            <span className='label-text text-2xl text-white'>Email address</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="input-md mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </section>
                </div>
                <section>
                    <div className='lg:ml-5 h-3/4'>
                        <label htmlFor="message" className="label">
                            <span className='label-text text-2xl text-white'>Message</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="mt-1 textarea textarea-lg block w-full h-full rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                </section>
            </div>
            <button type="submit" disabled={state.submitting} className="btn btn-lg flex items-center mt-5 mx-40 border border-transparent text-base font-2xl rounded-md text-white bg-oransje hover:bg-lilla focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send
            </button>
        </form>
    );
}

function App() {
    return (
        <ContactForm />
    );
}

export default App;