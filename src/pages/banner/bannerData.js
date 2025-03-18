import T2 from '../../assets/images/banners/banner/tilesnew1.jpeg';
import F1 from '../../assets/images/banners/banner/interior0.jpeg';
import F2 from '../../assets/images/banners/banner/interior2.jpeg';

// Helper function to create category data
const createCategoryData = (idPrefix, titles, images) => {
    return titles.map((title, index) => ({
        id: `${idPrefix}-${index + 1}`,
        title: title,
        imagePath: images[index],
    }));
};

// Tiles Data
export const tilesData = createCategoryData(
    'tile',
    ["Tiles that complement the distinctive style",],
    [T2],
);

// Furniture Data
export const interiorData = createCategoryData(
    'furniture',
    ["Living space redefined", "Wide range of furniture"],
    [F1, F2]
);

// // Electric Data
// export const electricData = createCategoryData(
//     'electric',
//     ["Switchboard", "Wired Light", "Smart Bulb"],
//     [E1, E2, E3],
//     [
//         "High-quality switchboards for modern homes.",
//         "Energy-efficient wired lighting solutions.",
//         "Smart bulbs with adjustable brightness and color for modern lighting needs."
//     ]
// );

// // Civil Construction Data
// export const civilData = createCategoryData(
//     'civil',
//     ["Concrete Mixer", "Scaffolding", "Cement Blocks"],
//     [C1, C2, C3],
//     [
//         "Heavy-duty concrete mixer for construction sites.",
//         "Sturdy scaffolding for safe and efficient building construction.",
//         "High-quality cement blocks for durable structures."
//     ]
// );

// // Lighting Solutions Data
// export const lightingData = createCategoryData(
//     'lighting',
//     ["LED Panel", "Chandelier", "Outdoor Lamp"],
//     [L1, L2, L3],
//     [
//         "Energy-efficient LED panels for bright and even lighting.",
//         "Elegant chandeliers for a touch of luxury in your home.",
//         "Durable outdoor lamps for garden and pathway lighting."
//     ]
// );