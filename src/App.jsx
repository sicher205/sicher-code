import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Sicher <span className="text-brand-600">&</span> Workwear
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Products', 'About', 'Distributors', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`font-semibold text-sm uppercase tracking-wide transition-colors duration-300 ${scrolled ? 'text-gray-600 hover:text-brand-600' : 'text-gray-700 hover:text-brand-600'}`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100 shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {['Home', 'Products', 'About', 'Distributors', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-gray-800 hover:bg-brand-50 hover:text-brand-600 font-medium rounded-lg transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-screen overflow-hidden">
    {/* Background Pattern/Gradient */}
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200"></div>
    <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-200 via-transparent to-transparent"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-sm font-semibold mb-6 animate-fade-in-up">
        <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
        Professional Safety Manufacturer
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
        Trusted Work <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">
          and Safety
        </span>
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
        As a professional safety products manufacturer, Sicher persists in craftsmanship spirit. We are not only a product supplier, we are also your safety defender.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <a href="#products" className="px-8 py-4 bg-brand-600 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 hover:bg-brand-700 hover:shadow-brand-500/50 transform hover:-translate-y-1 transition-all duration-300">
          Explore Products
        </a>
        <a href="#contact" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl shadow-lg shadow-gray-200 hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

const CategoryCards = () => (
  <section className="py-20 bg-white relative z-20 -mt-10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Fashion / Workwear', color: 'from-blue-900 to-brand-900' },
          { title: 'Workwear', color: 'from-gray-800 to-gray-900' }
        ].map((cat, idx) => (
          <div key={idx} className="relative rounded-3xl overflow-hidden group cursor-pointer h-96 shadow-xl">
            {/* Image Placeholder Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-90 transition-transform duration-700 group-hover:scale-105`}></div>
            
            <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{cat.title}</h3>
              <div className="h-1 w-12 bg-brand-400 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-brand-100 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
          <div className="bg-white rounded-3xl h-[500px] w-full flex items-center justify-center shadow-2xl relative z-10 overflow-hidden border border-gray-100">
             <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50"></div>
             <span className="relative z-10 text-gray-400 font-medium flex flex-col items-center">
               <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
               Premium Quality Manufacturing
             </span>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-2">About Sicher</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Your Reliable Safety Partner</h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Sicher is dedicated to providing high-quality safety workwear designed to protect workers across various industries. Our commitment to quality, durability, and comfort ensures that you stay safe without compromising on mobility.
          </p>
          
          <div className="space-y-6">
            {[
              { title: 'Premium Materials', desc: 'Sourced for maximum protection and durability.' },
              { title: 'Rigorous Testing', desc: 'Meeting and exceeding global safety certifications.' },
              { title: 'Ergonomic Design', desc: 'Engineered for day-long comfort and flexibility.' },
              { title: 'Global Support', desc: 'Worldwide distribution network and customer care.' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-100 flex items-center justify-center mr-4 shadow-sm">
                  <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const IndustryApplications = () => {
  const industries = [
    { name: "Oil and Gas", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { name: "Construction", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { name: "Marine", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Welding", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-2">Industries</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Comprehensive Solutions</h3>
          <p className="text-lg text-gray-600">Tailored protection for demanding environments.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-3xl text-center group hover:bg-brand-600 transition-colors duration-300 cursor-default shadow-sm hover:shadow-xl border border-gray-100">
              <div className="h-20 w-20 mx-auto bg-white text-brand-600 group-hover:text-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm transform group-hover:-translate-y-2 transition-all duration-300">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ind.icon}></path>
                 </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">{ind.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => (
  <section className="py-16 bg-gray-900 text-white border-y border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Internationally Certified Quality</h3>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="h-16 w-32 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 font-bold border border-gray-700">
            CERT {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Products = () => {
  const [activeTab, setActiveTab] = useState('Head');
  const categories = ['Head', 'Body', 'Hand', 'Feet'];
  
  const generateProducts = (category) => {
    return Array(4).fill(null).map((_, i) => ({
      id: i,
      title: `${category} Pro Series ${i + 1}`,
      desc: `Advanced ${category.toLowerCase()} protection featuring next-gen materials and ergonomic fit.`,
    }));
  };

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-2">Catalog</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Our Products</h3>
          <p className="text-lg text-gray-600">Discover our extensive range of safety equipment.</p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                activeTab === cat 
                ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20' 
                : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {generateProducts(activeTab).map((product, idx) => (
            <div key={`${activeTab}-${product.id}`} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="h-56 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-gray-400 font-medium relative z-10">Product Image</span>
              </div>
              <div className="p-8 flex flex-col h-full">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">{product.title}</h4>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{product.desc}</p>
                <button className="w-full py-3 bg-gray-50 text-gray-900 font-bold rounded-xl hover:bg-brand-600 hover:text-white transition-all duration-300 border border-gray-200 group-hover:border-brand-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
          <div className="h-96 lg:h-auto bg-gray-800 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <span className="text-gray-400 text-xl font-bold tracking-widest relative z-10">MAP INTEGRATION</span>
          </div>
          
          <div className="p-10 md:p-16">
            <h2 className="text-sm font-bold text-brand-400 uppercase tracking-wider mb-2">Get In Touch</h2>
            <h3 className="text-4xl font-extrabold text-white mb-8">Contact Us</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                  <input type="text" className="w-full px-5 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder-gray-500" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                  <input type="email" className="w-full px-5 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder-gray-500" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Country</label>
                <input type="text" className="w-full px-5 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder-gray-500" placeholder="United States" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Your Message</label>
                <textarea rows="4" className="w-full px-5 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder-gray-500 resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="w-full md:w-auto px-8 py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-500 transition-colors duration-300 shadow-lg shadow-brand-500/30">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <span className="text-3xl font-extrabold text-white mb-6 block tracking-tight">Sicher <span className="text-brand-500">&</span> Workwear</span>
          <p className="text-gray-400 leading-relaxed max-w-md text-lg">
            Your safety defender. Providing professional, high-quality workwear and safety products globally.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'Products', 'About Us', 'Distributors'].map(link => (
              <li key={link}>
                <a href={`#${link.split(' ')[0].toLowerCase()}`} className="text-gray-400 hover:text-brand-400 transition-colors font-medium">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Contact Info</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@sicherworkwear.com
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +1 234 567 890
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-3 text-brand-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>123 Safety Ave,<br/>Industrial Zone, 10001</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} Sicher & Workwear. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <Hero />
      <CategoryCards />
      <About />
      <IndustryApplications />
      <Certifications />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
