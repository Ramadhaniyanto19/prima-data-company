import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // State untuk menyimpan elemen yang sedang aktif

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (section: any) => {
    setActiveSection(section);
    setIsOpen(false); // Tutup dropdown setelah mengklik salah satu elemen
  };

  return (
    <div>
      <div className="flex justify-between gap-8 items-center z-40 bg-gray-50 w-full h-24 fixed">
        <div className="flex w-80 items-center text-center justify-center lg:gap-10 lg:w-96 lg:ml-24">
          <img src="/assets/logo.png" alt="" width={60} height={60} />
          <h1 className="font-bold text-xl hidden lg:block">
            Pt Prima Data
            <span className="text-yellow-60"> Utama Sentosa</span>
          </h1>
        </div>
        <div className="flex w-full items-center text-center justify-center lg:hidden">
          <h1 className="font-bold text-xs md:text-lg">
            PT. PRIMA DATA{" "}
            <span className="text-yellow-60 font-bold"> UTAMA SENTOSA</span>
          </h1>
        </div>
        <div className="flex w-80 items-center text-center justify-center relative lg:hidden">
          <button
            className={`hamburger-button ${
              isOpen
                ? "transform transition-all ease-in-out duration-500 delay-150"
                : ""
            }`}
            onClick={toggleHamburger}
          >
            {isOpen ? (
              <>
                <img
                  src="/assets/closeButton.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </>
            ) : (
              <>
                <img
                  src="/assets/hamburgerButton.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </>
            )}
          </button>
        </div>

        <div className="lg:flex hidden flex-row items-center justify-center gap-12 mt-12 lg:mt-0 text-md text-gray-800">
          <ul className="flex lg:space-x-6 mr-4">
            <li>
              <a
                href="#home"
                onClick={() => handleSetActive("home")}
                className={`nav-link ${
                  activeSection === "home" ? "border-b-2 border-yellow-60" : ""
                } transition-transform transform hover:scale-105`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleSetActive("about")}
                className={`nav-link ${
                  activeSection === "about" ? "border-b-2 border-yellow-60" : ""
                } transition-transform transform hover:scale-105`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => handleSetActive("services")}
                className={`nav-link ${
                  activeSection === "services"
                    ? "border-b-2 border-yellow-60"
                    : ""
                } transition-transform transform hover:scale-105`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={() => handleSetActive("products")}
                className={`nav-link ${
                  activeSection === "products"
                    ? "border-b-2 border-yellow-60"
                    : ""
                } transition-transform transform hover:scale-105`}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#partners"
                onClick={() => handleSetActive("partners")}
                className={`nav-link ${
                  activeSection === "partners"
                    ? "border-b-2 border-yellow-60"
                    : ""
                } transition-transform transform hover:scale-105`}
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => handleSetActive("experience")}
                className={`nav-link ${
                  activeSection === "experience"
                    ? "border-b-2 border-yellow-60"
                    : ""
                } transition-transform transform hover:scale-105`}
              >
                Project Experience
              </a>
            </li>
            {/* <li>
        <a
          href="#legal"
          onClick={() => setIsOpen(false)}
          className="nav-link hover:border-b-2 border-yellow-60 transition-transform transform hover:scale-105"
        >
          Legal Aspect
        </a>
      </li> */}
            <li>
              <a
                href="#contact"
                onClick={() => handleSetActive("contact")}
                className={`nav-link ${
                  activeSection === "contact"
                    ? "border-b-2 border-yellow-60"
                    : ""
                } transition-transform transform hover:scale-105`}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className=" w-full text-start z-20 top-20 fixed">
          <div className="absolute w-full p-4 bg-transparent bg-white border h-screen justify-center flex text-center shadow-md rounded-md">
            <ul className="flex flex-col gap-12 mt-12 text-md">
              <li>
                <a href="#home" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsOpen(false)}>
                  About us
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setIsOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => setIsOpen(false)}>
                  Products
                </a>
              </li>
              <li>
                <a href="#partners" onClick={() => setIsOpen(false)}>
                  Partners
                </a>
              </li>
              <li>
                <a href="#experience" onClick={() => setIsOpen(false)}>
                  Project Experience
                </a>
              </li>
              {/* <li>
                <a href="#legal" onClick={() => setIsOpen(false)}>
                  Legal Aspect
                </a>
              </li> */}
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
