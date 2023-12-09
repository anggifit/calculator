let previousInputDisplay = document.getElementById('previousValue')
let currentInputDisplay = document.getElementById('currentValue')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const backButton = document.querySelector('.backButton')

let currentValue = ''

function showValue() {
    numberButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault()
            const value = button.innerHTML
            currentValue += value
            currentInputDisplay.value = currentValue
            // pending change function so that it can accpet decimals
        })
    }) 
}

function clearDisplay() {
    backButton.addEventListener("click", (event) => {
        event.preventDefault()
        currentValue = ''
        currentInputDisplay.value = currentValue
    })
}

showValue()
clearDisplay()

const mathOperations = new MathOperations()



