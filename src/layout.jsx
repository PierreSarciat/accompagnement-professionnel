import Navbar from "@components/navbar/navbar.jsx";
import Footer from "@components/footer/footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
