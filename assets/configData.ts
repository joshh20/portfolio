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
            name: "Patriot Par 3 Rebuild",
            url: "https://par3.joshhittie.com",
            short: "/shorts/patriot-par-3.mp4",
            description:
                "A local golf tournament charity needed a rebuild for their website. They suffered from slow page loading speeds, poor SEO, and a messy layout. I decided to use NextJS for this task to get the frontend benefits of a JavaScript framework, but still have great SEO due to Server Side Rendering. \n\nOne of the problems I ran into while building the new website was that I hadn't built an image carousel before. I realized that there are a few problems that you need to solve to make one of these. The first problem is that you have to design the layout and behavior. Fortunately, I found a great package on NPM called react-image-gallery that did all of the CSS. This was a huge help, but I still had to link all of the photos with the image gallery component. I wrote some TypeScript code and used some NodeJS to iterate through the photos, sort the photos by filename, and then write the filenames to a JSON file for later use. \n\nThere were just two more problems. This image gallery also has thumbnails at the bottom of the container, but it can't dynamically resize the images. Also, some of the images were of different dimensions, and they were overflowing the image gallery container. To solve this, I used Sharp, which is a NodeJS library that can resize, rotate, and convert photos, among other capabilities. I was now able to pick a standard size for all photos. Ones that were too large could be shrunken down, and ones that were too small would have a black inner border applied. \n\nI also needed to build a contact form for the website. There are a lot of form libraries, but I had already created a form with React Hook Form and Tailwind previously. I decided I would try out the React Server Actions pattern, which allows you to forego creating a REST API manually. You just write functions that only execute on your server, and then return the result to your client component. I also implemented Google ReCaptcha Enterprise to prevent bot submissions without adding user friction, as this version of ReCaptcha operates seamlessly without requiring any input from visitors. No more annoying checkboxes! \n\nThe final result not only has significantly more information on each page, but it also has a much easier-to-read layout. The new website loads significantly faster than the WordPress site they had before. Google PageSpeed index reports that the new site loads twice as fast.",
            technologiesUsed: ["NextJS", "React", "TypeScript", "Tailwind CSS"],
        },
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
