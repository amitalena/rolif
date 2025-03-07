import Tile1 from '../../assets/images/tiles/t1.webp'
import Tile2 from '../../assets/images/tiles/t2.webp'
import Tile3 from '../../assets/images/tiles/t3.webp'
import Tile4 from '../../assets/images/tiles/t4.webp'
import Tile5 from '../../assets/images/tiles/t5.webp'
import Tile6 from '../../assets/images/tiles/t6.webp'

export const tilesData = [
    {
        id: 1,
        title: "Marble Tile",
        imagePath: Tile1,
        description: "A luxurious and elegant tile with natural veining, perfect for floors and walls.",
        images: [
            { imagePath: Tile1 },
            { imagePath: Tile2 },
            { imagePath: Tile3 },
            { imagePath: Tile4 },
        ],
    },
    {
        id: 2,
        title: "Ceramic Tile",
        imagePath: Tile2,
        description: "A durable and versatile tile available in various colors and patterns, ideal for both walls and floors."
    },
    {
        id: 3,
        title: "Porcelain Tile",
        imagePath: Tile3,
        description: "A dense and water-resistant tile, suitable for high-traffic areas and wet spaces."
    },
    {
        id: 4,
        title: "Granite Tile",
        imagePath: Tile4,
        description: "A strong and durable natural stone tile, commonly used for countertops and flooring."
    },
    {
        id: 5,
        title: "Wood Tile",
        imagePath: Tile5,
        description: "A tile that mimics the appearance of wood while offering the durability of ceramic or porcelain."
    },
    {
        id: 6,
        title: "Mosaic Tile",
        imagePath: Tile6,
        description: "A small, decorative tile often used to create intricate patterns and artistic designs."
    },
];
