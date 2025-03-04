import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Menu, 
  X, 
  Globe, 
  ShoppingCart, 
  BarChart, 
  Code, 
  Palette, 
  Rocket, 
  Database, 
  Search, 
  Smartphone, 
  Zap, 
  Check, 
  ChevronRight, 
  Star, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  ArrowRight
} from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Component for animated section
const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description, features, price, international }) => {
  return (
    <div className="service-card">
      <Icon className="service-icon" />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex-grow">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-gold-500 mr-2 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <p className="text-2xl font-bold text-gold-500 mb-4">
          {international ? `$${price}` : `₹${price}`}
          <span className="text-sm text-gray-500 font-normal ml-1">starting price</span>
        </p>
        <button className="gold-button w-full">Get Started</button>
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ name, company, image, quote }) => {
  return (
    <div className="testimonial-card">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gold-500" fill="#FFC300" />
        ))}
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

// Portfolio Item Component
const PortfolioItem = ({ image, title, category, link }) => {
  return (
    <div className="portfolio-item group">
      <div className="overflow-hidden">
        <img src={image} alt={title} className="portfolio-image" />
      </div>
      <div className="p-6">
        <p className="text-gold-500 text-sm mb-1">{category}</p>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <a href={link} className="inline-flex items-center text-premium-dark font-medium hover:text-gold-500 transition-colors">
          View Project <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pricingCurrency, setPricingCurrency] = useState('international');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom business websites, portfolio sites, and enterprise solutions tailored to your brand.",
      features: [
        "Custom Design & Development",
        "Responsive & Mobile-Friendly",
        "SEO Optimization",
        "Content Management System",
        "Performance Optimization"
      ],
      price: pricingCurrency === 'international' ? 500 : 8000
    },
    {
      icon: ShoppingCart,
      title: "Shopify & E-commerce",
      description: "Custom Shopify stores, e-commerce solutions, and multi-vendor platforms for your business.",
      features: [
        "Custom Shopify Theme",
        "Product Setup & Configuration",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Fulfillment Setup"
      ],
      price: pricingCurrency === 'international' ? 700 : 12000
    },
    {
      icon: BarChart,
      title: "Digital Marketing & SEO",
      description: "Comprehensive digital marketing strategies to grow your online presence and drive conversions.",
      features: [
        "SEO Strategy & Implementation",
        "Social Media Marketing",
        "PPC Campaign Management",
        "Content Marketing",
        "Analytics & Reporting"
      ],
      price: pricingCurrency === 'international' ? 600 : 10000
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Luxury Interiors Co.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Cript Web Solutions transformed our online presence with a stunning website that perfectly captures our brand's luxury aesthetic. The attention to detail and premium feel exceeded our expectations."
    },
    {
      name: "Michael Chen",
      company: "Artisan Watches",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Our Shopify store has never looked better or performed so well. The team at Cript Web Solutions delivered a seamless e-commerce experience that has significantly increased our conversion rates."
    },
    {
      name: "Emma Rodriguez",
      company: "Premium Wellness",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "The digital marketing strategy developed by Cript Web Solutions has dramatically improved our online visibility. Their SEO expertise and attention to detail have been invaluable to our growth."
    }
  ];

  const portfolio = [
    {
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Luxury Fashion Boutique",
      category: "Website Development",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Artisan Jewelry Store",
      category: "Shopify E-commerce",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Executive Consulting Firm",
      category: "Digital Marketing",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Premium Home Decor",
      category: "Website & Marketing",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Luxury Travel Agency",
      category: "Website Development",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "High-End Fitness Brand",
      category: "E-commerce & SEO",
      link: "#"
    }
  ];

  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Bespoke solutions tailored to your specific business requirements and brand identity."
    },
    {
      icon: Palette,
      title: "Premium Design",
      description: "Sophisticated, elegant designs that reflect your brand's high-end positioning."
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed, conversions, and user experience."
    },
    {
      icon: Database,
      title: "Scalable Solutions",
      description: "Future-proof architecture that grows with your business needs and ambitions."
    },
    {
      icon: Search,
      title: "SEO Excellence",
      description: "Strategic optimization to ensure your brand dominates search results in your industry."
    },
    {
      icon: Smartphone,
      title: "Mobile Perfection",
      description: "Flawless experiences across all devices, ensuring your premium brand shines everywhere."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-premium py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-2 text-gold-500">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="#111111"/>
                <path d="M8 8H24V12H8V8Z" fill="#FFC300"/>
                <path d="M8 14H24V18H8V14Z" fill="#FFC300"/>
                <path d="M8 20H16V24H8V20Z" fill="#FFC300"/>
              </svg>
            </div>
            <span className="text-2xl font-display font-bold text-premium-dark">Cript<span className="text-gold-500">Web</span></span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          
          <button className="hidden md:block gold-button">
            Get a Quote
          </button>
          
          <button onClick={toggleMenu} className="md:hidden text-premium-dark">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white py-4 px-4 shadow-premium"
            >
              <div className="flex flex-col space-y-4">
                <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
                <a href="#services" className="nav-link" onClick={toggleMenu}>Services</a>
                <a href="#portfolio" className="nav-link" onClick={toggleMenu}>Portfolio</a>
                <a href="#testimonials" className="nav-link" onClick={toggleMenu}>Testimonials</a>
                <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
                <button className="gold-button w-full">
                  Get a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-premium-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-gold-50 to-transparent opacity-50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-12 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-premium-dark leading-tight">
                Crafting <span className="gradient-text">Digital Excellence</span> for Premium Brands
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                Elevate your online presence with our high-end web development, e-commerce, and digital marketing solutions tailored for premium businesses.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="gold-button flex items-center justify-center">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="outline-button">
                  View Portfolio
                </button>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Premium web development" 
                className="rounded-lg shadow-premium"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Why Choose <span className="text-gold-500">Cript Web Solutions</span></h2>
            <p className="section-subtitle">
              We combine cutting-edge technology with premium design to deliver exceptional digital experiences for discerning brands.
            </p>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeIn} className="premium-card p-8">
                <div className="bg-gold-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Services */}
      <section id="services" className="py-20 bg-premium-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Our Premium <span className="text-gold-500">Services</span></h2>
            <p className="section-subtitle">
              Tailored digital solutions designed to elevate your brand and drive exceptional results.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button 
                className={`px-4 py-2 rounded-md transition-all ${pricingCurrency === 'international' ? 'bg-gold-500 text-premium-dark' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setPricingCurrency('international')}
              >
                International Pricing ($)
              </button>
              <button 
                className={`px-4 py-2 rounded-md transition-all ${pricingCurrency === 'indian' ? 'bg-gold-500 text-premium-dark' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setPricingCurrency('indian')}
              >
                Indian Pricing (₹)
              </button>
            </div>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <ServiceCard 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description} 
                  features={service.features} 
                  price={service.price}
                  international={pricingCurrency === 'international'}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Our <span className="text-gold-500">Portfolio</span></h2>
            <p className="section-subtitle">
              Explore our collection of premium projects delivered for discerning clients across industries.
            </p>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {portfolio.map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <PortfolioItem 
                  image={item.image} 
                  title={item.title} 
                  category={item.category} 
                  link={item.link} 
                />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <button className="outline-button">
              View All Projects
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-premium-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Elevate Your <span className="text-gold-500">Digital Presence</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Join our exclusive clientele of premium brands enjoying exceptional digital experiences and outstanding results.
            </p>
            <button className="gold-button text-lg px-8 py-4">
              Start Your Premium Journey
            </button>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-premium-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Client <span className="text-gold-500">Testimonials</span></h2>
            <p className="section-subtitle">
              Hear what our premium clients have to say about their experience working with Cript Web Solutions.
            </p>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn}>
                <TestimonialCard 
                  name={testimonial.name} 
                  company={testimonial.company} 
                  image={testimonial.image} 
                  quote={testimonial.quote} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Get in <span className="text-gold-500">Touch</span></h2>
            <p className="section-subtitle">
              Ready to discuss your project? Our team of experts is here to help bring your vision to life.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-premium-light p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <a href="mailto:info@criptweb.com" className="text-gray-600 hover:text-gold-500 transition-colors">
                        info@criptweb.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <a href="tel:+1234567890" className="text-gray-600 hover:text-gold-500 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Visit Us</p>
                      <p className="text-gray-600">
                        123 Premium Plaza, Business District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mt-12 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-premium-dark text-white p-3 rounded-full hover:bg-gold-500 hover:text-premium-dark transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-premium-dark text-white p-3 rounded-full hover:bg-gold-500 hover:text-premium-dark transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-premium-dark text-white p-3 rounded-full hover:bg-gold-500 hover:text-premium-dark transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-premium-dark text-white p-3 rounded-full hover:bg-gold-500 hover:text-premium-dark transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-premium-light p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="contact-input"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="contact-input"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="contact-input"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 mb-2 font-medium">Service Interested In</label>
                    <select id="service" className="contact-input">
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="ecommerce">Shopify & E-commerce</option>
                      <option value="marketing">Digital Marketing & SEO</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="contact-input"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="gold-button w-full text-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
        aria-label="Contact us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
      
      {/* Footer */}
      <footer className="bg-premium-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="mr-2 text-gold-500">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="4" fill="#FFC300"/>
                    <path d="M8 8H24V12H8V8Z" fill="#111111"/>
                    <path d="M8 14H24V18H8V14Z" fill="#111111"/>
                    <path d="M8 20H16V24H8V20Z" fill="#111111"/>
                  </svg>
                </div>
                <span className="text-2xl font-display font-bold">Cript<span className="text-gold-500">Web</span></span>
              </div>
              <p className="text-gray-400 mb-6">
                Crafting digital excellence for premium brands with high-end web development, e-commerce, and marketing solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="footer-link">Website Development</a></li>
                <li><a href="#" className="footer-link">Shopify & E-commerce</a></li>
                <li><a href="#" className="footer-link">Digital Marketing & SEO</a></li>
                <li><a href="#" className="footer-link">UI/UX Design</a></li>
                <li><a href="#" className="footer-link">Brand Strategy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Our Work</a></li>
                <li><a href="#" className="footer-link">Testimonials</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest insights on premium web development and digital marketing.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-3 rounded-l-md focus:outline-none text-gray-800 w-full"
                />
                <button className="bg-gold-500 text-premium-dark px-4 py-3 rounded-r-md hover:bg-gold-600 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Cript Web Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;