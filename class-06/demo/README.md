# Demo: JavaScript in Action

## Demo Instructions

Students should have completed the code exercise from page 46-48 in the JavaScript & jQuery book. Now it's time to code review it! 

The code is here in the demo directory. Open `add-content.html` in your browser. 

If a student can report on an error they hit when creating the code, replicate it in your editor, and show them how the console will report the error, the file, and the line number. Highlight how reading error messages gives good hints as to what's wrong!

The code showcases a lot that beginners need to focus on like variables, assignments, conditionals, function calls (`today.getHours()`, `document.write()`). 

Have students read the code, 1 line per student. Ask them to first read it literally as possible, and THEN interpret what it is doing. Help them get all the jargon correct ("opening curly brace", etc), and give them new terms as you hit them. 

Be sure to give a clear definition for:

- variable
- assignment operator
- conditional statement
- code block
- data types: strings vs numbers
- string literal, number literal

As you go through the code, show off live JS in the console. Explain briefly what a REPL is, and show them that you can do math, string concatenation, etc very easily. 
 
Discuss how this running program is made up of:

1. input
    - Ask students to identify the input
    - Show alternative input: `hourNow = prompt()`; 
1. processing (in this case, conditional generation of dynamic content)
1. output
    - Ask students to identify the output
    - Show alternative method of output: `console.log()`

Ask students how they'd like to integrate dynamic content in their site. Some ideas:

- Prompt for user's name, and show it in a greeting.
- Prompt for age or birthdate, and show selective content based on age
- Prompt for the user's city or state, and, for certain values, give specific info (Ranking? Weather guess?). 
