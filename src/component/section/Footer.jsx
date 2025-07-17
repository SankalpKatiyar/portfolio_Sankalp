import React from "react";
import { FaGithub, FaLinkedin, FaCode, FaCodeBranch } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
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

        <p className="text-sm mt-6 text-gray-400">
          © {new Date().getFullYear()} Sankalp Katiyar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
