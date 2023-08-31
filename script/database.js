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
            condition : "good",
            price: 6000000,
            storage: 256,
        },
        {
            id : 2,
            type: "iphone-11",
            name : "iPhone 11 256GB - White",
            color: "white",
            condition : "excellent",
            price: 7000000,
            storage: 256,
        },
        {
            id : 3,
            type: "iphone-11",
            name : "iPhone 11 64GB - Green",
            color: "green",
            condition : "good",
            price: 5500000,
            storage: 64,
        },
    ],
    "iphone-12": [
        {
            id : 4,
            type: "iphone-12",
            name : "iPhone 12 128GB - Purple",
            color: "purple",
            condition : "excellent",
            price: 11299000,
            storage: 128,
        },
        {
            id : 5,
            type: "iphone-12",
            name : "iPhone 12 256GB - Blue",
            color: "blue",
            condition : "good",
            price: 12499000,
            storage: 256,
        },
        {
            id : 6,
            type: "iphone-12",
            name : "iPhone 12 64GB - Red",
            color: "red",
            condition : "excellent",
            price: 10999000,
            storage: 64,
        },
    ],
    "iphone-13": [
        {
            id : 7,
            type: "iphone-13-mini",
            name : "iPhone 13 Mini 128GB - Pink",
            color: "pink",
            condition : "good",
            price: 8799000,
            storage: 128,
        },
        {
            id : 8,
            type: "iphone-13-pro",
            name : "iPhone 13 Pro 256GB - Graphite",
            color: "graphite",
            condition : "excellent",
            price: 15999000,
            storage: 256,
        },
        {
            id : 9,
            type: "iphone-13-pro-max",
            name : "iPhone 13 Pro Max 512GB - Gold",
            color: "gold",
            condition : "good",
            price: 19499000,
            storage: 512,
        },
    ],
    "iphone-14": [
        {
            id : 10,
            type: "iphone-14-mini",
            name : "iPhone 14 Mini 128GB - Blue",
            color: "blue",
            condition : "excellent",
            price: 9999000,
            storage: 128,
        },
        {
            id : 11,
            type: "iphone-14",
            name : "iPhone 14 256GB - Silver",
            color: "silver",
            condition : "good",
            price: 13299000,
            storage: 256,
        },
        {
            id : 12,
            type: "iphone-14-pro",
            name : "iPhone 14 Pro 512GB - Graphite",
            color: "graphite",
            condition : "excellent",
            price: 17999000,
            storage: 512,
        },
        {
            id : 13,
            type: "iphone-14-pro-max",
            name : "iPhone 14 Pro Max 512GB - Gold",
            color: "gold",
            condition : "good",
            price: 20999000,
            storage: 512,
        },
    ],
}


export { users, products }
