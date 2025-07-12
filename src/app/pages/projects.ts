type Project = {
    name: string,
    description: string;
    technologies: string[],
    startDate: string,
    image: string,
    state: string,
    link:string
}

const projects:Project[] = [
        {
            name: "Gold Street",
            description: "I built an SaaS for a trading agency, with private channel handling using TelegramAPI",
            technologies: ["react","tailwind","supabase","python"],
            startDate: "27-June-2025",
            image: "goldstreet",
            state: "Completed",
            link: "https://github.com/fareskebeh/goldstreet"
        },
        {
            name: "Tutorme",
            description: "I'm currently building the frontend for a tutoring web app, the app contains a chat feature, so far my biggest project",
            technologies: ["react","tailwind", "typescript"],
            startDate: "18-June-2025",
            image: "tutorme",
            state: "In Progress..",
            link: "https://github.com/fareskebeh/tutorme"
        },
        {
            name: "Rigsy",
            description: "My only scalable full-stack app, currently abandoned due to other current overriding projects",
            technologies: ["react","tailwind", "django"],
            startDate: "17-May-2025",
            image: "rigsy",
            state: "Stopped",
            link: "https://github.com/fareskebeh/ecom"
        },
        {
            name: "Blog app",
            description: "My first full-stack app :), a blog app where you can read, comment and share posts, currently missing authentication and proper formatting",
            technologies: ["react","tailwind", "django"],
            startDate: "08-April-2025",
            image: "blog",
            state: "In Progress..",
            link: "https://github.com/fareskebeh/blog-app"
        },
        {
            name: "Matrix Component",
            description: "a lightweight component that displays flickering 0s and 1s, made this project while meddling with JavaScript, you can install it from npm :)",
            technologies: ["javascript"],
            startDate: "12-May-2025",
            image: "matrix",
            state: "Completed",
            link: "https://github.com/fareskebeh/matrix-component"
        },
    ]

export default projects;