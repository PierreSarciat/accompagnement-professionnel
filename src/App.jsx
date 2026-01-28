import React from 'react';
import Navbar from "@components/navbar/navbar.jsx";
import Hero from "./sections/hero/hero.jsx";
import Programs from "./sections/programs/programs.jsx";
import Benefits from "./sections/benefits/benefits.jsx";
import About from "./sections/about/about.jsx";
import ContactLink from './sections/contactlink/ContactLink.jsx';
import Footer from "@components/footer/footer.jsx";

function App() {
    return (
        <>
            <Navbar />
            <div className="main-content">
                <Hero />
                <Programs />
                <Benefits />
                <About />
                <ContactLink />
            </div>
            <Footer />
        </>
    );
}

export default App;
