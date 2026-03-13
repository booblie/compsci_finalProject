const form = document.getElementById("form");
const input = document.getElementById("feelingInput");
const log = document.getElementById("log");
const outputImage = document.getElementById("outputImage");

const feelings = {
    yo: {
        text: "gurt",
        img: "default.jpg"
    },
    love: {
        text: "red rose",
        img: "images/redRoseWIP.jpg"
    },
    hate: {
        text: "orange lily",
        img: "images/orangeLilyWIP.jpg"
    },
    joy: {
        text: "yellow sunflower",
        img: "images/yellowSunWIP.jpg"
    },
    "good luck": {
        text: "green hydrangea",
        img: "images/greenHydWIP.jpg"
    },
    dedication: {
        text: "blue violet!",
        img: "images/blueVioletWIP.jpg"
    },
    grief: {
        text: "white daffodil",
        img: "images/whiteDaffWIP.jpg"
    }
};

function logSubmit(event) {
    event.preventDefault();

    const value = input.value.toLowerCase();
    const result = feelings[value];

    if (result) {
        log.textContent = result.text;
        outputImage.src = result.img;
    } else {
        log.textContent = "invalid";
        outputImage.src = "default.jpg";
    }
}

form.addEventListener("submit", logSubmit); 
