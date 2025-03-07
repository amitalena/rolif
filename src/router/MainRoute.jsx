import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import { lazy, Suspense } from "react";
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "../pages/Login";
import SinglePageAll from "../pages/singlepages/SinglePageAll";
import Gallery from "../pages/gallery/Gallery";
// Lazy-loaded components
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/aboutus/AboutUs"));
const ContactUs = lazy(() => import("../pages/contact/ContactUs"));
const Blogs = lazy(() => import("../pages/blogs/Blogs"));
const SingleBlogPage = lazy(() => import("../pages/blogs/SingleBlog"));
const SingleFurniture = lazy(() => import("../pages/furniture/SingleFurniture"));
const SingleElectric = lazy(() => import("../pages/electric/SingleElectric"));
const SingleTiles = lazy(() => import("../pages/tiles/SingleTiles"));

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
    { path: "/interior/bedroom/title", element: <SinglePageAll /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/login", element: <Login /> },
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
