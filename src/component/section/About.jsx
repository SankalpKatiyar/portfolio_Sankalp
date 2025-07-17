import React from "react";

function About() {
  return (
    <section id="about" className="py-10 bg-gray-50 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-950 mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Skills Section */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              My Skills
            </h3>

            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-bold mb-1">Programming Languages:</h4>
                <p>C, C++, Java, Python, JavaScript</p>
              </div>

              <div>
                <h4 className="font-bold mb-1">Web Technologies:</h4>
                <p>HTML5, CSS3, React.js, Tailwind CSS, Node.js, Express.js</p>
              </div>

              <div>
                <h4 className="font-bold mb-1">Database Management:</h4>
                <p>MySQL, MongoDB</p>
              </div>

              <div>
                <h4 className="font-bold mb-1">Version Control:</h4>
                <p>Git, GitHub</p>
              </div>

              <div>
                <h4 className="font-bold mb-1">Software & Tools:</h4>
                <p>Visual Studio Code</p>
              </div>

              <div>
                <h4 className="font-bold mb-1">
                  Data Structures & Algorithms:
                </h4>
                <p>
                  Proficient in solving DSA problems using arrays, linked lists,
                  trees, stacks, queues, graphs, and dynamic programming.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-1">Object-Oriented Programming:</h4>
                <p>
                  Strong understanding of OOPS concepts and implementation in
                  Java and C++.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Education
            </h3>

            <div className="space-y-6 text-gray-700">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-lg font-semibold">
                  B.Tech in Computer Science & Engineering
                </h4>
                <p>Dr. A.P.J. Abdul Kalam Technical University, Lucknow</p>
                <p className="text-sm text-gray-500">2022 - 2026 (Pursuing)</p>
                <p className="text-sm text-gray-500">CGPA: 80.12%</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-lg font-semibold">Intermediate</h4>
                <p>St. Xavier’s Sen. Sec. School, Kannauj (CBSE)</p>
                <p className="text-sm text-gray-500">2021 - 2022</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-lg font-semibold">High School</h4>
                <p>St. Xavier’s Sen. Sec. School, Kannauj (CBSE)</p>
                <p className="text-sm text-gray-500">2019 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
