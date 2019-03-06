const dinosaurs = [
    {
        dinoType: 'T-Rex',
    },
    {
        dinoType: 'Triceratops',
    },
    {
        dinoType: 'Stegosaurus',
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
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
        console.log("dinotype", dinosaurs[i].dinoType);
    }
    printToDom('dino-barn', domString)
};

const init = () => {
    buildDinosaurs();
};

init();