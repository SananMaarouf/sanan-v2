import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm('mqkvqyvz');
    return (
        <form onSubmit={handleSubmit}>
            <h2 htmlFor="name" className="block font-2xl text-white">
                Name
            </h2>
            <input
                id="name"
                type="text"
                name="name"
                className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />

            <label htmlFor="email" className="block font-2xl text-white">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <label htmlFor="message" className="block font-2xl text-white">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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