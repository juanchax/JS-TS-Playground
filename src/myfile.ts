import * as promptSync from 'prompt-sync';

// create a variable to call as your terminal prompt maker
const prompt = require('prompt-sync')();

// now let's ask the user for some input
const name = prompt(`What\'s your name? `);

// and greet them using that input

console.log(`Hey ${name}! Happy you're here!`);

/* Run your Typescript file:
    1. Open a terminal window in your IDE
    2. copy the template.ts to the src folder and rename it to 'myFile.ts'
       or use the existing one.
    3. Edit your file as you like
    4. Run 'npx tsx ./src/myFile.ts' replace "myFile.ts" with the name of your file

    Happy coding!
*/