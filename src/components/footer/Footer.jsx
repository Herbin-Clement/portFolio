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
                    <div>Github</div>
                    <div>LinkedIn</div>
                </FooterCard>
            </div>
        </div>
    )
};

export default Footer;