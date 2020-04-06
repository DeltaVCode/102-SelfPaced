
var createGreeting = function() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  
  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }
  
  return '<h3>'+ greeting + '</h3>';
}

var howMany = function() {
  var count = prompt('How many do you want to order?');
  
  while( count === '' || isNaN(count) ) {
    count = prompt('Please enter a number. How many do you want?');
  }

  return Number(count);
}

var getItem = function() {
  var order = prompt('What would you like to order?');
  var item;

  while (order !== 'house' && order !== 'hotel') {
    order = prompt('Please enter "house" or "hotel"...');
  }

  if (order === 'hotel') {
    item = '<img src="images/hotel.png">';
  } else if (order === 'house') {
    item = '<img src="images/house.png">';
  }

  return item;
}

var showOrder = function() {
  var item = getItem();
  var total = howMany();
  var result = '';

  for(var i = 0; i < total; i++) {
    result = result + '<p>Model #' + i + ' ' + item + '</p>';
  }

  return result;
}
