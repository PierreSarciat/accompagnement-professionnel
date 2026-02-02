import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

const Button = ({
    text,
    to,
    href,
    onClick,
    type = 'button',
    isLink = false,
    isRouterLink = false,
    className = '',
}) => {
    const classes = `button ${className}`;

    if (isRouterLink) {
        return (
            <Link to={to} className={classes} onClick={onClick}>
                {text}
            </Link>
        );
    }

    if (isLink) {
        return (
            <a href={href} className={classes} onClick={onClick}>
                {text}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
