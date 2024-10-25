const calculator = document.querySelector("calculator");
const calculatorButtons = document.querySelector(".calculator__btns");
const calculatorResult = document.querySelector("#calculator__screen__result");
const allButtons = ["CLEAR", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "±", "0", ".", "="];
const allFunctions = ["%", ".", "=", "÷", "-", "x", "DEL", "±", "+"];
const clearFunction = ["CLEAR"];
const allOperators = ["%", "=", "x", "-", "÷", "+", "±"];
let userSelected = [];
let userNumsSelected = [];

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
        if (clearFunction.includes(element)) { 
                                                singleButton.setAttribute("style", 
                                                                          "background-color: #000000")
                                                singleButton.style.color = "white";
                                                singleButton.classList.add("calculator__btn__clear");
                                            }                                            
        singleButton.addEventListener("click", () => getButtonInput(element.toString()));
        calculatorButtons.appendChild(singleButton);
    });
}

const getButtonInput = (element) => {
    if (Number(element) >= 0 ){
        calculatorResult.value += element;
        userSelected.push(element);
        userNumsSelected.push(element);
    }
    else if (element === "+" ||
             element === "-" ||
             element === "x" ||
             element === "÷" ||
             element === "%" ||
             element === "±"){
        if (element !== "%" &&
            element !== "±") {
                userSelected.push(element);
                calculatorResult.value = "";
            }
             }
    else if (element === "CLEAR"){
        calculatorResult.value = "";
        userSelected.splice(0, userSelected.length);
            }
    else if (element === "."){
        userSelected.push(element);
        calculatorResult.value += element;
    }
    else if (element === "="){
        getCalculation();
    }
}

makeCalculator();