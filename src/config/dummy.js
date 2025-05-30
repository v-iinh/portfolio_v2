export const dummy = [
  {
    title: "Socratic",
    subtext: "Groq + Firebase",
    description: "AI tools and tutor messaging system to help students excel.",
    details: {
      overview: "Socratic is an educational platform that leverages AI models running on Groq hardware and Firebase services to provide real-time tutoring assistance. It helps students get instant answers, explanations, and messaging with human tutors when needed.",
      key_features: [
        "AI-powered Q&A assistant for real-time homework help.",
        "Tutor messaging system with history tracking.",
        "Smart suggestions and follow-up questions to deepen understanding.",
        "User authentication and progress tracking using Firebase."
      ],
      tech_stack: [
        "Groq (LLM inference)",
        "Firebase (Auth, Firestore, Hosting)",
        "React (Frontend UI)",
        "Tailwind CSS (Styling)",
        "Vite (Build Tool)"
      ],
      preview: "https://example.com/socratic-preview",
      links: {
        live: "https://socratic.example.com",
        github: "https://github.com/yourname/socratic"
      }
    }
  },
  ...[
    "Pirate Shore", "Sound Mania", "Self Driving Car", "Historical Timelapse", "Chef Up",
    "Coin Dash", "The Daily Quill", "Claustrophobia", "Stem Garden Defense", "Editify",
    "AFH Ticket System", "Chrominance", "BLS Hack Club"
  ].map(title => {
    const id = title.toLowerCase().replace(/\s+/g, "-");
    const compact = title.toLowerCase().replace(/\s+/g, "");
    return {
      title,
      subtext: "React + JavaScript", // you can customize this per project
      description: "A project that leverages modern web technologies.",
      details: {
        overview: `${title} is a web application that solves a specific problem using modern web technologies.`,
        key_features: [
          `Interactive and user-friendly design tailored for ${title.toLowerCase()} use case.`,
          "Responsive layout optimized for desktop and mobile.",
          "Seamless integration with third-party APIs or services.",
          "Focus on performance and accessibility."
        ],
        tech_stack: [
          "React",
          "JavaScript",
          "CSS Modules",
          "Vite"
        ],
        preview: `https://example.com/${id}-preview`,
        links: {
          live: `https://${compact}.example.com`,
          github: `https://github.com/yourname/${id}`
        }
      }
    };
  })
];
