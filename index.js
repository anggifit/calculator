let previousInputDisplay = document.getElementById('previousValue')
let currentInputDisplay = document.getElementById('currentValue')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equalOperator')
const backButton = document.querySelector('.backButton')
const cButton = document.querySelector('.col-2')

let currentValue = ''

function showCurrentValue() {
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

function clearValue() {
    currentValue = ''
    currentInputDisplay.value = currentValue
}

showCurrentValue()

backButton.addEventListener("click", (event) => {
    event.preventDefault()
    clearValue()
})

cButton.addEventListener("click", (event) => {
    event.preventDefault()
    clearValue()
    previousInputDisplay.value = ''
})

function operatorValue(button) {
    button.addEventListener("click", (event) => {
        event.preventDefault()
        previousInputDisplay.value = currentInputDisplay.value
        const previousValue = parseFloat(previousInputDisplay.value) 
        currentInputDisplay.value = ''
        currentValue = ''
        const operatorValue = button.innerHTML

        operations(operatorValue, previousValue)
    })
}

function operations (operator, previousValue) {
    equalButton.addEventListener("click", (e)=> {
        e.preventDefault()
        const mathOperations = new MathOperations()

        switch (operator) {
            case "+":
                previousInputDisplay.value = mathOperations.sum(previousValue, parseFloat(currentValue))
                currentInputDisplay.value = ""
                break;
        
            case "-":
                previousInputDisplay.value = mathOperations.subst(previousValue, parseFloat(currentValue))
                currentInputDisplay.value = ""
                break;  

            case "*":
                previousInputDisplay.value = mathOperations.multp(previousValue, parseFloat(currentValue))
                currentInputDisplay.value = ""
                break;

            case "/":
                previousInputDisplay.value = mathOperations.div(previousValue, parseFloat(currentValue))
                currentInputDisplay.value = ""
                break;

            default:
                alert("ERROR")
                break;
        }
    })
}

operatorButtons.forEach((operatorButton) => {
    operatorValue(operatorButton)    

})


