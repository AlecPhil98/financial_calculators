"use strict "
console.log("this is wworking")

window.onload = init;

function init() {

    const addButton = document.querySelector("#addButton");
    const subtractButton = document.querySelector("#subtractButton")
    const multiplyButton = document.querySelector("#multiplyButton")
    const divideButton = document.querySelector("#divideButton")

    addButton.addEventListener("click", add);
    subtractButton.addEventListener("click", subtract);
    multiplyButton.addEventListener("click", multiply);
    divideButton.addEventListener("click", divide);

}

function add() {

    //get the value out of the input fields the user types in 
    let number1 = Number(document.querySelector("#number1Field").value)
    let number2 = Number(document.querySelector("#number2Field").value)

    //add those numebrs together 
    let sum = number1 + number2

    //put the results in the answer input field 
    document.querySelector("#answerField").value = sum;

}

function subtract() {

    //get the value out of the input fields the user types in 
    let number1 = document.querySelector("#number1Field").value
    let number2 = document.querySelector("#number2Field").value

    //add those numebrs together 
    let sum = number1 - number2

    //put the results in the anwser input field 
    document.querySelector("#answerField").value = sum;

}

function multiply() {

    //get the value out of the input fields the user types in 
    let number1 = document.querySelector("#number1Field").value
    let number2 = document.querySelector("#number2Field").value

    //add those numebrs together 
    let sum = number1 * number2;

    //put the results in the answer input field 
    document.querySelector("#answerField").value = sum;

}

function divide() {

    //get the value out of the input fields the user types in 
    let number1 = document.querySelector("#number1Field").value
    let number2 = document.querySelector("#number2Field").value

    //add those numebrs together 
    let sum = number1 / number2;

    //put the results in the answer input field 
    document.querySelector("#answerField").value = sum;

}








