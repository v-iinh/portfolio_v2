import uuid from "react-uuid";

const projects = [
  {
    id: uuid(),
    title: "Checkmate",
    description: "Sign up portal for Checkmate Africa community",
    github: "https://github.com/kadetXx/checkmate",
    live: "https://checkmate.africa/",
    stack: "React + Styled Components"
  },
  {
    id: uuid(),
    title: "Birdbox",
    description: "Social application with Real time Messaging",
    github: "https://github.com/kadetXx/birdbox",
    live: "https://birdbox.space/",
    stack: "Vue + Socket.io + Express"
  },
  {
    id: uuid(),
    title: "EndSars",
    description: "Web app to support the #EndSARS campaign",
    github: "https://github.com/kadetXx/endsars",
    live: "https://endsars.vercel.app/",
    stack: "React"
  },
  {
    id: uuid(),
    title: "Shoppies",
    description: "Movie Awards Nomination App",
    github: "https://github.com/kadetXx/shoppies",
    live: "https://shoppiesawards.netlify.app/",
    stack: "React + SASS"
  },
  {
    id: uuid(),
    title: "Vectorly",
    description: "Draw basic shapes with SVG",
    github: "https://github.com/kadetXx/vectorly",
    live: "https://vectorly.kadetxx.vercel.app/",
    stack: "React"
  },
  {
    id: uuid(),
    title: "Animepanda",
    description: "Mobile App landing page",
    github: "https://github.com/kadetXx/animepanda",
    live: "https://animepanda.herokuapp.com",
    stack: "Sass + Javascript + PHP"
  },
];

export default projects;