import React from "react";
import heroImg from "/src/assets/Contact.jpeg";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-white px-6 md:px-16"
    >
      {/* Left Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left z-10">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 text-blue-950 leading-tight">
          Hi, I'm <span className="text-blue-700">Sankalp Katiyar</span>
        </h1>
        <p className="text-lg text-gray-700 mb-2 leading-relaxed">
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

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Contact Me
          </a>
          <a
            href="/src/assets/Sankalp_Katiyar_Resume.pdf"
            download
            className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Hero Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={heroImg}
          alt="Sankalp Katiyar"
          className="w-[300px] md:w-[400px] lg:w-[500px] object-contain"
        />
      </div>
    </section>
  );
}

export default Home;
