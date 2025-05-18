import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../../images/hero1.jpg";

const slides = [
  {
    image: hero1,
    title: "Welcome to Clenlinks Global",
    description: "Your trusted partner in international education and travel services."
  },
  {
    image: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg",
    title: "Study Abroad",
    description: "Discover opportunities to study in top universities around the world."
  },
  {
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    title: "Travel Services",
    description: "Explore the world with our comprehensive travel solutions."
  },
  {
    image: "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg",
    title: "Educational Tours",
    description: "Join our educational tours to learn and experience new cultures."
  },
  {
    image: "https://images.pexels.com/photos/1134184/pexels-photo-1134184.jpeg",
    title: "Adventure Travel",
    description: "Embark on exciting adventures with our travel packages."
  },
  {
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    title: "Global Opportunities",
    description: "Unlock global opportunities with Clenlinks Global."
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
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
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