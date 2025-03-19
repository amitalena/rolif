import T1 from '../../assets/images/tiles/t6.webp';
import F1 from '../../assets/images/interior/f4.webp';
import E1 from '../../assets/images/electric/e6.webp';
import E8 from '../../assets/images/electric/e8.jpg';
import C1 from '../../assets/images/civil/cbg.avif';

export const servicesData = [
    {
        title: "Civil Construction",
        description: [
            "Civil construction is the creation of infrastructure involving anything to do with water, earth, or transport.",
            "It is a branch of Civil Engineering involved with the maintenance, design, and construction of environments such as roads, railways, buildings, water reservoirs, subdivisions, airports, bridges, sewer systems, tunnels, and dams.",
            "Civil construction truly shapes the world around us, and with the new technology that is increasing productivity, civil construction projects can now be done with a quicker schedule.",
        ],
        imagePath: C1,
        route: "/service/civil-construction",
    },
    {
        title: "Residential Interior Design & Fit-Out",
        description: [
            "Living Room Design: Elevate your living room with custom furniture, lighting, and decorative accents that suit your style.",
            "Bedroom & Kitchen Fit-Outs: Transform personal spaces into sanctuaries with functional layouts and stylish finishes.",
            "Full Home Renovation: From concept to completion, we offer comprehensive solutions that cater to all rooms and needs.",
        ],
        imagePath: F1,
        route: "/service/interior-out-fit",
    },
    {
        title: "Tile & Sanitary Ware",
        description: [
            "Floor Tiles: High-quality ceramic, porcelain, and vinyl floor tiles that come in a variety of colors, textures, and patterns.",
            "Wall Tiles: Stunning wall tiles in diverse finishes, from glossy to matte, perfect for bathrooms, kitchens, and other indoor spaces.",
            "Outdoor Tiles: Durable, slip-resistant tiles ideal for outdoor spaces like patios, gardens, and walkways.",
            "Mosaic Tiles: Beautiful mosaic tile options for decorative accents, backsplashes, and feature walls.",
        ],
        imagePath: T1,
        route: "/service/tile-sanitary-ware",
    },
    {
        title: "Residential Electrical Services",
        description: [
            "Electrical Wiring & Rewiring: Ensuring your home’s electrical system is safe, up-to-date, and fully functional.",
            "Lighting Installation: From ambient to task lighting, we install energy-efficient and aesthetically pleasing lighting solutions.",
            "Panel Upgrades & Circuit Breakers: Upgrading your electrical panel to meet modern electrical demands, enhancing safety and functionality.",
            "Smart Home Integration: Installation of smart devices and automation systems to control lighting, temperature, and security with ease.",
        ],
        imagePath: E1,
        route: "/service/residential-electrical",
    },
    {
        title: "Lighting Solution & Electrical Goods Supplier",
        description: [
            "For a cost-effective and innovative lighting solution, our design and installation services include a variety of customized choices, with a wide range of Consultants and Designers.",
            "Rolif India has strived to be the lowest cost provider of quality lighting installations to our customers. Rolif India is well positioned to offer customers complete turnkey services from design to installation as well as emergency maintenance and repair.",
            "Panel Upgrades & Circuit Breakers: Upgrading your electrical panel to meet modern electrical demands, enhancing safety and functionality.",
            "Smart Home Integration: Installation of smart devices and automation systems to control lighting, temperature, and security with ease.",
        ],
        imagePath: E8,
        route: "/service/lighting-solutions",
    },
];