const calculator = document.querySelector("calculator");
const allButtons = ["CLEAR", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "±", "0", ".", "="];
const allOps = ["%", ".", "=", "÷", "-", "x", "DEL", "±", "+"];
let userNums = [];
let userNumsLen = 0;
let result = 0;
let userOps = 0;
let calculationOver = false;

const calculatorBtns = document.querySelectorAll(".calculator__btns__all");
const calculatorScreen = document.querySelector("input");
const calculatorScreenTrack = document.querySelector(".calculator__screen__track")
calculatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (calculationOver === true){
            calculatorScreen.value = "";
            calculatorScreenTrack.textContent = "0";
            userNums.splice(0);
            userOps = [];
            calculationOver = false;
        }
        if (button.value === "CLEAR"){
            calculatorScreen.value = "";
            userNums.splice(0);
            userOps = [];
            calculatorScreenTrack.textContent = "0";
        }
        if (button.value >= 0 ||
            button.value === "."
        ){
            calculatorScreen.value += button.value
        }
        if (button.value === "+" ||
            button.value === "-" ||
            button.value === "÷" ||
            button.value === "x"){
                userNums.push(Number(calculatorScreen.value));
                calculatorScreen.value = "";
                userNumsLen = userNums.length;
                if (userNumsLen == 1){
                    calculatorScreenTrack.textContent = userNums;
                    }
                if (userOps == 0){
                    userOps = button.value;
                }
                else if (userOps == "+"){
                    const addition = userNums.reduce((accu, curr) => accu + curr);
                    result = addition;
                    userOps = button.value;
                    calculatorScreenTrack.textContent = result;
                    userNums.splice(0);
                    userNums.push(addition);
                    userNumsLen = userNums.length;
                    }
                else if (userOps == "-"){
                    const subtract = userNums.reduce((accu, curr) => accu - curr);
                    result = subtract;
                    userOps = button.value;
                    calculatorScreenTrack.textContent = result;
                    userNums.splice(0);
                    userNums.push(subtract);
                    userNumsLen = userNums.length;
                    }
            }
        if (button.value === "="){
            userNums.push(Number(calculatorScreen.value));
            calculatorScreen.value = "";
            calculatorScreenTrack.textContent = "0";
            userNumsLen = userNums.length;
            if (userOps == "+"){
                addition = userNums.reduce((accu, curr) => accu + curr, 0);
                result = addition;
                userOps = button.value;
                userNums.splice(0);
                userNums.push(addition);
                userNumsLen = userNums.length;
                calculatorScreen.value = result;
                calculationOver = true;
            }
                if (userOps == "-"){
                subtract = userNums.reduce((accu, curr) => accu - curr);
                result = subtract;
                userOps = button.value;
                userNums.splice(0);
                userNums.push(subtract);
                userNumsLen = userNums.length;
                calculatorScreen.value = result;
                calculationOver = true;
            }
        }
    })
})

