import "./Header.css";

const ListComponent = ({title, isActive}) => {
    return (
        <div className={`header-list-component ${isActive ? "active" : ""}`}>
            {title}
        </div>
    )
};

export default ListComponent;