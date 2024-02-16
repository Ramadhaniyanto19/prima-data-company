import React, { useEffect, useState } from "react";
import CardComponent from "../card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css"; // Import file CSS AOS
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Button,
// } from "@material-tailwind/react";

function AboutUs() {
  const handleContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      // Menggunakan smooth scroll untuk pengalaman yang lebih baik
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      // duration: 4000,
      offset: 8, // Menentukan jarak dari bagian atas halaman sebelum animasi dimulai
    });
  }, []);

  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex flex-col justify-center items-center py-2 w-full"
      id="about"
    >
      <div
        className="title"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        <h1 className="text-3xl md:text-5xl md:py-4 lg:text-5xl font-medium text-center mt-6 md:mt-10 lg:mt-12">
          Pt. Prima Data
          <br />
          <span className="text-yellow-60 font-bold"> Utama Sentosa</span>
        </h1>
      </div>
      <div className="flex flex-row overflow-y-scroll gap-3 w-full ml-4 lg:hidden -mt-6">
        <CardComponent
          imageSrc="/assets/img1.jpg"
          learnMoreText="Learn More"
          title="NETWORK CABLING SYSTEM"
          description="Jaringan lokal atau Local Area Network (LAN) mutlak diperlukan oleh perusahaan yang memiliki beberapa unit komputer dan ingin mengintegrasikannya agar mempermudah komunikasi dan pertukaran data. Jaringan lokal juga dapat dipergunakan untuk menjalankan sumber daya secara bersama-sama seperti file server,printer,dan lain sebagainya .
          Perancangan dan penerapan sistem jaringan lokal yang baik akan berdampak positif pada kelancaran arus data pada jaringan. Selain peralatan yang wajib memenuhi kriteria, juga dibutuhkan tenaga ahli berpengalaman untuk melakukan instalasi jaringan lokal agar hasil yang dicapai dapat maksimal dengan melakukan penarikan cable LAN maupun kabel fiber optik dan sebagainya."
        />
        <CardComponent
          imageSrc="/assets/img1.jpg"
          learnMoreText="Learn More"
          title="NETWORK SERVICES"
          description="Cost for depakote Kami menyediakan jasa di bidang infrastruktur jaringan mulai dari jaringan lokal (LAN),baik wired maupun wireless. Ruang lingkup yang kami tangani mulai dari pemasangan baru, perawatan rutin, troubleshooting hingga upgrading. Didukung oleh tenaga ahli dan berpengalaman di bidang jaringan, kami siap menyediakan infrastruktur jaringan yang Anda butuhkan."
        />
        <CardComponent
          imageSrc="/assets/img1.jpg"
          learnMoreText="Learn More"
          title="DATA COMM"
          description={`Sebagai informasi dan sistem telekomunikasi menjadi lebih konvergensi, kami juga berhasil memperluas Pengetahuan dan kami, yang meliputi
          PABX (Analog & IP) Instalasi & Pengaturan,
          Konferensi Video & Sistem teleconference,
          Layanan VoIP.`}
        />
        <CardComponent
          imageSrc="/assets/img1.jpg"
          learnMoreText="Learn More"
          title="MAINTENANCE"
          description={`Dengan dukungan team dan tenaga ahli yang handal di bidangnya, yang membuat kami terus meningkatkan mutu dan kualitas, serta tidak lupa selalu update informasi perkembangan IT khususnya Data Center.`}
        />
        <CardComponent
          imageSrc="/assets/img1.jpg"
          learnMoreText="Learn More"
          title="M&E (Mekanikal & Electrical)"
          description={`Bergerak dalam bidang Jasa kontraktor, kami juga menangani pekerjaan mechanical electrical dan HAVC, mulai dari perencanaan, pelaksanaan, pengadaan material.
          Dari peralatan hingga testing dan commisioning, serta pemeliharaan, dengan komitment perusahaan memberikan pelayanan yang terbaik dan berkualitas, kami juga memberikan layanan tenaga professional kepada setiap client & customer kami.`}
        />
      </div>
      <div className="main px-4 ml-3 -mt-8 text-sm md:items-start md:flex md:space-x-24 md:mt-10 md:ml-20 md:w-[80%]">
        <div className="flex flex-col items-center justify-center md:w-[580px] lg:w-[30%]">
          <h1 className="text-2xl font-bold text-myZinc-40 underline underline-offset-4 mb-6 pt-5 text-center md:text-center md:mt-3 md:no-underline md:mb-0 md:text-2xl md:pt-0 md:underline-offset-0 md:hidden">
            About Us
          </h1>
          <h1
            className="text-2xl font-bold text-myZinc-40 underline underline-offset-4 mb-6 pt-5 text-center md:text-center md:mt-3 md:no-underline md:mb-0 md:text-2xl lg:text-4xl md:pt-0 md:underline-offset-0 md:flex hidden"
            data-aos="fade-right"
          >
            Ingin Mengenal Kami Lebih Dekat?
          </h1>
          <button
            className="px-4 py-3 bg-yellow-60 lg:flex hidden text-white rounded-full mt-8 lg:items-center lg:gap-4"
            data-aos="fade-right"
            onClick={() => setOpen(!open)}
          >
            <span> Let's Started</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div
          className="flex lg:w-[50%] lg:hidden md:hidden lg:mt-9 transition duration-700 ease-in-out"
          data-aos="fade-left"
        >
          <p className="text-sm mt-2 md:text-base text-justify">
            <span className="font-bold">PT. Prima Data Utama Sentosa</span>{" "}
            adalah perusahaan yang bergerak di bidang Consulting dan Teknologi
            Informasi, khususnya pada Pembuatan Sistem, Consulting,
            infrastruktur Jaringan, dan dukungan, termasuk Sistem Aplikasi,
            Structured Cabling System, Network Infrastructure (LAN, WLAN, WAN),
            UPS System, Raised Floor, dan Support & Maintenance.
          </p>
        </div>
        {open ? (
          <div
            className="lg:flex lg:flex-col hidden items-center justify-center button w-full mt-14 animate-bounce"
            onClick={handleContact}
          >
            <button className="w-full h-28 bg-myZinc-40 text-4xl text-white rounded-lg flex flex-col items-center justify-center">
              Contact Us!
              <FontAwesomeIcon icon={faArrowDown} className="pt-4" />
            </button>
          </div>
        ) : (
          <div
            className="md:flex  lg:flex lg:w-[50%] lg:mt-9 transition duration-700 ease-in-out hidden"
            data-aos="fade-left"
          >
            <p className="text-sm mt-2 md:text-base text-justify">
              <span className="font-bold">PT. Prima Data Utama Sentosa</span>{" "}
              adalah perusahaan yang bergerak di bidang Consulting dan Teknologi
              Informasi, khususnya pada Pembuatan Sistem, Consulting,
              infrastruktur Jaringan, dan dukungan, termasuk Sistem Aplikasi,
              Structured Cabling System, Network Infrastructure (LAN, WLAN,
              WAN), UPS System, Raised Floor, dan Support & Maintenance.
            </p>
          </div>
        )}
      </div>

      {/* <div className="card flex flex-col my-12 w-full ml-4 justify-center items-center">
        <Card
          placeholder={undefined}
          className="w-72 max-w-[48rem] h-full flex-row"
        >
          <CardHeader
            placeholder={undefined}
            shadow={true}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src="/assets/img2.jpg"
              alt="card"
              className="h-full w-full object-contain"
            />
          </CardHeader>
          <CardBody placeholder={undefined} className="-mt-2">
            <Typography
              placeholder={undefined}
              variant="h6"
              color="gray"
              className="uppercase text-md"
            >
              startups
            </Typography>
            <Typography
              placeholder={undefined}
              variant="small"
              color="gray"
              className="py-2 font-serif"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              necessitatibus.
            </Typography>
            <Button
              placeholder={undefined}
              variant="text"
              className="flex items-center gap-2 w-36 hover:bg-yellow-300 -ml-2 border border-yellow-400 text-xs"
              size="sm"
            >
              <span className="text-xs text-yellow-60">Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </CardBody>
        </Card>
      </div> */}
    </div>
  );
}

export default AboutUs;
