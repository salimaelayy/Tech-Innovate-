"use client "
import React, { useState } from 'react';

const CForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can handle form submission here, like sending data to a server or performing client-side validation
        console.log(formData);
    };

    return (
        <form className="mt-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 text-left">
                <label htmlFor="name" className="block">
                    <span className="text-white">Name</span>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border-white border bg-black  text-black w-full rounded" required />
                </label>
                <label htmlFor="email" className="block">
                    <span className=" text-white ">Email Address</span>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border-white border bg-black  text-black w-full rounded" required />
                </label>
                <label htmlFor="message" className="block">
                    <span className=" text-white">Message</span>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="mt-1 p-2 border-white border bg-black  text-black w-full rounded" rows={4} required />
                </label>
            </div>
            <div className="mt-6">
                <button type="submit" className="rounded-full focus:outline-none py-2 px-6 bg-black border border-white text-white">Submit</button>
            </div>
        </form>
    );
};

export default CForm;
