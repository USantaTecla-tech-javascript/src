# Console MPDS

This package has a class called ```Console``` to make easier to use the input/output in NodeJS console programs.

It offers several methods to output messages to the console and make text user input also in the console.

## Usage

Create a new npm project:

```
npm init -y
```

Install this package:

```
npm install console-mpds
````

Require and instantiate the Console Class in your code:

```javascript
const { Console } = require("console-mpds");
const console = new Console();
```

Use the object to input and output to the console:

```javascript
const num = console.readNumber('dame un numero');
console.writeln(`Has escrito ${num}`);
```

## Available Methods

The console objects has this methods in order to make the user input / output.

- **```write(text)```**: Send a text to the console.
- **```writeln(text)```**: Send a text to the console and do a new line.
- **```readString(text)```**: Ask for a string input and wait for the user response. This method returns the introduced text.
- **```readNumber(text)```**: Ask for a number input and wait for the user response. This method converts the input in its integer value and returns the introduced value as primitive type number.


