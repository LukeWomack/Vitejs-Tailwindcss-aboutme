// src/components/Hero.jsx
const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-primary to-secondary text-white py-22">
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-3/2 mb-8 md:mb-0">
          <h-1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Your Name</h-1>
          <p className="text-xl mb-8">Web Developer & Designer</p>
          <div className="flex space-x-6">
            <a href="#contact" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Contact Me</a>
            <a href="#about" className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors">Learn More</a>
          </div>
        </div>
        <div className="md:w-3/2 flex justify-center">
          <div className="w-66 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="/api/placeholder/298/300" 
              alt="Your Name" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;