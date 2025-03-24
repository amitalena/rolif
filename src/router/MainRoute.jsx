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
const LivingPage = lazy(() => import("../pages/tiles/livingrooms/LivingPage"));
const BedroomPage = lazy(() => import("../pages/tiles/bedrooms/BedroomPage"));
const KitchenPage = lazy(() => import("../pages/tiles/kitchens/KitchenPage"));
const BathroomPage = lazy(() => import("../pages/tiles/bathrooms/BathroomPage"));
const FloorPage = lazy(() => import("../pages/tiles/livingrooms/floors/FloorPage"));
const WallsPage = lazy(() => import("../pages/tiles/livingrooms/walls/WallsPage"));
const BedroomWallPage = lazy(() => import("../pages/tiles/bedrooms/walls/BedroomWallPage"));
const BedroomFloorPage = lazy(() => import("../pages/tiles/bedrooms/floors/BedroomFloorPage"));
const BathroomWallPage = lazy(() => import("../pages/tiles/bathrooms/walls/BathroomWallPage"));
const BathroomFloorPage = lazy(() => import("../pages/tiles/bathrooms/floors/BathroomFloorPage"));
const KitchenWallPage = lazy(() => import("../pages/tiles/kitchens/walls/KitchenWallPage"));
const KitchenFloorPage = lazy(() => import("../pages/tiles/kitchens/floors/KitchenFloorPage"));
const SwitchPage = lazy(() => import("../pages/electric/switches/SwitchPage"));
const ProjectPage = lazy(() => import("../pages/projects/OurProject"));
const InteriorOutFit = lazy(() => import("../pages/services/interior/InteriorOutFit"));
const ElectricService = lazy(() => import("../pages/services/electric/ElectricService"));
const Gallery = lazy(() => import("../pages/gallery/Gallery"));
const CareerPage = lazy(() => import("../pages/careers/Career"));
const Login = lazy(() => import("../pages/Login"));

// Loading fallback component
const Loading = () => <div style={{ textAlign: 'center' }}>Loading...</div>;

// Define routes
const routes = [
    { path: "/", element: <Home />, index: true },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/contact-us", element: <ContactUs /> },
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
    { path: "/tiles/livingroom", element: <LivingPage /> },
    { path: "/tiles/bathroom", element: <BathroomPage /> },
    { path: "/tiles/kitchen", element: <KitchenPage /> },
    { path: "/tiles/bedroom", element: <BedroomPage /> },
    { path: "/tiles/livingroom/wall", element: <WallsPage /> },
    { path: "/tiles/livingroom/floor", element: <FloorPage /> },
    { path: "/tiles/bedroom/wall", element: <BedroomWallPage /> },
    { path: "/tiles/bedroom/floor", element: <BedroomFloorPage /> },
    { path: "/tiles/bathroom/wall", element: <BathroomWallPage /> },
    { path: "/tiles/bathroom/floor", element: <BathroomFloorPage /> },
    { path: "/tiles/kitchen/wall", element: <KitchenWallPage /> },
    { path: "/tiles/kitchen/floor", element: <KitchenFloorPage /> },
    { path: "/electrics/switch_socket", element: <SwitchPage /> },
    { path: "/project", element: <ProjectPage /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/career", element: <CareerPage /> },
    { path: "/login", element: <Login /> },
    { path: "/civilconstruction/:id", element: <CivilConstructions /> },
    { path: "/interioroutfit/:id", element: <InteriorConstruction /> },
    { path: "/service/interior-out-fit", element: <InteriorOutFit /> },
    { path: "/service/electrical-services", element: <ElectricService /> },
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