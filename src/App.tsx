import React, { useState, useEffect } from 'react';
import { Globe2, Phone, Mail, MapPin } from 'lucide-react';
import Background from 'src/Background.jpg'; // Update path accordingly
import Logo from 'src/logo.jpg'; // Update path accordingly

function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const content = {
    ar: {
      comingSoon: 'قريباً',
      underConstruction: 'الموقع قيد الإنشاء',
      stayTuned: 'نحن نعمل بجد لنقدم لكم شيئًا مذهلاً.. ترقبوا التحديثات!',
      contactInfo: 'معلومات التواصل',
      phone: 'الهاتف',
      phoneNumbers: ['01406555 - 01405333', '780405333 - 780406555'],
      email: 'الإيميل',
      emailAddress: 'info@algeria-hospitsal.com',
      address: 'العنوان',
      addressText: 'صنعاء - تقاطع شارع بغداد مع الجزائر - جوار معهد نيوهورايزون',
      switchLanguage: 'English'
    },
    en: {
      comingSoon: 'Coming Soon',
      underConstruction: 'The site is under construction',
      stayTuned: "We're working hard to bring you something amazing.. Stay tuned for updates!",
      contactInfo: 'Contact Information',
      phone: 'Phone',
      phoneNumbers: ['01406555 - 01405333', '780405333 - 780406555'],
      email: 'Email',
      emailAddress: 'info@algeria-hospitsal.com',
      address: 'Address',
      addressText: "Sana'a - Baghdad Street intersection with Algeria, Next to New Horizon Institute",
      switchLanguage: 'عربي'
    }
  };

  const currentContent = content[language];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white to-blue-50 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: 'url(${Background})' }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <img 
              src={Logo} 
              alt="Algeria Specialized Hospital" 
              className="h-16"
            />
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              <Globe2 size={20} />
              <span>{currentContent.switchLanguage}</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 flex flex-col items-center">
          <div className="max-w-2xl w-full space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-red-600">{currentContent.comingSoon}</h1>
              <h2 className="text-3xl font-semibold text-gray-800">{currentContent.underConstruction}</h2>
              <p className="text-xl text-gray-600">{currentContent.stayTuned}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 space-y-6" style={{ backgroundColor: 'rgb(255 255 255 / 65%)' }}>
              <h3 className="text-2xl font-semibold text-gray-800 border-b pb-4">{currentContent.contactInfo}</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Phone className="text-red-600" size={20} />
                    <h4 className="font-semibold text-red-600">{currentContent.phone}</h4>
                  </div>
                  <div className="text-gray-700 space-y-1">
                    {currentContent.phoneNumbers.map((number, index) => (
                      <p key={index}>{number}</p>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Mail className="text-red-600" size={20} />
                    <h4 className="font-semibold text-red-600">{currentContent.email}</h4>
                  </div>
                  <p className="text-gray-700">{currentContent.emailAddress}</p>
                </div>
                
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <MapPin className="text-red-600" size={20} />
                    <h4 className="font-semibold text-red-600">{currentContent.address}</h4>
                  </div>
                  <p className="text-gray-700">{currentContent.addressText}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
