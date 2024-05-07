import chalk from "chalk";
import inquirer from "inquirer";
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel1 = this.fuel - 25;
        this.fuel = fuel1;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel1 = this.fuel - 25;
        this.fuel = fuel1;
    }
}
let inputName = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Please Enter Your Name",
});
let opponent1 = await inquirer.prompt({
    name: "oppo",
    type: "list",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let pl = new player(inputName.name);
let op = new opponent(opponent1.oppo);
console.log(`${chalk.bold.green(pl.name)} VS ${chalk.bold.red(op.name)}`);
do {
    if (opponent1.oppo === "Skeleton") {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select One Option",
            choices: ["Attack", "Energy Drink", "Run For Your Life"]
        });
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                pl.fuelDecrease();
                console.log(chalk.bold.red(`${pl.name} Fuel is = ${pl.fuel}`));
                console.log(chalk.bold.green(`${op.name} Fuel is = ${op.fuel}`));
                if (pl.fuel == 0) {
                    console.log(chalk.bold.italic.red("You Loose!Better Luck Next Time"));
                }
            }
            else if (num <= 0) {
                op.fuelDecrease();
                console.log(chalk.bold.red(`${op.name} Fuel is = ${op.fuel}`));
                console.log(chalk.bold.green(`${pl.name} Fuel is = ${pl.fuel}`));
                if (op.fuel == 0) {
                    console.log(chalk.bold.italic.green("You Win"));
                }
            }
        }
        if (ask.option === "Energy Drink") {
            pl.fuel = 100;
            console.log(chalk.bold.italic.green(`You Take a Energy Drink Your Fuel is = 100`));
        }
        if (ask.option === "Run For Your Life") {
            console.log(chalk.bold.italic.red("You Loose!Better Luck Next Time"));
            process.exit();
        }
    }
    if (opponent1.oppo === "Assassin") {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select One Option",
            choices: ["Attack", "Energy Drink", "Run For Your Life"]
        });
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                pl.fuelDecrease();
                console.log(chalk.bold.red(`${pl.name} Fuel is = ${pl.fuel}`));
                console.log(chalk.bold.green(`${op.name} Fuel is = ${op.fuel}`));
                if (pl.fuel == 0) {
                    console.log(chalk.bold.italic.red("You Loose!Better Luck Next Time"));
                }
            }
            else if (num <= 0) {
                op.fuelDecrease();
                console.log(chalk.bold.red(`${op.name} Fuel is = ${op.fuel}`));
                console.log(chalk.bold.green(`${pl.name} Fuel is = ${pl.fuel}`));
                if (op.fuel == 0) {
                    console.log(chalk.bold.italic.green("You Win"));
                }
            }
        }
        if (ask.option === "Energy Drink") {
            pl.fuel = 100;
            console.log(chalk.bold.italic.green(`You Take a Energy Drink Your Fuel is = 100`));
        }
        if (ask.option === "Run For Your Life") {
            console.log(chalk.bold.italic.red("You Loose!Better Luck Next Time"));
            process.exit();
        }
    }
    if (opponent1.oppo === "Zombie") {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select One Option",
            choices: ["Attack", "Energy Drink", "Run For Your Life"]
        });
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                pl.fuelDecrease();
                console.log(chalk.bold.red(`${pl.name} Fuel is = ${pl.fuel}`));
                console.log(chalk.bold.green(`${op.name} Fuel is = ${op.fuel}`));
                if (pl.fuel == 0) {
                    console.log(chalk.bold.italic.red("You Loose!Better Luck Next Time"));
                }
            }
            else if (num <= 0) {
                op.fuelDecrease();
                console.log(chalk.bold.red(`${op.name} Fuel is = ${op.fuel}`));
                console.log(chalk.bold.green(`${pl.name} Fuel is = ${pl.fuel}`));
                if (op.fuel == 0) {
                    console.log(chalk.bold.italic.green("You Win"));
                }
            }
        }
        if (ask.option === "Energy Drink") {
            pl.fuel = 100;
            console.log(chalk.bold.italic.green(`You Take a Energy Drink Your Fuel is = 100`));
        }
        if (ask.option === "Run For Your Life") {
            console.log(chalk.bold.italic.red("You Loose!Better Luck Next Time"));
            process.exit();
        }
    }
} while (pl.fuel > 0 && op.fuel > 0);
