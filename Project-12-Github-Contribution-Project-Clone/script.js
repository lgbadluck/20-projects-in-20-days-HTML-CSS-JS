const container = document.getElementById("_container");

// adding different green colors

let greenColorCodes = [
    "#7CFC00",
    "#78AB46",
    "#3B5323",
    "#458B00",
    "#BCED91",
    "#61B329",
    "#5DFC0A",
    "#4CBB17",
    "#4AC948",
    "#00EE00",
    "#33FF33",
    "#00C957",
];

let greenColorCodes2 = [
    "#00FC00",
    "#782222",
    "#3B5323",
    "#400ddd",
];

const numberOfSquares = 99;

for (let i = 0; i < numberOfSquares; i++) {
    const activity = document.createElement("div");
    activity.classList.add("activity");

    activity.addEventListener("mouseover", () => {
        addColor(activity);
    });

    activity.addEventListener("mouseout", () => {
        //stickColor(activity);
        addColor(activity);
    });

    container.appendChild(activity);
}

function addColor(squaresTile) {
    const getColor = greenColors();
    squaresTile.style.backgroundColor = getColor;
    squaresTile.style.boxshadow = ` 0 0 2px ${getColor}, 0 0 10px ${getColor}`;

}

function stickColor(squaresTile) {
    const getColor = greenColors2();
    squaresTile.style.backgroundColor = getColor;
    squaresTile.style.boxshadow = ` 0 0 2px ${getColor}, 0 0 10px ${getColor}`;
}

function greenColors() {
    return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)];
}
function greenColors2() {
    return greenColorCodes2[Math.floor(Math.random() * greenColorCodes2.length)];
}