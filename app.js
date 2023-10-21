


function calculator(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2; // Changed '-' to '*'
    } else if (operator === "/") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Division by zero is not allowed";
        }
    } else {
        return "Enter a valid operator";
    }
}

let input1 = prompt("Enter the first number: ");
let num1 = parseFloat(input1);

if (isNaN(num1)) {
    alert("Invalid input for the first number. Please enter a valid number.");
} else {
    let input2 = prompt("Enter the second number: ");
    let num2 = parseFloat(input2);

    if (isNaN(num2)) {
        alert("Invalid input for the second number. Please enter a valid number.");
    } else {
        let operator = prompt("Enter the operator (+, -, *, /): ");

        if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
            const result = calculator(num1, num2, operator);
            alert(`Result: ${result}`);
        } else {
            alert("Invalid operator. Please enter a valid operator (+, -, *, /).");
        }
    }
}

 
