const calc = {
    num1 : "",
    num2:"",
    num1IsSet : false,
    num2IsSet : false,    
    operation : "",
    subtract(){
        return this.num1 - this.num2;
    },
    sum(){
        return this.num1 + this.num2;
    },
    multiply(){  
        return this.num1 * this.num2;
    },
    divide(){
        const division = this.num1 / this.num2;
        if (isFinite(division)){
            return division;
        }
        else{
            return "Error"
        }
    },
    operate(num1,num2,operator){
        this.num1 = num1.includes('.') ? parseFloat(num1) : parseInt(num1);
        this.num2 = num2.includes('.') ? parseFloat(num2) : parseInt(num2);
        let result = this[operator]();
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
                calc.operation = e.target.value;
            break;
            case "sum":
                calc.operation = e.target.value;
            break;
            case "multiply":
                calc.operation = e.target.value;
            break;
            case "divide":
                calc.operation = e.target.value;                
            break;
            case "C":
                calc.num1 = "";
                calc.num2 = "";
                calc.operation = "";
                display.textContent = "";
            break;
            case "backspace":
                if (!calc.num1IsSet) calc.num1 = calc.num1.slice(0,-1);
                if (calc.num2IsSet) calc.num2 = calc.num2.slice(0,-1);
                break;
            case ".":
                if (!calc.num1IsSet) calc.num1 += e.target.value;
                    if (calc.num1 === ".") calc.num1 = '0'+ calc.num1;

                if (!calc.num2IsSet) calc.num2 += e.target.value;
                    if (calc.num2 === ".") calc.num2 = '0'+ calc.num2;
                break;
            case "=":
                break;
            default:
                if (!calc.num1IsSet) calc.num1 += e.target.value;
                if (!calc.num2IsSet) calc.num2 += e.target.value;
        }
    }
    calc.num1IsSet = calc.num1 !== "" && calc.operation !== "";
    calc.num2IsSet = calc.num1 !== "" && calc.num2 !== "" &&  calc.operation !== "";
    
    if (!calc.num1IsSet || calc.num2 === "") calc.display(display,calc.num1)
    else if (!calc.num2IsSet) calc.display(display,calc.num2)

    if (num1IsSet && num2IsSet){
        let result = calc.operate(num1,num2,calc.operate);
        calc.display(display,result);
    }
        
});