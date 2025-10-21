const calc = {
    num1 : "",
    num2:"",
    num1IsSet : false,
    num2IsSet : false,    
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
    // divide(num1,num2){
    //     const division = num1 / num2;
    //     if (isFinite(division)){
    //         return division;
    //     }
    //     else{
    //         return "Error"
    //     }
    // },
    operate(num1,num2,operator){
        let result = this[operator](num1,num2);
        if (result !== 0 && result !== "Error"){
            result = Number.isInteger(result) ? result : result.toFixed(2); 
        }
        return result
    },
    display(display,num){
        return display.textContent = num;
    }
}

const buttons = document.querySelector(".btns-container");
const display = document.getElementById("display");

buttons.addEventListener("click",(e)=>{
    if (e.target.tagName === "BUTTON"){    
        switch(e.target.value) {
            case "subtract":
                if (calc.operation !== "" && calc.num2 !== "" && typeof calc.num2 === "string") {
                    calc.num2 = calc.num2.includes('.') ? parseFloat(calc.num2) : parseInt(calc.num2);
                }
                calc.operation = e.target.value;
            break;
            case "sum":
                if (calc.operation !== "" && calc.num2 !== "" && typeof calc.num2 === "string") {
                    calc.num2 = calc.num2.includes('.') ? parseFloat(calc.num2) : parseInt(calc.num2);
                }
                calc.operation = e.target.value;
            break;
            case "multiply":
                if (calc.operation !== "" && calc.num2 !== "" && typeof calc.num2 === "string") {
                    calc.num2 = calc.num2.includes('.') ? parseFloat(calc.num2) : parseInt(calc.num2);
                }
                calc.operation = e.target.value;
            break;
            case "divide":
                if (calc.operation !== "" && calc.num2 !== "" && typeof calc.num2 === "string") {
                    calc.num2 = calc.num2.includes('.') ? parseFloat(calc.num2) : parseInt(calc.num2);
                }
                calc.operation = e.target.value;                
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
                if (!calc.num1IsSet) calc.num1 = calc.num1.slice(0,-1);
                else if (calc.num1IsSet && calc.num2IsSet) calc.num2 = calc.num2.slice(0,-1);
                break;
            case ".":
                if (!calc.num1IsSet && !calc.num1.includes(".")) calc.num1 += e.target.value;
                    if (calc.num1 === ".") calc.num1 = '0'+ calc.num1;

                else if (calc.num1IsSet && !calc.num2IsSet && !calc.num2.includes(".")){
                    calc.num2 += e.target.value;
                    if (calc.num2 === ".") calc.num2 = '0'+ calc.num2;
                }
                break;
            case "=":
                if (typeof calc.num2 === "string") {
                    calc.num2 = calc.num2.includes('.') ? parseFloat(calc.num2) : parseInt(calc.num2);
                }
                break;
            default:
                if (!calc.num1IsSet) calc.num1 += e.target.value;
                else if (!calc.num2IsSet) calc.num2 += e.target.value;
        }

        if(calc.operation !== "" && calc.num1 !== "" && typeof calc.num1 === "string"){
            calc.num1 = calc.num1.includes('.') ? parseFloat(calc.num1) : parseInt(calc.num1);
        }

        if (!calc.num1IsSet || calc.num2 === "") calc.display(display,calc.num1)
        else if (!calc.num2IsSet) calc.display(display,calc.num2)

        calc.num1IsSet = calc.num1 !== "" && typeof calc.num1 === "number";
        calc.num2IsSet = calc.num1IsSet && calc.num2 !== "" && typeof calc.num2 === "number";

        if (calc.num1IsSet && calc.num2IsSet){
            let result = calc.operate(calc.num1,calc.num2,calc.operation);
            calc.display(display,result);
            calc.num1 = (result === "Error" || e.target.value === "=") ? "" : result;
            calc.num1IsSet = (result === "Error" || e.target.value === "=") ? false : true;
            calc.num2 = "";
            calc.num2IsSet = false;    
            calc.operation = e.target.value === "=" ? "" : calc.operation;
        }    
    } 
});