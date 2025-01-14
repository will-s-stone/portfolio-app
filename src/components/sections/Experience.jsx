import React from 'react';

const ExperienceCard = ({ experience, isReversed }) => (
    <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-sm mb-8">
        {!isReversed && (
            <div className="w-full md:w-1/3">
                <img
                    src={experience.imageUrl}
                    alt={experience.title}
                    className="rounded-lg w-full h-full object-cover"
                />
            </div>
        )}
        <div className="w-full md:w-2/3">
            <div className="flex flex-wrap gap-2 mb-2">
                {experience.tags.map((tag) => (
                    <span key={tag} className="text-sm bg-gray-200 px-2 py-1 rounded-full">
            {tag}
          </span>
                ))}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{experience.company}</p>
            <p className="text-sm text-gray-600 italic">{experience.date}</p>
            <div className="mt-4 text-gray-700 space-y-4">
                {experience.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                ))}
            </div>
        </div>
        {isReversed && (
            <div className="w-full md:w-1/3">
                <img
                    src={experience.imageUrl}
                    alt={experience.title}
                    className="rounded-lg w-full h-full object-cover"
                />
            </div>
        )}
    </div>
);

const Experience = () => {
    const experiences = [
        {
            title: "Engineering Intern",
            company: "Empire Access, Prattsburgh NY",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736797537/IMG_8888_fnheot.jpg",
            date: "May 2024 – Current, December 2023 - January 2024",
            tags: ["Software Development", "Data Analytics", "GIS", "Leadership"],
            description: [
                "Lead the development of an address database system and a comprehensive market evaluation platform. Developed an interactive geospatial reporting tool that enables polygon-based area analysis, integrating multiple data sources including Data Axle, FCC data, and competitor information through web scraping.",
                "Architected the solution using microservices: Spring Boot for database operations, Flask for web scraping and data processing, and Next.js for the interactive mapping interface. Collaborated with C-level executives and senior management to align the tool's capabilities with business intelligence needs.",
                "Leveraged advanced data analytics techniques to enhance customer segmentation and expand market reach. Conducted in-depth quantitative analysis of customer profiles, resulting in optimized targeted marketing strategies and the identification of a 54% increase in potential customers within the service area."
            ]
        },
        {
            title: "Research Assistant",
            company: "State University of New York at Oswego",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736798481/20241108_140716_ybxcwl.jpg",
            date: "August 2023 – Current",
            tags: ["AI Research", "Data Analysis", "Academic Publication"],
            description: [
                "Conducted in-depth analysis of Language Models GPT-3.5 and GPT-4.0, in order to understand how it illustrates similar cognitive biases to humans.",
                "Utilized the Wason Selection Task to interrogate confirmation bias in AI thereby understanding where it is shown, why, how to avoid it and the potential future implications.",
                "Utilized Python programming for data collection, analysis, and visualization, leveraging libraries such as NumPy, Pandas, and Matplotlib. Published findings in IEEE Xplore."
            ]
        },
        {
            title: "Computer Science & Mathematics Tutor",
            company: "State University of New York at Oswego",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736800382/IMG_8889_lbits0.jpg",
            date: "January 2023 – Current",
            tags: ["Education", "Mentoring", "Technical Communication"],
            description: [
                "Served as a guide for people of various ages and skill levels through complex topics, utilizing clear explanations and engaging teaching methods to promote understanding and mastery while gaining a CRLA certification.",
                "Accrued over 150 hours of active tutoring and tutor all intermediate and introductory computer science courses."
            ]
        },
        {
            title: "Master Teaching Assistant",
            company: "Business Organization, Oswego, NY",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736802721/IMG_8890_i6hfmq.jpg",
            date: "December 2021 – December 2023",
            tags: ["Leadership", "Education", "Course Development"],
            description: [
                "Gained mastery in navigating business as an upper-level manager and executive, as well as proficiency in delivering presentations and managing teams of all sizes.",
                "Twice promoted in a year to Master Teaching Assistant, refined and developed course material."
            ]
        },
        {
            title: "Owner",
            company: "S&S Landscaping",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736802965/S_S_Logo_i38rew.png",
            date: "November 2019 - October 2023",
            tags: ["Entrepreneurship", "Business Development", "Client Relations"],
            description: [
                "Gained experience in managing and scaling a client base, identifying a target demographic and successfully marketing towards them.",
                "Served as a foundation for developing intuition in identifying inefficiencies and coming up with timely solutions.",
                "Scaled a customer base of zero to over one hundred in the span of two years while maintaining over a 95% customer retention rate."
            ]
        },
        {
            title: "Owner",
            company: "Reliable Freight Company",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736803148/Screenshot_2025-01-13_at_4.18.34_PM_rnaeca.png",
            date: "May 2023 - August 2023",
            tags: ["Logistics", "Operations Management"],
            description: [
                "Transport and figure out logistics on freight and cargo delivery for residential and commercial clients. On track to deliver more than 1,000 pieces of cargo."
            ]
        },
        {
            title: "Founder",
            company: "Gosnold Grill",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736804235/Screenshot_2025-01-13_at_4.36.53_PM_c3i7o3.png",
            date: "May 2023 - August 2023",
            tags: ["Entrepreneurship", "Hospitality Management", "Sustainability"],
            description: [
                "Started as a fun summer project, I own and manage the Gosnold Grill, a restaurant that specializes in unique food that is locally and sustainably sourced from and around a small island in Massachusetts."
            ]
        }
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={experience.title + experience.company}
                            experience={experience}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;