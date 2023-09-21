/* Important Variables */

let gryffindor = 0;
let hufflepuff = 0;
let ravenclaw = 0;
let slytherin = 0;

const question = document.querySelector("#question");
const choiceA = document.querySelector("#choiceA");
const choiceB = document.querySelector("#choiceB");
const choiceC = document.querySelector("#choiceC");
const choiceD = document.querySelector("#choiceD");

/* Questions and Answers */
function question1() {
    question.textContent = "Which quality do you value most in a friend?";
    choiceA.textContent = "Bravery and courage";
    choiceB.textContent = "Loyalty and patience";
    choiceC.textContent = "Intlligence and wit";
    choiceD.textContent = "Ambition and cunning";
}


function question2() {
    question.textContent = "Which enchanted object do you pick?";
    choiceA.textContent = "A shimmering sword";
    choiceB.textContent = "A glowing key";
    choiceC.textContent = "A sparkling diadem";
    choiceD.textContent = "A mysterious locket";
}

function question3() {
    question.textContent = "What do you do if you witness your mate breaking the rules?";
    choiceA.textContent = "Try to stop them";
    choiceB.textContent = "Protect them while you prevent further rule-breaking";
    choiceC.textContent = "Gather evidence and present it to the proper authorities";
    choiceD.textContent = "Use the situation to your advantage";
}

function question4() {
    question.textContent = "What kind of potion do you like the most?";
    choiceA.textContent = "Draught of Living Death (Experience a blissful sleep)";
    choiceB.textContent = "Felix Felicis (Liquid Luck)";
    choiceC.textContent = "Polyjuice Potion (Take over someone's appearance)";
    choiceD.textContent = "Amortentia (Make someone fall in love)";
}

function question5() {
    question.textContent = "Which magical creature fascinates you the most?";
    choiceA.textContent = "Dragons";
    choiceB.textContent = "Hippogriffs";
    choiceC.textContent = "Phoenixes";
    choiceD.textContent = "Basilisks";
}

function question6() {
    question.textContent = "What do you do if you find a magical artifact in the Forbidden Forest?";
    choiceA.textContent = "Take it to the headmaster";
    choiceB.textContent = "Seek out help from a professor";
    choiceC.textContent = "Study it carefully";
    choiceD.textContent = "Keep it for yourself";
}

function question7() {
    question.textContent = "Which spell would you choose to learn?";
    choiceA.textContent = "Expecto Patronum (Repel dementors)";
    choiceB.textContent = "Protego (Create a shield)";
    choiceC.textContent = "Accio (Summon objects)";
    choiceD.textContent = "Crucio (Cause extreme pain)";
}

function question8() {
    question.textContent = "What is your favorite magical subject at Hogwarts?";
    choiceA.textContent = "Defense Against the Dark Arts";
    choiceB.textContent = "Herbology"
    choiceC.textContent = "Potions";
    choiceD.textContent = "Transfiguration";
}

function question9() {
    question.textContent = "What do you do if your favourite quiddich team's rival is cheating?";
    choiceA.textContent = "Inspire your favourite team to play their best";
    choiceB.textContent = "Report the cheating to the referee discreetly";
    choiceC.textContent = "Find a way to counter the cheating";
    choiceD.textContent = "Cheat as well";
}

function question10() {
    question.textContent = "Which is your favourite place at hogwarts?";
    choiceA.textContent = "Gryffindor Tower's common room";
    choiceB.textContent = "The kitchens";
    choiceC.textContent = "The library";
    choiceD.textContent = "The dungeons";
}

/* System */

question1()
let questionNumber = 1

function nextQuestion() {
    if (questionNumber == 1) {
        question2()
        questionNumber++
        return
    }

    if (questionNumber == 2) {
        question3()
        questionNumber++
        return
    }

    if (questionNumber == 3) {
        question4()
        questionNumber++
        return
    }

    if (questionNumber == 4) {
        question5()
        questionNumber++
        return
    }

    if (questionNumber == 5) {
        question6()
        questionNumber++
        return
    }

    if (questionNumber == 6) {
        question7()
        questionNumber++
        return
    }

    if (questionNumber == 7) {
        question8()
        questionNumber++
        return
    }

    if (questionNumber == 8) {
        question9()
        questionNumber++
        return
    }

    if (questionNumber == 9) {
        question10()
        questionNumber++
        return
    }

    if (questionNumber == 10) {
        /* Analize the Points for each house */

        let housePoints = gryffindor;
        let houseName = "Gryffindor";


        if (hufflepuff > housePoints) {
            housePoints = hufflepuff;
            houseName = "Hufflepuff";
        }

        if (ravenclaw > housePoints) {
            house = ravenclaw;
            houseName = "Ravenclaw";
        }

        if (slytherin > housePoints) {
            greatestHouse = slytherin;
            houseName = "Slytherin";
        }        

        document.querySelector(".quizz-container").classList.add("hide")

        document.querySelector("#quizz-house-indicator").textContent=(houseName + "!");
        document.querySelector("#quizz-house-indicator").classList.remove("hide");
    }
}

function finishQuizz() {

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

    nextQuestion()
}