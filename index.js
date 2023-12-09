let previousInputDisplay = document.getElementById('previousValue')
let currentInputDisplay = document.getElementById('currentValue')
const numberButtons = document.querySelectorAll('.number')
const operatorButton = document.querySelectorAll('.operator')
const backButton = document.querySelector('.backButton')

let currentValue = ''

function showValue() {
    numberButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault()
            const value = button.innerHTML
            console.log(value) 
            currentValue += value
            currentInputDisplay.value = currentValue
        })
    }) 
}
showValue()

const mathOperations = new MathOperations()



