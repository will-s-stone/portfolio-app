import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TypewriterText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100); // Adjust typing speed here

            return () => clearTimeout(timer);
        }
    }, [currentIndex, text]);

    return (
        <h1 className={className}>
            {displayText}
            <span className="animate-pulse">|</span>
        </h1>
    );
};

const Summary = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-sm p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-2/3">
                            <TypewriterText
                                text="Hi, I'm William Stone"
                                className="text-4xl font-bold text-gray-900 mb-6"
                            />
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    I'm a Software Engineering student passionate about building impactful solutions
                                    at the intersection of software and systems engineering. Through my{' '}
                                    <Link to="/experience" className="text-blue-600 hover:underline">internship at Empire Access</Link>{' '}
                                    and various <Link to="/projects" className="text-blue-600 hover:underline">projects</Link>,
                                    I've developed expertise in full-stack development, data analytics, and systems architecture.
                                </p>
                                <p>
                                    My <Link to="/education" className="text-blue-600 hover:underline">academic background</Link>{' '}
                                    in Software Engineering, combined with leadership roles in{' '}
                                    <Link to="/activities" className="text-blue-600 hover:underline">IEEE and various tech clubs</Link>,
                                    has given me a strong foundation in both technical and collaborative skills.
                                </p>
                                <p>
                                    I thrive on challenges that require both analytical thinking and creative problem-solving.
                                    When I'm not coding, you can find me{' '}
                                    <Link to="/hobbies" className="text-blue-600 hover:underline">hiking trails, traveling,
                                        or enjoying outdoor activities</Link>.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 space-y-4">
                            <div className="aspect-w-4 aspect-h-5">
                                <img
                                    src="https://res.cloudinary.com/dv6lpaixh/image/upload/v1736872450/headshot-1_zohpvt.jpg"
                                    alt="Profile"
                                    className="rounded-lg object-cover w-full h-full"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="https://res.cloudinary.com/dv6lpaixh/image/upload/v1736872448/hiking-hex_ixjo2t.jpg"
                                    alt="Profile 2"
                                    className="rounded-lg object-cover w-full h-40"
                                />
                                <img
                                    src="https://res.cloudinary.com/dv6lpaixh/image/upload/v1736872447/pigeon_vm8kd3.jpg"
                                    alt="Profile 3"
                                    className="rounded-lg object-cover w-full h-40"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;