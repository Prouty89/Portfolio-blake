
import React from 'react'

import { StyledFooter } from '../styles';

function Footer(){
    return(
        <StyledFooter>
            <div className="footer-text">
            Designed and developed by Blake Prouty 2020
            </div>
            <div className="social-container">
                <a  href = "https://www.github.com/Prouty89" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios/50/f8f8f1/github.png" alt="github"/>
                </a>
                <a href = "https://www.linkedin.com/in/blakenp/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/50/f8f8f1/linkedin-circled.png" alt="linked"/>
                </a>
                <a href = "https://twitter.com/BlakeNthaniel" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios/50/f8f8f1/twitter.png" alt="twitter"/>
                </a>
            </div>
        </StyledFooter>
    );
}

export default Footer;