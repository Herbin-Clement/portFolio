import "./Resume.css";

const ResumeCard = ({name, date, company, place, children}) => {
    return (
        <div className="resume-card">
            <div className="resume-card-title">{name}</div>
            <div className="resume-card-content">
                <div className="resume-card-info">
                    <div className="resume-card-company">{company}</div>
                    <div className="resume-card-date">{date}</div>
                    <div className="resume-card-place">{place}</div>
                </div>
                <div className="resume-card-text">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default ResumeCard;