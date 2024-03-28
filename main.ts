import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = 42;

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.yellow("Please Guess Any Number:"),
    }
]);

if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.bgBlueBright.bold("Congratulations! You guessed correctly."));
} else {
    console.log(chalk.bgMagentaBright.bold("Oops! Try again."));
}
