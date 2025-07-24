import React from "react";

function Skills() {
  return (
    <section id="skills" className="p-4 bg-gray-50 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-950 mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-base text-gray-700">
          {/* Skill Group 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Programming Languages
            </h3>
            <p>C, C++, Java, Python, JavaScript</p>
          </div>

          {/* Skill Group 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Web Technologies
            </h3>
            <p>HTML5, CSS3, React.js, Tailwind CSS, Node.js, Express.js</p>
          </div>

          {/* Skill Group 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Database Management
            </h3>
            <p>MySQL, MongoDB</p>
          </div>

          {/* Skill Group 4 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Version Control
            </h3>
            <p>Git, GitHub</p>
          </div>

          {/* Skill Group 5 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Software & Tools
            </h3>
            <p>Visual Studio Code</p>
          </div>

          {/* Skill Group 6 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Data Structures & Algorithms
            </h3>
            <p>
              Arrays, Linked Lists, Trees, Stacks, Queues, Graphs, Dynamic
              Programming
            </p>
          </div>

          {/* Skill Group 7 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Object-Oriented Programming
            </h3>
            <p>
              Solid understanding of OOPS principles and implementation in Java
              and C++
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
