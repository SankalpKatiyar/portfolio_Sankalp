import React from "react";

const certificates = [
  {
    title: "Java Programming - NPTEL",
    image: "/src/assets/Java.png",
    link: "https://drive.google.com/file/d/119o9XLWm2N-y6taKHXlo9Tk5U6Y24B8Q/view",
  },
  {
    title: "Problem Solving in C - NPTEL",
    image: "/src/assets/C.png",
    link: "https://drive.google.com/file/d/1QQa73Ewsn8iFGnLABEZq_cCcNQ7zy_Ti/view",
  },
  {
    title: "HackerRank - CSS",
    image: "/src/assets/Css.png",
    link: "https://www.hackerrank.com/certificates/dd841727f3f2",
  },
  {
    title: "Internal SIH 2024",
    image: "/src/assets/Internal_Sih.jpeg",
    link: "https://drive.google.com/file/d/1V-fQr3xP5ntPR00nUKeNotN4UioVEuvN/view?usp=sharing",
  },
];

function CertificationCarousel() {
  return (
    <section id="certifications" className="p-10 bg-gray-50 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-950 ">
          Certifications
        </h2>

        <div className="flex overflow-x-auto gap-6 scrollbar-hide p-20">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-48 w-full object-contain rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {cert.title}
              </h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition duration-300"
              >
                🔗 View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationCarousel;
