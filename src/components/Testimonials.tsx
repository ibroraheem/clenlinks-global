import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Precious Anwuli',
    content: 'Clenlinks Global made my study abroad experience seamless and enjoyable. Their guidance was invaluable to my success!'
  },
  {
    name: 'Elizabeth Adewale',
    content: 'Thanks to Clenlinks Global, I secured admission into my dream university. Their expertise truly sets them apart!'
  },
  {
    name: 'Peace Mbah',
    content: 'I highly recommend Clenlinks Global. Their support during the visa process was exceptional and gave me confidence.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <p className="font-semibold text-gray-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Take the First Step Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to make your global educational dreams come true or start your next adventure?
            Clenlinks Global is here to guide you every step of the way.
          </p>
          <button className="bg-secondary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-accent transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;