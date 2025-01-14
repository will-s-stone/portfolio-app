import React from 'react';

const ProjectCard = ({ project, isReversed }) => (
    <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-sm mb-8">
        {!isReversed && (
            <div className="w-full md:w-1/2">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="rounded-lg w-full h-full object-cover"
                />
            </div>
        )}
        <div className="w-full md:w-1/2">
            <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag) => (
                    <span key={tag} className="text-sm bg-gray-200 px-2 py-1 rounded-full">
            {tag}
          </span>
                ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold text-gray-900 hover:text-gray-600">
                    {project.title}
                </h3>
            </a>
            <p className="text-sm text-gray-600 mt-1 italic">{project.date}</p>
            <div className="mt-4 text-gray-700 space-y-4">
                {project.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                ))}
            </div>
        </div>
        {isReversed && (
            <div className="w-full md:w-1/2">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="rounded-lg w-full h-full object-cover"
                />
            </div>
        )}
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "Paws & Claws",
            link: "https://github.com/Paul-Austin-Oswego-CSC480-HCI521/OZ-CSC-480-HCI-521-Spring-2024",
            date: "January 2024 - June 2024",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736873313/CSC480_SampleLogo1_xazuze.png",
            tags: ["Software Engineering"],
            description: [
                "A full-stack web app built with a team of +20 team members that solves the problems of connecting local shelters with potential adopters. Employed Agile Scrum methodology and a microservice architecture.",
                "Served as the product owner with cross functional responsibilities as the lead requirements engineer and backend developer. Utilized Spring Boot Java backend, Mongo DB, React JS, Docker, JWTs, and OpenLiberty."
            ]
        },
        {
            title: "MoveMentor Judo",
            link: "https://github.com/will-s-stone/MoveNet-Judo-Model-Training",
            date: "June 2024 - Current",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736874185/Screenshot_2025-01-14_at_12.02.53_PM_xwqbys.png",
            tags: ["Software Engineering"],
            description: [
                "A full-stack web app for Judo practitioners, featuring video analysis of techniques to predict Judo throws, user profiles, and social features like posts (Tōkō). The platform supports Judokas, Dojos, and Senseis, allowing users to track progress and follow mentors.",
                "Built with a Next.js frontend, FastAPI microservice for ML, TensorFlow LSTM for video analysis, and a Spring Boot backend with DynamoDB. Includes real-time pose detection using MoveNet-Multipose and Tensor.js on the client side."
            ]
        },
        {
            title: "Quality Management Plan",
            link: "https://williamstone.me/docs/projects/QMR.pdf",
            date: "September 2024 - December 2024",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736875096/Screenshot_2025-01-14_at_12.17.38_PM_doztav.png",
            tags: ["Systems Engineering", "Quality Assurance"],
            description: [
                "As part of a formal Software Quality Assurance course, I contributed to a comprehensive 130+ page Quality Management Plan for a software application. This plan detailed quality properties, metrics, and criteria, and employed various advanced testing strategies, including specification-based testing, control flow analysis, data flow testing, and object-oriented testing.",
                "We utilized JUnit to write and execute all test cases, ensuring consistency and reliability in the testing process. Each service in the system underwent rigorous evaluation, with annotated control flow graphs and tailored test cases to verify functionality and performance. The project concluded with post-testing recommendations to enhance maintainability and scalability, showcasing a methodical approach to software quality management."
            ]
        },
        {
            title: "Smart Cruise Control System Specification",
            link: "https://williamstone.me/docs/projects/SRS.pdf",
            date: "September 2024 - December 2024",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736874896/Screenshot_2025-01-14_at_12.14.36_PM_xhnv3r.png",
            tags: ["Systems Engineering", "Requirements Engineering"],
            description: [
                "As part of a Software Safety and Requirements Engineering course, I contributed to a detailed formal specification document for a smart cruise control system. This comprehensive specification adhered to rigorous standards for capturing, analyzing, and validating requirements.",
                "The project encompassed requirements elicitation, modeling using KAOS diagrams and UML, functional hazard analysis (FHA), failure mode and effects analysis (FMEA), and comprehensive safety case development. Verification strategies and test cases were devised to simulate real-world scenarios, with particular attention to safety-critical attributes and system interactions.",
                "By leveraging visual models and systematic analyses, the document provided a robust foundation for both system development and stakeholder collaboration, reflecting best practices in requirements engineering."
            ]
        },
        {
            title: "Heat Transfer Simulator",
            link: "https://github.com/will-s-stone/HeatPropagation",
            date: "November 2024 - December 2024",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736874470/Screenshot_2025-01-14_at_12.07.30_PM_rtmyxa.png",
            tags: ["Software Engineering"],
            description: [
                "Developed a Java application that simulates heat propagation across materials using a grid-based approach. Implemented parallel processing to handle larger simulations and added distributed computing capabilities to scale across multiple servers.",
                "Built using Java concurrency (ExecutorService) for parallel computations and implemented socket-based communication protocol for server distribution and coordination. Designed the architecture to manage workload distribution across the network."
            ]
        }
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Projects</h2>
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;