import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Summary from "./components/sections/Summary";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Hobbies from "./components/sections/Hobbies";
import Experience from "./components/sections/Experience";
import Activities from "./components/sections/Activities";

const Home = () => (
    <>
        <Summary />
    </>
);

const App = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/education" element={<Education />} />
                <Route path="/hobbies" element={<Hobbies />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default App;