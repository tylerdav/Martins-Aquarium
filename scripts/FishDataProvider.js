


const fishCollection = [
    {
        name: "Doug",
        image: "images/miamidolphin.jpg",
        species: "dolphin",
        location: "Miami",
        length: 50,
        food: ["food","food"],
    },
    {
        name: "Goldie",
        image: "images/goldie.jpg",
        species: "goldfish",
        location: "Pet Smart",
        length: 5,
        food: ["flakes","more flakes"],

    },
    {
        name: "Bart",
        image: "images/barracuda.jpg",
        species: "barracuda",
        location: "gulf of mexico",
        length: 30,
        food: ["fish", "scraps"],

    },
    {
        name: "Paul",
        image: "images/piranha.jpg",
        species: "piranha",
        location: "Brazil",
        length: 40,
        food: ["anything","everything"],

    },
    {
        name: "toothy",
        image: "images/shark.jpg",
        species: "shark",
        location: "South Africa",
        length: 40,
        food: ["big fish","small fish"],

    },
    {
        name: "freaky",
        image: "images/anglerfish.jpg",
        species: "anglerfish",
        location: "Mariana Trench",
        length: 1000,
        food: ["small fish","and other things"],

    }
]


export const useFish = () => {
    return fishCollection
}