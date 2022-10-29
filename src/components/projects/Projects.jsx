import ProjectCard from "./ProjectCard";

import "./Projects.css";

const Project = () => {
    return (
        <div className="project">
            <div className="project-title">Projects</div>
            <ProjectCard 
                name={"Mask classification"} 
                date={"01/22 - 04/22"}
                github={"https://github.com/Herbin-Clement/mask-classification"}
                stack="Python, Tensorflow, Keras, Numpy, Matplotlib, Pandas, OpenCV">
                    <div>Realization of an Artificial Intelligence which can classify the way the mask is wear by people in realt-time.</div>
            </ProjectCard>
            <ProjectCard 
                name={"Graph algorithm visualisation"} 
                date={"2022"}
                github={"https://github.com/Herbin-Clement/graph-visu"}
                website={"https://graph.hclement.fr"}
                stack="HTML, CSS, JS, ReactJS">
                <div>Realization of a web application which can display different algorithm using graph.</div>
            </ProjectCard>
        </div>
    )
};

export default Project;