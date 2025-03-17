import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import { lazy, Suspense } from "react";
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "../pages/Login";
import Gallery from "../pages/gallery/Gallery";
import InteriorConstruction from "../pages/mainpage/InteriorOutFit";
// import ElectricService from "../pages/mainpage/Electricservice";
import LightingSolutions from "../pages/mainpage/LightingSolutions";
import SingleBeds from "../pages/furniture/beds/SingleBeds";
import SingleTables from "../pages/furniture/tables/SingleTable";
import SingleChairs from "../pages/furniture/chairs/SingleChairs";
import SingleSofa from "../pages/furniture/sofas/SingleSofa";
import FloorPage from "../pages/tiles/livingrooms/floors/FloorPage";
import WallsPage from "../pages/tiles/livingrooms/walls/WallsPage";
import BedroomWallPage from "../pages/tiles/bedrooms/walls/BedroomWallPage";
import BedroomFloorPage from "../pages/tiles/bedrooms/floors/BedroomFloorPage";
// Lazy-loaded components
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/aboutus/AboutUs"));
const ContactUs = lazy(() => import("../pages/contact/ContactUs"));
const Blogs = lazy(() => import("../pages/blogs/Blogs"));
const SingleBlogPage = lazy(() => import("../pages/blogs/SingleBlog"));
const SingleFurniture = lazy(() => import("../pages/furniture/SingleFurniture"));
const SingleElectric = lazy(() => import("../pages/electric/SingleElectric"));
const SingleTiles = lazy(() => import("../pages/tiles/SingleTiles"));
const Civilcontruction = lazy(() => import("../pages/mainpage/Civilconstruction"));


// Loading fallback component
const Loading = () => <div>Loading...</div>;

// Define routes
const routes = [
    { path: "/", element: <Home />, index: true },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/contactus", element: <ContactUs /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/singlefurniture/:id", element: <SingleFurniture /> },
    { path: "/singletiles/:id", element: <SingleTiles /> },
    { path: "/singleelectric/:id", element: <SingleElectric /> },
    { path: "/singleblog/:id", element: <SingleBlogPage /> },
    { path: "/furniture/beds", element: <SingleBeds /> },
    { path: "/furniture/tables", element: <SingleTables /> },
    { path: "/furniture/tables/:id", element: <SingleTables /> },
    { path: "/furniture/chairs", element: <SingleChairs /> },
    { path: "/furniture/sofa", element: <SingleSofa /> },
    { path: "/tiles/livingroom/wall", element: <WallsPage /> },
    { path: "/tiles/livingroom/floor", element: <FloorPage /> },
    { path: "/tiles/bedroom/wall", element: <BedroomWallPage /> },
    { path: "/tiles/bedroom/floor", element: <BedroomFloorPage /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/login", element: <Login /> },
    { path: "/civilconstruction/:id", element: <Civilcontruction /> },
    { path: "/interioroutfit/:id", element: <InteriorConstruction /> },
    // { path: "/electricalservice/:id", element: <ElectricService /> },
    { path: "/lighting/:id", element: <LightingSolutions /> },
];

// Create router
const routers = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <ScrollRestoration />
                <PublicRoutes />
            </>
        ),
        children: routes
    },
    {
        path: "/admin",
        element: <PrivateRoutes />,
        // children: [
        //     { path: "/", element: <Dashboard /> }
        // ]
    }
]);

// Main Router Component
export default function MainRouter() {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={routers} />
        </Suspense>
    );
}
