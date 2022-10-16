import "./Header.css";

const ListComponent = ({title, isActive, id, callback}) => {
    return (
        <div onClick={() => callback(id)} className={`header-list-component ${isActive ? "active" : ""}`}>
            {title}
        </div>
    )
};

export default ListComponent;