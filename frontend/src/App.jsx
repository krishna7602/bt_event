import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ManagedPage from "./components/ManagedPage";
import HomePage from "./components/HomePage";

// Home Sections
import Hero from "./components/Hero";
import About from "./components/About";
import ImportantDates from "./components/ImportantDates";

// Pages
import AboutNITJ from "./Pages/AboutNITJPage";
import OrganizingCommittee from "./Pages/OrganizingCommitteePage";
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
import ObjectivesConference from "./Pages/ObjectivesConference";
import ResearchAreaTracksPage from "./Pages/ResearchAreaTracksPage";
import AdminDashboardPage from "./Pages/AdminDashboardPage";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <ManagedPage pageKey="home" fallback={HomePage} />
          }
        />

        {/* ABOUT */}
        <Route path="/about-nit-jalandhar" element={<ManagedPage pageKey="about-nit-jalandhar" fallback={AboutNITJ} />} />
        <Route path="/objectives-conference" element={<ManagedPage pageKey="objectives-conference" fallback={ObjectivesConference} />} />
        <Route path="/organizing-committee" element={<ManagedPage pageKey="organizing-committee" fallback={OrganizingCommittee} />} />

        <Route
          path="/thematic-areas"
          element={<ManagedPage pageKey="thematic-areas" fallback={ResearchAreaTracksPage} />}
        />

        {/* FACILITIES */}
        <Route path="/accommodation" element={<ManagedPage pageKey="accommodation" fallback={Accommodation} />} />
        <Route path="/gallery" element={<ManagedPage pageKey="gallery" fallback={PhotoGallery} />} />
        <Route path="/venue" element={<ManagedPage pageKey="venue" fallback={Venue} />} />

        {/* AUTHORS */}
        <Route path="/guidelines" element={<ManagedPage pageKey="guidelines" fallback={GuidelinesToAuthors} />} />
        <Route path="/paper-submission" element={<ManagedPage pageKey="paper-submission" fallback={PaperSubmission} />} />
        <Route path="/publication" element={<ManagedPage pageKey="publication" fallback={PaperPublication} />} />
        <Route path="/best-student-award" element={<ManagedPage pageKey="best-student-award" fallback={BestStudentAward} />} />


        {/* PROGRAMS */}
        <Route path="/speakers" element={<ManagedPage pageKey="speakers" fallback={KeynoteSpeakers} />} />
        <Route path="/tours" element={<ManagedPage pageKey="tours" fallback={Tours} />} />



        {/* REGISTRATION */}
        <Route path="/registration" element={<ManagedPage pageKey="registration" fallback={RegistrationPage} />} />

        {/* CONTACT */}
        <Route path="/contact" element={<ManagedPage pageKey="contact" fallback={Contact} />} />

        <Route path="/admin" element={<AdminDashboardPage />} />
      </Routes>

      <Footer />
    </>
  );
}
