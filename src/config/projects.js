// 1. Web Development
// 2. Mobile App
// 4. Game
// 5. Machine Learning
// 6. DevOp
// 7. Embedded System
// 8. Prototype
// 9. Plugin
// 10. Interactive Media

export const projects = [
  {
    name: "Socratic",
    subtext: "Web Development",
    overview: "AI tools and tutor messaging system to help students excel.",
    details: {
      description: "Socratic is an educational platform that leverages AI models running on Groq and Firebase services to provide tutoring assistance. It helps students get guided instruction, explanations, and messaging with human tutors when needed.",
      key_features: [
        "AI-powered Q&A assistant for real-time homework help.",
        "Tutor messaging system with history tracking.",
        "Smart suggestions and follow-up questions to deepen understanding.",
        "User authentication and moderation features."
      ],
      tech_stack: [
        "Groq (LLM inference)",
        "Firebase (Authentication, Data Storage)",
        "Javascript (Interactivity)",
        "CSS3 (Styling)"
      ],
      gallery: "https://example.com/socratic-gallery",
      links: {
        live: "https://socratic.example.com",
        github: "https://github.com/yourname/socratic"
      }
    }
  },
  {
    name: "Pirate Shore",
    subtext: "Web Development",
    overview: "A streaming service offering free access to films.",
    details: {
      description: "Pirate Shore is a film streaming platform that offers a curated selection of movies available to watch for free, with a focus on smooth browsing, responsive UI, and accessible design. Users can search for titles, view detailed movie information, and stream content directly from the web app.",
      key_features: [
        "Free streaming of curated films with no signup required.",
        "Responsive UI for seamless navigation.",
        "Movie details with summaries, casting list, and reccomendations.",
        "Search and filter capabilities to find content quickly."
      ],
      tech_stack: [
        "React (Frontend UI)",
        "REST API (Backend Integration)",
        "Tailwind (Styling)"
      ],
      gallery: "https://example.com/pirate-shore-gallery",
      links: {
        live: "https://pirateshore.example.com",
        github: "https://github.com/yourname/pirate-shore"
      }
    }
  },  
  {
    name: "Sound Mania",
    subtext: "Game",
    overview: "A rhythm game with different modes, difficulties, and scoring system.",
    details: {
      description: "Sound Mania is a browser-based rhythm game that challenges players with dynamic gameplay, varying difficulty levels, and multiple game modes. Players hit notes in sync with the music, earning scores based on timing and accuracy. The game features smooth animations, custom controls, and real-time feedback.",
      key_features: [
        "Multiple game modes with unique gameplay mechanics.",
        "Difficulty levels ranging from easy to hard.",
        "Scoring system based on timing accuracy and streaks.",
        "Responsive keyboard controls and audio sync.",
        "Visual effects and feedback for immersive gameplay."
      ],
      tech_stack: [
        "Javascript (Core Logic)",
        "HTML5 Canvas (Rendering)",
        "CSS3 (Styling)"
      ],
      gallery: "https://example.com/sound-mania-gallery",
      links: {
        live: "https://soundmania.example.com",
        github: "https://github.com/yourname/sound-mania"
      }
    }
  },  
  {
    name: "Self Driving Car",
    subtext: "Game",
    overview: "An interactive and customizable self-driving car simulator.",
    details: {
      description: "A browser-based simulation that demonstrates the principles of neural networks and evolutionary algorithms applied to autonomous vehicles. Built with Javascript and based on the popular guide by FreeCodeCamp. This version introduces user-configurable parameters such as car population size and mutation rate, allowing users to experiment with AI training dynamics in real-time.",
      key_features: [
        "Neural network-based decision-making for each car.",
        "User controls to adjust number of cars and mutation rate.",
        "Local storage for saving top-performing AI models."
      ],
      tech_stack: [
        "Javascript (Core Logic)",
        "HTML5 Canvas (Rendering)",
        "CSS3 (Styling)",
        "LocalStorage API (Persistence of Trained Models)"
      ],
      gallery: "https://example.com/self-driving-car-gallery",
      links: {
        live: "https://selfdrivingcar.example.com",
        github: "https://github.com/yourname/self-driving-car"
      }
    }
  },  
  {
    name: "Historical Timelapse",
    subtext: "Interactive Media",
    overview: "Timeline of major world empires with GDP and population data.",
    details: {
      description: "Historical Timelapse is an interactive data visualization tool that charts the rise and fall of major world empires over time. It uses a custom dataset to plot key metrics like GDP and population across centuries. Empires are color-coded and placed on a scrolling timeline, allowing users to explore global history.",
      key_features: [
        "Interactive timeline of historical empires with animated transitions.",
        "Color-coded visualization of empires for quick comparison.",
        "Custom dataset featuring GDP and population estimates over time.",
        "Hover and click interactions to display detailed info per empire."
      ],
      tech_stack: [
        "JavaScript (Interactivity)",
        "SVG Maps (Rendering)",
        "CSS3 (Styling)"
      ],
      gallery: "https://example.com/historical-timelapse-gallery",
      links: {
        live: "https://historicaltimelapse.example.com",
        github: "https://github.com/yourname/historical-timelapse"
      }
    }
  },  
  {
    name: "Chef Up",
    subtext: "Web Development",
    overview: "A recipe finder with search features and the ability to save recipes.",
    details: {
      description: "Chef Up is a sleek, responsive recipe discovery app that allows users to search for recipes by ingredients or keywords, and save their favorite recipes for later access.",
      key_features: [
        "Recipe search by ingredient, cuisine, or dish name.",
        "Detailed recipe pages with ingredients, steps, and cooking time.",
        "Save and manage favorite recipes locally.",
        "Responsive interface optimized for both desktop and mobile."
      ],
      tech_stack: [
        "React (Frontend)",
        "Tailwind CSS (Styling)",
        "JavaScript (Interactivity)",
        "LocalStorage API (Saving Logic)"
      ],
      gallery: "https://example.com/chef-up-gallery",
      links: {
        live: "https://chefup.example.com",
        github: "https://github.com/yourname/chef-up"
      }
    }
  },  
  {
    name: "Coin Dash",
    subtext: "Web Development",
    overview: "View and search Crypto and NFT data within a sleek app.",
    details: {
      description: "Coin Dash is a modern crypto dashboard that integrates the CoinGecko API to display live cryptocurrency and NFT data. Users can browse market trends, search specific coins or tokens, and explore price, volume, and market cap data.",
      key_features: [
        "Live crypto and NFT price data pulled from CoinGecko API.",
        "Search and filter functionality for specific tokens.",
        "Responsive dashboard layout with charts and key stats."
      ],
      tech_stack: [
        "React (Frontend)",
        "CoinGecko API (Live Data)",
        "Tailwind CSS (Styling)"
      ],
      gallery: "https://example.com/coin-dash-gallery",
      links: {
        live: "https://coindash.example.com",
        github: "https://github.com/yourname/coin-dash"
      }
    }
  },  
  {
    name: "The Daily Quill",
    subtext: "Web Development",
    overview: "News app providing daily updates and a search system.",
    details: {
      description: "The Daily Quill is a responsive news application that curates the latest headlines and allows users to search across a wide range of topics. It delivers a clean reading experience with quick access to stories from various sources.",
      key_features: [
        "Daily news feed with auto-refreshing headlines.",
        "Search functionality by topic or keyword.",
        "Article gallerys with links to full content.",
      ],
      tech_stack: [
        "React (Frontend)",
        "Tailwind CSS (Styling)",
        "News API (Live Data)",
      ],
      gallery: "https://example.com/daily-quill-gallery",
      links: {
        live: "https://dailyquill.example.com",
        github: "https://github.com/yourname/the-daily-quill"
      }
    }
  },  
  {
    name: "Claustrophobia",
    subtext: "Game",
    overview: "An immersive 3D horror game simulating dark confined spaces.",
    details: {
      description: "Claustrophobia is a browser-based 3D horror game that simulates the tension of navigating through dark, confined spaces. The game uses movement mechanics to deliver an atmospheric and suspenseful experience.",
      key_features: [
        "Immersive 3D environment rendered with Three.js.",
        "Dynamic lighting and shadow effects.",
        "Sound-driven environmental interactions.",
      ],
      tech_stack: [
        "Three.js (Rendering)",
      ],
      gallery: "https://example.com/claustrophobia-gallery",
      links: {
        live: "https://claustrophobia.example.com",
        github: "https://github.com/yourname/claustrophobia"
      }
    }
  },  
  {
    name: "Stem Garden Defense",
    subtext: "Game",
    overview: "Tower defense game showcased at Wonderland Hackathon.",
    details: {
      description: "Stem Garden Defense is a browser-based tower defense game developed for the Wonderland Hackathon. It features a unique garden theme where players strategically place towers to defend against waves of enemies.",
      key_features: [
        "Wave-based enemy system with increasing difficulty.",
        "Resource management for strategic tower placement.",
        "Smooth animations and interactive UI."
      ],
      tech_stack: [
        "JavaScript (Interactivity)",
        "HTML5 Canvas (Rendering)",
        "CSS3 (Styling)"
      ],
      gallery: "https://example.com/stem-garden-defense-gallery",
      links: {
        live: "https://stemgarden.example.com",
        github: "https://github.com/yourname/stem-garden-defense"
      }
    }
  },  
  {
    name: "Editify",
    subtext: "Web Development",
    overview: "Universal file editor web app allowing online file editing and saving.",
    details: {
      description: "Editify is a web-based file editor that supports editing a wide range of text-based formats. It allows users to upload, edit, and download files directly in the browser. It supports syntax highlighting, file gallerys, and a streamlined editing interface.",
      key_features: [
        "Upload and edit various file formats in-browser.",
        "Download or overwrite edited files locally.",
        "Lightweight and responsive UI."
      ],
      tech_stack: [
        "JavaScript (Interactivity)"
      ],
      gallery: "https://example.com/editify-gallery",
      links: {
        live: "https://editify.example.com",
        github: "https://github.com/yourname/editify"
      }
    }
  },  
  {
    name: "AFH Ticket System",
    subtext: "Web Development",
    overview: "Automated ticketing system streamlining management and tracking.",
    details: {
      description: "AFH Ticket System is an internal support ticketing platform designed to streamline the process of submitting, managing, and resolving tickets. It supports real-time updates, user authentication, and status tracking for efficient management.",
      key_features: [
        "Ticket submission form with validation.",
        "Real-time updates and ticket status tracking.",
        "User authentication for role-based access.",
        "Firebase backend for storage and data sync."
      ],
      tech_stack: [
        "Firebase (Authentication, Data Storage)",
        "JavaScript (Interactivity)"
      ],
      gallery: "https://example.com/afh-ticket-gallery",
      links: {
        live: "https://afhticketsystem.example.com",
        github: "https://github.com/yourname/afh-ticket-system"
      }
    }
  },  
  {
    name: "Chrominance",
    subtext: "Plugin",
    overview: "Tool helping designers identify colors and find matching palettes.",
    details: {
      description: "Chrominance is a lightweight browser extension built with jQuery that helps designers and developers identify colors on any webpage. It offers matching palette suggestions, accessibility contrast checks, and direct export of color themes.",
      key_features: [
        "Color picker tool for any element on the page.",
        "Palette suggestions and harmony guides.",
        "Contrast ratio checker for accessibility.",
      ],
      tech_stack: [
        "jQuery (DOM interaction)",
        "CSS3 (Styling)"
      ],
      gallery: "https://example.com/chrominance-gallery",
      links: {
        live: "https://chrominance.example.com",
        github: "https://github.com/yourname/chrominance"
      }
    }
  },  
  {
    name: "BLS Hack Club",
    subtext: "Web Development",
    overview: "Web Development to inspire learning and resource usage for coding enthusiasts at BLS.",
    details: {
      description: "BLS Hack Club is a student-led Web Development built for the Boston Latin School Hack Club. It aims to motivate students to learn coding through shared resources, project showcases, and meeting announcements. It uses jQuery for interactivity and encourages peer-to-peer collaboration.",
      key_features: [
        "Announcements and event calendar for club meetings.",
        "Resource library for tutorials, tools, and coding guides.",
        "Showcase section for student projects.",
        "Interactive and easy-to-navigate layout."
      ],
      tech_stack: [
        "jQuery (Interactivity)",
        "CSS3 (Styling)"
      ],
      gallery: "https://example.com/bls-hackclub-gallery",
      links: {
        live: "https://blshackclub.example.com",
        github: "https://github.com/yourname/bls-hack-club"
      }
    }
  }
];