export const menuData = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about-us" },
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
                name: "Living Room", route: "/tiles/livingroom",
                subMenu: [
                    { name: "Living Room Wall", route: "/tiles/livingroom/wall" },
                    { name: "Living Room Floor", route: "/tiles/livingroom/floor" },
                ],
            },
            {
                name: "Bedroom", route: "/tiles/bedroom",
                subMenu: [
                    { name: "Bedroom Wall", route: "/tiles/bedroom/wall" },
                    { name: "Bedroom Floor", route: "/tiles/bedroom/floor" },
                ],
            },
            {
                name: "Bathroom", route: "/tiles/bathroom",
                subMenu: [
                    { name: "Bathroom Wall", route: "/tiles/bathroom/wall" },
                    { name: "Bathroom Floor", route: "/tiles/bathroom/floor" },
                ],
            },
            {
                name: "Kitchen", route: "/tiles/kitchen",
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
            // { name: "Wiring & Cables", route: "/electrics/wire&cable" },
            // { name: "Lighting Installation", route: "/electrics/lightingsolution" },
            { name: "Switches & Sockets", route: "/electrics/switch_socket" },
        ],
    },
    {
        name: "Our Services",
        subMenu: [
            { name: "Interior & Fit-Out Works", route: "/service/interior-out-fit" },
            { name: "Electrical Services", route: "/service/electrical-services" },
        ]
    },
    { name: "Career", route: "/career" },
    { name: "Gallery", route: "/gallery" },
    { name: "Blogs", route: "/blogs" },
    { name: "Contact Us", route: "/contact-us" },
];