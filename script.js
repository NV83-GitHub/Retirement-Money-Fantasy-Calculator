let age = document.getElementById("age-el")
let lifeExpectency = document.getElementById("life-expectency-el")
const month = 12
let lifeCost = document.getElementById("life-cost-el")
let result = document.getElementById("result-el")

function fMoneyCalc() {
    //calculate real time amount
    let time = lifeExpectency.value - age.value
    //multiply real time amount by month in a year times the money needed each month
    result.textContent = time * month * lifeCost.value
}