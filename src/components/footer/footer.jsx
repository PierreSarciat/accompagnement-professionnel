import React from "react";
import { Link } from 'react-router-dom';

import './footer.scss';


const Footer = () => {

    return (
        <div className="footer__container">
            <p>Delphine Rivier © 2026 COPYRIGHT </p>
            <Link to="/mentions-legales" className="footer-link">
                - Mentions légales -
            </Link>
            <p>Réalisation:CAPSTUDIO - </p>

        </div>
    );
};

export default Footer;