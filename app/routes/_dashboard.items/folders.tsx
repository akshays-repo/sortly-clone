import { TOC } from "~/components/tree-view/toc";


const toc  = [
    {
        id: "1",
        name: "Electronics",
        children: [
            {
                id: "2",
                name: "Mobile Phones",
                children: [
                    {
                        id: "3",
                        name: "iPhone 13",
                    },
                    {
                        id: "4",
                        name: "Samsung Galaxy S21",
                    },
                    {
                        id: "5",
                        name: "Google Pixel 6",
                    },
                    {
                        id: "6",
                        name: "OnePlus 9",
                    },
                ],
            },
            {
                id: "7",
                name: "Laptops",
                children: [
                    {
                        id: "8",
                        name: "MacBook Pro",
                    },
                    {
                        id: "9",
                        name: "Dell XPS 13",
                    },
                    {
                        id: "10",
                        name: "HP Spectre x360",
                    },
                    {
                        id: "11",
                        name: "Lenovo ThinkPad X1 Carbon",
                    },
                ],
            },
            {
                id: "12",
                name: "Tablets",
                children: [
                    {
                        id: "13",
                        name: "iPad Pro",
                    },
                    {
                        id: "14",
                        name: "Samsung Galaxy Tab S7",
                    },
                    {
                        id: "15",
                        name: "Amazon Fire HD 10",
                    },
                    {
                        id: "16",
                        name: "Microsoft Surface Pro 7",
                    },
                ],
            },
        ],
    },
    {
        id: "17",
        name: "Home Appliances",
        children: [
            {
                id: "18",
                name: "Refrigerators",
                children: [
                    {
                        id: "19",
                        name: "LG Refrigerator",
                    },
                    {
                        id: "20",
                        name: "Samsung Refrigerator",
                    },
                    {
                        id: "21",
                        name: "Whirlpool Refrigerator",
                    },
                    {
                        id: "22",
                        name: "GE Refrigerator",
                    },
                ],
            },
            {
                id: "23",
                name: "Washing Machines",
                children: [
                    {
                        id: "24",
                        name: "Bosch Washing Machine",
                    },
                    {
                        id: "25",
                        name: "Whirlpool Washing Machine",
                    },
                    {
                        id: "26",
                        name: "LG Washing Machine",
                    },
                    {
                        id: "27",
                        name: "Samsung Washing Machine",
                    },
                ],
            },
            {
                id: "28",
                name: "Microwaves",
                children: [
                    {
                        id: "29",
                        name: "Panasonic Microwave",
                    },
                    {
                        id: "30",
                        name: "LG Microwave",
                    },
                    {
                        id: "31",
                        name: "Samsung Microwave",
                    },
                    {
                        id: "32",
                        name: "Breville Microwave",
                    },
                ],
            },
        ],
    },
    {
        id: "33",
        name: "Furniture",
        children: [
            {
                id: "34",
                name: "Living Room",
                children: [
                    {
                        id: "35",
                        name: "Sofa",
                    },
                    {
                        id: "36",
                        name: "Coffee Table",
                    },
                    {
                        id: "37",
                        name: "TV Stand",
                    },
                    {
                        id: "38",
                        name: "Bookshelf",
                    },
                ],
            },
            {
                id: "39",
                name: "Bedroom",
                children: [
                    {
                        id: "40",
                        name: "Bed Frame",
                    },
                    {
                        id: "41",
                        name: "Nightstand",
                    },
                    {
                        id: "42",
                        name: "Dresser",
                    },
                    {
                        id: "43",
                        name: "Wardrobe",
                    },
                ],
            },
            {
                id: "44",
                name: "Office",
                children: [
                    {
                        id: "45",
                        name: "Office Chair",
                    },
                    {
                        id: "46",
                        name: "Desk",
                    },
                    {
                        id: "47",
                        name: "Bookshelf",
                    },
                    {
                        id: "48",
                        name: "Filing Cabinet",
                    },
                ],
            },
        ],
    },
    {
        id: "49",
        name: "Clothing",
        children: [
            {
                id: "50",
                name: "Men",
                children: [
                    {
                        id: "51",
                        name: "T-Shirts",
                    },
                    {
                        id: "52",
                        name: "Jeans",
                    },
                    {
                        id: "53",
                        name: "Jackets",
                    },
                    {
                        id: "54",
                        name: "Shoes",
                    },
                ],
            },
            {
                id: "55",
                name: "Women",
                children: [
                    {
                        id: "56",
                        name: "Dresses",
                    },
                    {
                        id: "57",
                        name: "Tops",
                    },
                    {
                        id: "58",
                        name: "Skirts",
                    },
                    {
                        id: "59",
                        name: "Shoes",
                    },
                ],
            },
            {
                id: "60",
                name: "Kids",
                children: [
                    {
                        id: "61",
                        name: "Shirts",
                    },
                    {
                        id: "62",
                        name: "Pants",
                    },
                    {
                        id: "63",
                        name: "Shoes",
                    },
                    {
                        id: "64",
                        name: "Jackets",
                    },
                ],
            },
        ],
    },
];


const Folders = () => {
	return <TOC toc={toc} />;
};

export default Folders;
