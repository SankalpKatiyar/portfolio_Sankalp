import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  {
    title: "Problem Solving Basics",
    image: "/src/assets/Problem_solving.png",
    link: "https://www.hackerrank.com/certificates/9084f3b24571",
  },
  {
    title: "SQL Basics",
    image: "/src/assets/SQl.png",
    link: "https://www.hackerrank.com/certificates/2dc5a94387d1",
  },
];

function CertificationCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      id="certifications"
      className="min-h-screen py-16 px-4 bg-gray-50 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-10 drop-shadow-lg">
          Certifications
        </h2>
        <Slider {...settings}>
          {certificates.map((cert, idx) => (
            <div key={idx} className="px-3">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-64 w-full object-contain p-4 rounded-t-3xl bg-gradient-to-br from-white to-slate-50"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {cert.title}
                  </h3>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition duration-300"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CertificationCarousel;
