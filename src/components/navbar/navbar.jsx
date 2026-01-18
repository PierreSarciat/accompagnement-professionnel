import React, { useState, useEffect } from "react";
import './navbar.scss';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
            <nav>
                <ul>
                    <li>
                        <div className="nav1">
                            <a href="#portfolio">Portfolio</a>
                        </div>
                    </li>
                    <li className="nav2">
                        <a href="#competences">Compétences</a>
                    </li>
                    <li className="nav2">
                        <a href="#about">À propos</a>
                    </li>
                    <li className="nav2">
                        <a href="#projets">Projets</a>
                    </li>
                    <li className="nav2">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
