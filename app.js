let display = document.querySelectorAll("#input");
let number = document.querySelectorAll("#number");
let error = document.querySelectorAll("#error");



function addElement() {
let displayValue = display[0].value  ;   
if (!isNaN(displayValue)){
    number[0].innerHTML += displayValue;
}
else{
    error[0].innerHTML = "please enter a number";
}
}


