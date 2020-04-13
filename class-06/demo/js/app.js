'use strict';
console.log('This file is connected and ready to run.');

/** This is from Class 6 Start, wrap up of 101 js. 
new is a keyword object that has properties, the date.
var today = new Date();
var is a keyword that makes
the word today a variable. 
allow to take the today variable and output to page. 
Document is an object the .write() is a method. 
document.write(today);
*/

// var x = 16 + 'Volvo';
// console.log(x);

//if else and else if logic will go here. 



var userName = prompt('Please enter your first name.');
alert('Hello, ' + userName + ' click OK to proceed.');

var hourNow = prompt('What time is it, friend? Use Military time.');

//variable declaration for the greeting.
var greeting;

if(hourNow >= 0 && hourNow < 7){
    greeting = 'Good Morning, ' + userName;
} else if (hourNow >= 7 && hourNow <= 12){
   greeting = 'Good mid day. ' + userName;
} else if (hourNow > 12 && hourNow < 18){
   greeting = 'Good afternoon ' + userName;
} else if (hourNow >= 18 && hourNow <= 24){
   greeting = 'Good Evening ' + userName;
} else {
    'Something went wrong!';
}



//depending on where our script tag is / is where the greeting will be render.
document.write('<h1 style="color:yellow">' + greeting + '</h1>');


var header = document.getElementById('removeThis');
header.remove();












// Requirements
// Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data.




// At least one dynamic component should be based on user input.





// At least one dynamic component should use a conditional statement to determine the output.