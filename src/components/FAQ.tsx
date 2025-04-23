import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plane, GraduationCap, FileCheck, Globe2, CreditCard, Star } from 'lucide-react';

const faqs = [
  {
    icon: Plane,
    question: 'How can your agency assist with flight bookings?',
    answer: 'We offer student-friendly and flexible flight options tailored to your visa schedule and budget, plus help with changes or rescheduling if needed.'
  },
  {
    icon: FileCheck,
    question: 'I had a visa refusal. Can you still help?',
    answer: 'Yes! We review your refusal letter, advise on corrections, and prepare a stronger application. We also connect you with our in-house Immigration Lawyer for expert advice.'
  },
  {
    icon: GraduationCap,
    question: 'How do you assist with securing admissions abroad?',
    answer: 'We assist from course selection and document preparation to timely application submission and interview prep ensuring the best possible outcome.'
  },
  {
    icon: Globe2,
    question: 'What countries do you cover for securing admissions abroad?',
    answer: 'We process admissions for schools and universities in UK, Canada, USA, Australia, Germany, Netherlands, France, Sweden and other European destinations.'
  },
  {
    icon: FileCheck,
    question: 'Can you help with visa processing for students and tourists?',
    answer: 'Yes. We assist with student visas, tourist & visit visas, dependent visas, and skilled worker & sponsorship visas.'
  },
  {
    icon: CreditCard,
    question: 'Do you offer Proof of Funds support?',
    answer: 'Absolutely. Our Proof of Funds Package helps meet embassy requirements with verified, legitimate documentation.'
  },
  {
    icon: Star,
    question: 'How successful are your services?',
    answer: 'We have a proven track record of thousands of successful visa approvals and international admissions. Our clients trust us because we combine personalized service, legal expertise, and a result-driven approach.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Find answers to common questions about our services and processes
          </p>
        </div>
      </div>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    className="w-full text-left px-6 py-4 flex items-center justify-between"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center">
                      <Icon className="h-6 w-6 text-blue-600 mr-4" />
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-600" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-2xl text-white p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team is here to help you with any questions you might have about our services.
              Get in touch with us today.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition-colors">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;