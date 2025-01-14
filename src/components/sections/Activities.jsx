import React from 'react';

const ActivityCard = ({ activity }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex flex-wrap gap-2 mb-2">
            {activity.tags.map((tag) => (
                <span key={tag} className="text-sm bg-gray-200 px-2 py-1 rounded-full">
          {tag}
        </span>
            ))}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
        <p className="text-sm text-gray-600 mt-1 italic">{activity.subtitle}</p>
        {activity.description && (
            <p className="text-gray-700 mt-4">{activity.description}</p>
        )}
    </div>
);

const Activities = () => {
    const activities = [
        {
            title: "MASSACHUSETTS INSTITUTE OF TECHNOLOGY",
            subtitle: "IEEE Micromouse",
            tags: ["Robotics", "Open Source", "Algorithm Development"],
            description: "Implemented autonomous navigation algorithms and sensor integration. Developed an open-source framework for a maze-solving robot, promoting accessibility in robotics education and research."
        },
        {
            title: "JOHN HOPKINS UNIVERSITY",
            subtitle: "HopHacks Hackathon",
            tags: ["Hackathon", "AI Development", "Healthcare Tech"],
            description: "Engineered an AI-driven integration for eSanjevani, India's telemedicine platform, utilizing lightweight large language models to enhance rural healthcare services cost-effectively."
        },
        {
            title: "CORNELL UNIVERSITY",
            subtitle: "Big Red Hacks Hackathon",
            tags: ["Hackathon", "Web Development", "Real-time Systems"],
            description: "Created a web application enabling peer-to-peer synchronized video streaming, showcasing real-time collaboration capabilities utilizing WebRTC and custom synchronization protocols."
        },
        {
            title: "IEEE CHAPTER AT STATE UNIVERSITY OF NEW YORK AT OSWEGO",
            subtitle: "Treasurer (2023 - Current)",
            tags: ["Leadership", "Professional Organization"]
        },
        {
            title: "COMPUTER SCIENCE ASSOCIATION",
            subtitle: "Treasurer (2022 - Current)",
            tags: ["Leadership", "Student Organization"]
        },
        {
            title: "COGNITIVE SCIENCE CLUB",
            subtitle: "Treasurer (2024 - Current)",
            tags: ["Leadership", "Academic Organization"]
        }
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Activities</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {activities.map((activity) => (
                        <ActivityCard key={activity.title} activity={activity} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;