import ListComponent from "./ListComponent";

import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-title"><span>Clément Herbin</span> / Computer Science student</div>
            <div className="header-list">
                <ListComponent title={"Home"} isActive={true}/>
                <ListComponent title={"Resume"} isActive={false}/>
                <ListComponent title={"Projects"} isActive={false}/>
                <ListComponent title={"Contact"} isActive={false}/>
            </div>
        </div>
    )
};

export default Header;