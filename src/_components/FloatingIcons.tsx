import { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, Bot } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function FloatingIcons() {
  const [isVisible, setIsVisible] = useState(false);
  

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = '9127301592';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');

    // Add WhatsApp link to clipboard
    navigator.clipboard.writeText(`https://wa.me/${phoneNumber}`);
    
    // Show toast notification
    toast.success(`WhatsApp link copied to clipboard: https://wa.me/${phoneNumber}`);
    
  };


  return (
    <div className="fixed right-[26px] bottom-[90px] flex flex-col items-end space-y-4 z-50">
      {/* Floating Action Buttons */}
      <div className="flex flex-col space-y-3">
        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={24} />
        </button>
        
        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-gray-800 bg-opacity-80 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#111827',
            },
          },
        }}
      />
    </div>
  );
};
