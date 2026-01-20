import React, { useState, useEffect } from "react";
import './navbar.scss';
import logo from '@logo/logo.png';

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
                    <div className="nav1">
                        <li>

                            <img src={logo} alt="Logo soutien professionnel" className="logonav" />
                            <a href="#delphinerivier">Delphine Rivier</a>

                        </li>
                    </div>

                    <div className="nav2">

                        <li>
                            <a href="#competences1">Compétences1</a>
                        </li>
                        <li>
                            <a href="#competences2">Compétences2</a>
                        </li>
                        <li>
                            <a href="#competences3">Compétences3</a>
                        </li>
                        <li>
                            <a href="#about">À propos</a>
                        </li>
                        <li >
                            <a href="#contact">Contact</a>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
