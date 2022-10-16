import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

import FooterCard from "./FooterCard";

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                © 2023 by Herbin Clément
            </div>
            <div className="footer-right">
                <FooterCard title={"Call"}>
                    <div>06 37 78 64 42</div>
                </FooterCard>
                <FooterCard title={"Write"}>
                    <div>clement.herbin@hotmail.com</div>
                </FooterCard>
                <FooterCard title={"Follow"}>
                    <a href="https://github.com/Herbin-Clement"><AiFillGithub size={"15px"}/></a>
                    <a href="https://www.linkedin.com/in/clement-herbin/"><AiFillLinkedin size={"15px"}/></a>
                </FooterCard>
            </div>
        </div>
    )
};

export default Footer;