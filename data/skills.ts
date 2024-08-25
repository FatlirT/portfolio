type Skill = {
    name: string;
    imageUrl: string;
    future: boolean;
};

type Skills = {
    [key: string]: Skill[];
};

const skills: Skills = {
    Languages: [
        {
            name: "JavaScript",
            imageUrl: "/images/js.svg",
            future: false,
        },
        {
            name: "TypeScript",
            imageUrl: "/images/ts.svg",
            future: false,
        },
        {
            name: "Python",
            imageUrl: "/images/python.svg",
            future: false,
        },
        {
            name: "Java",
            imageUrl: "/images/java.svg",
            future: false,
        },
        {
            name: "C++",
            imageUrl: "/images/cpp.svg",
            future: false,
        },
        {
            name: "C#",
            imageUrl: "/images/csharp.svg",
            future: false,
        },
        {
            name: "HTML",
            imageUrl: "/images/html.svg",
            future: false,
        },
        {
            name: "CSS",
            imageUrl: "/images/css.svg",
            future: false,
        },
        {
            name: "XML",
            imageUrl: "/images/xml.svg",
            future: false,
        },
        {
            name: "JSON",
            imageUrl: "/images/json.svg",
            future: false,
        },
    ],

    Frontend: [
        {
            name: "React",
            imageUrl: "/images/react.svg",
            future: false,
        },
        {
            name: "Tailwind",
            imageUrl: "/images/tw.svg",
            future: false,
        },
        {
            name: "Next.js",
            imageUrl: "/images/njs.svg",
            future: false,
        },
        {
            name: "Bootstrap",
            imageUrl: "/images/bootstrap.svg",
            future: false,
        },
        {
            name: "JavaFX",
            imageUrl: "/images/javafx.svg",
            future: false,
        },
        {
            name: "WPF",
            imageUrl: "/images/wpf.svg",
            future: false,
        },
    ],

    Backend: [
        {
            name: "Express.js",
            imageUrl: "/images/expressjs.svg",
            future: false,
        },
        {
            name: "Node.js",
            imageUrl: "/images/node.svg",
            future: false,
        },
        {
            name: "Rails",
            imageUrl: "/images/rails.svg",
            future: false,
        },
        {
            name: ".NET",
            imageUrl: "/images/dotnet.svg",
            future: false,
        },
    ],

    Database: [
        {
            name: "PostgreSQL",
            imageUrl: "/images/postgres.svg",
            future: false,
        },
        {
            name: "MongoDB",
            imageUrl: "/images/mongodb.svg",
            future: false,
        },
        {
            name: "DynamoDB",
            imageUrl: "/images/dynamodb.svg",
            future: false,
        },
        {
            name: "Redis",
            imageUrl: "/images/redis.svg",
            future: false,
        },
    ],

    Dev: [
        {
            name: "Git",
            imageUrl: "/images/git.svg",
            future: false,
        },
        {
            name: "GitHub",
            imageUrl: "/images/gh.svg",
            future: false,
        },
        {
            name: "Trello",
            imageUrl: "/images/trello.svg",
            future: false,
        },
        {
            name: "Slack",
            imageUrl: "/images/slack.svg",
            future: false,
        },
    ],

    DevOps: [
        {
            name: "ArgoCD",
            imageUrl: "/images/argo.svg",
            future: true,
        },
        {
            name: "CircleCI",
            imageUrl: "/images/circleci.svg",
            future: true,
        },
        {
            name: "Ansible",
            imageUrl: "/images/ansible.svg",
            future: false,
        },
        {
            name: "AWS",
            imageUrl: "/images/aws.svg",
            future: false,
        },
        {
            name: "Vercel",
            imageUrl: "/images/vc.svg",
            future: false,
        },
        {
            name: "Docker",
            imageUrl: "/images/docker.svg",
            future: false,
        },
        {
            name: "Grafana",
            imageUrl: "/images/grafana.svg",
            future: true,
        },
        {
            name: "Helm",
            imageUrl: "/images/helm.svg",
            future: true,
        },
        {
            name: "K8s",
            imageUrl: "/images/k8s.svg",
            future: true,
        },
        {
            name: "Prometheus",
            imageUrl: "/images/prom.svg",
            future: true,
        },
        {
            name: "Terraform",
            imageUrl: "/images/terraform.svg",
            future: false,
        },
    ],

    "Machine Learning": [
        {
            name: "Sci-kit Learn",
            imageUrl: "/images/scikit.svg",
            future: false,
        },
        {
            name: "Pandas",
            imageUrl: "/images/pandas.svg",
            future: false,
        },
        {
            name: "Seaborn",
            imageUrl: "/images/seaborn.svg",
            future: false,
        },
    ],
};

export default skills;
