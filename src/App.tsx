import Navbar from "./component/navbar/navbar";
import AboutUs from "./component/aboutUs/AboutUs";
import Home from "./component/home/Home";
import Services from "./component/services/services";
import PartnersComponent from "./component/partners/partners";
import ExperienceProject from "./component/experience/ExperienceProject";
// import LegalAspect from "./component/legalAspect/LegalAspect";
import ContactComponent from "./component/contact/contact";
import FooterComponent from "./component/footer/footer";
import ProductComponent from "./component/product/ProductComponent";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import file CSS AOS

// library.add(faLocationDot);

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    // <div className="App flex gap-6 flex-col overflow-hidden">
    <div className="App flex  flex-col overflow-hidden bg-gray-100">
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <ProductComponent />
      <PartnersComponent />
      <ExperienceProject />
      {/* <LegalAspect /> */}
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
