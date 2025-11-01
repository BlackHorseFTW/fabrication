"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>FabricWorks</span>
          </div>

          {/* Nav Items */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('projects')}
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600' 
                  : 'text-white hover:text-amber-400'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://fabricate-folio-journey.lovable.app/assets/hero-fabrication-CPXT8n9n.jpg" 
            alt="Industrial fabrication workshop" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
          
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-amber-500/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 border-2 border-amber-500/20 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/30 rounded-full mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-amber-400 text-sm font-semibold">Industry Leading Fabrication</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Precision Fabrication<span className="text-amber-500">.</span>
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Blueprint to Reality.
          </h2>
          
          {/* Divider Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}></div>
          
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Transforming industrial visions into flawless execution. Our expertise delivers exceptional metalwork from concept through completion.
          </p>
          
          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">500+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">100%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </div> */}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Our Work
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
       
      </section>

      {/* Our Capabilities Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive fabrication services backed by decades of industrial expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Custom Fabrication',
                description: 'Precision metalwork tailored to your exact specifications, from concept to completion.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: 'Engineering Design',
                description: 'Professional CAD design and technical drawings that ensure structural integrity.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Fast Turnaround',
                description: 'Efficient project management delivering quality results on schedule, every time.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Quality Assurance',
                description: 'Rigorous testing and certification ensuring every project meets industry standards.'
              }
            ].map((capability, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-700">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our portfolio showcasing the journey from blueprint to final execution
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto space-y-16">
            {[
              {
                title: 'Vermicompost Site',
                subtitle: 'Yadaram, Near Turkapalli',
                tags: ['Structural Steel', 'Commercial', 'Custom Design'],
                location: 'Yadaram, Near Turkapalli',
                coordinates: '17°40\'44.2"N 78°34\'06.8"E',
                duration: '8 weeks',
                materials: 'Structural Steel, Powder-Coated Finish',
                challenge: 'Design and install a modern floating staircase meeting strict building codes while maintaining aesthetic appeal.',
                solution: 'Engineered a custom steel frame with precision welding and integrated safety features, finished with industrial-grade coating.',
                images: ['/assets/images/turkapalli-1.jpeg', '/assets/images/turkapalli-2.jpeg', '/assets/images/turkapalli-3.jpeg']
              },
              {
                title: 'Farmhouse',
                subtitle: 'Amangal, Srisailam Road',
                tags: ['Heavy Duty', 'Industrial', 'Load Bearing'],
                location: 'Amangal, Srisailam Road',
                coordinates: '16.8570104, 78.4930783',
                duration: '12 weeks',
                materials: 'I-Beams, Steel Decking, Safety Rails',
                challenge: 'Create additional workspace without disrupting ongoing manufacturing operations.',
                solution: 'Modular steel platform design allowing off-site fabrication and rapid installation during scheduled downtime.',
                images: ['/assets/images/amangal-1.jpeg', '/assets/images/amangal-2.jpeg', '/assets/images/amangal-3.jpeg', '/assets/images/amangal-4.jpeg']
              },
              {
                title: 'Farmhouse',
                subtitle: 'Gajwel Project',
                tags: ['Architectural', 'Decorative', 'Weather Resistant'],
                location: 'Gajwel',
                coordinates: '17.7514863, 78.7180281',
                duration: '10 weeks',
                materials: 'Aluminum Panels, Stainless Steel Accents',
                challenge: 'Design a striking exterior that withstands coastal weather while meeting energy efficiency standards.',
                solution: 'Custom perforated metal panels with thermal breaks and corrosion-resistant finishes.',
                images: ['/assets/images/gajwel-1.jpeg', '/assets/images/gajwel-2.jpeg']
              }
            ].map((project, index) => (
              <div key={index} className="group relative">
                {/* Main Container with Hover Effect */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                  
                  {/* Hero Image - Large Featured Image */}
                  <div className="relative h-[500px] overflow-hidden cursor-pointer" onClick={() => project.images[0] && openLightbox(project.images[0])}>
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    
                    {/* Zoom Icon Indicator */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Project Number Badge */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-gray-900">{index + 1}</span>
                    </div>

                    {/* Title Overlay on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                        {project.title}
                      </h3>
                      <p className="text-xl text-amber-400 font-semibold">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative bg-white">
                    {/* Tags Bar */}
                    <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-3 gap-8 p-8">
                      {/* Left Column - Project Info */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">Location</h4>
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-amber-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                              <p className="text-gray-900 font-medium">{project.location}</p>
                              <a 
                                href={`https://www.google.com/maps?q=${project.coordinates}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-600 hover:text-amber-700 text-sm font-medium inline-flex items-center gap-1 mt-1"
                              >
                                View on Map
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">Duration</h4>
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-900 font-medium">{project.duration}</span>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">Materials</h4>
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-amber-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                            <span className="text-gray-900 font-medium">{project.materials}</span>
                          </div>
                        </div>
                      </div>

                      {/* Middle Column - Challenge & Solution */}
                      <div className="md:col-span-2 space-y-6">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500">
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            Challenge
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Solution
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Image Gallery */}
                    {project.images.length > 1 && (
                      <div className="px-8 pb-8">
                        <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">Project Gallery</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {project.images.slice(1).map((image, imgIndex) => (
                            <div 
                              key={imgIndex} 
                              className="relative group/img overflow-hidden rounded-lg aspect-square cursor-pointer"
                              onClick={() => openLightbox(image)}
                            >
                              <img 
                                src={image} 
                                alt={`${project.title} - Image ${imgIndex + 2}`}
                                className="w-full h-full object-cover transition-all duration-500 group-hover/img:scale-110 group-hover/img:rotate-2"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Start Your Project</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Ready to transform your vision into reality? Get in touch with our team today.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form id="contactForm" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="John Smith"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91-1234567890"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={5}
                    placeholder="Tell us about your fabrication project..."
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-4 px-8 rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Request Quote
                </button>

                <div id="formMessage" className="hidden text-center p-4 rounded-lg"></div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8">
                  Our team is ready to discuss your fabrication needs and provide expert guidance on bringing your project to life. We typically respond within 24 hours.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">(+91)-7989254795</p>
                      <p className="text-sm text-gray-500 mt-1"></p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">srivaraahifabrications@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1"></p>
                    </div>
                  </div>

                  {/* Location */}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{__html: `
        document.getElementById('contactForm')?.addEventListener('submit', async (e) => {
          e.preventDefault();
          const form = e.target;
          const formData = new FormData(form);
          const data = Object.fromEntries(formData);
          const messageDiv = document.getElementById('formMessage');
          const submitButton = form.querySelector('button[type="submit"]');
          
          // Disable button and show loading state
          submitButton.disabled = true;
          submitButton.textContent = 'Sending...';
          messageDiv.classList.add('hidden');
          
          try {
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            });
            
            const result = await response.json();
            
            if (response.ok) {
              messageDiv.className = 'text-center p-4 rounded-lg bg-green-100 text-green-800 border border-green-300';
              messageDiv.textContent = 'Thank you! Your message has been sent successfully. We\\'ll get back to you soon.';
              form.reset();
            } else {
              throw new Error(result.error || 'Failed to send message');
            }
          } catch (error) {
            messageDiv.className = 'text-center p-4 rounded-lg bg-red-100 text-red-800 border border-red-300';
            messageDiv.textContent = 'Sorry, there was an error sending your message. Please try again.';
          } finally {
            messageDiv.classList.remove('hidden');
            submitButton.disabled = false;
            submitButton.textContent = 'Request Quote';
          }
        });
      `}} />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white text-lg font-semibold mb-2">FabricWorks</h3>
          <p className="text-sm">  {new Date().getFullYear()} FabricWorks. All rights reserved.</p>
        </div>
      </footer>

      {/* Image Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl max-h-[90vh] mx-4 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Project preview"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Instructions */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
            Click anywhere to close
          </div>
        </div>
      )}
    </div>
  );
}
