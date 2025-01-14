import { useState, useEffect } from 'react';

const useScrollSection = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            // Logic to determine active section based on scroll position
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { activeSection, setActiveSection };
};
export default useScrollSection;