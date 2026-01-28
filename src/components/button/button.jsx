import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

const Button = ({ text, to, href, onClick, type = 'button', isLink = false, isRouterLink = false }) => {
    if (isRouterLink) {
        return (
            <Link to={to} className="button" onClick={onClick}>
                {text}
            </Link>
        );
    } else if (isLink) {
        return (
            <a className="button" href={href} onClick={onClick}>
                {text}
            </a>
        );
    } else {
        return (
            <button className="button" type={type} onClick={onClick}>
                {text}
            </button>
        );
    }
};

export default Button;
