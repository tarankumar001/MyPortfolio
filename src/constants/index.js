// // index.js
// export const servicesData = [
//   {
//     title: "FullStack Development",
//     description:
//       "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
//     items: [
//       {
//         title: "Backend Engineering",
//         description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
//       },
//       {
//         title: "Frontend Excellence",
//         description: "(React, Vue, TypeScript, Interactive UI/UX)",
//       },
//       {
//         title: "Database Design",
//         description: "(SQL/NoSQL Optimization, Scalable Structures)",
//       },
//     ],
//   },
//   {
//     title: "DevOps & Cloud Solutions",
//     description:
//       "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
//     items: [
//       {
//         title: "CI/CD Pipelines",
//         description: "(GitHub Actions, Docker, Kubernetes)",
//       },
//       {
//         title: "Server Management ",
//         description: "(Linux, Nginx, Load Balancing)",
//       },
//       {
//         title: "Performance Tuning",
//         description: "(Caching, Compression, Lighthouse 90+ Scores)",
//       },
//     ],
//   },
//   {
//     title: "Security & Optimization",
//     description:
//       "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
//     items: [
//       {
//         title: "Code Audits",
//         description: "(Refactoring, Tech Debt Cleanup)",
//       },
//       {
//         title: "Pen Testing",
//         description: "(Vulnerability Assessments)",
//       },
//       {
//         title: "SEO Tech Stack",
//         description: "(SSR, Metadata, Structured Data)",
//       },
//     ],
//   },
//   {
//     title: "Web & Mobile Apps",
//     description:
//       "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
//     items: [
//       {
//         title: "Cross-Platform Apps",
//         description: "(Single codebase for iOS/Android/Web)",
//       },
//       {
//         title: "PWAs",
//         description: "(Offline mode, Push Notifications)",
//       },
//       {
//         title: "E-Commerce",
//         description: "(Checkout flows, Payment Gateways, Inventory APIs)",
//       },
//     ],
//   },
// ];
export const projects = [
  {
    id: 1,
    name: "EchoHire",
    description:
      "AI-powered interview prep platform built with Next.js and TypeScript. Practice coding interviews with real-time feedback.",
    href: "https://github.com/tarankumar001/EchoHire",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Todo (MERN)",
    description:
      "Full-stack Todo app with JWT auth, animated dark/light mode, and CRUD operations. Built with the MERN stack and deployed on Render.",
    href: "https://github.com/tarankumar001/Todo",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "MongoDB" },
      { id: 2, name: "Express.js" },
      { id: 3, name: "React" },
      { id: 4, name: "Node.js" },
    ],
  },
  {
    id: 3,
    name: "Solar System",
    description:
      "A visual and educational representation of the solar system built with HTML, CSS, and JavaScript.",
    href: "https://github.com/tarankumar001/solar-system",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
    ],
  },
  {
    id: 4,
    name: "QR Code Generator",
    description:
      "A simple JavaScript-based tool to generate QR codes dynamically from user input.",
    href: "https://github.com/tarankumar001/qr-code-genrator",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
    ],
  },
  {
    id: 5,
    name: "Temperature Converter",
    description:
      "Convert temperatures between Celsius and Fahrenheit instantly with a clean UI.",
    href: "https://github.com/tarankumar001/temperature-converter",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
    ],
  },
  {
    id: 6,
    name: "My Portfolio",
    description:
      "Your personal portfolio site built using React and Vite, showcasing projects, skills, and contact details.",
    href: "https://github.com/tarankumar001/MyPortfolio",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Vite" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
];

export const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/tarankumar_p/",
    color: "#E1306C", // Instagram pink
  },
  {
    name: "Medium",
    href: "https://medium.com/@ptarankumar",
    color: "#00ab6c", // Medium green
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tarankumar-p-954948257/",
    color: "#0077B5", // LinkedIn blue
  },
  // {
  //   name: "GitHub",
  //   href: "https://github.com/tarankumar001",
  //   color: "#333", // GitHub gray
  // },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@tarankumar",
    color: "#FF0000", // YouTube red
  },
  {
    name: "Twitter",
    href: "https://twitter.com/tarankumar001",
    color: "#1DA1F2", // Twitter blue
  },
  {
    name: "Discord",
    href: "https://discord.gg/yourinvite",
    color: "#5865F2", // Discord blurple
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/yourprofile",
    color: "#1877F2", // Facebook blue
  },
];
