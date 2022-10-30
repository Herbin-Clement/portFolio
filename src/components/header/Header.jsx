import ListComponent from "./ListComponent";

import "./Header.css";

const Header = ({callback, id, pages}) => {
    return (
        <div className="header">
            <div className="header-title"><span className="header-title-name">Clément Herbin</span> <span className="orange">/</span> Computer Science student</div>
            <div className="header-list">
                {
                    pages.map((page, pageid) => {
                        return <ListComponent key={pageid} title={page} isActive={id === pageid} id={pageid} callback={callback}/>
                    })
                }
            </div>
        </div>
    )
};

export default Header;