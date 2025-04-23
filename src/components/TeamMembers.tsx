import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
  },
  {
    name: "Michael Chen",
    role: "Head of Education Consulting",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    name: "Priya Patel",
    role: "Senior Visa Consultant",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
  },
  {
    name: "David Williams",
    role: "Travel Services Director",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
  },
  {
    name: "Emma Thompson",
    role: "Student Relations Manager",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg"
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
                    src={member.image}
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