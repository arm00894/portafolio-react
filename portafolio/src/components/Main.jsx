import {PAGES} from "../constants/pages";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage"
import NewsletterPage from "../pages/NewsletterPage";

export default function Main({currentPage}) {
    return (
        <main className="main">
            {currentPage === PAGES.HOME && <HomePage />}
            {currentPage === PAGES.PROJECTS && <ProjectsPage />}
            {currentPage === PAGES.CONTACT && <ContactPage />}
            {currentPage === PAGES.NEWSLETTER && <NewsletterPage />}
        </main>
    );
}