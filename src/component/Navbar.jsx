import React from "react";
import { useEffect } from "react";
import clsx from "clsx"; // Make sure you have clsx installed: npm install clsx

// Navbar component receives menuOpen and setMenuOpen as props
function Navbar({ menuOpen, setMenuOpen }) {
  // Prevents background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      // Cleanup function to reset overflow when component unmounts
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // A helper component for cleaner, more attractive navigation links
  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-white hover:text-blue-300 relative font-medium
               after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
               after:w-0 after:h-[2px] after:bg-blue-400
               after:transition-all after:duration-300 after:ease-in-out
               hover:after:w-full"
    >
      {children}
    </a>
  );

  return (
    // Main navigation bar container with a slightly refined background
    <nav className="fixed top-0 w-full z-50 bg-blue-950/90 backdrop-blur-md border-b border-blue-800/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <a href="/home" className="text-2xl font-bold text-white">
            Sankalp<span className="text-blue-400">Katiyar</span>
          </a>

          {/* Hamburger Icon */}
          <div
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <button
              className="w-8 h-8 flex flex-col justify-center items-center space-y-1.5 cursor-pointer z-50"
              aria-label="Open Menu"
            >
              <span
                className={clsx(
                  "block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out",
                  { "rotate-45 translate-y-2": menuOpen }
                )}
              ></span>
              <span
                className={clsx(
                  "block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out",
                  { "opacity-0": menuOpen }
                )}
              ></span>
              <span
                className={clsx(
                  "block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out",
                  { "-rotate-45 -translate-y-2": menuOpen }
                )}
              ></span>
            </button>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#footer">About</NavLink>
            <NavLink href="#qualification">Qualification</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
