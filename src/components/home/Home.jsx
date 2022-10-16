import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

import "./Home.css";

import me from '../../assets/me.jpg';

const Home = () => {
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
                    <div className="home-content-right-title">Hello !</div>
                    <div>
                    ​I'm a first year computer science student at ENSEEIHT in Toulouse, France.
                    My goal is to work in Artificial Intelligence and Data Science, more precisely in Computer Vision.
                    I'm passionate about space.
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;