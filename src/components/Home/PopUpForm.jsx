'use client'
import { useState, useEffect } from 'react';
import { ImCross } from "react-icons/im";

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully");
        setFormData({ name: "", email: "", message: "", budget: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-10 w-[90%] rounded-2xl md:w-[400px] shadow-lg z-50 relative">
        <h2 className="text-xl font-bold mb-4 text-center">Get in Touch With Us</h2>
        <form className='relative w-full md:max-w-[500px] bg-slate-50 shadow-lg rounded-2xl' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 px-3 rounded-xl block w-full border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="enter your name"
            />
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 px-3 rounded-xl block w-full border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 px-3 rounded-xl block w-full border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter a message here"
            />
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mt-2">
              Budget
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="mt-1 p-2 block w-full px-3 rounded-xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="enter a number in INR"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-3xl bg-indigo-600 text-white py-2 px-4 hover:bg-indigo-700"
          >
            Get in Touch With Us
          </button>
        </form>
        <button
          className="absolute top-2 right-2 text-xl text-gray-900"
          onClick={() => setIsVisible(false)}
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
