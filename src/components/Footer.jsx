import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Your Name</h3>
            <p className="text-gray-400">Web Developer & Designer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 mb-2">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <a href="#" className="text-primary hover:underline">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;