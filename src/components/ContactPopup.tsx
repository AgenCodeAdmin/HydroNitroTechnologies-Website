import React from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

interface ContactPopupProps {
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
      <div className="relative">
        <button onClick={onClose} className="absolute -top-4 -right-4 bg-white rounded-full p-1 text-gray-600 hover:text-gray-900 z-10">
          <X size={24} />
        </button>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPopup;
