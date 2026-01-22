import React from "react";
import "./button.scss";

const Button = ({ text, href, ...props }) => {


    return (
        <a className="button" href={href} {...props}>
            {text}
        </a>
    );
};

export default Button;