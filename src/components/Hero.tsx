import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../../images/hero1.jpg";
import hero2 from "../../images/hero2.jpg";
import hero3 from "../../images/hero3.jpg";
import hero4 from "../../images/hero4.jpg";
import hero5 from "../../images/hero5.jpg";
import hero6 from "../../images/hero6.jpg";

const slides = [
  {
    image: hero1,
    title: "Welcome to Clenlinks Global",
    description: "At Clenlinks Global, we are passionate about turning your dreams of studying abroad, traveling, and exploring new opportunities into reality.",
    alt: "Students studying in a modern library"
  },
  {
    image: hero2,
    title: "Expert Educational Guidance",
    description: "As a trusted international educational consultancy, we provide expert guidance and tailored support to students worldwide.",
    alt: "Professional educational consultant helping students"
  },
  {
    image: hero3,
    title: "Your Journey Starts Here",
    description: "Let us help you navigate the path to international education and travel with confidence and ease.",
    alt: "Students embarking on their international education journey"
  },
  {
    image: hero4,
    title: "Discover New Horizons",
    description: "Explore new cultures and educational opportunities with our expert guidance.",
    alt: "Students exploring new cultures"
  },
  {
    image: hero5,
    title: "Achieve Your Dreams",
    description: "We help you achieve your educational dreams with personalized support.",
    alt: "Students achieving their dreams"
  },
  {
    image: hero6,
    title: "Join Our Community",
    description: "Become part of a global community of learners and achievers with Clenlinks Global.",
    alt: "Community of learners"
  }
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    accessibility: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <section 
      className="relative bg-blue-700 text-white"
      aria-label="Hero section"
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-700">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600">
                    {slide.description}
                  </p>
                  <Link 
                    to="/contact"
                    className="bg-secondary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-accent transition-colors inline-block"
                    aria-label="Get started with our services"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;