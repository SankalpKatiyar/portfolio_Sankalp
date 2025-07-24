import React from "react";

function Qualification() {
  return (
    <section
      id="qualification"
      className="hidden lg:block p-6 md:p-10 bg-gray-50 scroll-mt-20 w-full"
    >
      <h2 className="text-4xl font-extrabold text-center text-blue-950 mb-16">
        Qualifications & Skills
      </h2>

      <div className="flex gap-10 justify-center items-start w-full max-w-7xl mx-auto flex-wrap md:flex-nowrap">
        {/* Left Column - Education */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-2xl">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 border-b-2 pb-2 border-blue-200">
            Education
          </h3>

          <div className="space-y-8 text-gray-700 text-base leading-relaxed">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-lg font-semibold text-blue-900">
                B.Tech in Computer Science & Engineering
              </h4>
              <p>Dr. A.P.J. Abdul Kalam Technical University, Lucknow</p>
              <p className="text-sm text-gray-500">2022 - 2026 (Pursuing)</p>
              <p className="text-sm text-gray-500">CGPA: 80.12%</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-lg font-semibold text-blue-900">
                Intermediate
              </h4>
              <p>St. Xavier’s Sen. Sec. School, Kannauj (CBSE)</p>
              <p className="text-sm text-gray-500">2021 - 2022</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-lg font-semibold text-blue-900">
                High School
              </h4>
              <p>St. Xavier’s Sen. Sec. School, Kannauj (CBSE)</p>
              <p className="text-sm text-gray-500">2019 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
