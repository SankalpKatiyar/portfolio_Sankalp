import React, { useEffect } from "react";
import clsx from "clsx";

function MobileMenu({ menuOpen, setMenuOpen }) {
  // Define base, transition, and conditional classes
  const menuContainerClasses = clsx(
    "fixed top-0 left-0 w-full h-screen z-40 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm",
    "transition-transform duration-300 ease-in-out",
    {
      "translate-y-0 opacity-100": menuOpen,
      "-translate-y-full opacity-0": !menuOpen,
    }
  );

  // Add a useEffect to handle window resize
  useEffect(() => {
    // Function to close the menu if the window is wider than the mobile breakpoint
    const handleResize = () => {
      // Typically, mobile breakpoints are around 768px.
      // Adjust this value based on your project's specific breakpoints.
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Initial check in case the component mounts on a larger screen while menuOpen is true
    handleResize();

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setMenuOpen]); // The effect depends on the setMenuOpen function

  // To prevent rendering the menu at all on larger screens, you can add this check.
  // This is useful if your parent component doesn't already hide the menu toggle button.
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // if (!isMobile && !menuOpen) return null;

  return (
    <div className={menuContainerClasses}>
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
      >
        &times;
      </button>

      <div className="flex flex-col items-center justify-center h-[300px] text-white text-xl space-y-4">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          About
        </a>
        <a href="#" className="hover:text-gray-300">
          Contact
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
