export const menuData = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/aboutus" },
    {
        name: "Furniture Showroom",
        subMenu: [
            { name: "Bed", route: "/furniture/beds" },
            { name: "Table", route: "/furniture/tables" },
            { name: "Chair", route: "/furniture/chairs" },
            { name: "Sofa", route: "/furniture/sofa" },
        ],
    },
    {
        name: "Tiles Showroom",
        subMenu: [
            {
                name: "Living Room",
                subMenu: [
                    { name: "Living Room Wall", route: "/tiles/livingroom/wall" },
                    { name: "Living Room Floor", route: "/tiles/livingroom/floor" },
                ],
            },
            {
                name: "Bedroom",
                subMenu: [
                    { name: "Bedroom Wall", route: "/tiles/bedroom/wall" },
                    { name: "Bedroom Floor", route: "/tiles/bedroom/floor" },
                ],
            },
            {
                name: "Bathroom",
                subMenu: [
                    { name: "Bathroom Wall", route: "/tiles/bathroom/wall" },
                    { name: "Bathroom Floor", route: "/tiles/bathroom/floor" },
                ],
            },
            {
                name: "Kitchen",
                subMenu: [
                    { name: "Kitchen Wall", route: "/tiles/kitchen/wall" },
                    { name: "Kitchen Floor", route: "/tiles/kitchen/floor" },
                ],
            },
        ],
    },
    {
        name: "Electrics Showroom",
        subMenu: [
            { name: "Wiring & Cables", route: "/electrics/wire&cable" },
            { name: "Lighting Installation", route: "/electrics/lightingsolution" },
            { name: "Switches & Sockets", route: "/electrics/switche$socket" },
        ],
    },
    { name: "Our Project", route: "/projects" },
    { name: "Gallery", route: "/gallery" },
    { name: "Blogs", route: "/blogs" },
    { name: "Contact Us", route: "/contactus" },
];