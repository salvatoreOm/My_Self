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
    id: "1",
    semester: "Spring",
    year: 2023,
    courses: [
      {
        code: "6.C85",
        name: "Interactive Data Visualizations and Society",
        icon: "fas fa-chart-bar",
      },
      {
        code: "Prod",
        name: "Working on a start-up idea basically full-time :)",
        icon: "fas fa-rocket",
      },
    ],
  },
  {
    id: "2",
    semester: "Fall",
    year: 2022,
    special: "Study Abroad at Oxford University",
    courses: [
      {
        code: "",
        name: "Computational Journalism and Media Studies",
        icon: "fas fa-newspaper",
      },
      {
        code: "",
        name: "International Relations Theory and Conflict Resolution",
        icon: "fas fa-globe",
      },
    ],
  },
  {
    id: "3",
    semester: "Spring",
    year: 2022,
    courses: [
      {
        code: "6.033",
        name: "Computer Systems Engineering",
        icon: "fas fa-cogs",
      },
      {
        code: "15.392",
        name: "Scaling Entrepreneurial Ventures",
        icon: "fas fa-chart-line",
      },
      {
        code: "21M.385",
        name: "Interactive Music Systems",
        icon: "fas fa-music",
      },
      {
        code: "21G.104",
        name: "Chinese IV",
        icon: "fas fa-language",
      },
      {
        code: "ES.010",
        name: "Chemistry of Sports",
        icon: "fas fa-flask",
      },
    ],
  },
  {
    id: "4",
    semester: "Fall",
    year: 2021,
    courses: [
      {
        code: "6.843",
        name: "Robotic Manipulation",
        icon: "fas fa-robot",
      },
      {
        code: "11.111",
        name: "Leadership in Negotiation",
        icon: "fas fa-handshake",
      },
      {
        code: "15.378",
        name: "Building an Entrepreneurial Venture",
        icon: "fas fa-lightbulb",
      },
      {
        code: "21M.600",
        name: "Introduction to Acting",
        icon: "fas fa-theater-masks",
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
    description: "Tech Conference",
  },
  {
    id: "2",
    name: "Mumbai",
    coordinates: { x: 170, y: 200 },
    color: "blue",
    description: "Startup Visit",
  },
  {
    id: "3",
    name: "Bangalore",
    coordinates: { x: 210, y: 280 },
    color: "green",
    description: "Innovation Hub",
  },
  {
    id: "4",
    name: "Goa",
    coordinates: { x: 160, y: 240 },
    color: "yellow",
    description: "Retreat",
  },
  {
    id: "5",
    name: "Kolkata",
    coordinates: { x: 250, y: 180 },
    color: "purple",
    description: "Cultural Exploration",
  },
];

export const mediaItems: MediaItem[] = [
  {
    id: "spotify",
    type: "spotify",
    title: "My Coding Playlist",
    description: "The beats that fuel my programming sessions and late-night coding marathons 🎧",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
  {
    id: "youtube",
    type: "youtube",
    title: "My Latest Project Demo",
    description: "Check out my recent tech project walkthrough and development process!",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
];
