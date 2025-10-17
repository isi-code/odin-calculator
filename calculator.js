const calc = {
    num1 : "",
    operation : "",
    operatorSign : "",
    num2 : "",
    result : 0,
    num1Set : false,
    subtract(){
        this.operate()
        this.result = this.num1 - this.num2
    },
    sum(){
        this.operate()
        this.result = this.num1 + this.num2
        this.result.toFixed(2)
    },
    multiply(){  
        this.operate()
        this.result = this.num1 * this.num2 
    },
    divide(){
        this.operate()
        this.result = this.num1 / this.num2
    },
    operate(){
        this.num1 = this.num1.indexOf('.') === 1 ? parseFloat(this.num1) : parseInt(this.num1);
        this.num2 = this.num2.indexOf('.') === 1 ? parseFloat(this.num2) : parseInt(this.num2);
    },
}

const buttons = document.querySelector(".btns-container");
const display = document.getElementById("display");

buttons.addEventListener("click",(e)=>{
    if (e.target.tagName === "BUTTON"){        
        switch(e.target.value) {
            case "-":
                calc.operation = "subtract";
                calc.operatorSign = e.target.value;
            break;
            case "+":
                calc.operation = "sum"; 
                calc.operatorSign += e.target.value;
            break;
            case "*":
                calc.operation = "multiply";
                calc.operatorSign = e.target.value;
            break;
            case "/":
                calc.operation = "divide";
                calc.operatorSign = e.target.value;
            break;
            case "C":
                calc.num1 = "";
                calc.num2 = "";
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
                }
                else if (calc.num2.indexOf('.') !== 1 && calc.operation !== ""){
                    calc.num2 += e.target.value;
                }
                break;
            case "=":
                if (calc.num1 !== "" && calc.num2 !== "" && calc.operation !== ""){
                    calc[calc.operation]()
                }
                break;
            default:
                calc.num1Set = calc.num1 !== "" && calc.operation !== "";
                if (!calc.num1Set){
                    calc.num1 += e.target.value;
                } else{
                    calc.num2 += e.target.value;
                }
        }
        if (calc.result){ 
            display.textContent = `${calc.num1} ${calc.operatorSign} ${calc.num2} = ${calc.result}`;
            calc.num1 = calc.result.toString();
            calc.result = 0;
            calc.operation = "";
            calc.operatorSign = "";
            calc.num2 = "";
        } else{
            display.textContent = `${calc.num1} ${calc.operatorSign} ${calc.num2}`;
        }
    }
});