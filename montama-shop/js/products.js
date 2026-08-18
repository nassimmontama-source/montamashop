const products = [
    {
        id: 1,
        name: "Montama Boxing Gloves",
        category: "Boxing Gloves",
        description: "Professional gloves designed for kickboxing and boxing training.",
        price: 499,
        oldPrice: null,
        brand: "Montama",
        images: [
            "assets/images/gloves-black.jpg"
        ],
        variants: {
            sizes: ["10oz", "12oz", "14oz", "16oz"],
            colors: ["Black", "Red", "White"]
        },
        stock: {
            "10oz-Black": 5,
            "12oz-Black": 8,
            "14oz-Black": 3,
            "16oz-Black": 0,
            "10oz-Red": 4,
            "12oz-Red": 6,
            "14oz-Red": 2,
            "16oz-Red": 1
        },
        rating: 4.8,
        reviews: 24,
        featured: true,
        active: true
    },

    {
        id: 2,
        name: "Montama Shin Guards",
        category: "Shin Guards",
        description: "Kickboxing shin guards with strong impact protection.",
        price: 399,
        oldPrice: 449,
        brand: "Montama",
        images: [
            "assets/images/shin-guards.jpg"
        ],
        variants: {
            sizes: ["S", "M", "L", "XL"],
            colors: ["Black", "Red"]
        },
        stock: {
            "S-Black": 4,
            "M-Black": 8,
            "L-Black": 5,
            "XL-Black": 2,
            "S-Red": 3,
            "M-Red": 4,
            "L-Red": 1,
            "XL-Red": 0
        },
        rating: 4.7,
        reviews: 18,
        featured: true,
        active: true
    },

    {
        id: 3,
        name: "Montama Hand Wraps",
        category: "Hand Wraps",
        description: "Durable hand wraps for training and sparring.",
        price: 99,
        oldPrice: null,
        brand: "Montama",
        images: [
            "assets/images/hand-wraps.jpg"
        ],
        variants: {
            sizes: ["3m", "4.5m"],
            colors: ["Black", "Red", "White"]
        },
        stock: {
            "3m-Black": 10,
            "4.5m-Black": 15,
            "3m-Red": 8,
            "4.5m-Red": 12,
            "3m-White": 5,
            "4.5m-White": 7
        },
        rating: 4.9,
        reviews: 31,
        featured: true,
        active: true
    }
];

function getProductById(id) {
    return products.find(product => product.id === Number(id));
}

function getProductsByCategory(category) {
    return products.filter(
        product => product.active && product.category === category
    );
}
