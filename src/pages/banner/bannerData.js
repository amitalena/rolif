import T1 from '../../assets/images/banners/banner/wall-tiles-layout.png';
import T2 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import T3 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import F1 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import F2 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import F3 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import E1 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import E2 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import E3 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import C1 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import C2 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import C3 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import L1 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import L2 from '../../assets/images/banners/banner/Mosaic-Tiles.png';
import L3 from '../../assets/images/banners/banner/Mosaic-Tiles.png';

// Helper function to create category data
const createCategoryData = (idPrefix, titles, images, descriptions) => {
    return titles.map((title, index) => ({
        id: `${idPrefix}-${index + 1}`,
        title: title,
        imagePath: images[index],
        description: descriptions[index],
    }));
};

// Tiles Data
export const tilesData = createCategoryData(
    'tile',
    ["Marble Tile", "Ceramic Tile", "Patterned Tile"],
    [T1, T2, T3],
    [
        "A luxurious and elegant tile with natural veining, perfect for floors and walls.",
        "A durable and versatile tile available in various colors and patterns, ideal for both walls and floors.",
        "A decorative tile with unique patterns, suitable for accent walls and floors."
    ]
);

// Furniture Data
export const interiorData = createCategoryData(
    'furniture',
    ["Modern Sofa Set", "Wooden Dining Table", "Leather Recliner"],
    [F1, F2, F3],
    [
        "A stylish and comfortable modern sofa set, perfect for contemporary living rooms.",
        "A sturdy wooden dining table with a classic finish, ideal for family gatherings.",
        "A luxurious leather recliner for ultimate comfort and relaxation."
    ]
);

// Electric Data
export const electricData = createCategoryData(
    'electric',
    ["Switchboard", "Wired Light", "Smart Bulb"],
    [E1, E2, E3],
    [
        "High-quality switchboards for modern homes.",
        "Energy-efficient wired lighting solutions.",
        "Smart bulbs with adjustable brightness and color for modern lighting needs."
    ]
);

// Civil Construction Data
export const civilData = createCategoryData(
    'civil',
    ["Concrete Mixer", "Scaffolding", "Cement Blocks"],
    [C1, C2, C3],
    [
        "Heavy-duty concrete mixer for construction sites.",
        "Sturdy scaffolding for safe and efficient building construction.",
        "High-quality cement blocks for durable structures."
    ]
);

// Lighting Solutions Data
export const lightingData = createCategoryData(
    'lighting',
    ["LED Panel", "Chandelier", "Outdoor Lamp"],
    [L1, L2, L3],
    [
        "Energy-efficient LED panels for bright and even lighting.",
        "Elegant chandeliers for a touch of luxury in your home.",
        "Durable outdoor lamps for garden and pathway lighting."
    ]
);