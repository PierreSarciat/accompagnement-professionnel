import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import './footer.scss';


const Footer = () => {

    return (
        <div className="footer__container">
            <p>Delphine Rivier © 2026 COPYRIGHT </p>
            <p>- Mentions légales -</p>
            <p>Réalisation:CAPSTUDIO - </p>

        </div>
    );
};

export default Footer;