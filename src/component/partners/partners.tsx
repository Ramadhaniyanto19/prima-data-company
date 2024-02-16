import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PartnersComponent() {
  const partners = [
    "/assets/dell.png",
    "/assets/HP.png",
    "/assets/Hundure.png",
    "/assets/fingerspot.webp",
    "/assets/fingertec.png",
    "/assets/IBM.jpeg",
    "/assets/Solution.jpeg",
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 1500, // Waktu dalam milidetik
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Jumlah gambar yang ditampilkan pada satu waktu
    slidesToScroll: 1,
  };

  return (
    <section id="partners">
      <div className=" h-44 pt-12 justify-center flex flex-col md:h-60 lg:h-72">
        <h1 className="font-bold text-center lg:hidden py-8 text-2xl underline underline-offset-4 text-myZinc-40">
          <span className="">Our</span>{" "}
          <span className=" font-bold">Partners</span>
        </h1>
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-8 pb-16"
            >
              <img
                src={partner}
                alt={`partner-${index}`}
                className="h-20 w-20 md:h-36 md:w-36 flex"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default PartnersComponent;
