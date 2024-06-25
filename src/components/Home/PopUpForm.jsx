'use client'
import { useState, useEffect } from 'react';

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Get in Touch With Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium  text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 p-2 px-3 rounded-xl block w-full border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text"
              placeholder="enter your name"
            />
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 p-2 px-3 rounded-xl block w-full border border-gray-300  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-2">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              className="mt-1 p-2 px-3 rounded-xl block w-full border border-gray-300  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter a message here"
            />
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-2">
              Budget
            </label>
            <input
              type="number"
              id="budget"
              className="mt-1 p-2 block w-full px-3 rounded-xl border border-gray-300  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="enter a number in INR"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-3xl bg-indigo-600 text-white py-2 px-4  hover:bg-indigo-700"
          >
            Get in Touch With Us
          </button>
        </form>
        <button
          className="absolute top-2 right-2 font-bold text-4xl text-white "
          onClick={() => setIsVisible(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
