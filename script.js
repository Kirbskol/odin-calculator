const calculator = document.querySelector("calculator");
const calculatorButtons = document.querySelector(".calculator__btns");
const buttons = ["%", "C", "DEL", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "±", "0", ".", "="]
const totalButtons = buttons.length;

function makeCalculator() {
    for (let x = 0; x < totalButtons; x++){
        let calculatorBtn = document.createElement("btn");
        calculatorBtn.textContent = buttons[x];
        calculatorBtn.style.fontSize = "2em";
        if (calculatorBtn.textContent == "÷" ||
            calculatorBtn.textContent == "+" ||
            calculatorBtn.textContent == "-" ||
            calculatorBtn.textContent == "x" ||
            calculatorBtn.textContent == "="){
                calculatorBtn.classList.add("calculator__btns__op");
                calculatorBtn.style.backgroundColor = "salmon";
        }
        else if (calculatorBtn.textContent == "%" ||
                 calculatorBtn.textContent == "±"){
                    calculatorBtn.classList.add("calculator__btns__op");
                    calculatorBtn.style.backgroundColor = "salmon";
        }
        else if (calculatorBtn.textContent == "C" ||
                 calculatorBtn.textContent == "DEL"){
                    calculatorBtn.classList.add("calculator__btns__clear");
                    calculatorBtn.style.backgroundColor = "salmon";
        }
        else if (calculatorBtn.textContent == "."){
                   calculatorBtn.classList.add("calculator__btns__dot");
                   calculatorBtn.style.backgroundColor = "salmon";
        }
        else{
            calculatorBtn.classList.add("calculator__btns__num");
        }
                 
        calculatorButtons.appendChild(calculatorBtn);
    }
    calculator.appendChild(calculatorButtons);
}

makeCalculator();