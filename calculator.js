const calc = {
    num1 : "",
    num2:"",
    operation : "",
    subtract(num1,num2){
        return num1 - num2;
    },
    sum(num1,num2){
        return num1 + num2;
    },
    multiply(num1,num2){  
        return num1 * num2;
    },
    divide(num1,num2){
        const division = num1 / num2;
        if (isFinite(division) ){
            return division;
        }
        else{
            return "You can't divide by 0";
        }
    },
    operate(num1,num2,operator){
        let result = this[operator](num1,num2);
        if (typeof result !== "string" ){
            this.num1 = result;
            this.num2 = "";
            result = Number.isInteger(result) ? result : result.toFixed(2);
        }
        else{
            this.num1 = "";
            this.num2 = "";
            this.operation = "";
        }
        return result
    },
    display(display,num){
        display.textContent = num;
    }
}

const buttons = document.querySelector(".btns-container");
const display = document.getElementById("display");

buttons.addEventListener("click",(e) => {
    if (e.target.tagName === "BUTTON"){    
        switch(e.target.value) {
            case "sum":
            case "subtract":
            case "multiply":
            case "divide":
                if(calc.operation === "") calc.operation = e.target.value;
                else{
                    calc.num2 = calc.num2.includes('.') ? parseFloat(calc.num2) : parseInt(calc.num2);
                    let result = calc.operate(calc.num1,calc.num2,calc.operation)
                    calc.operation = e.target.value;
                    calc.display(display,result)
                }
                break;
            case "C":
                calc.num1 = "";
                calc.num2 = "";
                calc.operation = "";
                calc.num1IsSet = false;
                calc.num2IsSet = false; 
                calc.display(display,"");
            break;
            case "backspace":
                if (typeof calc.num1 === "string") {
                    calc.num1 = calc.num1.slice(0,-1);
                    calc.display(display,calc.num1)
                }
                else if (typeof calc.num2 === "string") {
                    calc.num2 = calc.num2.slice(0,-1);
                    calc.display(display,calc.num2)
                }
                break;
            case ".":
                if (typeof calc.num1 === "string"){
                    if(!calc.num1.includes(".")) calc.num1 += e.target.value;
                    if (calc.num1 === ".") calc.num1 = '0'+ calc.num1;
                }
                else if (typeof calc.num2 === "string"){
                    if(!calc.num2.includes(".")) calc.num2 += e.target.value;
                    if (calc.num2 === ".") calc.num2 = '0'+ calc.num2;
                }
                break;
            case "=":
                if (calc.num2 !== ""){
                    calc.num2 = calc.num2.includes('.') ? parseFloat(calc.num2) : parseInt(calc.num2);
                    let result = calc.operate(calc.num1,calc.num2,calc.operation)
                    calc.display(display,result)
                }
                else{
                    calc.display(display,"Error")
                }
                calc.num1 = "";
                calc.operation = "";
                break;
            default:
                if (typeof calc.num1 === "string") {
                    calc.num1 += e.target.value;
                    calc.display(display,calc.num1)
                }
                else if (typeof calc.num2 === "string") {
                    calc.num2 += e.target.value;
                    calc.display(display,calc.num2)
                }
            }
        }
        if (calc.num1 !== "" && calc.operation !== ""){
            calc.num1 = calc.num1.includes('.') ? parseFloat(calc.num1) : parseInt(calc.num1);
        }
    }
);