// making the calc

// making the displayer system
// this will append the number like 230 and not like 6 adding it.
function setScreenValue(value) {
    document.getElementById("result").value += value;
}

// making the clear screen function
function clearScreen() {
    document.getElementById("result").value = "";
}

// making the calculate function
function calculateResult() {
    const ResultElement = document.getElementById("result");
    const expression = ResultElement.value.trim();
    // checking whether the input is empty?

    if (expression === ""){
        alert("Enter an expression");
        return;
    }

    // using try and catch block for evaluation
    try{
        ResultElement.value = eval(expression);
    }
    catch(e){
        alert("Invalid expression");
        ResultElement.value = "";
    }

}
// Done we have succesfully created a working calculator.