import Furniture1 from '../../assets/images/interior/f1.webp';
import Furniture2 from '../../assets/images/interior/f2.webp';
import Furniture3 from '../../assets/images/interior/f3.webp';
import Furniture4 from '../../assets/images/interior/f4.webp';
import Furniture5 from '../../assets/images/interior/f5.webp';
import Furniture6 from '../../assets/images/interior/f6.webp';
import Sub_F1 from '../../assets/images/interior/f7.webp'
import Sub_F2 from '../../assets/images/interior/f8.webp'
import Sub_F3 from '../../assets/images/interior/f9.webp'
import Sub_F4 from '../../assets/images/interior/f10.webp'

export const furnitureData = [
    {
        id: 1,
        title: "Modern Sofa Set",
        description: "A stylish and comfortable modern sofa set, perfect for contemporary living rooms.",
        imagePath: Furniture1,
        createDate: "12-02-2025",
        images: [
            { imagePath: Sub_F1 },
            { imagePath: Sub_F2 },
            { imagePath: Sub_F3 },
            { imagePath: Sub_F4 },
        ],
    },
    {
        id: 2,
        title: "Wooden Dining Table",
        description: "A sturdy wooden dining table with a classic finish, ideal for family gatherings.",
        imagePath: Furniture2,
        createDate: "13-02-2025"
    },
    {
        id: 3,
        title: "Luxury King-Size Bed",
        description: "An elegant king-size bed with a plush headboard for a luxurious sleeping experience.",
        imagePath: Furniture3,
        createDate: "14-02-2025"
    },
    {
        id: 4,
        title: "Minimalist TV Stand",
        description: "A sleek and modern TV stand with ample storage space for media essentials.",
        imagePath: Furniture4,
        createDate: "15-02-2025"
    },
    {
        id: 5,
        title: "Ergonomic Office Chair",
        description: "A high-quality ergonomic office chair designed for maximum comfort and support.",
        imagePath: Furniture5,
        createDate: "16-02-2025"
    },
    {
        id: 6,
        title: "Contemporary Coffee Table",
        description: "A stylish coffee table with a modern design, perfect for any living room setup.",
        imagePath: Furniture6,
        createDate: "17-02-2025"
    },
];
