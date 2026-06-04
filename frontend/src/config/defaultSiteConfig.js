import logo from "../assets/logo.png";
import syngientLogo from "../assets/sponsors/syngient.svg";
import agmatelKeysightLogo from "../assets/sponsors/agmatel_keysight.png";
import track1Img from "../assets/track_1_renewable.png";
import track2Img from "../assets/track_2_smartgrids.png";
import track3Img from "../assets/track_3_multienergy.png";
import track4Img from "../assets/track_4_policy.png";

export const defaultSiteConfig = {
  site: {
    title: "RICE-WVES 2026",
    description:
      "DBT-CTEP Sponsored National Conference on Recent Innovations in Circular Economy for Waste Valorisation and Environmental Sustainability (RICE-WVES)",
    logoText: "RICE-WVES 2026",
    brochureUrl: "https://www.ricewves.in",
    logoUrl: logo,
  },
  navigation: {
    brand: "RICE-WVES 2026",
    adminLabel: "Admin",
    items: [
      { name: "Home", path: "/" },
      {
        name: "About",
        dropdown: [
          { name: "Objectives of the Conference", path: "/objectives-conference" },
          { name: "About NIT Jalandhar", path: "/about-nit-jalandhar" },
          { name: "Organizing Committee", path: "/organizing-committee" },
          { name: "Thematic Areas", path: "/thematic-areas" },
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
    titlePrefix: "DBT-CTEP Sponsored National Conference on",
    titleHighlight: "Circular Economy for Waste Valorization",
    // badge: "October 29-31, 2026",
    description:
      "",
    dateLabel: "Conference Dates",
    dateValue: "October 29-31, 2026",
    notice: null,
    tagline:
      "Hosted by the Department of Biotechnology, NIT Jalandhar. Abstracts for oral and poster presentations are invited across thematic areas focused on waste valorization and environmental sustainability.",
    brochureUrl: "https://www.ricewves.in",
    carouselImages: [
      { url: track1Img, caption: "Waste Valorization and Bio-based Materials" },
      { url: track2Img, caption: "Water, Wastewater and Sludge Management" },
      { url: track3Img, caption: "Bioeconomy and Biorefinery Approaches" },
      { url: track4Img, caption: "Emerging Technologies for Circular Economy" },
    ],
    sponsors: [],
  },
  about: {
    conferenceHtml:
      `<p>The <strong>DBT-CTEP-sponsored National Conference on “Recent Innovations in Circular Economy for Waste Valorisation and Environmental Sustainability” (RICE-WVES)</strong> is a major event scheduled to be held at NIT Jalandhar, India, bringing together researchers, academicians, industry professionals, and innovators to exchange ideas and advancements in the environmental sustainability domain. The conference aims to foster interdisciplinary dialogue and collaboration in the evolving fields of waste valorization, circular economy, biological waste treatment, wastewater treatment and resource recovery. The conference will include plenary talks, technical paper and poster presentations, and interactive sessions. It will provide an enriching experience for young researchers, faculty, and students by offering insights into various aspects of environmental sustainability aligned with the Sustainable Development Goals (SDGs). The organizing committee welcomes original research contributions that address real-world challenges and innovative solutions in the given thematic and allied areas.</p>`,
    objectives: [
      "To provide a platform for researchers, scientists, and industry experts to present innovations in waste valorization and circular economy.",
      "To promote technologies for resource recovery, bioeconomy, and sustainable waste management.",
      "To encourage interdisciplinary collaboration between academia, industry, and policymakers.",
      "To support capacity building for students, research scholars, and professionals in environmental sustainability.",
    ],
    whoCanAttendHtml:
      "Faculty members from colleges, universities, and technical institutes, students (UG/PG), research scholars, and industry professionals working in related fields are allowed to participate.",
    instituteHtml:
      `Dr. B. R. Ambedkar National Institute of Technology Jalandhar is among the 31 NITs established by Ministry of Education (earlier MHRD), Govt. of India. The Institute came into existence in the year 1987 (earlier Regional Engineering College, Jalandhar) and obtained the status "Institute of National Importance" by Act of Parliament 2007.
      The institute is offering B.Tech., M.Sc., M.Tech., and Ph.D. programmes in various disciplines such as Biotechnology, Chemical Engineering, Civil Engineering, Computer Science and Engineering, Electrical Engineering, Electronics and Communication Engineering, Industrial and Production Engineering, Information Technology, Instrumentation and Control Engineering, Mechanical Engineering, Textile Technology, etc.
      NIT Jalandhar has secured the 55th NIRF rank in the engineering category in 2025.
      NIT Jalandhar is located on a sprawling and green campus along the Jalandhar–Amritsar Highway in Punjab. The institute provides a vibrant academic environment that fosters innovation, critical thinking, and interdisciplinary research, supported by state-of-the-art infrastructure and modern laboratories.
      With a strong focus on research, innovation, and entrepreneurship, NIT Jalandhar actively contributes to national missions in energy, sustainability, digital transformation, and advanced manufacturing. The institute maintains close collaboration with industries, research organizations, and global academic partners, reinforcing its reputation for academic excellence and societal impact.`,
    departmentHtml:
      `The Department of Biotechnology is one of the fifteen academic departments of the Institute, offering undergraduate (B.Tech), postgraduate (M.Tech), and doctoral (PhD) programmes in Biotechnology. Within a span of fifteen years of commencement of B.Tech and PhD programmes, the Department has achieved results that reflect upon the growth pattern of the intellectual potential embedded with interdisciplinary knowledge, human values and professional ethics among the youth, aspirants of becoming Engineers and Technologists, so that they contribute to the field of Biotechnology in particular and to the society in general and create a niche for a successful career.`,
  },
  importantDates: {
    title: "Important Dates",
    dates: [
      {
        event: "Abstract submission starts",
        date: "June 01, 2026",
        description: "Abstract submission opens.",
        highlight: false,
      },
      {
        event: "Notification of acceptance of abstract",
        date: "Within two weeks of submission",
        description: "Authors will be notified within two weeks.",
        highlight: false,
      },
      {
        event: "Abstract submission closes",
        date: "September 10, 2026",
        description: "Last date to submit abstracts.",
        highlight: true,
      },
      {
        event: "Registration starts",
        date: "June 10, 2026",
        description: "Online registration opens.",
        highlight: false,
      },
      {
        event: "Registration closes",
        date: "September 30, 2026",
        description: "Last date for registrations.",
        highlight: true,
      },
      {
        event: "Conference Dates",
        date: "October 29-31, 2026",
        description: "RICE-WVES 2026 at NIT Jalandhar.",
        highlight: false,
      },
    ],
  },
  contact: {
    heading: "Contact Us",
    description:
      "For queries regarding abstract submission, registration, or participation, please contact the conference coordinators or email us.",
    locationHtml:
      "Department of Biotechnology,<br />Dr. B. R. Ambedkar National Institute of Technology Jalandhar,<br />G.T. Road, Amritsar Bypass,<br />Jalandhar, Punjab - 144008, India",
    email: "ricewves@nitj.ac.in",
    call:
      "Faculty coordinators: +91-7896889045, +91-8917379390, +91-9219834655; Student coordinators: Mr. Pratyush Kumar Behera: +91-8118018300, Ms. Akshika Sharma: +91-9805723172, Ms. Anjali: +91-6397341638",
  },
  footer: {
    conferenceName:
      "DBT-CTEP Sponsored National Conference on Recent Innovations in Circular Economy for Waste Valorisation and Environmental Sustainability (RICE-WVES)",
    institutionLine:
      "Organized by the Department of Biotechnology, Dr. B. R. Ambedkar National Institute of Technology, Jalandhar, Punjab, India",
    copyright: "© 2026 RICE-WVES. All rights reserved.",
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
  keynoteSpeakers: [
    {
      name: "Dr. Lorem Ipsum",
      institute: "IIT EXAMPLE",
      designation: "Associate Professor",
      department: "Department of Biotechnology",
      photo: "https://placehold.co/400x400?text=Speaker+1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: ""
    },
    {
      name: "Dr. Consectetur Adipiscing",
      institute: "NIT EXAMPLE",
      designation: "Assistant Professor",
      department: "Department of Environmental Sciences",
      photo: "https://placehold.co/400x400?text=Speaker+2",
      bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
      link: ""
    }
  ],
};