export const menuData = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/aboutus" },
    {
        name: "Interior",
        subMenu: [
            { name: "Living Room", route: "/interior/livingroom/title" },
            { name: "Bedroom", route: "/interior/bedroom/title" },
            { name: "Kitchen", route: "/interior/kitchen/title" },
        ],
    },
    {
        name: "Tiles",
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
                name: "Kitchen",
                subMenu: [
                    { name: "Kitchen Wall", route: "/tiles/kitchen/wall" },
                    { name: "Kitchen Floor", route: "/tiles/kitchen/floor" },
                ],
            },
        ],
    },
    {
        name: "Electrics",
        subMenu: [
            { name: "Electric 1", route: "/electrics/electric1" },
            { name: "Electric 2", route: "/electrics/electric2" },
            { name: "Electric 3", route: "/electrics/electric3" },
        ],
    },
    { name: "Gallery", route: "/gallery" },
    { name: "Blogs", route: "/blogs" },
    { name: "Contact Us", route: "/contactus" },
];