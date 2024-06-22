"use client";
import { FaUser, FaEnvelope, FaRupeeSign, FaBuilding } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { useState } from "react";

import Link from "next/link";
import { FaLocationDot, FaHeadphones } from "react-icons/fa6";
import { MdEmail, MdCall, MdWhatsapp, MdMail } from "react-icons/md";
const ContactForm = () => {
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
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message");
    }
  };

  return (
    <section
      id="contact-form"
      className="relative isolate py-16 lg:py-24 bg-white"
    >
      <div className="mx-auto max-w-full md:max-w-[90%] px-4 lg:px-8">
        <div>
          <div className="flex flex-col md:items-center gap-4">
            <h2 className="text-4xl text-gray-800 md:text-6xl font-semibold font-cabr">
              Get in Touch
            </h2>
            <p className="my-auto max-w-xl md:text-center text-gray-700 text-lg">
              We help you automate your workflows, automate repetitive tasks,
              and elevate your business.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-0 gap-10 mt-10">
          <div className="w-full">
            <div className="mt-6">
              <div className="flex flex-row items-start gap-5 pr-3">
                <FaLocationDot className=" text-black w-6 h-6 mt-1" />
                <div>
                  <h3 className=" text-2xl font-cabm text-black">Our office</h3>
                  <div className="max-w-md mt-3">
                    <h4 className="text-lg text-gray-600">
                      <span className=" font-semibold text-black">
                        Branch:{" "}
                      </span>
                      XYZ
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start gap-5 pr-3 mt-8">
                <FaHeadphones className=" text-black w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-2xl font-cabm text-black">
                    For Quick Inquiries
                  </h3>
                  <div className="max-w-md mt-3">
                    <Link
                      href="tel:6291858611"
                      target="_blank"
                      className="text-black flex gap-2 items-center"
                    >
                      <MdCall className=" text-blue-600 w-6 h-6" />
                      +91-1234567890
                    </Link>
                    <Link
                      href="https://api.whatsapp.com/send?phone=916291858611&text=Hello,%20Welcome%20to%20Achintya%20Solution.%20We%20are%20delighted%20to%20have%20you%20here%20and%20are%20eager%20to%20assist%20you%20in%20any%20way%20we%20can.%20Whether%20you%27re%20looking%20for%20information,%20support,%20or%20simply%20want%20to%20learn%20more%20about%20our%20services,%20we%20are%20at%20your%20disposal.%20Please%20feel%20free%20to%20explore%20our%20website,%20and%20don%27t%20hesitate%20to%20reach%20out%20if%20you%20have%20any%20questions%20or%20concerns.%20Your%20satisfaction%20is%20our%20top%20priority,%20and%20we%20look%20forward%20to%20serving%20you.%20Thank%20you%20for%20choosing%20Achintya%20Solution!"
                      className="text-black mt-3 flex gap-2 items-center"
                    >
                      <MdWhatsapp className=" text-green-500 w-6 h-7" />
                      +91-1234567890
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start gap-5 pr-3 mt-8">
                <MdMail className=" text-black w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-2xl font-cabm text-black">Email us</h3>

                  <Link href="mailto:info@achintyasolutions.com" className="text-xl font-normal text-black ">
                    abc@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full my-auto">
            <form className="space-y-4 rounded-2xl" onSubmit={handleSubmit}>
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="flex items-center">
                  <FaUser className="absolute left-3 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full  outline-none pl-10 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 text-black"
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="flex items-center">
                  <FaEnvelope className="absolute left-3 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full  outline-none pl-10 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 text-black"
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <div className="flex items-center">
                  <MdMessage className="absolute left-3 text-gray-500" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full  outline-none pl-10 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500  text-black"
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700"
                >
                  Budget
                </label>
                <div className="flex items-center">
                  <FaRupeeSign className="absolute left-3 text-gray-500" />
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    placeholder="Enter a number in INR"
                    value={formData.budget}
                    onChange={handleChange}
                    className="mt-1 block w-full outline-none  pl-10 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 text-black"
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-4 bg-indigo-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
