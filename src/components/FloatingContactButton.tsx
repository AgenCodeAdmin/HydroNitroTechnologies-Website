import { Mail } from 'lucide-react';
import { useState } from 'react';
import ContactPopup from './ContactPopup';

const FloatingContactButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 z-50"
      >
        <Mail size={24} />
      </button>
      {isPopupOpen && <ContactPopup onClose={() => setIsPopupOpen(false)} />}
    </>
  );
};

export default FloatingContactButton;
