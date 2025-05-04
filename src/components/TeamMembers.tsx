import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emmanuel from "../../images/emma.jpg";
import chioma from "../../images/chioma.jpg";
import juliet from "../../images/juliet.jpg";
import francis from "../../images/francis.jpg";
const teamMembers = [
  {
    name: "Mr. Emmanuel",
    role: "Chief Executive Officer",
    image: {emmanuel}
  },
  {
    name: "Mr. Francis",
    role: "Immigration Lawyer",
    image: {francis}
  },
  {
    name: "Mrs. Chioma",
    role: "Study Abroad Expert",
    image: {chioma}
  },
  {
    name: "Miss. Juliet",
    role: "Ticketing Officer",
    image: {juliet}
  }
];

const TeamMembers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">Dedicated professionals committed to your success</p>
        </div>
        
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={Object.values(member.image)[0]}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamMembers;