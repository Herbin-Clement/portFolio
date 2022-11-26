import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import "./Home.css";

import me from '../../assets/me.jpg';
import pitch from '../../assets/pitch.mp4';

const Home = ({isVideo}) => {
    return (
        <div className="home">
            <div className="home-content">
                <div className="home-content-left">
                    <img src={me} alt="me"/>
                    <div className="home-content-left-title">Clément Herbin</div>
                    <div className="home-content-left-separator"></div>
                    <div className="home-content-left-subtitle">Engineering Student</div>
                    <div className="home-content-left-bottom">
                        <a href="https://github.com/Herbin-Clement"><AiFillGithub size={"25px"}/></a>
                        <a href="https://www.linkedin.com/in/clement-herbin/"><AiFillLinkedin size={"25px"}/></a>
                    </div>
                </div>
                <div className="home-content-mid"></div>
                <div className="home-content-right">
                    <div className="home-content-right-title">Hello <span className="orange">!</span></div>
                    <div className="home-content-right-text">
                    ​I'm a first year computer science student at ENSEEIHT in Toulouse, France.
                    My goal is to work in Artificial Intelligence and Data Science, more precisely in Computer Vision.
                    I'm passionate about space.
                    <br/><br/>
                    Here are my resumes in English and French.
                    </div>
                    <div className="button-resume-container">
                        <button 
                            className="button-resume"
                            onClick={() => window.location.href = "https://hclement.fr/pdf/english_resume.pdf"}
                        >English resume</button>
                        <button 
                            className="button-resume"
                            onClick={() => window.location.href = "https://hclement.fr/pdf/french_resume.pdf"}
                        >French resume</button>
                    </div>
                </div>
            </div>
            { isVideo &&
                <>
                    <div className="home-video-separator"></div>
                    <div className="home-video">
                        <div className="home-video-title">Presentation</div>
                        <video controls className="pitch">
                            <source src={pitch} type="video/mp4"></source>
                        </video>
                    </div>
                </>
            }
        </div>
    )
};

export default Home;