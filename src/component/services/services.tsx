import React from "react";

function Services() {
  return (
    <section id="services" className="md:h-screen md:mt-20">
      <div className="flex flex-col w-full">
        <div className="title" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-2xl font-bold lg:text-3xl text-center pt-5 text-myZinc-40 underline underline-offset-4 md:no-underline md:underline-offset-0 md:mt-28">
            Our Services
          </h1>
        </div>
        <div className="flex flex-col w-full justify-center items-center mt-6">
          {/* konsep dekstop 3 ke kanan jadi gunakan flex-row nantinya */}
          <div className="flex-col md:gap-10 flex w-80 md:w-full">
            <div className="flex flex-col md:flex-row md:gap-20 lg:gap-48 items-center justify-center">
              <div
                className="card-services rounded-lg bg-white shadow-lg h-72 md:w-80 lg:w-96 w-full md:pr-3 items-center hover:scale-105"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <div className="flex flex-row title m-4 gap-2">
                  <img
                    src="/assets/star.svg"
                    className="bg-green-300 w-5"
                    alt=""
                  />
                  <h1 className="text-black font-bold text-md lg:text-xl">
                    Jasa Bantu Tugas
                  </h1>
                </div>
                <div className="flex ml-11">
                  <p className="text-sm lg:text-base text-gray-600">
                    Untuk meningkatkan nilai dalam menyediakan jasa bantu tugas
                    di tengah persaingan bisnis, kami bekerja sama dengan
                    produsen terkemuka seperti Cisco, Avaya, Corning, Netviel,
                    Vivotek, AMP, Panduit, Hikvision, Krone, dan lain-lain.
                  </p>
                </div>
              </div>
              <div
                className="card-services rounded-lg bg-white shadow-lg h-72 md:w-80 lg:w-96 w-full md:pr-3 items-center hover:scale-105 mt-3 md:mt-0"
                data-aos="zoom-in-left"
                data-aos-duration="3000"
              >
                <div className="flex flex-row title m-4 gap-2">
                  <img
                    src="/assets/star.svg"
                    className="bg-blue-300 w-5"
                    alt=""
                  />
                  <h1 className="text-black font-bold text-md lg:text-xl">
                    Layanan Konsultasi:
                  </h1>
                </div>
                <div className="flex ml-14">
                  <ul className="list-disc text-sm text-gray-600 lg:text-base">
                    <li>Analisis mendalam terhadap data perusahaan</li>
                    <li>Konsultasi bisnis intelligence</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-20 lg:gap-48 items-center justify-center">
              <div
                className="card-services rounded-lg bg-white shadow-lg h-72 md:w-80 lg:w-96 w-full md:pr-3 items-center hover:scale-105 mt-3"
                data-aos="zoom-in-right"
                data-aos-duration="3000"
                data-aos-offset="100"
              >
                <div className="flex flex-row title m-4 gap-2">
                  <img
                    src="/assets/star.svg"
                    className="bg-brown-300 w-5"
                    alt=""
                  />
                  <h1 className="text-black font-bold text-md lg:text-xl">
                    Kabel Struktural
                  </h1>
                </div>
                <div className="flex ml-14">
                  <ul className="list-disc text-sm text-gray-600 lg:text-base">
                    <li>DATA, VOICE CABLING SYSTEM</li>
                    <li>UTP atau STP</li>
                  </ul>
                </div>
              </div>
              <div
                className="card-services rounded-lg bg-white shadow-lg h-72 md:w-80 lg:w-96 w-full md:pr-3 items-center hover:scale-105 mt-3"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
                data-aos-offset="100"
              >
                <div className="flex flex-row title m-4 gap-2 ">
                  <img
                    src="/assets/star.svg"
                    className="bg-teal-300 w-5"
                    alt=""
                  />
                  <h1 className="text-black font-bold text-md lg:text-xl">
                    Layanan Lainnya
                  </h1>
                </div>
                <div className="flex ml-14">
                  <ul className="list-disc text-sm text-gray-600 lg:text-base">
                    <li>Sistem Kabel Serat Optik</li>
                    <li>Persiapan Situs Komputer / Pusat Data</li>
                    <li>Sistem UPS & Stabilizer</li>
                    <li>Lantai Raised</li>
                    <li>Sistem Rak Industri</li>
                    <li>Sistem Kontrol Akses</li>
                    <li>Pemasangan CCTV</li>
                    <li>Layanan Jaringan Komputer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
