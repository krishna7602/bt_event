import logo from "../assets/logo.png";
import syngientLogo from "../assets/sponsors/syngient.svg";
import agmatelKeysightLogo from "../assets/sponsors/agmatel_keysight.png";
import track1Img from "../assets/track_1_renewable.png";
import track2Img from "../assets/track_2_smartgrids.png";
import track3Img from "../assets/track_3_multienergy.png";
import track4Img from "../assets/track_4_policy.png";
import track5Img from "../assets/track_5_intelligent.png";
import track6Img from "../assets/track_6_ev.jpg";

export const defaultSiteConfig = {
  site: {
    title: "NZES-2026",
    description: "National Conference on Net-Zero Energy Systems",
    logoText: "NZES-2026",
    brochureUrl:
      "https://drive.google.com/file/d/19leP5fZNvffpoh4vYWtWSn7UOALJ7UHG/view?usp=sharing",
    logoUrl: logo,
  },
  navigation: {
    brand: "NZES-2026",
    adminLabel: "Admin",
    items: [
      { name: "Home", path: "/" },
      {
        name: "About",
        dropdown: [
          { name: "Objectives of the Conference", path: "/objectives-conference" },
          { name: "About NIT Jalandhar", path: "/about-nit-jalandhar" },
          { name: "Organizing Committee", path: "/organizing-committee" },
          { name: "Technical Programme Committee", path: "/technical-programme-committee" },
          { name: "Paper Review Committee", path: "/paper-review-committee" },
          { name: "Research Area Tracks", path: "/research-area-tracks" },
          { name: "Venue and Travels", path: "/venue" },
          { name: "Accommodations", path: "/accommodation" },
          { name: "Photo Gallery", path: "/gallery" },
        ],
      },
      {
        name: "Authors",
        dropdown: [
          { name: "Guidelines to Authors", path: "/guidelines" },
          { name: "Paper Submission", path: "/paper-submission" },
          { name: "Paper Publication", path: "/publication" },
          { name: "Best Student Award", path: "/best-student-award" },
        ],
      },
      {
        name: "Programs",
        dropdown: [
          { name: "Keynote Speakers", path: "/speakers" },
          { name: "Tours", path: "/tours" },
        ],
      },
      { name: "Registration", path: "/registration" },
      { name: "Contact", path: "/contact" },
    ],
  },
  hero: {
    titlePrefix: "National Conference on",
    titleHighlight: "Net-Zero Energy Systems",
    badge: "Hybrid Mode",
    description:
      "Advancing renewable energy, smart grids, energy storage, hydrogen technologies, and policy frameworks to support India’s Net-Zero 2070 vision.",
    dateLabel: "Date",
    dateValue: "12-13 June, 2026",
    notice: "(Conference postponed due to some administrative reasons)",
    tagline:
      "Bringing together academia, industry, policymakers, and research organizations to shape sustainable, low-carbon, and resilient energy systems for the future.",
    brochureUrl:
      "https://drive.google.com/file/d/19leP5fZNvffpoh4vYWtWSn7UOALJ7UHG/view?usp=sharing",
    carouselImages: [
      { url: track1Img, caption: "Track 1: Renewable Energy and Storage Systems" },
      { url: track2Img, caption: "Track 2: Smart Grids, Digital Energy Platforms and Microgrids" },
      { url: track3Img, caption: "Track 3: Multi-Energy Systems and Net-Zero Integration" },
      { url: track4Img, caption: "Track 4: Energy Policy, Markets, and Regulatory Frameworks" },
      { url: track5Img, caption: "Track 5: Intelligent Systems and Optimization for Net-Zero Energy Systems Hybrid Mode" },
      { url: track6Img, caption: "Track 6: Electric Vehicles and E-Mobility Systems" },
    ],
    sponsors: [
      { name: "Syngient", imageUrl: syngientLogo },
      { name: "Agmatel & Keysight", imageUrl: agmatelKeysightLogo },
    ],
  },
  about: {
    conferenceHtml:
      "<p>The global push toward decarbonization has accelerated the transition from conventional fossil-fuel-based energy systems to sustainable, low-carbon, and ultimately net-zero energy solutions. India's commitments under the Paris Agreement and the target of achieving net-zero emissions by 2070 call for transformative innovation, policy reforms, and strategic collaborations. In this context, the Department of Electrical Engineering proposes to organize a <strong>National Conference on \"Net-Zero Energy Systems Hybrid Mode, 2026\"</strong>, bringing together academia, industry, policymakers, and research organizations to discuss the latest advancements and emerging pathways in clean energy technologies.</p>",
    objectives: [
      "To provide a platform for researchers, scientists, and industry experts to present innovations in net-zero energy technologies.",
      "To discuss challenges, policy frameworks, and future research directions required for India’s energy transition.",
      "To encourage collaboration between academic institutions and industry stakeholders in sustainable energy domains.",
      "To showcase emerging technologies in renewable energy, energy storage, smart grids, hydrogen systems, and carbon-neutral infrastructures.",
      "To promote interdisciplinary learning and capacity-building among students, research scholars, and professionals.",
    ],
    whoCanAttendHtml:
      "Faculty members from colleges, universities, and technical institutes, students (UG/PG), research scholars, and industry professionals working in related fields are allowed to participate.",
    instituteHtml:
      "Dr. B. R. Ambedkar National Institute of Technology Jalandhar is among the 31 NITs established by Ministry of Education (earlier MHRD), Govt. of India. The Institute came into existence in the year 1987 (earlier Regional Engineering College, Jalandhar) and obtained the status \"Institute of National Importance\" by Act of Parliament 2007. The institute is offering B.Tech., M.Sc., M.Tech., and Ph.D. programmes in various disciplines such as Biotechnology, Chemical Engineering, Civil Engineering, Computer Science and Engineering, Electrical Engineering, Electronics and Communication Engineering, Industrial and Production Engineering, Information Technology, Instrumentation and Control Engineering, Mechanical Engineering, Textile Technology, <em>etc.</em> NIT Jalandhar has secured the 46<sup>th</sup> NIRF rank in the engineering category in 2023.",
    departmentHtml:
      "The Department of Electrical Engineering was started in the year 2013. The department presently offers undergraduate programme B. Tech. in Electrical Engineering and research programme Ph.D. in various specialization of Electrical Engineering and allied areas. The Department aims to impart high quality education to the students and carry out fundamental and industry-oriented research work. The major research areas of the department are power system, control system, high voltage engineering renewable energy and energy storage. The department has highly qualified and competent faculty members and adequate facilities to support teaching and learning activities. The alumni of Department are well placed in the top echelons of industry &amp; academia both in India &amp; abroad.<p>The department has established a <strong>Centre of Excellence (CoE) in Electric Vehicles at an estimated cost of ₹6.5 crore, sponsored by the Ministry of Minority Affairs (MoMA), Government of India.</strong> The centre houses a state-of-the-art Electric Vehicle Laboratory equipped with cutting-edge research facilities for postgraduate students and research scholars.</p>",
  },
  importantDates: {
    title: "Important Dates",
    dates: [
      {
        event: "Paper Submission Starts",
        date: "5 February, 2026",
        description: "Start date to submit research papers for review.",
        highlight: false,
      },
      {
        event: "Final Paper Submission Deadline",
        date: "9 May, 2026",
        description: "Final deadline to submit research papers for review.",
        highlight: true,
      },
      {
        event: "Paper Acceptance Date",
        date: "20 May, 2026",
        description: "Authors will receive acceptance or rejection notifications.",
        highlight: false,
      },
      {
        event: "Camera-Ready Submission",
        date: "27 May, 2026",
        description: "Final versions of accepted papers must be submitted.",
        highlight: false,
      },
      {
        event: "Last Date of Registration",
        date: "3 June, 2026",
        description: "Final date for all participants to register for the conference.",
        highlight: false,
      },
      {
        event: "Registration with Late Fee",
        date: "6 June, 2026",
        description: "Registration with additional fee (Actual Fee + Rs 500/- late Fee).",
        highlight: false,
      },
      {
        event: "Conference Dates",
        date: "12–13 June, 2026",
        description:
          "The official National Conference on Net-Zero Energy Systems Hybrid Mode 2026. (Conference postponed due to some administrative reasons)",
        highlight: false,
      },
    ],
  },
  contact: {
    heading: "Contact Us",
    description:
      "For any queries regarding the conference, sponsorship, or participation, please feel free to reach out to us using the details below.",
    locationHtml:
      "Department of Electrical Engineering,<br />Dr. B. R. Ambedkar National Institute of Technology Jalandhar,<br />G.T. Road, Amritsar Bypass,<br />Jalandhar, Punjab - 144008, India",
    email: "nzes2026@nitj.ac.in",
    call: "+91-9816803936, +91-8449118090",
  },
  footer: {
    conferenceName: "National Conference on Net-Zero Energy Systems Hybrid Mode",
    institutionLine:
      "Organized by the Department of Electrical Engineering Dr. B. R. Ambedkar National Institute of Technology, Jalandhar Punjab, India",
    copyright:
      "© 2026 National Conference on Net-Zero Energy Systems Hybrid Mode. All rights reserved.",
    hostNote: "Hosted by an Institute of National Importance",
    developerCredits: [
      {
        name: "Ramkrishna Mondal",
        url: "https://www.linkedin.com/in/ramkrishna-mondal-b73b09294/",
      },
      {
        name: "Rajat Goutam",
        url: "https://www.linkedin.com/in/rajat-goutam-487a88219?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      },
    ],
  },
  pages: {},
};