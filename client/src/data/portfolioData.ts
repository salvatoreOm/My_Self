import type { Project, TimelineItem, Location, MediaItem } from "@shared/schema";

export const projects: Project[] = [
  {
    id: "1",
    title: "Startup Innovation Lab",
    description: "Working on a startup idea full-time, focusing on innovative solutions for modern problems.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    technologies: ["React", "TypeScript", "Node.js"],
    link: "#",
  },
  {
    id: "2",
    title: "Data Visualizations & Society",
    description: "Interactive visualizations exploring the intersection of data science and social impact.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    technologies: ["D3.js", "Python", "Research"],
    link: "#",
  },
  {
    id: "3",
    title: "Interactive Music Systems",
    description: "Creating innovative interfaces for musical expression and performance.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    technologies: ["Max/MSP", "Arduino", "Audio"],
    link: "#",
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: "6",
    semester: "VI",
    year: 2024,
    courses: [
      {
        code: "ECE326",
        name: "IoT Securities",
        icon: "fas fa-shield-alt",
      },
      {
        code: "ECL314",
        name: "Devices and Modelling",
        icon: "fas fa-microchip",
      },
      {
        code: "ECL311",
        name: "Wireless Communication",
        icon: "fas fa-wifi",
      },
      {
        code: "HUL302",
        name: "Technology Innovation and Society",
        icon: "fas fa-lightbulb",
      },
      {
        code: "ECE F01",
        name: "Antenna Design and Radiation",
        icon: "fas fa-broadcast-tower",
      },
      {
        code: "ECE F02",
        name: "Routing in Wireless Sensor Network",
        icon: "fas fa-network-wired",
      },
      {
        code: "ECE F03",
        name: "Sensor Fusion",
        icon: "fas fa-search-plus",
      },
      {
        code: "ECD405",
        name: "Minor Project",
        icon: "fas fa-project-diagram",
      },
    ],
  },
  {
    id: "5",
    semester: "V",
    year: 2024,
    courses: [
      {
        code: "ECE321",
        name: "Communication Network",
        icon: "fas fa-network-wired",
      },
      {
        code: "ECE322",
        name: "Embedded System Design",
        icon: "fas fa-memory",
      },
      {
        code: "ECL462",
        name: "Fundamentals of Machine Learning",
        icon: "fas fa-brain",
      },
      {
        code: "ECL312",
        name: "CMOS Design",
        icon: "fas fa-microchip",
      },
      {
        code: "ECE460",
        name: "Industrial IoT",
        icon: "fas fa-industry",
      },
      {
        code: "HUL304",
        name: "Professional Ethics",
        icon: "fas fa-balance-scale",
      },
    ],
  },
  {
    id: "4",
    semester: "IV",
    year: 2023,
    courses: [
      {
        code: "ECE307",
        name: "DSP and Applications",
        icon: "fas fa-wave-square",
      },
      {
        code: "ECE308",
        name: "Modelling for IoT",
        icon: "fas fa-cube",
      },
      {
        code: "ECE309",
        name: "Microprocessors and Microcontrollers",
        icon: "fas fa-microchip",
      },
      {
        code: "ECE310",
        name: "Communication Systems",
        icon: "fas fa-satellite-dish",
      },
      {
        code: "CSL301",
        name: "Database Management System",
        icon: "fas fa-database",
      },
      {
        code: "ECE311",
        name: "Workshop-III",
        icon: "fas fa-tools",
      },
    ],
  },
  {
    id: "3",
    semester: "III",
    year: 2023,
    courses: [
      {
        code: "ECE205",
        name: "Applied Signals and Systems",
        icon: "fas fa-signal",
      },
      {
        code: "CSL202",
        name: "Introduction to Object Oriented Programming",
        icon: "fas fa-code",
      },
      {
        code: "ECE206",
        name: "Sensors and Transducers",
        icon: "fas fa-thermometer-half",
      },
      {
        code: "ECE207",
        name: "Workshop - II",
        icon: "fas fa-tools",
      },
      {
        code: "CSL217",
        name: "Programming Techniques for IoT",
        icon: "fas fa-laptop-code",
      },
      {
        code: "ECE208",
        name: "Electromagnetic Field Theory",
        icon: "fas fa-magnet",
      },
    ],
  },
  {
    id: "2",
    semester: "II",
    year: 2022,
    courses: [
      {
        code: "ECL106",
        name: "Digital System Design with HDL",
        icon: "fas fa-calculator",
      },
      {
        code: "CSL102",
        name: "Data Structures",
        icon: "fas fa-sitemap",
      },
      {
        code: "ECL107",
        name: "Analog IC and Fabrication",
        icon: "fas fa-microchip",
      },
      {
        code: "ECL108",
        name: "Workshop - I",
        icon: "fas fa-tools",
      },
      {
        code: "MAL201",
        name: "Numerical Methods and Probability Theory",
        icon: "fas fa-chart-line",
      },
      {
        code: "ECL109",
        name: "Instrumentation Techniques",
        icon: "fas fa-gauge",
      },
      {
        code: "HUL101",
        name: "Communication Skills",
        icon: "fas fa-comments",
      },
    ],
  },
  {
    id: "1",
    semester: "I",
    year: 2022,
    courses: [
      {
        code: "MAL108",
        name: "Applied Mathematics for Engineers",
        icon: "fas fa-square-root-alt",
      },
      {
        code: "ECL103",
        name: "Electronic Devices and Applications",
        icon: "fas fa-plug",
      },
      {
        code: "ECL104",
        name: "Introduction to IoT",
        icon: "fas fa-wifi",
      },
      {
        code: "CSL112",
        name: "Programming Fundamentals",
        icon: "fas fa-code",
      },
      {
        code: "ECL105",
        name: "Electrical Systems",
        icon: "fas fa-bolt",
      },
      {
        code: "HUL102",
        name: "Environmental Studies",
        icon: "fas fa-leaf",
      },
      {
        code: "SAP101",
        name: "Health, Sport and Safety",
        icon: "fas fa-heartbeat",
      },
    ],
  },
];

