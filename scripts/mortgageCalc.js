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
    let principalAmountField = Number(document.querySelector("#loanField").value);
    let interestRateField = Number(document.querySelector("#interestField").value);
    let loanLengthField = Number(document.querySelector("#loanTermsField").value);

    //calculate the monthly interest rate and the total number if payments
    const monthlyRate = interestRateField / 100 / 12;
    const numOfPayments = loanLengthField * 12;
    const denominator = Math.pow(1 + monthlyRate, numOfPayments);

    //calculate monthly payment and total loan amount
    const monthlyPayment = (principalAmountField) * (monthlyRate * denominator) / (denominator - 1);
    const totalPayment = monthlyPayment * numOfPayments;
    const totalInterest = totalPayment - principalAmountField

    //formula for the mortagae 
    //monthlyPrincipalandInterestPayment = principalAmountField * (monthlyRate / 1 - (1 + monthlyRate) ^ loanLengthField)

    //put the results in the answer input field 
    document.querySelector("#answerField").value = 
    document.querySelector("#answer2Field").value = 

}


