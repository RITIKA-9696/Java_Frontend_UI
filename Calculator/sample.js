function addToDisplay(Value){
    document.getElementById('display').value += Value;
}

function calculate(){
    let expression = document.getElementById('display').value;
        let result = eval(expression);
        document.getElementById('display').value = result;

}

function clearDisplay(){
    document.getElementById('display').value = ' ';
}

function backspace() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

