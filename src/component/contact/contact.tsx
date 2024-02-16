import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

function ContactComponent() {
  const handleEmailClick = () => {
    window.location.href = "mailto:sales@primadata.net";
  };
  return (
    <section id="contact" className="h-screen lg:mt-32">
      <div className="flex flex-col px-5 py-8 ">
        <div className="flex items-center justify-center">
          {/* <h1 className="text-lg font-bold underline underline-offset-4 text-gray-500 mb-6">
          Contact
        </h1> */}
          <h1
            className="text-2xl lg:text-3xl lg:no-underline font-bold text-myZinc-40 underline underline-offset-4 mb-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Contact
          </h1>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 lg:justify-center">
          <div
            className="flex flex-col space-y-4 md:flex-col md:w-[50%]"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="flex items-center h-36 bg-white shadow-lg w-full gap-10 px-8">
              <div className="rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-yellow-60 w-9 h-9"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-700 text-bold text-md">
                  Our Address
                </span>
                <span className="text-gray-500 text-sm">
                  Green Ayana No.2, Jl.Raya Inpres, Kel.Gaga, Kec. Larangan,
                  Ciledug, Tangerang 15154
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div
                className="flex items-center h-36 bg-white shadow-lg w-full gap-10 px-8 cursor-pointer"
                onClick={handleEmailClick}
              >
                <div className="rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-yellow-60 w-9 h-9"
                  />
                </div>
                <div className="flex flex-col cursor-pointer">
                  <span className="text-gray-700 text-bold text-md">Email</span>
                  <span className="text-yellow-60 font-semibold text-sm">
                    sales@primadata.net
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col space-y-4 lg:w-[30%]"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="flex items-center md:h-full bg-white shadow-lg w-full gap-10 px-8 md:pr-32 cursor-pointer">
              <div className="rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-yellow-60 w-9 h-9"
                />
              </div>
              <div className="flex flex-col cursor-pointer">
                <span className="text-gray-700 text-bold text-md">Call Us</span>
                <span className="text-gray-500 text-sm">(021) 2227 2148</span>
                <span className="text-gray-500 text-sm">+62 812 8927 0567</span>
                <span className="text-gray-500 text-sm">+62 813 1899 1377</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col py-7"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="flex h-full items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63458.68487551159!2d106.72165!3d-6.241603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa767da24e61:0xf5b2617b65d6a2dc!2sJl. Inpres Raya, Kec. Larangan, Kota Tangerang, Banten 15154, Indonesia!5e0!3m2!1sen!2sus!4v1706512530766!5m2!1sen!2sus"
              title="Google Maps Location"
              width="600"
              className="shadow-xl"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
