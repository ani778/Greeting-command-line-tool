#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';

program
    .version("1.0.0")
    .description("Greeting CLI")
    .option('-n, --name <name>', 'enter Name', 'Guest')
    .option('-l, --level <type>', 'verbosity level (1 or 2)', '1')
    .option('-lvl, --lvl <type>', 'verbosity level (1 or 2)', '1')
    .option('-g, --greeting <type>', 'custom greeting message', 'Hello')
    .parse(process.argv)

const options = program.opts();
const name = options.name ;
const level =parseInt(options.level || options.lvl, 10);
const greeting = options.greeting;

const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
};

if (level === 1) {
    console.log(chalk.blue(`${greeting}, ${name}!`));
} else if (level === 2) {
    const currentDateTime = getCurrentDateTime();
    console.log(chalk.green(`${greeting}, ${name}! (Date and Time: ${currentDateTime})`));
} else {
    console.log(chalk.red('Invalid verbosity level. Please specify 1 or 2.'));
}

