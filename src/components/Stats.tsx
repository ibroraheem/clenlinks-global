import React from 'react';

const stats = [
  { number: '98%', label: 'Client Satisfaction Rate' },
  { number: '12+', label: 'Years of Experience' },
  { number: '120+', label: 'Projects Completed' },
  { number: '80+', label: 'Happy Employees' }
];

const Stats = () => {
  return (
    <section className="bg-blue-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;