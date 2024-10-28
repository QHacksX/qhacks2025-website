// src/Navbar.js
import { useState } from 'react';
import './Navbar.css';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Hamburger icon on the far left */}
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                
                {/* Nav links for dropdown menu */}
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Sponsors</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;
