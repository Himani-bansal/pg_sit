import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import pic4 from "./images/pic4.png";

export const pgs = [
    {
        id: 1,
        name: "PG1",
        image: pic1 ,
        price: 5000,
        sharing: "Single",
        amenities: ["WiFi", "AC", "Gym"],
    },
    {
        id: 2,
        name: "PG2",
        image: pic2 ,
        price: 6000,
        sharing: "Double",
        amenities: ["WiFi", "AC"],
    },
    {
        id: 3,
        name: "PG3",
        price: 7000,
        image: pic3 ,
        sharing: "Triple",
        amenities: ["WiFi", "AC", "Swimming Pool"],
    },
    {
        id: 4,
        name: "PG4",
        image: pic4 ,
        price: 8000,
        sharing: "Single",
        amenities: ["WiFi", "AC", "Gym", "Swimming Pool"],
    },
]