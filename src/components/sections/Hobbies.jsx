import React from 'react';

const HobbyCard = ({ hobby }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img
            src={hobby.imageUrl}
            alt={hobby.name}
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900">{hobby.name}</h3>
            <p className="text-gray-700 mt-2">{hobby.description}</p>
        </div>
    </div>
);

const Hobbies = () => {
    const hobbies = [
        {
        name: "Judo",
            description: "Day of my orange belt test.",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/v1736872607/IMG_20241121_174334574_Original_nhsf1z.jpg"
        },
        {
            name: "Hiking",
            description: "WWII bunkers on Cuttyhunk Island.",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736794958/IMG_3686_jaotod.jpg"
        },
        {
            name: "Woodworking",
            description: "Resawn Cherry bookmarks from fallen timber.",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736794356/IMG_8462_ce7jft.jpg"
        },
        {
            name: "Running",
            description: "Trail running in the Adirondacks.",
            imageUrl: "https://res.cloudinary.com/dv6lpaixh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736796978/IMG_7544_tjatcp.jpg"
        }
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Hobbies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hobbies.map((hobby) => (
                        <HobbyCard key={hobby.name} hobby={hobby} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;