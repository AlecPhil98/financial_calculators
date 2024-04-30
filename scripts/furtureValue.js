"use strict"
console.log("test3");

//dont run stuiff until the DOM is fully loaded 
window.onload = function () {
    //look through the html documnent for somthing with the id of futureValueForm and store it in 
    //a variable 
    const futureValueForm = document.querySelector("#futureValueForm");


    //bind some funtiuon to and evenr for the submission of the form 
    futureValueForm.addEventListener("submit", calcFutureValue);


}

//funtions that will do the heavy lifting based on events 
function calcFutureValue(event) {

    console.log("alec submitted the form");
    event.preventDefault();

    //pull the innformation out of the form for me to use 
    const deposit = Number(document.querySelector("#deposit").value);
    const interestRate = Number(document.querySelector("#interestRate").value);
    const years = Number(document.querySelector("#years").value);


    //futureValue = desposit * (1+ interestRate) ** years;


    console.log(deposit, interestRate, years, "numbers from users")

    let resultsdDiv = document.querySelector("#results");
    resultsdDiv.innerHTML = "text test"
}