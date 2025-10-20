const calc = {
    num1 : "",
    operation : "",
    operatorSign : "",
    num2 : "",
    result : 0,
    num1Set : false,
    num2Set : false,
    subtract(){
        this.result = this.num1 - this.num2;
        return this.result
    },
    sum(){
        this.result = this.num1 + this.num2;
        return this.result
    },
    multiply(){  
        this.result = this.num1 * this.num2;
        return this.result
    },
    divide(){
        this.result = this.num1 / this.num2;
        return this.result
    },
    operate(num1,num2,operator){
        this.num1 = num1.indexOf('.') === 1 ? parseFloat(num1) : parseInt(num1);
        this.num2 = num2.indexOf('.') === 1 ? parseFloat(num2) : parseInt(num2);
        let result = this[operator]();
        result = Number.isInteger(this.result) ? result : this.result.toFixed(2);
        display.textContent = `${result}`;
    },
}

const buttons = document.querySelector(".btns-container");
const display = document.getElementById("display");

buttons.addEventListener("click",(e)=>{
    if (e.target.tagName === "BUTTON"){        
        switch(e.target.value) {
            case "-":
                if(calc.num1Set && calc.num2Set && calc.operatorSign !== "") {
                    calc.operate(calc.num1,calc.num2,calc.operation);
                }
                calc.operation = "subtract";
                calc.operatorSign = e.target.value;
            break;
            case "+":
                if(calc.num1Set && calc.num2Set && calc.operatorSign !== "") {
                    calc.operate(calc.num1,calc.num2,calc.operation);
                }
                calc.operation = "sum";
                calc.operatorSign = e.target.value;
            break;
            case "*":
                if(calc.num1Set && calc.num2Set && calc.operatorSign !== "") {
                    calc.operate(calc.num1,calc.num2,calc.operation);
                }
                calc.operation = "multiply";
                calc.operatorSign = e.target.value;
            break;
            case "/":
                if(calc.num1Set && calc.num2Set && calc.operatorSign !== "") {
                    calc.operate(calc.num1,calc.num2,calc.operation);
                }
                calc.operation = "divide";
                calc.operatorSign = e.target.value;
            break;
            case "C":
                calc.num1 = "";
                calc.num2 = "";
                calc.result = 0;
                calc.operation = "";
                calc.operatorSign = "";
                display.textContent = "";
            break;
            case "backspace":
                if (!calc.num1Set){
                    calc.num1 = calc.num1.slice(0,-1);
                }
                else{
                    calc.num2 = calc.num2.slice(0,-1);
                }
                break;
            case ".":
                if (!calc.num1Set && calc.num1.indexOf('.') !== 1){
                    calc.num1 += e.target.value;
                    if (calc.num1 === ".") calc.num1 = '0'+ calc.num1
                }
                else if (calc.num2.indexOf('.') !== 1 && calc.operation !== ""){
                    calc.num2 += e.target.value;
                    if (calc.num2 === ".") calc.num2 = '0'+ calc.num2
                }
                break;
            case "=":
                if (calc.num1 !== "" && calc.num2 !== "" && calc.operation !== ""){
                    calc.operate(calc.num1,calc.num2,calc.operation);
                    calc.operation = "";
                    calc.operatorSign = "";
                }
                break;
            default:
                if (calc.num1Set && calc.operation === ""){
                    calc.num1 = "";
                    calc.num1 += e.target.value;
                }
                else if (!calc.num1Set){
                    calc.num1 += e.target.value;
                }
                else{
                    calc.num2 += e.target.value;
                }
        }
        calc.num1Set = calc.num1 !== "" && calc.operation !== "" || calc.result;
        calc.num2Set = calc.num1Set && calc.num2 !== "" && calc.operation !== "" && !calc.result;
        if (calc.result){
            calc.num1 = calc.result.toString();
            calc.result = 0;
            calc.num2 = "";
        } 
        if(!calc.num1Set){
            display.textContent = `${calc.num1}`;
        }
        if(calc.num2Set){
            display.textContent = `${calc.num2}`;
        }
    }
});