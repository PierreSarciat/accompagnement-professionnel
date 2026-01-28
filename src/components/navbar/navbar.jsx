import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
                            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                Delphine Rivier
                            </Link>


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
