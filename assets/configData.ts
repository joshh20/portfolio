export const configData = {
    name: {
        first: "Josh",
        last: "Hittie",
    },
    jobTitle: "Web Developer",
    metadata: {
        description:
            "Josh Hittie is a web developer focused on creating refined interfaces and user experiences.",
        businessHeadshot: "https://joshhittie.com/Business Headshot.jpeg",
    },
    nav: [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Projects",
            link: "/projects",
        },
        {
            name: "Blog",
            link: "/blog",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ],
    pages: {
        homePage: {
            hero: {
                description:
                    "I'm a web developer that loves creating well-designed and responsive websites, ensuring that they look perfect across all screen sizes, from desktops and laptops to tablets and phones!",
                listTitle: "For me, a successful website encompasses:",
                listItems: [
                    "Excellent design",
                    "Intuitive navigation",
                    "Fast loading times",
                    "An engaging user experience that encourages visitors to stay",
                ],
                image: {
                    name: "Business Headshot.avif",
                    height: 772,
                    width: 580,
                },
            },
        },
        projectsPage: {
            header: "Projects",
        },
        blogPage: {
            header: "Blog",
        },
        contactPage: {
            header: "Contact",
            subheader:
                "Looking for a diligent addition to your team or need a hand with a special project? I'm available for both full-time roles or freelance web development. Share your goals with me! Fill out the form below, and let's explore how we can work together.",
        },
    },
    links: {
        LinkedIn: "https://www.linkedin.com/in/josh-hittie-657541211",
        GitHub: "https://github.com/joshh20",
        Twitter: "https://twitter.com/joshh20",
    },
    technologies: [
        {
            name: "TypeScript",
            image: "/logos/TypeScript-logo.webp",
            link: "https://www.typescriptlang.org/",
            highlight: true,
        },
        {
            name: "React",
            image: "/logos/React-logo.webp",
            link: "https://react.dev/",
            highlight: true,
        },
        {
            name: "NextJS",
            image: "/logos/NextJS-logo.webp",
            link: "https://nextjs.org/",
            highlight: true,
        },
        {
            name: "Tailwind CSS",
            image: "/logos/Tailwind-logo.webp",
            link: "https://tailwindcss.com/",
            highlight: true,
        },
        {
            name: "Python",
            image: "/logos/Python-logo.webp",
            link: "https://python.org/",
            highlight: true,
        },
        {
            name: "Docker",
            image: "/logos/Docker-logo.webp",
            link: "https://docker.com/",
            highlight: true,
        },
        {
            name: "JavaScript",
            image: "/logos/JavaScript-logo.webp",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            highlight: false,
        },
        {
            name: "Figma",
            image: "/logos/Figma-logo.webp",
            link: "https://www.figma.com/",
            highlight: false,
        },
        {
            name: "Flask",
            image: "/logos/Flask-logo.webp",
            link: "https://flask.palletsprojects.com/",
            highlight: false,
        },
        {
            name: "Celery",
            image: "/logos/Celery-logo.webp",
            link: "https://docs.celeryproject.org/en/stable/",
            highlight: false,
        },
        {
            name: "Redis",
            image: "/logos/Redis-logo.webp",
            link: "https://redis.io/",
            highlight: false,
        },
        {
            name: "Bootstrap",
            image: "/logos/Bootstrap-logo.webp",
            link: "https://getbootstrap.com/",
            highlight: false,
        },
        {
            name: "HTML",
            image: "/logos/HTML-logo.webp",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            highlight: false,
        },
        {
            name: "CSS",
            image: "/logos/CSS-logo.webp",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            highlight: false,
        },
        {
            name: "React Router",
            image: "/logos/ReactRouter-logo.webp",
            link: "https://reactrouter.com/",
            highlight: false,
        },
        {
            name: "Firebase",
            image: "/logos/Firebase-logo.webp",
            link: "https://firebase.google.com/",
            highlight: false,
        },
        {
            name: "FFmpeg",
            image: "/logos/FFmpeg-logo.webp",
            link: "https://ffmpeg.org/",
            highlight: false,
        },
    ],
    projects: [
        {
            name: "Vid Vortex",
            url: "https://vidvortex.com",
            short: "/shorts/vid-vortex.mp4",
            description:
                "Vid Vortex is a website that I created while learning Python and Flask. I frequently used YouTube video downloading websites and would walk away from them feeling frustrated by the lack of high resolution video, multiple codecs, or even sound! I knew that I could do better, so I created Vid Vortex. \n\nYou simply paste the URL of the YouTube video that you want to download, hit submit, select your resolution, and press confirm. Within seconds, you're able to download the video to your device. It's perfect for when traveling on road trips, or in airplanes where network connectivity is limited.",
            technologiesUsed: [
                "Python",
                "Flask",
                "Celery",
                "Redis",
                "FFmpeg",
                "Docker",
                "Bootstrap",
            ],
        },
        {
            name: "Van Life Mockup",
            url: "https://joshhittie.com/van-life/",
            short: "shorts/van-life.mp4",
            description:
                "Van Life is a static website that I created as part of a tutorial while learning React Router by Remix. It allowed me to build true single page applications (SPAs) with navigation between pages. I also got acquanted with Google Firestore, which is a NoSQL database that allows for building Jamstack (serverless) frontends for the web.",
            technologiesUsed: ["React Router", "React", "Firebase"],
        },
        {
            name: "Static Tailwind Recipes",
            url: "https://joshhittie.com/tailwind-recipes/",
            short: "shorts/tailwind-recipes.mp4",
            description:
                "This is a static website that I created while following a tutorial on Tailwind CSS. I would say that Tailwind dramatically increased my enjoyment when writing styling for websites. I enjoyed it so much that I even wrote this website exclusively with Tailwind CSS. It was a pleasure to learn, and makes web development easier.",
            technologiesUsed: ["Tailwind CSS"],
        },
        {
            name: "Static YouTube Clone",
            url: "https://joshhittie.com/youtube-clone/",
            short: "shorts/youtube-clone.mp4",
            description:
                "This was one of my first projects related to CSS and styling. I followed a YouTuber who ironically demonstrated how to make a static YouTube clone. I learned how to use flex box, grid, general CSS layouts, badges, breakpoints, and more. It taught me to respect CSS and layouts.",
            technologiesUsed: ["HTML", "CSS"],
        },
    ],
    plugins: {
        recaptcha: {
            sitekey: "6LdJVo8pAAAAAE3NeEnYu-L5ibbgrU2gKlVGvvb2",
        },
        emailjs: {
            serviceId: "service_mvp2n1t",
            templateId: "template_exyd9lo",
            options: {
                publicKey: "M33VdhyGoy6FOroWy",
                blockHeadless: true,
                limitRate: {
                    throttle: 5000,
                },
            },
        },
    },
};
