import { Outlet } from "react-router-dom"
import { Toolbar } from "@mui/material";
import PrivateAppBar from "../../components/private/PrivateAppBar";

const PrivateRoutes = () => {
    return (
        <>
            <PrivateAppBar />
            <Toolbar />
            <Outlet />
        </>
    )
}

export default PrivateRoutes