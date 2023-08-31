const users = [
    {
        id: 1,
        username: "n4nd0",
        password: "12345",
        fullName: "Hernando",
    },
    {
        id: 2,
        username: "r4ff1",
        password: "12345",
        fullName: "Raffi",
    },
    {
        id: 3,
        username: "w1r4",
        password: "12345",
        fullName: "Wira",
    },
]

// const products = [
//     {
//         id : 1,
//         productName: "iPhone X",
//         condition: "perfect",
//         harga: 10000000,
//     },
//     {
//         id : 2,
//         productName: "iPhone 11",
//         condition: "good",
//         harga: 13000000,
//     },
//     {
//         id : 3,
//         productName: "iPhone 12",
//         condition: "fair",
//         harga: 15000000,
//     },
// ]

const products = {
    "iphone-11": [
        {
            id : 1,
            type: "iphone-11",
            name : "iPhone 11 128GB - Black",
            color: "black",
            condition : "bagus",
            price: 6000000,
            storage: 128,
            image: "https://cdn.eraspace.com/media/catalog/product/a/p/apple_iphone_11_black_new_1_6_2.jpg",
        },
    ],
    "iphone-12": [
        {
            id : 2,
            type: "iphone-12",
            name : "iPhone 12 128GB - Purple",
            color: "purple",
            condition : "baru",
            price: 11299000,
            storage: 128,
            image: "https://cdn.eraspace.com/media/catalog/product/i/p/iphone_12_purple_1_1.jpg",
        },
    ],
    "iphone-13": [
        {
            id : 3,
            type: "iphone-13-pro-max",
            name : "iPhone 13 Pro Max 256GB - Gold",
            color: "gold",
            condition : "baru",
            price: 19499000,
            storage: 128,
            image: "https://cdn.eraspace.com/media/catalog/product/i/p/iphone_13_pro_max_gold_1_5.jpg",
        },
    ],
    "iphone-14": [
        {
            id : 4,
            type: "iphone-14-plus",
            name : "iPhone 14 Plus 128GB - Yellow",
            color: "yellow",
            condition : "bagus",
            price: 11299000,
            storage: 128,
            image: "https://cdn.eraspace.com/media/catalog/product/i/p/iphone_14_plus_yellow_1_7.jpg",
        },
    ],
}


export { users, products }
