type Skill = {
    name: string;
    image_url: string;
    future: boolean;
};

type Skills = {
    [key: string]: Skill[];
};

const skills: Skills = {
    languages: [
        {
            name: "JavaScript",
            image_url: "/images/js.svg",
            future: false,
        },
        {
            name: "TypeScript",
            image_url: "/images/ts.svg",
            future: false,
        },
        {
            name: "Python",
            image_url: "/images/python.svg",
            future: false,
        },
        {
            name: "Java",
            image_url: "/images/java.svg",
            future: false,
        },
        {
            name: "HTML",
            image_url: "/images/html.svg",
            future: false,
        },
        {
            name: "CSS",
            image_url: "/images/css.svg",
            future: false,
        },
    ],

    frontend: [
        {
            name: "React",
            image_url: "/images/react.svg",
            future: false,
        },
        {
            name: "Tailwind",
            image_url: "/images/tw.svg",
            future: false,
        },
        {
            name: "NextJS",
            image_url: "/images/njs.svg",
            future: false,
        },
        {
            name: "JavaFX",
            image_url: "/images/javafx.svg",
            future: false,
        },
    ],

    backend: [
        {
            name: "Express.js",
            image_url: "/images/expressjs.svg",
            future: false,
        },
        {
            name: "NodeJS",
            image_url: "/images/node.svg",
            future: false,
        },
        {
            name: "PostgreSQL",
            image_url: "/images/postgres.svg",
            future: false,
        },
        {
            name: "Rails",
            image_url: "/images/rails.svg",
            future: false,
        },
    ],

    dev: [
        {
            name: "Git",
            image_url: "/images/git.svg",
            future: false,
        },
        {
            name: "GitHub",
            image_url: "/images/gh.svg",
            future: false,
        },
        {
            name: "Trello",
            image_url: "/images/trello.svg",
            future: false,
        },
        {
            name: "Slack",
            image_url: "/images/slack.svg",
            future: false,
        },
    ],

    devops: [
        {
            name: "ArgoCD",
            image_url: "/images/argo.svg",
            future: true,
        },
        {
            name: "AWS",
            image_url: "/images/aws.svg",
            future: false,
        },
        {
            name: "Vercel",
            image_url: "/images/vc.svg",
            future: false,
        },
        {
            name: "Docker",
            image_url: "/images/docker.svg",
            future: false,
        },
        {
            name: "Grafana",
            image_url: "/images/grafana.svg",
            future: true,
        },
        {
            name: "Helm",
            image_url: "/images/helm.svg",
            future: true,
        },
        {
            name: "K8s",
            image_url: "/images/k8s.svg",
            future: true,
        },
        {
            name: "Prometheus",
            image_url: "/images/prom.svg",
            future: true,
        },
        {
            name: "Terraform",
            image_url: "/images/terraform.svg",
            future: false,
        },
    ],

    "machine Learning": [
        {
            name: "Sci-kit Learn",
            image_url: "/images/scikit.svg",
            future: false,
        },
        {
            name: "Pandas",
            image_url: "/images/pandas.svg",
            future: false,
        },
        {
            name: "Seaborn",
            image_url: "/images/seaborn.svg",
            future: false,
        },
    ],
};

export default skills;
