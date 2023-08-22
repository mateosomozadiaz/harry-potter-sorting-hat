let gryffindor = 0;
let hufflepuff = 0;
let ravenclaw = 0;
let slytherin = 0;

choiceA = document.querySelector("#choiceA");
choiceB = document.querySelector("#choiceB");
choiceC = document.querySelector("#choiceC");
choiceD = document.querySelector("#choiceD");

let questionNumber = 1

function nextQuestion() {
    
}

function clicked(button) {
    if (button == "A") {
        gryffindor++
    } if (button == "B") {
        hufflepuff++
    } if (button == "C") {
        ravenclaw++
    } if (button == "D") {
        slytherin++
    }

    if (questionNumber < 10) {
        nextQuestion()
    } if (questionNumber = 10) {
        finishQuizz()
    }

}

