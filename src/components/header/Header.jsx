import ListComponent from "./ListComponent";

import "./Header.css";

const Header = ({callback, id}) => {
    return (
        <div className="header">
            <div className="header-title"><span className="header-title-name">Clément Herbin</span> <span className="orange">/</span> Computer Science student</div>
            <div className="header-list">
                <ListComponent title={"Home"} isActive={id === 0} id={0} callback={callback}/>
                <ListComponent title={"Resume"} isActive={id === 1} id={1} callback={callback}/>
                <ListComponent title={"Projects"} isActive={id === 2} id={2} callback={callback}/>
            </div>
        </div>
    )
};

export default Header;