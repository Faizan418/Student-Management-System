#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
    chalk.bold.italic.underline.overline.greenBright(
      "<<<<<< ...Welcome to Student Management System... >>>>>>"));
      

const randomnumber: number = Math.floor(10000 + Math.random() * 90000)
let myBalance: number = 0
let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: chalk.yellowBright.bold("Enter student name:"),
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return chalk.bgRedBright("Please enter a non-empty value");
            },
        },
        {
            name: "courses",
            type: "list",
            message: chalk.yellowBright.bold("Select the course to enrolled:"),
            choices: ["TypeScript", "JavaScript", "Python", "Html", "MsOffice"],
        }
    ]
);
const tutionFee: {[Key: string]: number} = {
    "TypeScript": 6000,
    "JavaScript": 5000,
    "Python": 4000,
    "Html": 3000,
    "MsOffice": 2000
};
console.log(chalk.gray.bold(`\nTution Fees: ${tutionFee[answer.courses]}/-\n`));
console.log(chalk.gray.bold(`Balance: ${myBalance}\n`));

let paymentType =  await inquirer.prompt(
    [
        {
            name: "payment",
            type: "list",
            message: chalk.blueBright("Select payment method:"),
            choices: ["Bank Transfer", "Easypaisa", "JazzCash"]
        },
        {
            name: "amount",
            type: "input",
            message: chalk.yellowBright.bold("Transfer Money"),
            validate: function (value) {
                if (value.trim()!== "") {
                    return true;
                }
                return chalk.bgRedBright("Please enter a non-empty value");
            },
        }
    ]
);
console.log(chalk.bold.magentaBright(`\nYou select payment method ~ ${paymentType.payment}\n`));

const tutionFees= tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFees ===  paymentAmount) {
    console.log(chalk.bold.greenBright(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`));
    
let ans =  await inquirer.prompt(
    [
        {
            name: "select",
            type: "list",
            message: chalk.magentaBright.bold("What would you like  to do next?"),
            choices: ["View Status", "Exit"]
        }
    ]
)
if (ans.select === "View Status") {
    console.log(chalk.blue.bold("\n>>>>>>> Status <<<<<<\n"));
    console.log(chalk.blackBright(`Student Name: ${answer.students}`));
    console.log(chalk.blackBright(`Student ID: ${randomnumber}`));
    console.log(chalk.blackBright(`Course: ${answer.courses}`));
    console.log(chalk.blackBright(`Tution Fees Paid: ${paymentAmount}`));
    console.log(chalk.blackBright(`Balance: ${myBalance += paymentAmount}`));
}else{
    console.log(chalk.bold.italic.underline.overline.bgRedBright("\n >> Exiting Student Management System << \n"));   
}
    
}else{
    console.log(chalk.bold.italic.underline.overline.bgRedBright("Invalid amount due to course\n"));
}


