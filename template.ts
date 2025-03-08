import * as promptSync from 'prompt-sync'

// create a variable to call as your terminal prompt maker
const prompt = require('prompt-sync')();

// now let's ask the user for some input
const name = prompt(`What\'s your name? `);

// and greet them using that input

console.log(`Hey ${name}! Happy you're here!`);

/* Run your Typescript file:
    1. Open a terminal window in your IDE
    2. Run 'npx tsx ./myFile.ts' replace "myFile.ts" with the name of your file

    Happy coding!
*/