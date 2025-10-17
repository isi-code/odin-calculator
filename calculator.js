calculator = {
    substract(num1,num2){
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
    cBtn(display){

    },
    backspace(display){

    }
}
