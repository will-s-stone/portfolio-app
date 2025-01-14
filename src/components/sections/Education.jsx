import React from 'react';

const Education = () => {
    const education = {
        school: "STATE UNIVERSITY OF NEW YORK AT OSWEGO",
        gpa: "3.78 / 4.0",
        location: "Oswego, NY",
        graduation: "Spring 2025",
        major: "Software Engineering",
        minor: "Business Administration",
        honors: ["Chancellors Award Nominee", "President's List", "Presidential Scholarship", "Marano Scholarship"],
        courses: [
            "Software Deployment",
            "Software & Safety Requirements",
            "Software Quality",
            "Software Design",
            "Computer Networks",
            "Software Engineering",
            "Parallel Programming",
            "Systems Programming",
            "Computational Models"
        ]
    };

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Education</h2>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900">{education.school}</h3>
                            <p className="text-lg text-gray-700 mt-2">
                                Major: {education.major} • Minor: {education.minor}
                            </p>
                            <p className="text-gray-700 font-medium">GPA: {education.gpa}</p>
                            <p className="text-gray-600">{education.location}</p>
                        </div>
                        <p className="text-lg font-medium text-gray-700 mt-2 md:mt-0">
                            {education.graduation}
                        </p>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Honors & Awards</h4>
                        <div className="flex flex-wrap gap-2">
                            {education.honors.map((honor) => (
                                <span key={honor} className="bg-gray-200 px-3 py-1 rounded-full text-gray-700">
                  {honor}
                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Relevant Coursework</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {education.courses.map((course) => (
                                <span key={course} className="bg-gray-100 px-3 py-2 rounded text-gray-700">
                  {course}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;