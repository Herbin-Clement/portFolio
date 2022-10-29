import { AiFillGithub } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';

import "./Projects.css";

const ProjectCard = ({name, date, children, stack, github, website}) => {

    const style = {
        color: "white"
    }

    return (
        <div className="project-card">
            <div className="project-card-title">{name}</div>
            <div className="project-card-date">{date}</div>
            <div className="project-card-text">
                {children}
            </div>
            <div className="project-card-bottom">
                <div className="project-card-logo">
                    {website !== undefined && <a href={website}><AiFillHome size={"25px"} style={style}/></a>}
                    {github !== undefined && <a href={github}><AiFillGithub size={"25px"} style={style}/></a>}
                </div>
                <div className="project-card-stack">
                    {stack}
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;