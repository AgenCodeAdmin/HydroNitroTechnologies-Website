import React from 'react';
import ContactForm from './ContactForm';

const ContactUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="contact-us">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-4">Contact Us</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 rounded-full"></div>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get in touch to find out how we can collaborate.</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUsSection;
