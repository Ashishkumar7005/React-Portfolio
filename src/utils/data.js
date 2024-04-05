import chatapp from '../assets/chatapp.png'
import reactbg from '../assets/reactbg.webp'
import rejouice from '../assets/rejouice.jpg'



export const SKILLS = [
 {
    title: "Frontend",
    icon: "./assets/images/frontend.png",
    skills:[
        {skill:"HTML", percentage: "80%"},
        {skill:"CSS", percentage: "85%"},
        {skill:"Javascript", percentage: "70%"},
        {skill:"React js", percentage: "80%"},
    ],
 },
 {
    title: "Backend",
    icon: "./assets/images/setting.png",
    skills:[
        {skill:"Node js", percentage: "70%"},
        {skill:"Express js", percentage: "65%"},
    ],
 },
 {
    title: "Tools",
    icon: "./assets/images/tool.png",
    skills:[
        {skill:"Git & Github", percentage: "85%"},
        {skill:"Visual Studio Code", percentage: "75%"},
        {skill:"Responsive Design", percentage: "70%"},
    ],
 },
 {
    title: "Database",
    icon: "./assets/images/hosting.png",
    skills:[
        {skill:"SQL", percentage: "80%"},
        {skill:"MongoDB", percentage: "85%"},
    ],
 },

];

export const projects = [
    {
      name: "Chat App",
      description:
      "Built a real-time chat application using MERN stack and Socket.io for seamless communication, enabling users to exchange messages instantly.",
        tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://chatapp-ww03.onrender.com/login",
    },
    {
      name: "Portfolio Website",
      description:
      "Developed a dynamic portfolio website using React, Tailwind CSS, and integrated captivating Three.js features for enhanced visual appeal and interactivity.",
       tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: reactbg,
      source_code_link: "https://weather-api-flax.vercel.app/",
    },
    {
      name: "Rejoice",
      description:
      "Crafted an award-winning website, a Rejouice clone, featuring animations powered by GSAP and locomotive, enhancing user experience with seamless and stunning design.",
          tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: rejouice,
      source_code_link: "https://rejoice-ten.vercel.app/",
    },
  
  ];