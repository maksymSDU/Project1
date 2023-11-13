const numbers = document.querySelectorAll("#number");
const times = document.querySelector("#times")
const divide = document.querySelector("#divide");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");
const dot = document.querySelector("#dot");
const clear = document.querySelector("#C");
const input = document.querySelector("#input");
const header = document.querySelector("#de");
const two_zero = document.querySelector("#two_zero");

let s = "";

function updateInput(){
    input.innerText = s;
}

numbers.forEach(number => {
    number.addEventListener("click", () => {
        s += number.innerText;
        updateInput();
    })
})

divide.addEventListener("click", () => {
    if (s.charAt(s.length-2) == "+" || s.charAt(s.length-2) == "-" || s.charAt(s.length-2) == "/" || s.charAt(s.length-2) == "*"){
        s = s.substring(0, s.length-3) + " / ";
    }else{
        s += ' / ';
    }
    updateInput();
})

minus.addEventListener("click", () => {
    if (s.charAt(s.length-2) == "+" || s.charAt(s.length-2) == "-" || s.charAt(s.length-2) == "/" || s.charAt(s.length-2) == "*"){
        s = s.substring(0, s.length-3) + " - ";
    }else{
        s += ' - ';
    }
    updateInput();
})

plus.addEventListener("click", () => {
    if (s.charAt(s.length-2) == "+" || s.charAt(s.length-2) == "-" || s.charAt(s.length-2) == "/" || s.charAt(s.length-2) == "*"){
        s = s.substring(0, s.length-3) + " + ";
    }else{
        s += ' + ';
    }
    updateInput();
})

times.addEventListener("click", () => {
    if (s.charAt(s.length-2) == "+" || s.charAt(s.length-2) == "-" || s.charAt(s.length-2) == "/" || s.charAt(s.length-2) == "*"){
        s = s.substring(0, s.length-3) + " * ";
    }else{
        s += ' * ';
    }
    updateInput();
})

equal.addEventListener("click", () => {
    input.innerText = eval(s);
    s = String(eval(s));
}) 
two_zero.addEventListener("click", () =>{
    s += two_zero.innerText;
    updateInput();
})

dot.addEventListener("click", () => {
    s += ".";
    updateInput();
})

clear.addEventListener("click", () => {
    s = "";
    updateInput();
})

header.addEventListener("click", () => {
    s = s.substring(0, s.length-1);
    updateInput();
})