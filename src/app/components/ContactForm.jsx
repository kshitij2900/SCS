'use client'
import { FaUser, FaEnvelope, FaRupeeSign, FaBuilding } from 'react-icons/fa';
import { MdMessage } from "react-icons/md";
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  return (
    <div className="flex bg-white p-4 mx-auto">
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full lg:w-[540px]">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">Contact Us</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <label htmlFor="name"  className="block text-sm font-medium text-gray-700">Name</label>
          <div className="flex items-center">
            <FaUser className="absolute left-3 text-gray-500" />
            <input type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} required
            className="mt-1 block w-full  outline-none pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 text-black"  />
          </div>
        </div>
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <div className="flex items-center">
            <FaEnvelope className="absolute left-3 text-gray-500" />
            <input type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} required
            className="mt-1 block w-full  outline-none pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 text-black" />
          </div>
        </div>
        <div className="relative">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <div className="flex items-center">
          <MdMessage className="absolute left-3 text-gray-500" />
            <textarea
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} required
            className="block w-full  outline-none pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500  text-black"/>
          </div>
        </div>
        <div className="relative">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
          <div className="flex items-center">
          <FaRupeeSign className="absolute left-3 text-gray-500" />
            <input type="number" 
            id="budget" 
            name="budget" 
            placeholder='Enter a number in INR'
            value={formData.budget} 
            onChange={handleChange} 
            className="mt-1 block w-full outline-none  pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 text-black" />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="mt-4 bg-[#7202bb] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default ContactForm;
