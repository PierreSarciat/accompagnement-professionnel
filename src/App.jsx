import React from 'react';
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./sections/hero/hero.jsx";
import Programs from "./sections/programs/programs.jsx";
import Benefits from "./sections/benefits/benefits.jsx";
import About from "./sections/about/about.jsx";
import Contact from "./sections/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Programs />
            <Benefits />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
