import React from 'react';
import Button from "../Components/Button/index";

export default function navbar() {
    return (
        <nav className="#2196f3 blue">
            <div className="nav-wrapper container">
                <Button type="link" href="/" className="brand-logo left">Contact</Button>
                <ul id="nav-mobile" className="right">
                    <li><Button href="/add-contact" type="link">New Contact</Button></li>
                </ul>
            </div>
        </nav>
    )
}
