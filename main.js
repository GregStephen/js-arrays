const dinosaurs = [
    {
        dinoType: 'T-Rex',
        name: "Teddy",
    },
    {
        dinoType: 'Triceratops',
        name: "Leroy",
    },
    {
        dinoType: 'Stegosaurus',
        name: "Sally",
    }
];


// loop over the dinos
// build up a domstring
// print the domstring to the dom

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += textToPrint;
};

const buildDinosaurs = () => {
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++){
        domString += `<div class="dinosaur">`;
        domString +=    `<h3>${dinosaurs[i].dinoType}</h3>`;
        domString +=    `<p>${dinosaurs[i].name}</p>`;
        domString += `</div>`;
        console.log("dinotype", dinosaurs[i].dinoType);
    }
    printToDom('dino-barn', domString)
};

const init = () => {
    buildDinosaurs();
};

init();