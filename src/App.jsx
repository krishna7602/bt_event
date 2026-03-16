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
import GuidelinesToAuthors from "./Pages/GuidelinesToAuthors";
import PaperSubmission from "./Pages/PaperSubmissionPage";
import RegistrationPage from "./Pages/RegistrationPage";
import BestStudentAward from "./Pages/BestStudentAward";
import PaperPublication from "./Pages/PaperPublicationPage";
import Venue from "./components/Venue";
import Contact from "./components/Contact";
import PaperReviewCommittee from "./Pages/PaperReviewCommittee";
import ObjectivesConference from "./Pages/ObjectivesConference";
import ResearchAreaTracksPage from "./Pages/ResearchAreaTracksPage";

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
        <Route
          path="/research-area-tracks"
          element={<ResearchAreaTracksPage />}
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


        {/* PROGRAMS */}
        <Route path="/speakers" element={<KeynoteSpeakers />} />
        <Route path="/tours" element={<Tours />} />



        {/* REGISTRATION */}
        <Route path="/registration" element={<RegistrationPage />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
