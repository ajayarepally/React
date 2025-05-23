import react from 'react';
import './Footer.css';


function Footer() {
    return (
        <footer className="footer">
            <p>© 2023 Ajay Arepally. All rights reserved.</p>
            <div className="social-icons">
                <a href="https://github.com/ajayarepally" target="_blank" rel="noopener noreferrer">
                    GitHub</a>
                <a href="https://www.linkedin.com/in/ajay-arepally-11716a1b7/" target="_blank" rel="noopener noreferrer">
                    LinkedIn</a>
            </div>
        </footer>
    );
}

export default Footer;