import React from "react"; // Add your image in assets folder
import contactImage from "/src/assets/Contact.jpeg";
function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-4 py-20 scroll-mt-20"
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={contactImage}
          alt="Contact Illustration"
          className="w-[80%] md:w-[70%] object-contain"
        />
      </div>

      {/* Right Contact Form */}
      <div className="w-full md:w-1/2 max-w-md">
        <h2 className="text-4xl font-bold text-blue-950 mb-8 text-center">
          Contact Me
        </h2>
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here..."
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              Submit
            </button>
            <button
              type="reset"
              className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400 transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
