#! /usr/bin/env node

//!================ Currency Converter Project ================!//

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.bold.bgBlue("\n\t<<========>> Welcome to my Currency Converter Projet <<========>>"));
console.log(chalk.bold.bgBlue("\n\t\t<<========>> Syeda Maha Zaidi <<========>>\n"));


let currencies:any = {
    USD: 1,     //~base currency~//
    EUR: 0.91,    
    GBP: 0.76,  
    INR: 74.57,  
    PKR: 280,      
    DIN: 50,  
    JPY: 113,  
    CAD: 1.3,  
    AUD: 1.65,      
} 

let answers = await inquirer.prompt([
    {
        name:"fromCurrency",
        type:"list",
        message:chalk.redBright.bold.italic("Enter From Currency"),
        choices:["USD","EUR","GBP","INR","PKR","DIN","JPY","CAD","AUD"]
    },
    {
        name:"toCurrency",
        type:"list",
        message:chalk.redBright.bold.italic("Enter To Currency"),
        choices:["USD","EUR","GBP","INR","PKR","DIN","JPY","CAD","AUD"]
    },
    {
        name:"amount",
        type:"number",
        message:chalk.redBright.bold.italic("Enter the amount to convert")
    }
])

let from_amount = currencies[answers.fromCurrency];
let to_amount = currencies[answers.toCurrency];
let amount = answers.amount;
let base_amount = amount / from_amount;
let convert_amount = base_amount * to_amount;
console.log(`${chalk.bold.bgMagenta("\n Your Converted Amount is:")} ${chalk.bold.greenBright(convert_amount.toFixed(2))}`);
