import { PAGES } from "../constants/pages";

export default function Nav({currentPage, onChangePage}) {
    return (
        <nav className="nav">
            <NavButton
                label="Inicio"
                isActive={currentPage === PAGES.HOME}
                onClick={() => onChangePage(PAGES.HOME)}
            />
            <NavButton
                label="Proyectos"
                isActive={currentPage === PAGES.PROJECTS}
                onClick={() => onChangePage(PAGES.PROJECTS)}
            />
            <NavButton
                label="Contacto"
                isActive={currentPage === PAGES.CONTACT}
                onClick={() => onChangePage(PAGES.CONTACT)}
            />
            <NavButton
                label="Noticias"
                isActive={currentPage === PAGES.NEWSLETTER}
                onClick={() => onChangePage(PAGES.NEWSLETTER)}
            />
        </nav>
    );
}

function NavButton({label, isActive, onClick}) {
    return(
        <button
            className={`nav__btn ${isActive ? "nav__btn--active" : ""}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}