export const portfolioData = {
  personal: {
    name: "Jagath Krishna",
    title: "React.js Developer",
    subtitle: "Frontend & Full-Stack MERN Specialist",
    email: "jagathkrishna900@gmail.com",
    phone: "+91 7306749597",
    phoneDisplay: "+91 73067 49597",
    location: "Perumpilavu, Thrissur, Kerala - 680519",
    availability: "Immediate Joining",
    github: "https://github.com/jagathkrishna123",
    githubDisplay: "github.com/jagathkrishna123",
    linkedin: "https://linkedin.com/in/jagath-krishna",
    portfolio: "https://jagathkrishna.vercel.app",
    about:
      "Passionate React.js Developer with industry experience in architecting and delivering high-performance, responsive, and dynamic web applications. Specialized in crafting clean, reusable component hierarchies, handling state management, implementing React Hooks, and seamlessly integrating RESTful APIs. Adept at bridging modern frontend aesthetics with robust backend systems to deliver intuitive user experiences.",
    highlights: [
      { label: "Role", value: "React.js Developer" },
      { label: "Core Stack", value: "React, Tailwind, MERN" },
      { label: "Availability", value: "Immediate Joining" },
      { label: "Location", value: "Thrissur / Calicut, India" },
    ],
    stats: [
      { number: "1+", label: "Years Experience", detail: "Production & MERN internship" },
      { number: "3+", label: "Full-Stack Projects", detail: "E-Commerce, AI & Real-time Web" },
      { number: "100%", label: "Responsive Design", detail: "Mobile-first Tailwind CSS" },
      { number: "Ready", label: "Immediate Joining", detail: "Zero notice period" },
    ]
  },

  skills: {
    frontend: [
      { name: "React.js", level: "Advanced", icon: "react", highlighted: true },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "javascript", highlighted: true },
      { name: "Tailwind CSS", level: "Expert", icon: "tailwind", highlighted: true },
      { name: "Next.js", level: "Intermediate", icon: "next" },
      { name: "HTML5 & CSS3", level: "Expert", icon: "html" },
      { name: "Vite", level: "Advanced", icon: "vite" },
      { name: "Angular", level: "Intermediate", icon: "angular" },
      { name: "Bootstrap", level: "Advanced", icon: "bootstrap" },
      { name: "Framer Motion", level: "Intermediate", icon: "animation" },
      { name: "GSAP", level: "Intermediate", icon: "animation" },
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "node", highlighted: true },
      { name: "Express.js", level: "Advanced", icon: "express", highlighted: true },
      { name: "MongoDB", level: "Advanced", icon: "mongodb", highlighted: true },
      { name: "RESTful APIs", level: "Expert", icon: "api", highlighted: true },
      { name: "JWT Authentication", level: "Advanced", icon: "security" },
      { name: "Socket.IO", level: "Intermediate", icon: "realtime" },
      { name: "Multer & Cloudinary", level: "Advanced", icon: "upload" },
      { name: "Firebase", level: "Intermediate", icon: "firebase" },
      { name: "SQL", level: "Intermediate", icon: "database" },
    ],
    stateAndTools: [
      { name: "React Router", level: "Advanced" },
      { name: "Context API", level: "Advanced" },
      { name: "React Redux", level: "Intermediate" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Clean Architecture", level: "Advanced" },
      { name: "Performance Optimization", level: "Advanced" },
    ],
    aiTools: [
      { name: "Cursor AI", description: "AI-native accelerated development" },
      { name: "GitHub Copilot", description: "Intelligent code generation & refactoring" },
      { name: "OpenAI API", description: "Prompt engineering, LLM integrations & agents" },
      { name: "OpenRouter LLMs", description: "Multi-model orchestration & custom prompts" },
    ]
  },

  experience: [
    {
      role: "React Js Developer",
      company: "Scanntek Solutions",
      location: "Kinfra Techno Industrial Park, Calicut",
      period: "08/2025 – Present",
      status: "Current Role",
      type: "Full-Time",
      description:
        "Building mission-critical client and internal web applications, focusing on scalable frontend architectures, component reusability, and dynamic API integrations.",
      achievements: [
        "Architected and developed modular, reusable UI components and fully responsive web pages using React.js, modern JavaScript (ES6+), and Tailwind CSS.",
        "Managed application routing and centralized state across multi-tenant feature modules using React Router and React Context API.",
        "Integrated high-frequency RESTful APIs with resilient error boundaries, loading skeletons, and dynamic data binding.",
        "Optimized virtual DOM rendering performance and implemented clean code patterns, reducing initial page load times noticeably.",
        "Investigated and resolved complex UI/UX edge cases, collaborating closely in cross-functional agile teams with Git/GitHub PR workflows."
      ],
      skillsUsed: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Context API", "React Router", "RESTful APIs", "Git", "GitHub"]
    },
    {
      role: "MERN Full Stack Intern",
      company: "Luminar Technolabs",
      location: "Kochi, Kerala, India",
      period: "2023 – 2024",
      status: "Completed",
      type: "Certification & Internship",
      description:
        "Completed an intensive 8-month full-stack web development program focused on full-cycle application architecture with MongoDB, Express.js, React.js, and Node.js.",
      achievements: [
        "Constructed end-to-end full stack web applications with custom REST API design, schema modeling, and client routing.",
        "Implemented user authentication flows incorporating JSON Web Tokens (JWT) and encrypted password storage.",
        "Hands-on database architecture with MongoDB Atlas and Mongoose ODM, including complex relational lookups and aggregations.",
        "Mastered state management, custom hook creation, and responsive styling systems."
      ],
      skillsUsed: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs", "Postman", "CSS3"]
    }
  ],

  projects: [
    {
      id: "ecommerce-platform",
      title: "Grocery E-Commerce Platform (MERN)",
      year: "2026",
      category: "Full Stack MERN",
      featured: true,
      tagline: "High-performance full-stack grocery shopping platform with real-time stock reduction and dual-role architecture.",
      summary:
        "Developed a complete end-to-end grocery e-commerce solution featuring role-based authorization for Admin and Customers, dynamic inventory tracking, seamless shopping cart, and order lifecycle management.",
      bulletPoints: [
        "Built full-stack architecture using MongoDB, Express.js, React.js, and Node.js, styled with Tailwind CSS for mobile-first responsiveness.",
        "Implemented secure JWT-based authentication and role-based access control (RBAC) separating Admin and Customer privileges.",
        "Engineered Category and Product Management with full CRUD capabilities and integrated Multer for optimized image uploads.",
        "Developed Inventory and Stock Management with automatic atomic stock decrement upon customer checkout.",
        "Constructed Cart, Multi-Address Management, and Order Processing through protected RESTful endpoints.",
        "Implemented category-based filtering, order tracking history, and live stock updates leveraging MongoDB and Context API."
      ],
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Multer", "Context API"],
      metrics: {
        roles: "Admin & Customer",
        auth: "JWT + Protected Routes",
        storage: "Multer Uploads",
        state: "React Context API"
      },
      links: {
        github: "https://github.com/jagathkrishna123",
        demo: "https://github.com/jagathkrishna123"
      }
    },
    {
      id: "ai-question-generator",
      title: "AI Question Generation Platform",
      year: "2026",
      category: "AI & EdTech",
      featured: true,
      tagline: "Intelligent academic platform generating customized assessments, Bloom's Taxonomy questions, and study notes.",
      summary:
        "An AI-powered academic assistant integrating OpenRouter LLM APIs with custom prompt pipelines to generate high-fidelity question papers, MCQs, short/long answers, and notes with PDF export workflows.",
      bulletPoints: [
        "Built a full-stack academic platform using React.js, Node.js, Express.js, and MongoDB.",
        "Integrated OpenRouter LLM APIs with carefully engineered system prompts for high-accuracy note, question, and exam-paper generation.",
        "Engineered configurable question generation supporting MCQ, objective, short, and long-answer formats calibrated to Bloom's Taxonomy levels.",
        "Secured with JWT authentication, cryptographic password hashing, and role-protected administrative and student routes.",
        "Built robust RESTful APIs to persist user libraries, generated question papers, notes, and study guides in MongoDB via Mongoose.",
        "Crafted an interactive React interface featuring an AI chatbot assistant, interactive note viewer, and seamless PDF document export workflows."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenRouter LLM", "Bloom's Taxonomy", "PDF Workflow", "JWT"],
      metrics: {
        ai: "OpenRouter LLMs",
        formats: "MCQ / Objective / Short / Long",
        pedagogy: "Bloom's Taxonomy",
        exports: "PDF Generation"
      },
      links: {
        github: "https://github.com/jagathkrishna123",
        demo: "https://github.com/jagathkrishna123"
      }
    },
    {
      id: "realtime-chat-app",
      title: "Real-Time Chat Application",
      year: "2026",
      category: "Real-Time Web",
      featured: true,
      tagline: "Instant WebSocket communication platform with live typing indicators and media sharing.",
      summary:
        "A responsive real-time messaging application built on Socket.IO and the MERN stack, offering fluid communication, profile customization, and secure media handling via Cloudinary.",
      bulletPoints: [
        "Engineered real-time chat application using the MERN stack with responsive, low-latency UI.",
        "Integrated Socket.IO for bidirectional real-time messaging, instant message dispatch, and active status presence.",
        "Implemented secure JWT authentication with protected WebSocket connection handshakes.",
        "Built user profile management with Cloudinary integration for smooth profile picture uploads and media streaming.",
        "Designed reusable, modular React components styled with Tailwind CSS for high usability across desktop and mobile browsers."
      ],
      technologies: ["React.js", "Socket.IO", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Tailwind CSS", "JWT"],
      metrics: {
        protocol: "WebSockets (Socket.IO)",
        media: "Cloudinary CDN",
        latency: "Sub-second Realtime",
        auth: "JWT Handshake"
      },
      links: {
        github: "https://github.com/jagathkrishna123",
        demo: "https://github.com/jagathkrishna123"
      }
    }
  ],

  education: [
    {
      degree: "M.C.A (Master of Computer Application)",
      institution: "Vidya Academy of Science and Technology, Thalakottukara",
      university: "APJ Abdul Kalam Technological University",
      period: "2021 – 2023",
      score: "7.34 CGPA",
      location: "Thrissur, Kerala, India",
      description:
        "Advanced specialization in software engineering, distributed systems, full-stack web architectures, advanced database management, and object-oriented design."
    },
    {
      degree: "B.C.A (Bachelor of Computer Applications)",
      institution: "Mar Osthatheos College, Perumpilavu",
      university: "University of Calicut",
      period: "2018 – 2021",
      score: "Graduated with Distinction",
      location: "Thrissur, Kerala, India",
      description:
        "Foundation in computer science fundamentals, data structures, algorithms, web technologies, and database design principles."
    }
  ]
};

