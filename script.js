const calculator = document.querySelector("calculator");
const calculatorButtons = document.querySelector(".calculator__btns");
const calculatorResult = document.querySelector("#calculator__screen__result");
const allButtons = ["%", "C", "DEL", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "±", "0", ".", "="];
const allFunctions = ["%", ".", "=", "÷", "-", "x", "C", "DEL", "±", "+"];
const allOperators = ["%", "=", "x", "-", "÷", "+", "±"];
let selectedNums = [];
let selectedOps = [];

const makeCalculator = () => {
    allButtons.forEach((element) => {
        const singleButton = document.createElement("button");
        singleButton.textContent = element;
        singleButton.style.fontSize = "2em";
        singleButton.classList.add("calculator__btns__all");
        if (allFunctions.includes(element)) { 
                                                singleButton.setAttribute("style", 
                                                                          "background-color: salmon") 
                                            }
        singleButton.addEventListener("click", () => getButtonInput(element.toString()));
        calculatorButtons.appendChild(singleButton);
    });
}

const getButtonInput = (element) => {
    if (Number(element) >= 0 ){
        calculatorResult.value += element;
        selectedNums.push(element);
    }
    else if (element === "+" ||
             element === "-" ||
             element === "x" ||
             element === "÷" ||
             element === "%" ||
             element === "±")
        selectedOps.push(element);
}

makeCalculator();