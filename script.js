const calculator = document.querySelector("calculator");
const calculatorBtns = document.querySelectorAll(".calculator__btns__all");
const calculatorScreen = document.querySelector("input");
const calculatorScreenTrack = document.querySelector(".calculator__screen__track")

const allButtons = ["CLEAR", "√", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "±", "0", ".", "="];
let userNums = [];
let userNumsLen = 0;
let result = 0;
let userOps = 0;
let calculationOver = false;

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
        if (button.value === "±"){
            let numsTemp = calculatorScreen.value;
            let posMin = (numsTemp - (numsTemp * 2));
            calculatorScreen.value = posMin;
        }
        if (button.value === "√"){
            numsTemp = calculatorScreen.value;
            let sqrt = Number(Number(Math.sqrt(numsTemp)).toFixed(3));
            calculatorScreen.value = sqrt;
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
                let calculate = operate();
                result = Number(Number(calculate).toFixed(3));
                userOps = button.value;
                calculatorScreenTrack.textContent = result;
                userNums.splice(0);
                userNums.push(calculate);
                userNumsLen = userNums.length;
            }
        if (button.value === "="){
            userNums.push(Number(calculatorScreen.value));
            calculatorScreen.value = "";
            calculatorScreenTrack.textContent = "0";
            userNumsLen = userNums.length;
            let calculateFinal = operate();
            result = Number(Number(calculateFinal).toFixed(3));
            userOps = button.value;
            userNums.splice(0);
            userNums.push(calculateFinal);
            userNumsLen = userNums.length;
            calculatorScreen.value = result;
            calculationOver = true;
        }
    })
})

function operate(){
    if (userOps == "+"){
        const addition = userNums.reduce((accu, curr) => accu + curr);
        return addition;
    }
    else if (userOps == "-"){
        const subtract = userNums.reduce((accu, curr) => accu - curr);
        return subtract;
    }
    else if (userOps == "x"){
        const multiply = userNums.reduce((accu, curr) => accu * curr);
        return multiply;
    }
    else if (userOps == "÷"){
        const divide = userNums.reduce((accu, curr) => accu / curr);
        return divide;
    }
}