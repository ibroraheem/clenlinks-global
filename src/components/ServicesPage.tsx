import React from 'react';
import { GraduationCap, FileCheck, Plane, Building2, Briefcase, School, Users, MessageSquare, Import as Passport, CreditCard, Home, Flag, Star } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Career Counseling',
    description: 'We help you uncover your strengths, interests, and long-term goals then align them with educational or career pathways that will set you on a journey of global success.'
  },
  {
    icon: School,
    title: 'School Selection',
    description: 'We guide you in choosing institutions and programs that fit your academic goals, career aspirations, and budget ensuring the best match for your future.'
  },
  {
    icon: GraduationCap,
    title: 'Admission Processing',
    description: 'From documentation to follow-ups, our team manages your entire admission process with precision maximizing your chances of receiving offers from top schools worldwide.'
  },
  {
    icon: MessageSquare,
    title: 'Interview Preparation',
    description: 'We prepare you for admission and visa interviews with mock sessions, personalized coaching, and communication strategies that boost your confidence and readiness.'
  },
  {
    icon: FileCheck,
    title: 'Visa Assistance',
    description: 'We offer expert support in preparing and submitting complete, accurate visa applications for students, tourists, dependents, and professionals enhancing your approval chances.'
  },
  {
    icon: Passport,
    title: 'Certificate of Sponsorship (UK)',
    description: 'We assist qualified clients in obtaining Certificates of Sponsorship for study or skilled work in the UK, including sponsor connection, documentation support, and post-CoS visa processing.'
  },
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'We take the stress out of travel by offering affordable flight options, flexible student tickets, rescheduling support, travel itinerary planning, and airport pickup coordination.'
  },
  {
    icon: CreditCard,
    title: 'Proof of Funds Package',
    description: 'Meet visa financial requirements with confidence through our secure and verified Proof of Funds services, including valid bank statements and sponsorship letters.'
  },
  {
    icon: Building2,
    title: 'Tourist Visa Services',
    description: 'Planning a holiday, family visit, or business trip? We provide full tourist visa assistance including application guidance, travel itinerary support, and interview preparation.'
  },
  {
    icon: Home,
    title: 'Relocation Assistance',
    description: 'We ensure a smooth move with airport pickup, accommodation search, local settlement guidance, cultural adaptation support, and pre-departure briefings.'
  },
  {
    icon: Flag,
    title: 'Canada PR Support',
    description: 'Looking to make Canada your long-term home? We assist with Express Entry, Provincial Nominee Program, Family Sponsorship, and Student-to-PR pathways.'
  }
];

const faqs = [
  {
    question: 'How can your agency assist with flight bookings?',
    answer: 'We offer student-friendly and flexible flight options tailored to your visa schedule and budget, plus help with changes or rescheduling if needed.'
  },
  {
    question: 'I had a visa refusal. Can you still help?',
    answer: 'Yes! We review your refusal letter, advise on corrections, and prepare a stronger application. We also connect you with our in-house Immigration Lawyer for expert advice.'
  },
  {
    question: 'How do you assist with securing admissions abroad?',
    answer: 'We assist from course selection and document preparation to timely application submission and interview prep ensuring the best possible outcome.'
  },
  {
    question: 'What countries do you cover for securing admissions abroad?',
    answer: 'We process admissions for schools and universities in UK, Canada, USA, Australia, Germany, Netherlands, France, Sweden and other European destinations.'
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Expert Guidance for Your Educational, Immigration & Travel Journey</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive Services Tailored for Global Opportunities
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
                    Learn More →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-2xl text-white p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Take the First Step Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're planning to study, travel, or migrate abroad, Clenlinks Global is your
              dedicated partner for expert guidance and success.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;