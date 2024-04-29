"use strict"
console.log("Test")

window.onload = init;

//let mortgage = 0;
//let principal = 53000; //or the loan amount 
//let interestRate = 7.625 / 100 / 12;
//let loanLength = 15 * 12;
//let monthlyPayment = 495.09;


function init() {
    //calculate button 
    const calculateButton = document.querySelector("#calculateButton");
    calculateButton.addEventListener("click", calculate);


}

function calculate() {
    //get the value out of the input fields the user types in
    let principal = Number(document.querySelector("#number1Field").value);
    let interestRate = Number(document.querySelector("#number2Field").value);
    let loanLength = Number(document.querySelector("#number3Field").value);

    //calculate the monthly interest rate and the total number if payments
    const monthlyRate = Number(interestRateField.value) / 100 / 12;
    const numOfPayments = Number(loanLengthField.value) * 12;
    const denominator = Math.pow(1 + monthlyRate, numOfPayments);

    //calculate monthly payment and total loan amount
    const monthlyPayment = Number(principalAmountField.value) * (monthlyRate * denominator) / (denominator - 1);
    const totalPayment = monthlyPayment * numOfPayments;
    const totalInterest = totalPayment - Number(principalAmountField.value)

    //formula for the mortagae 
   monthlyPayment = principal * ((1 +interestRate/100) * (loanLength / 12))
    //put the results in the answer input field 
    document.querySelector("#answerField").value = monthlyMortgagePayment;

    }
