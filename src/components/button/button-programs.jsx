import React from "react";
import "./button-programs.scss";

const ButtonP = ({ text, href, ...props }) => {


    return (
        <a className="buttonP" href={href} {...props}>
            {text}
        </a>
    );
};

export default ButtonP;