let display = document.querySelectorAll("#input");
let number = document.querySelectorAll("#number");
let error = document.querySelectorAll("#error");



function addElement() {
    let displayValue = display[0].value;
    if (!isNaN(displayValue)) {
        number[0].innerHTML = Number(number[0].innerHTML) + Number(displayValue);
        error[0].innerHTML = "";
    }
    else {
        error[0].innerHTML = "please enter a number";
    }
}
function minusElement() {
    let displayValue = display[0].value;
    number[0].innerHTML = Number(number[0].innerHTML) - Number(displayValue);

}
function clearAll() {
    error[0].innerHTML = "";
    display[0].value = "";
    number[0].innerHTML = "";
}