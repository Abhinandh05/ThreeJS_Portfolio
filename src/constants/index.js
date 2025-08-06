export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Abhinandh was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Abhinandh’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Abhinandh was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Next Level Nexus - Career Development Platform',
        desc: 'Next Level Nexus is a powerful platform that helps students bridge the gap between education and employment. It features resume building, coding practice, AI mock interviews, job applications, and student guidance.',
        subdesc:
            'Built with the MERN stack, Tailwind CSS, and Clerk, the platform integrates Cloudinary, Multer, and Gemini AI for an advanced mock interview system, resume builder, and student-focused features.',
        href: 'https://next-level-nexus-1npa.onrender.com',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/NextLevel.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            { id: 1, name: 'React.js', path: '/assets/react.svg' },
            { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
            { id: 3, name: 'NodeJs', path: '/assets/nodejs.svg' },
            { id: 4, name: 'Mongodb', path: '/assets/mongodb.svg' },
        ],
    },
    {
        title: 'VOCAL HIRE - AI Mock Interview Agent',
        desc: 'VOCAL HIRE is an AI-powered interview assistant that simulates real interview environments. It uses voice and camera to ask job-specific questions and gives feedback based on user responses.',
        subdesc:
            'This intelligent tool uses Gemini API and Vapi workflow to handle interviews dynamically. It captures responses via webcam and microphone, then generates personalized feedback, with interview history saved.',
        href: 'https://ai-mock-interview-two-kappa.vercel.app/',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            { id: 1, name: 'NextJs', path: '/assets/Next.js.svg' },
            { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
            { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
            { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
        ],
    },
    {
        title: 'CodeCast - Developer Help Forum with Recording',
        desc: 'CodeCast is a developer forum like Stack Overflow with an extra twist—users can record and post their screen while asking or answering questions, making debugging and explanation clearer.',
        subdesc:
            'Built using MERN, Cloudinary, and screen recording libraries, CodeCast helps developers share coding problems more visually. It also includes a job portal section for developers.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/Code.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            { id: 1, name: 'NextJs', path: '/assets/Next.js.svg' },
            { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
            { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
            { id: 4, name: 'PostgresSql', path: '/assets/postgresql.svg' },
        ],
    },
    {
        title: 'HER_FITNESS - Smart Gym Management System',
        desc: 'HER_FITNESS is a full-featured system that helps gym owners manage memberships, payments, biometric attendance, and automated WhatsApp reminders.',
        subdesc:
            'Built using MERN stack, RTK Query, Cloudinary, and Baileys API, it supports plan tracking, revenue visualization, and expiry notifications with PDF reports.',
        href: 'https://gym-frontend-3p8x.onrender.com',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/HER.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            { id: 1, name: 'React.js', path: '/assets/react.svg' },
            { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
            { id: 3, name: 'NodeJs', path: '/assets/nodejs.svg' },
            { id: 4, name: 'Mongodb', path: '/assets/mongodb.svg' },
        ],
    },
    {
        title: '3D Portfolio - Interactive Three.js Experience',
        desc: 'A visually immersive 3D portfolio that showcases projects using GSAP animations, floating cards, and smooth camera transitions powered by Three.js.',
        subdesc:
            'Crafted with React, Three.js, Tailwind CSS, and Framer Motion, this portfolio delivers a futuristic experience with animated project previews and dynamic user interactions.',
        href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/Port.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            { id: 1, name: 'React.js', path: '/assets/react.svg' },
            { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
            { id: 3, name: 'Three.js', path: '/assets/Three.js.svg' },
            { id: 4, name: 'GSAP', path: '/assets/gsap-greensock.svg' },
        ],
    }

];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-75, 15, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'ICT Academy of Kerala',
        pos: 'FULLSTACK DEVELOPER',
        duration: '2024 - 2025',
        title: "Completed a MERN Stack internship at ICT Academy of Kerala, where I gained hands-on experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Worked on real-world projects, improved problem-solving skills, and collaborated in an agile development environment.",
        icon: '/assets/ict.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'NextLevel Nexus',
        pos: 'Full Stack Developer',
        duration: '2023 - 2024',
        title: "NextLevel Nexus is an all-in-one career development platform designed to bridge the gap between education and employment. I built features including an AI-powered mock interview system, resume builder, job portal, coding practice area, and chatbot support, helping students prepare for IT careers effectively.",
        icon: '/assets/NextLevel.png',
        animation: 'salute',
    },
    {
        id: 3,
        name: 'FREELANCER',
        pos: 'FULLSTACK DEVELOPER',
        duration: '2025 - Present',
        title: "Built a comprehensive Gym Management System as a freelance project. The system includes member registration, membership tracking, plan renewals, revenue analysis, and biometric attendance integration. Developed using the MERN stack with a focus on usability, performance, and scalability.",
        icon: '/assets/HER.png',
        animation: 'clapping',
    },


];