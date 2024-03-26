#! /usr/bin/env node
import inquirer from "inquirer"

const userAnswer = await inquirer.prompt([
    {
        message: "Enter Your First Number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Select operator to perform Action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Square", "Cube"]
    },
]);
let userOperator = userAnswer.operator;
let firstNumber = userAnswer.firstNumber;
if (userOperator === "Square" || userOperator === "Cube") {
    switch (userOperator) {
        case "Square":
            console.log(firstNumber ** 2);
            break;
        case "Cube":
            console.log((firstNumber ** 2) * firstNumber);
            break;

    }
} else if (userOperator !== "Square" && userOperator !== "Cube") {
    const userSecondNumber = await inquirer.prompt([
        {
            message: "Enter Your Second Number",
            type: "number",
            name: "secondNumber"
        }
    ])
    let secondNumber = userSecondNumber.secondNumber;
    let answer: any;
    switch (userOperator) {
        case "Addition":
            answer = firstNumber + secondNumber
            console.log(answer);
            break;
        case "Subtraction":
            answer = firstNumber - secondNumber
            console.log(answer);
            break;
        case "Multiplication":
            answer = firstNumber * secondNumber
            console.log(answer);
            break;
        case "Division":
            answer = firstNumber / secondNumber
            console.log(answer.toFixed(3));
            break;
        default:
            console.log("enter correct information");
    }
}
