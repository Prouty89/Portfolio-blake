
import React from 'react'

import { StyledFooter } from '../styles';

import Github from '../assets/gh.svg';
import Tweet from '../assets/twit.svg';
import IG from '../assets/ig.svg';
import Linkd from '../assets/li.svg';
import SVG from 'react-inlinesvg';




function Footer(){
    return(
        <StyledFooter>
            <div className="footer-container">
                <div className="footer-contents">
                    {/* <p className="designation">Designed {`&`} Developed by Blake Prouty 2020</p> */}
                </div>
                    <div className="footer-icon-container">
                    <SVG rel="noopener" className="svg" src={IG} />
                    <SVG rel="noopener" className="svg" src={Github} />
                    <SVG rel="noopener" className="svg" src={Linkd} />
                    <SVG rel="noopener" className="svg" src={Tweet} />
                    </div>
            </div>
        </StyledFooter>
    );
}

export default Footer;