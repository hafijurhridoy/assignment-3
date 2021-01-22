// https://github.com/hafijurhridoy/assignment-3

// kilometer to meter convert

function kilometerToMeter(kilometer) {
  var meter = 0;
  if (kilometer > 0) {
    meter = kilometer * 1000;
  } else if (kilometer <= 0) {
    return "Please enter a valid unit";
  }
  return meter;
}

// budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
  var total = watch * 50 + mobile * 100 + laptop * 500;
  return total;
}
var totalPrice = budgetCalculator(3, 2, 5);

// hotelCost

function hotelCost(stayTime) {
  var hotelRent = 0;
  if (stayTime <= 10) {
    var firstPartCost = stayTime * 100;
  } else if (stayTime <= 20) {
    var firstPartCost = 10 * 100;
    var nextDays = stayTime - 10;
    var secondPartCost = nextDays * 80;
    hotelRent = firstPartCost + secondPartCost;
  } else {
    var firstPartCost = 10 * 100;
    var secondPartCost = 10 * 80;
    var nextDays = stayTime - 20;
    var thirdPartCost = nextDays * 50;
    hotelRent = firstPartCost + secondPartCost + thirdPartCost;
  }
  return hotelRent;
}

// Longest name finder

var userName = ["Rafi", "Shafi", "Mahin", "Saad", "Abir", "Rahim"];

function megaFriend(userName) {
  var maxword = userName[0];
  for (var i = 0; i < userName.length; i++) {
    var element = userName[i];
    if (element.length > maxword.length) {
      maxword = element;
    }
  }
  return maxword;
}
