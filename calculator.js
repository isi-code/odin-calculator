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
    operate(num1,num2,operation){
        const result = operation(num1,num2);
        return result
    },
}

const buttons = document.querySelector(".btns-container");
const display = document.getElementById("display");

let num1 = "";
let operation= "";
let operatorSign = "";
let num2 = "";
let num1Set = false;

buttons.addEventListener("click",(e)=>{
    if (e.target.tagName === "BUTTON"){        
        switch(e.target.value) {
            case "-":
                operation = "subtract";
                operatorSign = e.target.value;
                display.textContent = num1 + e.target.value + num2;
            break;
            case "+":
                operation = "sum"; 
                operatorSign += e.target.value;
                display.textContent = num1 + e.target.value + num2;
            break;
            case "*":
                operation = "multiply";
                operatorSign = e.target.value;
                display.textContent = num1 + e.target.value + num2;
            break;
            case "/":
                operation = "divide";
                operatorSign = e.target.value;
                operation, display.textContent = num1 + e.target.value + num2;
            break;
            case "C":
                num1, num2, operatorSign = "";
                display.textContent = "";
            break;
            case "backspace":
                if (!num1Set){
                    num1 = num1.slice(0,-1);
                    display.textContent = num1;
                }
                else{
                    num2 = num2.slice(0,-1);
                    display.textContent = num2;
                }
                break;
            // case ".":
            //     if (!num1Set && num1.indexOf('.') !== 1){
            //         num1 += e.target.value;
            //     }
            //     else if (num2.indexOf('.') !== 1){
            //         num2 += e.target.value;
            //     }
            // break;
            case "=":
                if (num1 !== "" && num2 !== "" && operatorSign !== "" ){
                    let result = calculator.operate(num1,num2,calculator[operation]);
                    display.textContent = `${num1} + ${num2} = ${result}`;
                    num1 = result;
                }
                break;
            default:
                num1Set = num1 !== "" && operation !== "";
                if (!num1Set){
                    num1 += e.target.value;
                    display.textContent = num1 + operatorSign;
                } else{
                    num2 += e.target.value;
                    display.textContent = num1 + operatorSign + num2;
                }
        }
    }
});