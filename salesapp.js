'use strict';

//storeHours variable for reuse.  Hours are actually 6am-8pm but I'm omitting the last one for counting purposes
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var locFirstAndPike = {
  minCust: 23,
  maxCust: 65,
  totalDailyCookies: 0,
  avgCookiesPerCust: 6.3,
  rndmCustPerHour: [],
  cookiesPerHour: [],
};

//generating random # of customers per hour using min and max inputs and storing that function as a method
locFirstAndPike.rndmCust = function() {
  for(var i = 0; i < storeHours.length; i++) {
    this.rndmCustPerHour[i] = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};

//calculating # of cookies sold per hour based on random # of customers and avg cookies sold per customer
locFirstAndPike.calcCookies = function() {
  for(var i = 0; i < storeHours.length; i++) {
    this.cookiesPerHour[i] = Math.floor(this.rndmCustPerHour[i] * this.avgCookiesPerCust);
  }
};
//caltulate total daily cookies sold using cookies sold per hour and += incrementing totalDailyCookies for each # in that array
locFirstAndPike.calcDailyCookies = function() {
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    this.totalDailyCookies += this.cookiesPerHour[i];
  }
};

//function to populate list here
locFirstAndPike.outputToSales = function() {
  var puttingHere = document.getElementById('firstAndPikeList');
  for(var i = 0; i < storeHours.length; i++) {
    var htmlTag = document.createElement('li');
    htmlTag.textContent = storeHours[i] + ': ' + locFirstAndPike.cookiesPerHour[i] + ' cookies';
    puttingHere.appendChild(htmlTag);
  }
  var htmlTag = document.createElement('li');
  htmlTag.textContent = 'Total: ' + locFirstAndPike.totalDailyCookies + ' cookies';
  puttingHere.appendChild(htmlTag);
};

//call functions here
locFirstAndPike.rndmCust();
locFirstAndPike.calcCookies();
locFirstAndPike.calcDailyCookies();
locFirstAndPike.outputToSales();