// Additional journey items for separate display
export const additionalJourneyItems = [
  {
    id: "current",
    semester: "Current",
    year: 2025,
    special: "Professional Experience",
    courses: [
      {
        code: "IQOL",
        name: "Business Analyst Intern at IQOL Technologies",
        icon: "fas fa-briefcase",
      },
    ],
  },
  {
    id: "school-senior",
    semester: "11th-12th",
    year: 2022,
    special: "Senior Secondary Education",
    courses: [
      {
        code: "SPS",
        name: "Sanskar Public School (2020-2022)",
        icon: "fas fa-graduation-cap",
      },
    ],
  },
  {
    id: "school-foundation",
    semester: "LKG-10th",
    year: 2020,
    special: "Foundation Education",
    courses: [
      {
        code: "SPS",
        name: "St Pauls School (LKG to 10th Standard)",
        icon: "fas fa-school",
      },
    ],
  },
];

export const indiaLocations: Location[] = [
  {
    id: "1",
    name: "Delhi",
    coordinates: { x: 200, y: 120 },
    color: "red",
    description: "",
  },
  {
    id: "2",
    name: "Mumbai",
    coordinates: { x: 170, y: 200 },
    color: "blue",
    description: "",
  },
  {
    id: "3",
    name: "Bangalore",
    coordinates: { x: 210, y: 280 },
    color: "green",
    description: "",
  },
  {
    id: "4",
    name: "Goa",
    coordinates: { x: 160, y: 240 },
    color: "yellow",
    description: "",
  },
  {
    id: "5",
    name: "Kolkata",
    coordinates: { x: 250, y: 180 },
    color: "purple",
    description: "",
  },
];

export const mediaItems: MediaItem[] = [
  {
    id: "spotify",
    type: "spotify",
    title: "Working spirit Playlist",
    description: "The beats that fuel my programming sessions and late-night coding marathons 🎧",
    embedUrl: "https://open.spotify.com/embed/playlist/1FggL8pIv9aplfntsUs19b?utm_source=generator",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
  {
    id: "youtube",
    type: "youtube",
    title: "I also love to sing!....",
    description: "Check out my recent tech project walkthrough and development process!",
    embedUrl: "https://www.youtube.com/embed/P8XI374L9Jk",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
];
