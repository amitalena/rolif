import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import { Toolbar } from "@mui/material";
import PublicAppBar from "../../components/PublicAppBar";

const PublicRoutes = () => {
    const location = useLocation();
    const hideLayout = location.pathname === "/login";

    return (
        <>
            {!hideLayout && <PublicAppBar />}
            {!hideLayout && <Toolbar />}
            <Outlet />
            {!hideLayout && <Footer />}
        </>
    );
};

export default PublicRoutes;
