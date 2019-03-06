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

const assignments = [
    {
        title: 'Product Cards',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'http://www.google.com',
    },
    {
        title: 'Joke Website',
        dueDate: '04/05/2019',
        topic: 'HTML/CSS/JavaScript',
        notes: 'Use flexbox',
        assignmentUrl: 'http://www.wikipedia.com',
    },
    {
        title: 'Button Page',
        dueDate: '05/05/2019',
        topic: 'HTML/JavaScript',
        notes: 'Use Buttons',
        assignmentUrl: 'http://www.facebook.com',
    },
    {
        title: 'Doody Birds',
        dueDate: '06/05/2019',
        topic: 'Doodies',
        notes: 'Use doodyBirds',
        assignmentUrl: 'http://www.doodybird.com',
    },
    {
        title: 'Fun Time',
        dueDate: '07/05/2019',
        topic: 'FUN',
        notes: 'Have FUn',
        assignmentUrl: 'http://www.winky-face.com',
    },

];



//five assignments
// make func called buildAssignmentCards -loop over assignments and make a dom string
// reuse printToDom func to display domString

const buildAssignmentCards = () => {
    let domString = '';
    for(let i = 0; i < assignments.length; i++){
        domString += `<div class="assignmentCard">`;
        domString +=    `<h3>${assignments[i].title}</h3>`;
        domString +=    `<hr>`;
        domString +=    `<h2>Due Date: ${assignments[i].dueDate}</h2>`;
        domString +=    `<h3>Get the assignment <a target="_blank" href="${assignments[i].assignmentUrl}">HERE</a></h3>`;
        domString +=    `<h3>Topic: ${assignments[i].topic}</h3>`;
        domString +=    `<h3>Notes: ${assignments[i].notes}</h3>`;
        domString += `</div>`;
    }
    printToDom('assignmentDiv', domString)
}











const init = () => {
    buildDinosaurs();
    buildAssignmentCards();
};

init();