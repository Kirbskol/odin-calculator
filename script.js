const calculator = document.querySelector("calculator");
const calculatorButtons = document.querySelector(".calculator__btns");
const buttons = ["%", "C", "DEL", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "±", "0", ".", "="]
let calculatorBtn = [];
const totalButtons = buttons.length;
let userInput = [];

function makeCalculator() {
    for (let x = 0; x < totalButtons; x++){
        calculatorBtn[x] = document.createElement("btn");
        calculatorBtn[x].textContent = buttons[x];
        calculatorBtn[x].style.fontSize = "2em";
        if (calculatorBtn[x].textContent == "÷" ||
            calculatorBtn[x].textContent == "+" ||
            calculatorBtn[x].textContent == "-" ||
            calculatorBtn[x].textContent == "x" ||
            calculatorBtn[x].textContent == "="){
                calculatorBtn[x].classList.add("calculator__btns__op");
                calculatorBtn[x].style.backgroundColor = "salmon";
        }
        else if (calculatorBtn[x].textContent == "%" ||
                 calculatorBtn[x].textContent == "±"){
                    calculatorBtn[x].classList.add("calculator__btns__op");
                    calculatorBtn[x].style.backgroundColor = "salmon";
        }
        else if (calculatorBtn[x].textContent == "C" ||
                 calculatorBtn[x].textContent == "DEL"){
                    calculatorBtn[x].classList.add("calculator__btns__clear");
                    calculatorBtn[x].style.backgroundColor = "salmon";
        }
        else if (calculatorBtn[x].textContent == "."){
                   calculatorBtn[x].classList.add("calculator__btns__dot");
                   calculatorBtn[x].style.backgroundColor = "salmon";
        }
        else{
            calculatorBtn[x].classList.add("calculator__btns__num");
        }
        calculatorBtn[x].classList.add("calculator__btns__all");
        calculatorBtn[x].addEventListener("click", getInput);
        function getInput(){
            let buttonContent = calculatorBtn[x].textContent;
            userInput.push(`${buttonContent}`);
        }
        calculatorButtons.appendChild(calculatorBtn[x]);
    }
    calculator.appendChild(calculatorButtons);
}



makeCalculator();