import React from 'react';
import { GraduationCap, FileCheck, Plane, Building2, Star, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Securing Admissions Abroad',
    description: 'Your gateway to achieving your academic aspirations and studying at world-renowned institutions. Our expert consultants guide you through the complex admissions process, ensuring you stand out and increase your chances of securing placements at top universities and colleges worldwide.',
    buttonText: "Let's do this"
  },
  {
    icon: FileCheck,
    title: 'Effortless Visa Processing',
    description: 'Navigating the visa application process can be complex, but Clenlinks Global makes it simple. Whether you\'re applying for a study visa to pursue your education or a tourist visa for business, leisure, or transit, our experienced team is here to assist.',
    buttonText: "Let's do this"
  },
  {
    icon: Plane,
    title: 'Flight Bookings | International & Local',
    description: 'Booking flights has never been easier with Clenlinks Global. We provide expert assistance in securing the best deals on international and local flights, whether you\'re traveling for education, business, or leisure.',
    buttonText: "Let's do this"
  },
  {
    icon: Building2,
    title: 'Hotel Reservations',
    description: 'Let us handle your accommodation needs, whether you\'re traveling abroad for education, work, or leisure. With access to a wide range of accommodations worldwide, we can help you find and book the perfect stay, tailored to your preferences and budget.',
    buttonText: "Let's do this"
  }
];

const Services = () => {
  return (
    <>
      {/* Mission and Commitment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission and Commitment to You</h2>
            <p className="text-xl text-gray-600 mb-8">Guiding Your Journey, Wherever Life Takes You</p>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              At Clenlinks Global Services, we are dedicated to guiding you through every aspect of your
              international journey. With over 12 years of experience, we understand that your needs are unique,
              and we're here to ensure a seamless experience.
            </p>
            <ul className="list-none space-y-4 mb-6">
              <li className="flex items-start">
                <Star className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Education Consulting: From selecting the right university to securing admissions and
                guiding you through the visa application process.</span>
              </li>
              <li className="flex items-start">
                <Star className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Visa Processing: Whether it's for studying, traveling, or business, we simplify the visa
                process, ensuring you navigate through the complexities with confidence and ease.</span>
              </li>
              <li className="flex items-start">
                <Star className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Flight Bookings: We take the hassle out of planning your travels by finding the best
                flight deals for any purpose.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-blue-600 mb-4">
                    <Icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700">
                    {service.buttonText} →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Personalized Support and Expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Our consultants provide personalized advice, ensuring you make the right decisions for your future.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Support</h3>
              <p className="text-gray-600">
                We assist with every aspect, from selecting the right course to securing a visa and booking flights.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-600">
                With connections across the UK, Canada, Australia, and Europe, we offer opportunities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;