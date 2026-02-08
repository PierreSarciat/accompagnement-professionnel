import Hero from "./sections/hero/hero.jsx";
import Programs from "./sections/programs/programs.jsx";
import Benefits from "./sections/benefits/benefits.jsx";
import About from "./sections/about/about.jsx";
import ContactLink from "./sections/contactlink/ContactLink.jsx";
import ScrollToAnchor from './components/ScrollToAnchor';
import Mention from "./sections/mentions__legales/mentions__legales.jsx";

function App() {
    return (
        <>
            <ScrollToAnchor />
            <Hero />
            <Programs />
            <Benefits />
            <About />
            <ContactLink />

        </>
    );
}

export default App;
