import Header from './components/header';
import React from 'react';
import Footer from './components/footer';
import Slider from './components/Silder';
import Hero from './components/Hero';
import Section from './components/Section';
import Section2 from './components/Section2';

function App() {
  return (
    <div className="bg-[#F9E4BC] min-h-screen">
      <Header />
      <Slider />
      <Hero />
      <Section />
      <Section2 />
      {/* Main content area */}
      <main className="">{}</main>
      <Footer />
    </div>
  );
}

export default App;
