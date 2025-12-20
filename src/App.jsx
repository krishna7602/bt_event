import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home Sections
import Hero from "./components/Hero";
import About from "./components/About";
import CallForPapers from "./components/CallForPapers";
import ImportantDates from "./components/ImportantDates";

// Pages
import AboutNITJ from "./Pages/AboutNITJ";
import OrganizingCommittee from "./Pages/OrganizingCommitte";
import InternationalAdvisoryCommittee from "./Pages/InternationalAdvisoryCommittee";
import TechnicalProgrammeCommittee from "./Pages/TechnicalProgrammeCommittee";
import Accommodation from "./Pages/Accomodation";
import Photogallary from "./Pages/Photogallary";
import SponsoreExhebition from "./Pages/SponsoreExhebition";
import BenifitsSponsorship from "./Pages/BenifitsSponsorship";
import Speakerspage from "./Pages/Speakerspage";
import Tours from "./Pages/Tours";
import Culturalevents from "./Pages/Culturalevents";
import GuidelinesToAuthors from "./Pages/GuidelinesToAuthors";
import Papersubmission from "./Pages/Papersubmission";
import RegistrationPage from "./Pages/RegistrationPage";
import Beststudantaward from "./Pages/Beststudantaward";
import Financialsupprot from "./Pages/Financialsupprot";
import CMTacknowldgement from "./Pages/CMTacknowldgement";
import Paperpublication from "./Pages/Paperpublication";
import Venue from "./components/Venue";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              {/* <CallForPapers /> */}
              <ImportantDates />
            </>
          }
        />

        {/* ABOUT */}
        <Route path="/about-nit-patna" element={<AboutNITJ />} />
        <Route path="/organizing-committee" element={<OrganizingCommittee />} />
        <Route
          path="/international-advisory-committee"
          element={<InternationalAdvisoryCommittee />}
        />
        <Route
          path="/technical-programme-committee"
          element={<TechnicalProgrammeCommittee />}
        />

        {/* FACILITIES */}
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/gallery" element={<Photogallary />} />
        <Route path="/venue" element={<Venue />} />

        {/* AUTHORS */}
        <Route path="/guidelines" element={<GuidelinesToAuthors />} />
        <Route path="/paper-submission" element={<Papersubmission />} />
        <Route path="/publication" element={<Paperpublication />} />
        <Route path="/best-student-award" element={<Beststudantaward />} />
        <Route path="/financial-support" element={<Financialsupprot />} />
        <Route path="/cmt-acknowledgement" element={<CMTacknowldgement />} />

        {/* PROGRAMS */}
        <Route path="/speakers" element={<Speakerspage />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/cultural-events" element={<Culturalevents />} />

        {/* SPONSORS */}
        <Route path="/sponsorship" element={<SponsoreExhebition />} />
        <Route path="/sponsorship-benefits" element={<BenifitsSponsorship />} />

        {/* REGISTRATION */}
        <Route path="/registration" element={<RegistrationPage />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}
