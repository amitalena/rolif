import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import PublicAppBar from "../../components/PublicAppBar";

const PublicRoutes = () => {
    const location = useLocation();
    const hideLayout = location.pathname === "/login";

    return (
        <>
            {!hideLayout && <PublicAppBar />}
            <Outlet />
            {!hideLayout && <Footer />}
        </>
    );
};

export default PublicRoutes;
