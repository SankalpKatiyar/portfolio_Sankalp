import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas } from "react-icons/si";

function Footer() {
  return (
    <footer id="footer" className="bg-blue-950 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Contact Info */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Sankalp Katiyar</h2>
          <div className="flex items-center space-x-2 mb-2">
            <FaEnvelope className="text-lg" />
            <a
              href="mailto:sankalpkatiyar74@gmail.com"
              className="text-sm text-gray-300 hover:underline"
            >
              sankalpkatiyar74@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <FaPhone className="text-lg" />
            <span className="text-sm text-gray-300">+91 92509 72271</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-lg" />
            <span className="text-sm text-gray-300">
              Kanpur, Uttar Pradesh, India
            </span>
          </div>
        </div>

        {/* Right Social Links */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Connect with me</h2>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/sankalp37427/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/sankalpauop/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <SiGeeksforgeeks />
            </a>
            <a
              href="https://www.naukri.com/code360/profile/Sankalp_Katiyar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <SiCodingninjas />
            </a>
            <a
              href="https://www.linkedin.com/in/sankalp-katiyar-459b93256/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <p className="text-sm mt-6 text-gray-400 text-center">
          © {new Date().getFullYear()} Sankalp Katiyar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
