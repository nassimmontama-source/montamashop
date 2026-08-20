const products = [

    {
        id: 1,

        name: "Montama Boxing Gloves",

        category: "Boxing Gloves",

        description:
            "Professional gloves designed for kickboxing and boxing training.",

        price: 499,

        oldPrice: null,

        image:
            "assets/images/product-placeholder.svg",

        variants: {

            sizes: [
                "10oz",
                "12oz",
                "14oz",
                "16oz"
            ],

            colors: [
                "Black",
                "Red",
                "White"
            ]

        },

        stock: {

            "10oz-Black": 5,
            "12oz-Black": 8,
            "14oz-Black": 3,
            "16oz-Black": 0

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

        description:
            "Kickboxing shin guards with strong impact protection.",

        price: 399,

        oldPrice: 449,

        image:
            "assets/images/product-placeholder.svg",

        variants: {

            sizes: [
                "S",
                "M",
                "L",
                "XL"
            ],

            colors: [
                "Black",
                "Red"
            ]

        },

        stock: {

            "S-Black": 4,
            "M-Black": 8,
            "L-Black": 5,
            "XL-Black": 2

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

        description:
            "Durable hand wraps for training and sparring.",

        price: 99,

        oldPrice: null,

        image:
            "assets/images/product-placeholder.svg",

        variants: {

            sizes: [
                "3m",
                "4.5m"
            ],

            colors: [
                "Black",
                "Red",
                "White"
            ]

        },

        stock: {

            "3m-Black": 10,
            "4.5m-Black": 15

        },

        rating: 4.9,

        reviews: 31,

        featured: true,

        active: true
    },


    {
        id: 4,

        name: "Montama Head Guard",

        category: "Head Guards",

        description:
            "Protective head guard for intense sparring sessions.",

        price: 449,

        oldPrice: null,

        image:
            "assets/images/product-placeholder.svg",

        variants: {

            sizes: [
                "S",
                "M",
                "L"
            ],

            colors: [
                "Black",
                "Red"
            ]

        },

        stock: {

            "S-Black": 4,
            "M-Black": 6,
            "L-Black": 3

        },

        rating: 4.6,

        reviews: 12,

        featured: false,

        active: true
    },


    {
        id: 5,

        name: "Montama Mouthguard",

        category: "Mouthguards",

        description:
            "Comfortable mouthguard for training and sparring.",

        price: 79,

        oldPrice: null,

        image:
            "assets/images/product-placeholder.svg",

        variants: {

            sizes: [
                "Adult",
                "Junior"
            ],

            colors: [
                "Black",
                "White"
            ]

        },

        stock: {

            "Adult-Black": 10,
            "Junior-Black": 7

        },

        rating: 4.7,

        reviews: 9,

        featured: false,

        active: true
    }

];


function getProductById(id) {

    return products.find(
        product => product.id === Number(id)
    );

}
