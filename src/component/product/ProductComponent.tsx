import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function ProductComponent() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleOpenModal = (product: any) => {
    setOpenModal(true);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      id: 1,
      image: "/assets/network.jpg",
      title: "Sistem Integrasi",
      description: (
        <>
          <p>
            Kami memberikan solusi terintegrasi dimulai dari pembangunan
            infrastruktur jaringan LAN & WAN (Wired & Wireless), disertai dengan
            Network Implementasi Router, Firewall, VPN, DNS dan Bandwith
            Management, ditambah aplikasi customize yang mendukung produktifitas
            kerja payroll system, HRD, ERP.
          </p>
          <p>
            PT. Prima Data Utama Sentosa, dapat memberikan solusi dari tahap
            awal menganalisa kebutuhan project sampai dengan melayani semua
            kebutuhan hingga tercapainya hasil yang maksimal serta memuaskan,
            kordinasi, sosialisai dan analisa yang matang adalah kunci kami
            dalam memanage sebuah project.
          </p>
        </>
      ),
    },
    {
      id: 2,
      image: "/assets/softwareDevelopment.jpg",
      title: "Software Development",
      description: (
        <>
          <h1 className="text-md text-gray-700">
            Dalam pengembangan Software, kami juga menawarkan beberapa layanan
            seperti:
          </h1>
          <ul className="list-disc text-gray-700 text-md ml-4">
            <li>HRD & Payroll</li>
            <li>Web Portal</li>
            <li>Analis & Dashboard Business Intelligence</li>
            <li>E-Filling</li>
            <li>Simpeg (Sistem Manajemen Kepegawaian)</li>
            <li>Surat Perjalanan Dinas</li>
            <li>Migrasi</li>
            <li>Customize, dll</li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      image: "/assets/dataCenter.jpg",
      title: "Data Center",
      description: (
        <>
          <h1 className="text-md text-gray-700">
            Sedangkan dalam menangani Jaringan dan Data Center, kami juga
            menawarkan beberapa layanan seperti:
          </h1>
          <ul className="list-disc text-gray-700 text-md ml-4">
            <li>Sistem Kabel (UTP & FO)</li>
            <li>Wireless AP, P2P, Backhaul</li>
            <li>Router & Switch</li>
            <li>Server & Storage</li>
            <li>UPS & Air Condition</li>
            <li>Fire Suppression</li>
            <li>Fire Alarm</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section id="products" className="mt-20 md:-mt-24 lg:mt-60">
      <div className="flex flex-col w-full  items-center justify-center">
        <h1
          className="text-2xl lg:text-3xl font-bold text-myZinc-40 underline underline-offset-4 mb-6 md:no-underline md:underline-offset-0 md:pt-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our Product
        </h1>
        {products.map((product) => (
          <div
            className="flex flex-col h-56 md:h-96 md:pb-[170px] md:my-20 md:mt-36 bg-white shadow-lg w-80 md:w-[80%] justify-center pb-10 my-10 rounded-md cursor-pointer"
            onClick={() => handleOpenModal(product)}
            style={{ cursor: "pointer" }}
            key={product.id}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-offset="5"
          >
            <div className="flex items-center lg:w-full lg:h-96 justify-center">
              <img
                src={product.image}
                alt=""
                className="h-full w-full lg:object-cover object-contain"
              />
            </div>
            <h1 className="text-center text-myZinc-40 font-bold text-md md:mt-4 md:text-xl">
              {product.title}
            </h1>
          </div>
        ))}

        <Dialog
          open={openModal}
          onClick={handleCloseModal}
          placeholder={undefined}
          handler={() => setOpenModal(false)}
        >
          <DialogHeader placeholder={undefined}>
            {selectedProduct && selectedProduct.title}
          </DialogHeader>
          <DialogBody placeholder={undefined}>
            {selectedProduct && selectedProduct.description}
          </DialogBody>
          <DialogFooter placeholder={undefined}>
            <Button
              color="red"
              placeholder={undefined}
              onClick={handleCloseModal}
            >
              close
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </section>
  );
}

export default ProductComponent;
