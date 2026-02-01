import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home Sections
import Hero from "./components/Hero";
import About from "./components/About";
import ImportantDates from "./components/ImportantDates";

// Pages
import AboutNITJ from "./Pages/AboutNITJPage";
import OrganizingCommittee from "./Pages/OrganizingCommitteePage";
import TechnicalProgrammeCommittee from "./Pages/TechnicalProgrammeCommitteePage";
import Accommodation from "./Pages/AccommodationPage";
import PhotoGallery from "./Pages/PhotoGalleryPage";
import KeynoteSpeakers from "./Pages/KeynoteSpeakers";
import Tours from "./Pages/ToursPage";
import CulturalEvents from "./Pages/CulturalEventsPage";
import GuidelinesToAuthors from "./Pages/GuidelinesToAuthors";
import PaperSubmission from "./Pages/PaperSubmissionPage";
import RegistrationPage from "./Pages/RegistrationPage";
import BestStudentAward from "./Pages/BestStudentAward";
import CMTAcknowledgement from "./Pages/CMTAcknowledgement";
import PaperPublication from "./Pages/PaperPublication";
import Venue from "./components/Venue";
import Contact from "./components/Contact";
import PaperReviewCommittee from "./Pages/PaperReviewCommittee";
import ObjectivesConference from "./Pages/ObjectivesConference";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <ImportantDates />
            </>
          }
        />

        {/* ABOUT */}
        <Route path="/about-nit-jalandhar" element={<AboutNITJ />} />
        <Route path="/objectives-conference" element={<ObjectivesConference />} />
        <Route path="/organizing-committee" element={<OrganizingCommittee />} />
        <Route
          path="/technical-programme-committee"
          element={<TechnicalProgrammeCommittee />}
        />
        <Route
          path="/paper-review-committee"
          element={<PaperReviewCommittee />}
        />

        {/* FACILITIES */}
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/venue" element={<Venue />} />

        {/* AUTHORS */}
        <Route path="/guidelines" element={<GuidelinesToAuthors />} />
        <Route path="/paper-submission" element={<PaperSubmission />} />
        <Route path="/publication" element={<PaperPublication />} />
        <Route path="/best-student-award" element={<BestStudentAward />} />
        <Route path="/cmt-acknowledgement" element={<CMTAcknowledgement />} />

        {/* PROGRAMS */}
        <Route path="/speakers" element={<KeynoteSpeakers />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/cultural-events" element={<CulturalEvents />} />


        {/* REGISTRATION */}
        <Route path="/registration" element={<RegistrationPage />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
