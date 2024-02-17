import React from "react";

function FooterComponent() {
  return (
    <div className="bg-gray-800 text-white px-5 mt-72 md:mt-0 md:pb-0 pb-4 lg:h-52 flex items-center lg:mt-80">
      <div className="container mx-auto mt-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="lg:text-xl font-bold">
              PT. PRIMA DATA UTAMA SENTOSA
            </h2>
            <p className="text-gray-400 lg:text-sm">
              Green Ayana No.2, Jl.Raya Inpres, Kel.Gaga, Kec. Larangan,
              Ciledug, Tangerang 15154
            </p>
            <p className="text-gray-400 lg:text-sm">Phone: +6221 2227 2148</p>
            <p className="text-gray-400">Email: sales@primadata.net</p>
          </div>
          <div className="flex flex-col items-center gap-6 text-center justify-center">
            <div className="flex gap-14 md:gap-8 text-center justify-center lg:text-sm">
              <a
                href="#home"
                className="text-gray-400 hover:text-white"
                id="home"
              >
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-white ">
                About Us
              </a>
              <a href="#services" className="text-gray-400 hover:text-white ">
                Services
              </a>
            </div>
            <div className="flex gap-8 text-center justify-center lg:text-sm">
              <a href="#partners" className="text-gray-400 hover:text-white ">
                Partners
              </a>
              <a href="#project" className="text-gray-400 hover:text-white ">
                Project experience
              </a>
              <a href="#products" className="text-gray-400 hover:text-white ">
                Products
              </a>
            </div>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white lg:text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
