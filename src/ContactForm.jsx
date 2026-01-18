import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send, Mail, User, Phone, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  // Zameni ove vrednosti SA SVOJIM PODACIMA iz EmailJS dashboard-a
  const SERVICE_ID = 'service_9bcecl3'; // ID tvog "Email Service"
  const TEMPLATE_ID = 'template_bhhozhl'; // ID tvog template-a
  const USER_ID = 'sSMD96lAK_zapR3p_'; // Tvoj Public Key (nalazi se u Account → API Keys)

  // Validacione funkcije
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Telefon je opcionalan
    const re = /^[\+]?[0-9\s\-\(\)]+$/;
    return re.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Ime validacija
    if (!formData.name.trim()) {
      newErrors.name = 'Ime je obavezno polje';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Ime mora imati najmanje 2 karaktera';
    }
    
    // Email validacija
    if (!formData.email.trim()) {
      newErrors.email = 'Email je obavezno polje';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Unesite validnu email adresu';
    }
    
    // Telefon validacija
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Unesite validan broj telefona';
    }
    
    // Naslov validacija
    if (!formData.subject.trim()) {
      newErrors.subject = 'Naslov je obavezno polje';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Naslov mora imati najmanje 5 karaktera';
    }
    
    // Poruka validacija
    if (!formData.message.trim()) {
      newErrors.message = 'Poruka je obavezno polje';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Poruka mora imati najmanje 10 karaktera';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Poruka može imati najviše 1000 karaktera';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validacija pre slanja
    if (!validateForm()) {
      setStatus('error');
      setStatusMessage('Molimo ispravite greške u formi pre slanja.');
      return;
    }
    
    setStatus('sending');
    setStatusMessage('Šaljem poruku...');

    try {
      // Parametri koji se šalju EmailJS-u
      const templateParams = {
        to_email: 'mladendubljevic@yahoo.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      
      setStatus('success');
      setStatusMessage('Poruka je uspešno poslata! Odgovorićemo vam u najkraćem roku.');
      
      // Resetuj formu
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Resetuj greške
      setErrors({});
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setStatusMessage(`Došlo je do greške pri slanju poruke: ${error.text || 'Molimo pokušajte ponovo.'}`);
    }
  };

  // Helper function za renderovanje statusa
  const renderStatus = () => {
    if (!statusMessage) return null;
    
    const statusConfig = {
      success: {
        icon: <CheckCircle className="w-5 h-5" />,
        bgColor: 'bg-green-50',
        textColor: 'text-green-800',
        borderColor: 'border-green-200'
      },
      error: {
        icon: <AlertCircle className="w-5 h-5" />,
        bgColor: 'bg-red-50',
        textColor: 'text-red-800',
        borderColor: 'border-red-200'
      },
      sending: {
        icon: null,
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-800',
        borderColor: 'border-blue-200'
      }
    };
    
    const config = statusConfig[status] || statusConfig.error;
    
    return (
      <div className={`p-4 rounded-lg border ${config.bgColor} ${config.borderColor} ${config.textColor} mb-6 animate-fadeIn`}>
        <div className="flex items-start">
          {config.icon && <span className="mr-3 mt-0.5">{config.icon}</span>}
          <div className="flex-1">
            <p className="font-medium">{statusMessage}</p>
            {status === 'error' && Object.keys(errors).length > 0 && (
              <ul className="mt-2 list-disc list-inside">
                {Object.values(errors).map((error, index) => 
                  error && <li key={index} className="text-sm">{error}</li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Helper function za renderovanje input field-a sa greškom
  const renderInputField = (field) => {
    const fieldConfig = {
      name: {
        label: 'Ime i prezime *',
        icon: <User className="w-4 h-4 mr-2" />,
        placeholder: 'Unesite vaše ime i prezime',
        type: 'text'
      },
      email: {
        label: 'Email adresa *',
        icon: <Mail className="w-4 h-4 mr-2" />,
        placeholder: 'vas.email@example.com',
        type: 'email'
      },
      phone: {
        label: 'Telefon',
        icon: <Phone className="w-4 h-4 mr-2" />,
        placeholder: '+382 XX XXX XXX',
        type: 'tel'
      },
      subject: {
        label: 'Naslov poruke *',
        icon: null,
        placeholder: 'O čemu želite da razgovaramo?',
        type: 'text'
      },
      message: {
        label: 'Poruka *',
        icon: <MessageSquare className="w-4 h-4 mr-2" />,
        placeholder: 'Opisite šta vas interesuje...',
        type: 'textarea'
      }
    };
    
    const config = fieldConfig[field];
    const isTextarea = config.type === 'textarea';
    
    return (
      <div>
        <label className="flex items-center text-gray-700 font-medium mb-2">
          {config.icon}
          {config.label}
        </label>
        
        {isTextarea ? (
          <textarea
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required={field !== 'phone'}
            rows="5"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
              errors[field] ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={config.placeholder}
          />
        ) : (
          <input
            type={config.type}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required={field !== 'phone'}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors[field] ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={config.placeholder}
          />
        )}
        
        {errors[field] && (
          <div className="flex items-center mt-2 text-red-600 text-sm animate-slideDown">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors[field]}
          </div>
        )}
      </div>
    );
  };

  // Loading spinner komponenta
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-blue-200"></div>
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-slideUp">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
              <Mail className="w-4 h-4 mr-2" />
              KONTAKT FORMA
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pošaljite nam <span className="text-blue-600">poruku</span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Imate pitanje ili želite da zakažete termin? Popunite formu ispod i odgovorićemo vam u najkraćem mogućem roku.
          </p>
        </div>

        {/* Glavni kontejner - Kontakt info + Forma u jednom div-u */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fadeIn">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Contact Info - LEVA STRANA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 md:p-12 lg:p-16">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                  Kontaktirajte nas direktno
                </h3>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Phone className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">Telefon</h4>
                      <a href="tel:+38269048009" className="text-blue-100 hover:text-white transition-colors text-lg block">
                        +382 69 048 009
                      </a>
                      <a href="tel:+38268048655" className="text-blue-100 hover:text-white transition-colors text-lg block">
                        +382 68 048 655
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Mail className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">Email</h4>
                      <a href="mailto:mladendubljevic@yahoo.com" className="text-blue-100 hover:text-white transition-colors text-l block">
                        mladendubljevic@yahoo.com
                      </a>
                      <a href="mailto:danilo.dubljevic666@gmail.com" className="text-blue-100 hover:text-white transition-colors text-lblock">
                        danilo.dubljevic666@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-6 md:pt-8 border-t border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold">Brza izrada projekata</h4>
                    </div>
                    <p className="text-blue-100 text-base">
                      Većina projekata završavamo u roku od 3-5 radnih dana.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - DESNA STRANA */}
            <div className="p-6 md:p-8 lg:p-12 relative">
              {/* Loading Overlay */}
              {status === 'sending' && (
                <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
                  <div className="text-center">
                    <LoadingSpinner />
                    <p className="mt-4 text-blue-600 font-medium">Šaljem vašu poruku...</p>
                    <p className="text-gray-500 text-sm mt-2">Molimo sačekajte</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Message */}
                {renderStatus()}

                {/* Name Field */}
                {renderInputField('name')}

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderInputField('email')}
                  {renderInputField('phone')}
                </div>

                {/* Subject */}
                {renderInputField('subject')}

                {/* Message */}
                {renderInputField('message')}

                {/* Character Counter za poruku */}
                <div className="text-right text-sm text-gray-500">
                  {formData.message.length}/1000 karaktera
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                    status === 'sending'
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Šaljem...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Pošalji poruku
                    </>
                  )}
                </button>

                {/* Form Info */}
                <p className="text-sm text-gray-500 text-center pt-4 border-t border-gray-100">
                  * Polja označena zvezdicom su obavezna
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 text-white animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-3">Brzi odgovor</div>
              <p className="text-gray-300 text-sm md:text-base">Odgovaramo u roku od 24 sata radnim danima</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-3">Besplatna procena</div>
              <p className="text-gray-300 text-sm md:text-base">Dajemo detaljnu procenu bez ikakvih obaveza</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-3">Sigurnost podataka</div>
              <p className="text-gray-300 text-sm md:text-base">Vaši podaci su sigurni i ne delimo ih sa trećim stranama</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dodaj ove animacije u svoj globalni CSS */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;