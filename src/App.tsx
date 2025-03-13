import React, { useState, useEffect } from 'react';
import { Globe2, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Background from './Background.jpg';
import Logo from './Logo.jpg';

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
      stayTuned: 'نحن نعمل بجد لنقدم لكم شيئًا مذهلاً .. ترقبوا التحديثات!',
      contactInfo: 'معلومات التواصل',
      phone: 'الهاتف',
      phoneNumbers: [
        ['01406555', '01405333'],
        ['780405333', '780406555']
      ],
      email: 'الإيميل',
      emailAddress: 'info@algeria-hospitsal.com',
      address: 'العنوان',
      addressText: 'صنعاء - تقاطع شارع بغداد مع الجزائر - جوار معهد نيوهورايزون',
      switchLanguage: 'English',
      followUs: 'تابعنا على'
    },
    en: {
      comingSoon: 'Coming Soon',
      underConstruction: 'The site is under construction',
      stayTuned: "We're working hard to bring you something amazing .. Stay tuned for updates!",
      contactInfo: 'Contact Information',
      phone: 'Phone',
      phoneNumbers: [
        ['01406555', '01405333'],
        ['780405333', '780406555']
      ],
      email: 'Email',
      emailAddress: 'info@algeria-hospitsal.com',
      address: 'Address',
      addressText: "Sana'a - Baghdad Street intersection with Algeria, Next to New Horizon Institute",
      switchLanguage: 'عربي',
      followUs: 'Follow Us On'
    }
  };

  const socialMedia = [
    { icon: Facebook, link: 'https://www.facebook.com/p/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89-%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1-%D8%A7%D9%84%D8%AA%D8%AE%D8%B5%D8%B5%D9%8A-100093225066936/', color: 'hover:text-blue-600' },
    { icon: Instagram, link: '#', color: 'hover:text-pink-600' },
    { icon: Twitter, link: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, link: '#', color: 'hover:text-red-600' }
  ];

  const currentContent = content[language];
  
  const handlePhoneClick = (phone: string) => {
    window.location.href = `tel:${phone.replace(/[^0-9]/g, '')}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${currentContent.emailAddress}`;
  };

  const handleAddressClick = () => {
    // Coordinates for Sana'a, Yemen near the specified location
    window.open('https://maps.app.goo.gl/F4Q3fDEuxoavkotx9', '_blank');
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white to-blue-50 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-36 pointer-events-none"
        style={{ backgroundImage: `url(${Background})`, opacity: 0.36}}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <img 
              src={Logo}
              alt="Algeria Specialized Hospital" 
              className="h-12"
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

            <div className="rounded-xl shadow-lg p-8 space-y-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.65)' }}>
              <h3 className="text-2xl font-semibold text-gray-800 border-b pb-4">{currentContent.contactInfo}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-600 flex items-center justify-center gap-2">
                    <Phone size={20} />
                    {currentContent.phone}
                  </h4>
                  <div className="text-gray-700 space-y-2">
                    {currentContent.phoneNumbers.map((group, groupIndex) => (
                      <div key={groupIndex} className="flex justify-center gap-2 items-center">
                        {group.map((number, index) => (
                          <React.Fragment key={number}>
                            <button
                              onClick={() => handlePhoneClick(number)}
                              className="text-gray-700 hover:text-red-600 transition-colors"
                            >
                              {number}
                            </button>
                            {index < group.length - 1 && <span className="text-gray-400">-</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-600 flex items-center justify-center gap-2">
                    <Mail size={20} />
                    {currentContent.email}
                  </h4>
                  <button
                    onClick={handleEmailClick}
                    className="text-gray-700 hover:text-red-600 transition-colors"
                  >
                    {currentContent.emailAddress}
                  </button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-600 flex items-center justify-center gap-2">
                    <MapPin size={20} />
                    {currentContent.address}
                  </h4>
                  <button
                    onClick={handleAddressClick}
                    className="text-gray-700 hover:text-red-600 transition-colors"
                  >
                    {currentContent.addressText}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">{currentContent.followUs}</h4>
              <div className="flex justify-center gap-6">
                {socialMedia.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-600 ${social.color} transition-colors`}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;