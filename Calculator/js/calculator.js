'use strict';

const sonuc= document.querySelector("#sonuc");

const buttons= document.querySelector("#buttons");

let sonucValue="0";
let firstValue= null;
let operator = null;
let newValue = false;

updateSonuc();

function updateSonuc(){
    sonuc.value = sonucValue 
}

buttons.addEventListener("click", function(e){
    const element = e.target

    if (!element.matches("button")) return

    if (element.classList.contains("operator")){
        // console.log("operatör", element.value);
        clickedOperator(element.value)
        updateSonuc()
         return 
    }
    if (element.classList.contains("dot")){
        // console.log("dot", element.value);
        inputDot()
        updateSonuc()
        return
    }
    if (element.classList.contains("delete-all")){
        // console.log("clear", element.value );
        clear()
        updateSonuc()
        return
    }

    //console.log("number", element.value)
    inputNumber(element.value)
    updateSonuc()

})

function clickedOperator(nextOperator){
    const value= parseFloat(sonucValue);

    if (operator && newValue ){
        operator = nextOperator;
        return
    }

    if (firstValue === null){
        firstValue=value;
    }else if(operator){
        const result = calculate(firstValue, value, operator)

        sonucValue= `${parseFloat(result.toFixed(8))}`;
        firstValue = result;
    }
    newValue=true
    operator=nextOperator
}


function calculate(first, second, operator){
    if (operator === "+"){
        return first + second;
    }else if (operator === "-"){
        return first - second
    }else if (operator === "*"){
        return first * second
    }else if (operator === "/"){
        return first / second
    }else
    return second;
}


function inputNumber(num){
    if(newValue){
        sonucValue= num
        newValue= false
    }else{
        sonucValue = sonucValue === "0"? num: sonucValue + num;
    }
    
}

function inputDot(){
    if(!sonucValue.includes(".")){   
        sonucValue += "."
    }
}

function clear(){
    sonucValue= "0"
}

//-------------------------------------------------------
