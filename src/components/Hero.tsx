import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg",
    title: "Welcome to Clenlinks Global",
    description: "At Clenlinks Global, we are passionate about turning your dreams of studying abroad, traveling, and exploring new opportunities into reality."
  },
  {
    image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg",
    title: "Expert Educational Guidance",
    description: "As a trusted international educational consultancy, we provide expert guidance and tailored support to students worldwide."
  },
  {
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    title: "Your Journey Starts Here",
    description: "Let us help you navigate the path to international education and travel with confidence and ease."
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
    cssEase: "linear"
  };

  return (
    <div className="relative bg-blue-700 text-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-20"
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
                  <button className="bg-white text-blue-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition-colors">
                    Get Started Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;