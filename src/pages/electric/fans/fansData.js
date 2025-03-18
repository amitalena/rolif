import A0 from '../../../assets/images/electric/switches/2modul.webp';
import E0 from '../../../assets/images/electric/fans/amb0.webp';
import E1 from '../../../assets/images/electric/fans/amb1.webp'
import K0 from '../../../assets/images/electric/fans/ico0.webp';
import K1 from '../../../assets/images/electric/fans/ico1.webp'

export const fansData = [
    {
        id: 1,
        title: "Ambrose Slim BLDC Ceiling Fan",
        description: "The Eden Dining Bench is a contemporary seating solution designed to enhance your dining area. With its sleek design and premium craftsmanship, it complements various dining styles. Crafted with precision and using quality materials, this bench offers a space-efficient and stylish seating option, making it a versatile addition to your dining ensemble.",
        imagePath: E0,
        images: [
            { imagePath: E0 },
            { imagePath: E1 },
        ],
    },
    {
        id: 2,
        title: "Ioniq Decorative Ceiling Fan",
        description: "The Khair 6 Seater Dining Table is a modern masterpiece designed to elevate your dining space. Its sleek and minimalist design, paired with premium craftsmanship, offers a sophisticated backdrop for your meals. With ample seating, it’s perfect for gatherings. Crafted with precision and quality materials, it guarantees both durability and style.",
        imagePath: K0,
        images: [
            { imagePath: K0 },
            { imagePath: K1 },
        ],
    },
    {
        id: 3,
        title: "2 Module Switch with Indicator",
        description: "Rolif india Electric's new world-class range of modular switches boasts of the revolutionary 3Aß technology, the first and only-of-its-kind technology that provides you with an unprecedented three layers of safety.",
        imagePath: A0,
        images: [
            { imagePath: A0 },
        ],
    },
]