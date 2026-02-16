import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import './navbar.scss';
import logo from '@logo/logo.png';



const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [outOfHero, setOutOfHero] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;

        const hero = document.querySelector('.herobackground');
        const heroHeight = hero ? hero.offsetHeight : 0;

        setScrolled(scrollY > 0);
        setOutOfHero(scrollY > heroHeight - 10);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            // Si on est sur une autre page, on navigue d'abord vers la page d'accueil
            return `/#${sectionId}`;
        } else {
            // Si on est déjà sur la page d'accueil, on fait défiler vers la section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            return '#';
        }
    };

    return (
        <div className={`navbar-container ${scrolled ? 'scrolled' : ''} ${outOfHero ? 'out-of-hero' : ''}`}>
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
                            {location.pathname === '/' ? (
                                <a href="#programs" onClick={(e) => { e.preventDefault(); scrollToSection('programs'); }}>
                                    Programme
                                </a>
                            ) : (
                                <NavLink to={scrollToSection('programs')}>Programme</NavLink>
                            )}
                        </li>
                        <li>
                            {location.pathname === '/' ? (
                                <a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>
                                    Avantages
                                </a>
                            ) : (
                                <NavLink to={scrollToSection('benefits')}>Avantages</NavLink>
                            )}
                        </li>
                        <li>
                            {location.pathname === '/' ? (
                                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                                    Qui suis-je
                                </a>
                            ) : (
                                <NavLink to={scrollToSection('about')}>Qui suis-je</NavLink>
                            )}
                        </li>
                        <li>
                            {location.pathname === '/' ? (
                                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                                    Contact
                                </a>
                            ) : (
                                <NavLink to="/contact">Contact</NavLink>
                            )}
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
