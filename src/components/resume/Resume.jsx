import ResumeCard from "./ResumeCard";

import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <div className="resume-title">Experience</div>
            <ResumeCard 
                name={"Project member"} 
                date={"10/2022 - Present"}
                company={"Tolosat"}
                place={"Toulouse, France"}>
                <div>- Member of the Tolosat project, in the On-Board Computer team</div>
            </ResumeCard>
            <ResumeCard 
                name={"Full-stack developer internship"} 
                date={"04/2022 - 08/2022"}
                company={"Alloa Voyages"}
                place={"Lille, France"}>
                <div>Migration and development of software and web applications. (Golang, gRPC, GTK, JS, HTML, CSS, WebAssembly)</div>
            </ResumeCard>
            <div className="resume-title">Education</div>
            <ResumeCard 
                name={"Engineering school diploma"} 
                date={"2022 - Present"}
                company={"ENSEEIHT"}
                place={"Toulouse, France"}>
                    <div>- A top-ranking engineering graduate school based in Toulouse, France</div>
                    <div>- Major in Computer Science</div>
            </ResumeCard>
            <ResumeCard 
                name={"Bachelor in Computer Science"} 
                date={"2019 - 2022"}
                company={"University of Lille"}
                place={"Lille, France"}>
                <div>- Help of first and second year students in Computer Science</div>
            </ResumeCard>
            <ResumeCard 
                name={"High School diploma"} 
                date={"2016 - 2019"}
                company={"Lycée Jesse de Forest"}
                place={"Avesnes sur Help, France"}>
                <div>- Major in Mathematics and Physics</div>
            </ResumeCard>
        </div>
    )
};

export default Resume;