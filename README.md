# Greeting-command-line-tool

This is a command-line interface (CLI) tool built with Node.js that greets users with a custom message. It allows you to specify a name, a verbosity level, and a custom greeting message.

1. Initialize a new Node.js project by running the command npm init.
2. Created an index.js file
3. Added bin to your package.json
4. I chose Commander for parsing command-line arguments effortlessly.
5. To add some color I install Chalk.

## Features

- Accepts a `--name` or `-n` argument to specify the name.
- Accepts a `--level` or `-l` (or `-lvl`) argument to specify the verbosity level (1 or 2).
- Accepts an optional `--greeting` or `-g` argument for a custom greeting message.

## Installation

To use this tool, you need to have [Node.js](https://nodejs.org/) installed. Then, you can clone this repository and install the dependencies:

```sh
git clone <repository-url>
cd Greeting-command-line-tool
npm install