import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

function ExperienceProject() {
  return (
    <section id="experience" className="bg-white">
      <div className="flex flex-col w-full mx-3 gap-8 mt-16">
        <h1
          className="text-2xl lg:text-3xl lg:no-underline font-bold text-center underline underline-offset-4 text-myZinc-40"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Project <span className=" font-bold">Experience</span>
        </h1>
        <div className="flex flex-row gap-12 lg:gap-0 md:gap-0 items-center">
          <div
            className="flex-col w-full h-full hidden md:flex md:flex-col items-center jusitfy-center"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1500"
          >
            <img
              src="/assets/doc2.png"
              alt=""
              className="md:w-[450px] md:h-[600px] md:rounded-full lg:w-[400px] lg:h-[500px] lg:rounded-xl lg:shadow-lg"
            />
          </div>
          <div
            className="w-full flex-col"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1500"
          >
            <Timeline>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                    placeholder={undefined}
                  >
                    Jaringan Kabel UTP Cat6. Voice Power
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="blue"
                    className="font-normal text-gray-600"
                    placeholder={undefined}
                  >
                    <ul className="list-disc mx-3">
                      <li>Kantor Dirjen Pajak-KPP Pusat, Jakarta Selatan</li>
                      <li>
                        Kantor Dirjen Pajak-KPP PMA 6 Asing, Jakarta Selatan
                      </li>
                      <li>
                        Kantor Dirjen Pajak-KPP PMA 6 Kalibata, Jakarta Selatan
                      </li>
                      <li>
                        Kantor Dirjen Pajak-KPP PMA 6 Kalibata, Jakarta Selatan
                      </li>
                      <li>
                        KPP Pratama Jakarta Majestik, Jl. KH. Tapa Jakarta
                        Selatan
                      </li>
                      <li>KPP Pratama Cilandak, Jl. KKO, Jakarta Selatan</li>
                      <li>
                        KPP Pratama Matraman, Jl. Matraman Raya Jakarta Timur
                      </li>
                      <li>KPP Pratama Tangerang Timur, Tangerang Kota</li>
                      <li>
                        KPP Pratama Cipulir, Jl. Raya Cileduk Cipulit Jakarta
                        Selatan
                      </li>
                      <li>
                        DJB. Kanwil Jabar II, Jl. Raya Bekasi, Bekasi Jawa Barat
                      </li>
                      <li>
                        KPP Pratama Kota Madya Tangerang, Jl. Satria Sudirman
                      </li>
                      <li>BKPM, Jl. Jend. Gataot Subroto Jakarta</li>
                      <li>PT. Hastacacitra Pastika, Sudirman Park, Jakarta</li>
                      <li>dan lainny.</li>
                    </ul>
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon />
                  <Typography
                    placeholder={undefined}
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Fiber Optic + UTP Cat 6
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="blue"
                    className="font-normal text-gray-600"
                    placeholder={undefined}
                  >
                    <ul className="list-disc mx-3">
                      <li>PT. Sofnet Indonesia</li>
                      <li>
                        PT. Matel, Kawasan Industri Jababeka Cikarang Barat
                      </li>
                    </ul>
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineHeader className="h-3">
                  <TimelineIcon />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                    placeholder={undefined}
                  >
                    Peralatan dan Mesin Ruang Server, UTP Cat 6, Power
                  </Typography>
                </TimelineHeader>
                <TimelineBody>
                  <Typography
                    variant="small"
                    color="blue"
                    className="font-normal text-gray-600"
                    placeholder={undefined}
                  >
                    <ul className="list-disc mx-3 mt-1">
                      <li>KPP Jakarta Pratama Taman Sari, Jakarta Pusat</li>
                      <li>KPP Pratama Ternate, Ternate Maluku</li>
                    </ul>
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceProject;
