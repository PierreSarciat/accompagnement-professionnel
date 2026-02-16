import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";
import logo from "@logo/logo.png";

const sections = ["programs", "benefits", "about", "contact"];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [outOfHero, setOutOfHero] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const location = useLocation();

    useEffect(() => {
        const hero = document.querySelector(".herobackground");

        const handleScroll = () => {
            setScrolled(window.scrollY > 0);

            const heroHeight = hero ? hero.offsetHeight : 0;
            setOutOfHero(window.scrollY > heroHeight - 10);
        };

        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-120px 0px -50% 0px",
                threshold: 0.1,
            }
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== "/") {
            return `/#${sectionId}`;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const renderLink = (id, label) => (
        <a
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
            onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
            }}
        >
            {label}
        </a>
    );

    return (
        <div
            className={`navbar-container ${scrolled ? "scrolled" : ""} ${outOfHero ? "out-of-hero" : ""
                }`}
        >
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
                        <li>{renderLink("programs", "Programme")}</li>
                        <li>{renderLink("benefits", "Avantages")}</li>
                        <li>{renderLink("about", "Qui suis-je")}</li>
                        <li>
                            {location.pathname === "/" ? (
                                renderLink("contact", "Contact")
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
