//Object of user Input values
const userInputValues = {
    Aldehydes: 'Aldehydes',
    Ketones: 'Ketones',
    Benzenes: 'Benzene'
    
};


//Arrays of Organic Mechanisms
const benzenelMechanismsValues  = [
    'Nitration',
    'Chlorination',
    'Friedel-Crafts'
];

const aldehydeMechanismsValues  = [
    'Enamine Formation',
    'Oxidation'
];

const ketoneMechanismsValues = [
    'Acetal Formation',
    'Imine Formation',
    'Oxidation'
];



function generateOrganicMechanisms(userInput) {

    alert('button clicked');
    let userInput = document.getElementById('input').getText();

    let randomBenzeneMechanism = benzenelMechanismsValues[Math.floor(Math.random()*benzenelMechanismsValues.length)];

    let randomAldehydeMechanism = aldehydeMechanismsValues[Math.floor(Math.random()*aldehydeMechanismsValues.length)];

    let randomKetoneMechanism = ketoneMechanismsValues[Math.floor(Math.random()*ketoneMechanismsValues.length)];
    
    if (userInput === null) {
        alert("Please enter a topic you would like to study")

    } 

    else if (userInput === userInputValues.Benzenes) {
        for (let i = 0; i < benzenelMechanismsValues.length; i++ ) {
            alert(randomBenzeneMechanism);
        }
    }

    else if (userInput === userInput.Aldehydes) {
        for (let i = 0; i < aldehydeMechanismsValues.length; i++ ) {
            alert(randomAldehydeMechanism);
        }

    }
    else if (userInput === userInput.Ketones) {
        for (let i = 0; i < ketoneMechanismsValues.length; i++ ) {
            alert(randomKetoneMechanism);
        }

    }
    else {
        alert("Not a recognised topic, please type in either Benzene, Aldehydes, Ketones")
    }

};


//When the 'study now' button is clicked, triggers the generation of an organic mechanism
function buttonClickEvent() {

    const studyNowBtn = document.getElementById('study');
        studyNowBtn.addEventListener('click', function() {
            generateOrganicMechanisms();
        });

};

buttonClickEvent();
generateOrganicMechanisms();




