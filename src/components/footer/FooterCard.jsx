import "./Footer.css";

const FooterCard = ({title, children}) => {
    return (
        <div className="footer-card">
            <div className="footer-card-title">{title}</div>
            <div className="footer-card-content">
                {children}
            </div>
        </div>
    )
};

export default FooterCard;