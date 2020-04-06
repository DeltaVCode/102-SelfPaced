// var today = new Date();
var hourNow = prompt('What time is it, friend? 0-23'); 
var greeting;

if (hourNow > 18 && hourNow < 24) {
  greeting = 'Good evening, Class!';
} else if (hourNow > 12 && hourNow < 24) {
  greeting = 'Good afternoon, Class!';
} else if (hourNow >= 0 && hourNow < 24) {
  greeting = 'Good morning!';
} else {
  greeting = 'Something went wrong!';
}

document.write(greeting);
