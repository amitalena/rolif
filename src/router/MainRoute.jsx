import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import { lazy, Suspense } from "react";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

// Lazy-loaded components
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/aboutus/AboutUs"));
const ContactUs = lazy(() => import("../pages/contact/ContactUs"));
const Blogs = lazy(() => import("../pages/blogs/Blogs"));
const SingleBlogPage = lazy(() => import("../pages/blogs/SingleBlog"));
const SingleFurniture = lazy(() => import("../pages/furniture/SingleFurniture"));
const SingleElectric = lazy(() => import("../pages/electric/SingleElectric"));
const SingleTiles = lazy(() => import("../pages/tiles/SingleTiles"));
const CivilConstructions = lazy(() => import("../pages/mainpage/Civilconstruction"));
const InteriorConstruction = lazy(() => import("../pages/mainpage/InteriorOutFit"));
const ElectricalService = lazy(() => import("../pages/mainpage/ElectricalService"));
const LightingSolutions = lazy(() => import("../pages/mainpage/LightingSolutions"));
const SingleBeds = lazy(() => import("../pages/furniture/beds/SingleBeds"));
const SingleTables = lazy(() => import("../pages/furniture/tables/SingleTable"));
const SingleChairs = lazy(() => import("../pages/furniture/chairs/SingleChairs"));
const SingleSofa = lazy(() => import("../pages/furniture/sofas/SingleSofa"));
const FloorPage = lazy(() => import("../pages/tiles/livingrooms/floors/FloorPage"));
const WallsPage = lazy(() => import("../pages/tiles/livingrooms/walls/WallsPage"));
const BedroomWallPage = lazy(() => import("../pages/tiles/bedrooms/walls/BedroomWallPage"));
const BedroomFloorPage = lazy(() => import("../pages/tiles/bedrooms/floors/BedroomFloorPage"));
const Gallery = lazy(() => import("../pages/gallery/Gallery"));
const Login = lazy(() => import("../pages/Login"));

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
    { path: "/civilconstruction/:id", element: <CivilConstructions /> },
    { path: "/interioroutfit/:id", element: <InteriorConstruction /> },
    { path: "/electricalservice/:id", element: <ElectricalService /> },
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