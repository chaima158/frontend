import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from '../../components/Home/Hero';
import About from '../../components/Home/About';
import Features from '../../components/Home/Features';
import Testimonials from '../../components/Home/Testimonials';
import CtaSection from '../../components/Home/CtaSection';
import Footer from '../../components/Home/Footer';
const Home = () => {
    // animate on scroll initialization
    Aos.init({
      duration: 400,
      offset: 0,
    });
    return (
      <>
        <Hero />
    
        <About />
        <Features />
       
        <CtaSection />
        <Footer />
      </>
    );
  };
  
  export default Home;
  