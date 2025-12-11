import { useState, useEffect } from "react";
import {PAGES , PAGE_TITLES} from "./constants/pages";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
    const [currentPage, setCurrentPage] = useState(PAGES.HOME);

    // Cambia el titulo del documento
    useEffect(() => {
        document.title = `Portafolio | ${PAGE_TITLES[currentPage]}`;
    }, [currentPage]);
    
    return (
        <div className="app">
            <Header />
            <Nav currentPage={currentPage} onChangePage={setCurrentPage} />
            <Main currentPage={currentPage} />
            <Footer />
        </div>
    );
}