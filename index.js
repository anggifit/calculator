const previousValue = document.getElementById('previousValue')
const currentValue = document.getElementById('currentValue')
const numberButton = document.querySelectorAll('.number')
const operatorButton = document.querySelectorAll('.operator')

const mathOperations = new MathOperations()

console.log(mathOperations.div(20,2))