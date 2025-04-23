import React from 'react';
import { Shield, Target, Heart, Users, Star, Globe2 } from 'lucide-react';

const coreValues = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold honesty, trust, and transparency in all our interactions—delivering services with professionalism and clarity.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We are committed to providing high-quality, accurate, and timely service that meets global standards.'
  },
  {
    icon: Heart,
    title: 'Empathy',
    description: 'We understand the importance of every client\'s dream and treat each journey with care, patience, and respect.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in teamwork—working hand-in-hand with our clients, partner institutions, and immigration authorities to achieve success.'
  }
];

const whyChooseUs = [
  {
    icon: Star,
    title: 'Proven Track Record',
    description: 'Thousands of successful visa approvals'
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    description: 'Strong partnerships across the UK, Canada, Australia, and Europe'
  },
  {
    icon: Target,
    title: 'Expert Guidance',
    description: 'From school selection to visa processing'
  },
  {
    icon: Users,
    title: 'One-on-One Support',
    description: 'Personalized attention for each applicant'
  }
];

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Who We Are and What We Do</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover Our Mission, Vision, and Dedicated Team
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              At Clenlinks Global Services, we specialize in providing trusted travel and visa consultancy
              services with a core focus on international education. With years of experience and a passion
              for guiding individuals through life-changing journeys, we've helped thousands of students
              and professionals secure visas for the UK, Canada, Australia, and various European
              countries.
            </p>
            <p className="text-lg text-gray-600">
              From student visa applications to visit visas for seminars and conferences, our dedicated
              team is committed to ensuring every client receives personalized, stress-free, and
              result-oriented guidance. Whether you're pursuing higher education, attending a global
              seminar, or simply planning to explore new destinations, we are here to make the process
              seamless and successful.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading and most trusted travel and educational consulting agency, transforming
                lives through global learning and travel experiences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower individuals with the knowledge, tools, and support they need to access
                educational and professional opportunities worldwide—through transparent, reliable, and
                expert visa consultancy services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;