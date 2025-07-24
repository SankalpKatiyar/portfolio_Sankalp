import React from "react";
import heroImg from "/src/assets/Sankalp.jpeg";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-50"
    >
      {/* Left Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 mt-10 lg:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 leading-snug">
          Hi, I'm <span className="text-blue-700">Sankalp Katiyar</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          I'm a passionate{" "}
          <span className="text-blue-700 font-semibold">
            Computer Science Engineering student
          </span>{" "}
          and dedicated{" "}
          <span className="text-blue-700 font-semibold">
            Full Stack Developer
          </span>{" "}
          who thrives on crafting visually appealing, responsive, and
          user-friendly web applications. My toolkit includes{" "}
          <span className="font-medium">React.js</span>,{" "}
          <span className="font-medium">Tailwind CSS</span>, and modern
          JavaScript libraries. I have a strong foundation in{" "}
          <span className="font-medium">C, C++, Java, and Python</span>,
          complemented by hands-on experience with{" "}
          <span className="font-medium">
            Node.js, Express.js, MongoDB, and MySQL
          </span>
          . I’m a quick learner, a team player, and always excited to transform
          innovative ideas into impactful digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a
            href="#contact"
            className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="/src/assets/Sankalp_Katiyar_Resume.pdf"
            download
            className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Hero Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={heroImg}
          alt="Sankalp Katiyar"
          className="w-[90%] max-w-[400px] md:max-w-[500px] lg:max-w-[550px] object-contain "
        />
      </div>
    </section>
  );
}

export default Home;
