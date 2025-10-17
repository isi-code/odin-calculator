const calculator = {
    subtract(num1,num2){
        return num1 - num2
    },
    sum(num1,num2){
        return num1 + num2
    },
    multiply(num1,num2){  
        return num1 * num2 
    },
    divide(num1,num2){
        return num1 / num2
    },
    operate(num1,num2,calculate){
        const result = calculate(num1,num2);
        return result
    },
}

const buttons = document.querySelector(".btns-container");
const display = document.getElementById("display");

let num1 = "";
let operation= "";
let operatorSign = "";
let num2 = "";
let result = 0;
let num1Set = false;

buttons.addEventListener("click",(e)=>{
    if (e.target.tagName === "BUTTON"){        
        switch(e.target.value) {
            case "-":
                operation = "subtract";
                operatorSign = e.target.value;
            break;
            case "+":
                operation = "sum"; 
                operatorSign += e.target.value;
            break;
            case "*":
                operation = "multiply";
                operatorSign = e.target.value;
            break;
            case "/":
                operation = "divide";
                operatorSign = e.target.value;
            break;
            case "C":
                num1 = "";
                num2 = "";
                operatorSign = "";
                display.textContent = "";
            break;
            case "backspace":
                if (!num1Set){
                    num1 = num1.slice(0,-1);
                }
                else{
                    num2 = num2.slice(0,-1);
                }
                break;
            case ".":
                if (!num1Set && num1.indexOf('.') !== 1){
                    num1 += e.target.value;
                }
                else if (num2.indexOf('.') !== 1){
                    num2 += e.target.value;
                }
                break;
            case "=":
                if (num1 !== "" && num2 !== "" && operation !== "" && operatorSign !== ""){
                    result = calculator.operate(num1,num2,calculator[operation]);
                }
                break;
            default:
                num1Set = num1 !== "" && operation !== "";
                if (!num1Set){
                    num1 += e.target.value;
                } else{
                    num2 += e.target.value;
                }
        }
        if (result){ 
            display.textContent = `${num1} ${operatorSign} ${num2} = ${result}`;
            num1 = result;
            result = 0;
            operation = "";
            operatorSign = "";
        } else{
            display.textContent = `${num1} ${operatorSign} ${num2}`;
        }
    }
});