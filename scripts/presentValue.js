"use strict"

console.log("test2")

//monthly payout ex:$3000
//expected interest rate ex: 2.5%
//years to pay out from user ex: 20 years 
//display the present value of that annuity ex:$556,141.46 


window.onload = init;

function init() {
    //calculate button 
    const calculateButton = document.querySelector("#calculateButton");
    calculateButton.addEventListener("click", calculate);


}

function calculate(){
    //get the value out of the input fields the user types in
    let presentMonthlyPayment = Number(document.querySelector("#presntLoanField").value);
    let presentinterestRateField = Number(document.querySelector("#presentInterestField").value);
    let presentloanLengthField = Number(document.querySelector("#presentLoanTermsField").value);
    let PaymentInterval = Number(document.querySelector("#paymentIntervalField").value);

 //calculate the monthly interest rate and the total number if payments

 const monthlyRate = presentinterestRateField / 100 / 12;
 const presentNumOfPayments = presentloanLengthField * 12;
 const denominator = Math.pow(1 + monthlyRate, numOfPayments);

 
  //put the results in the answer input field 
  document.querySelector("#presentValueField").value = presentValueAnnuity.toFixed(2)
 

}