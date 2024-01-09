//Objects of userInput 

const userInputValues = {
    Alcohols: 'Alcohols',
    Aldehydes: 'Aldehydes',
    Ketones: 'Ketones'
    
};


//For loop to iterate through, to randomly generate
const organicMechanismsValues  = {






};




function generateOrganicMechanisms(userInput) {
    let userInput = document.getElementById('input').getText();
    
    

    
    if (userInput === null) {
        alert("Please enter a topic you would like to study")

    } 
    else if (userInput === userInputValues.Alcohols) {

    }
    else if (userInput === userInput.Aldehydes) {

    }
    else if (userInput === userInput.Ketones) {

    }
    



};


//When the 'study now' button is clicked, triggers the generation of an organic mechanism
function buttonClickEvent() {

    const studyNowBtn = document.getElementById('study');
        studyNowBtn.addEventListener('click', function() {
            generateOrganicMechanisms();
        });

};


