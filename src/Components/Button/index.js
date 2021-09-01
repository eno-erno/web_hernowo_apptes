import React from 'react';
import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const Button = (props) => {
    if(props.type === "link"){
        return (
            <Link to={props.href} className={props.className} onClick={onclick}>
                {props.children}
            </Link>
        )
    }
    return (
        <button className={props.className} onClick={onclick}>
            {props.children}
        </button>
    )
}

Button.propTypes = { 
    type        : propTypes.oneOf(["button", "link"]),
    onClick     : propTypes.func,
    className   : propTypes.string,
    href        : propTypes.string,
}

export default Button;