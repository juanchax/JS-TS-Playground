import * as promptSync from 'prompt-sync';

// create a variable to call as your terminal prompt maker
const prompt = require('prompt-sync')();

// now let's ask the user for some input
const name = prompt(`What\'s your name? `);

// and greet them using that input

console.log(`Hey ${name}! Happy you're here!`);

/* Run your Typescript file:
    1. Open a terminal window in your IDE
    2. Run 'npx tsx ./src/template.ts' to  run the provided template
    3. Edit or duplicate the provided template.ts file, and add your code. Use the same logic as #2 to execute your files.
    Note: make sure you use the correct path to your file when attempting to execute in the terminal window: if your files are contained in /src but your terminal is open at the root of your project.. see where I'm going?

    Happy coding! test 
*/