import { meta, shopify, starbucks, tesla, beecrowd, bgc, daffodil } from "/public/img/skills";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    firebase,
    daisyui,
    bootstrap,
} from "/public/img/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Frontend",
    },
    {
        imageUrl: daisyui,
        name: "DaisyUI",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Higher Secondary Certificate",
        company_name: "Bogura Government College, Bangladesh",
        icon: bgc,
        iconBg: "#accbe1",
        date: "March 2017 - April 2019",
        points: [
            "Graduated high-school in 2019.",
        ],
    },
    {
        title: "Bachelor's in Computer Science",
        company_name: "Daffodil International University, Bangladesh",
        icon: daffodil,
        iconBg: "#b7e4c7",
        date: "Jan 2021 - Present",
        points: [
            "So why computer science? well, when I was a younger, I used play a lot of pc-games. and as I grew up, i wanted to recreate those fantasy worlds I used to immerge myself in. That was what motivated me to start coding at first.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Throughout my university years, I picked up a lot of skills. For example, C, Python, Javascript to name a few.",
            "I was a member of the Chess club, and although my highest rating was 1300, I still have a special place for the game in my heart.",
            "I had also engaged in a lot of problem solving. I've solved over 200 problems on websites such as beecrowd, codeforce, and leetcode"
        ],
    },
    {
        title: "BeeCrowd",
        company_name: "Problem Solving",
        icon: beecrowd,
        iconBg: "#fbc3bc",
        date: "July 2021 - Present",
        points: [
            "Solved 169 Problems | beecrowd.com",
            "Highest Weekly Rank: 36th | beecrowd.com",
            "Place: 7,565",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: '/public/img/projects/tech-play.png',
        theme: 'btn-back-blue',
        name: 'Tech-play | Event Managing Website',
        description: 'Best place to get the latest updates on ground-breaking state-of-the-art technologies & Games. Breathtaking visuals with mesmerizing animations. Secure, fast, seamless user experience',
        link: 'https://tech-play-f948c.web.app/',
    },
    {
        iconUrl: '/public/img/projects/elysium.png',
        theme: 'btn-back-red',
        name: 'Elysium | Restaurant',
        description: 'Stunning visuals with a smooth, and user-friendly interface. Users can both buy and sell, order and promote their delicious homemade food in seconds. Secure Firebase authentication with both email / password and google sign-in options.',
        link: 'https://elysium-5dc18.web.app/',
    },
    {
        iconUrl: '/public/img/projects/midnight-tales.png',
        theme: 'btn-back-black',
        name: 'Midnight Tales | Movie Rating Website',
        description: 'All-in-one movie place forlatest blockbusterrelease. Secure Firebase authentication with both email / password and google sign-in options',
        link: 'https://midnight-tales-32469.web.app/',
    },
    {
        iconUrl: '/public/img/projects/swift-parcel.png',
        theme: 'btn-back-green',
        name: 'Swift Parcel | Delivery Website',
        description: 'separate dashboards forthree different types of users: 1. Admin, 2. Users, & 3. Delivery Man. Users can review and rate the service, and Admins can make anyone admin or delivery man with a single click, and also access statistics & information on all users and delivery men.',
        link: 'https://swift-parcel-35948.web.app/',
    }
];