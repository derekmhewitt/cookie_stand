'use strict';

//storeHours variable for reuse.  Hours are actually 6am-8pm but I'm omitting the last one for counting purposes
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//This global variable will store all my cookie store objects for later use building my table
var cookieStores = [];

function CookieStore(minCustPerHour, maxCustPerHour, avgCookiesPerCust, storeName) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalDailyCookies = 0;
  this.rndmCustPerHour = [];
  this.cookiesSoldPerHour = [];
  cookieStores.push(this);
  console.dir(this);
};

var locFirstAndPike = new CookieStore(23, 65, 6.3, '1st and Pike');
var locSeaTacAirport = new CookieStore(3, 24, 1.2, 'SeaTac Airport');
var locSeattleCenter = new CookieStore(11, 38, 3.7, 'Seattle Center');
var locCapitalHill = new CookieStore(20, 38, 2.3, 'Capitol Hill');
var locAlki = new CookieStore(2, 16, 4.6, 'Alki Beach');

CookieStore.prototype.genRndmCust = function() {
  for(var i = 0; i < storeHours.length; i++) {
    this.rndmCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  }
};

CookieStore.prototype.calcCookiesSoldPerHour = function() {
  this.genRndmCust();
  for(var i = 0; i < storeHours.length; i++) {
    this.cookiesSoldPerHour[i] = Math.floor(this.rndmCustPerHour[i] * this.avgCookiesPerCust);
    this.totalDailyCookies += this.cookiesSoldPerHour[i];
  }
};

var tableEl = document.getElementById('cookieTable');

var makeTableHeader = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  for(var i = 0; i < storeHours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
};

CookieStore.prototype.renderTable = function(rowCounter) {
  this.calcCookiesSoldPerHour();
  var trEl = document.createElement ('tr');
  var tdEl = document.createElement ('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);
  var tdEl = document.createElement ('td');
  tdEl.textContent = this.totalDailyCookies;
  trEl.appendChild(tdEl);
  for(var i = 0; i < storeHours.length; i++) {
    var tdEl = document.createElement ('td');
    tdEl.textContent = this.cookiesSoldPerHour[i];
    trEl.appendChild(tdEl);
    if((rowCounter % 2) === 0){
      trEl.className = 'grayRow';
    }
  }
  tableEl.appendChild(trEl);
};

var makeTableFooter = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  var allDailyLocationTotal = 0;
  for(var i = 0; i < cookieStores.length; i++) {
    allDailyLocationTotal += cookieStores[i].totalDailyCookies;
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = allDailyLocationTotal;
  trEl.appendChild(tdEl);
  for(var i = 0; i < storeHours.length; i++) {
    var totalCookiesAtCurrentHour = 0;
    for(var j = 0; j < cookieStores.length; j++) {
      totalCookiesAtCurrentHour += cookieStores[j].cookiesSoldPerHour[i];
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesAtCurrentHour;
    trEl.appendChild(tdEl);
  }
  tableEl.appendChild(trEl);
};

//call functions here
makeTableHeader();
for(var i = 0; i < cookieStores.length; i++) {
  var currentStore = cookieStores[i];
  currentStore.renderTable(i);
}
makeTableFooter();

/*pseudocode for getting and displaying daily total and total cookies sold at all stores per hour
for(var i = 0; i < hours.length, i++) {
total cookies at current hour = 0
  for(var j = 0; j < cookieStores.length; j++){
    get hourly cookes from each store at hour [i] and add them to total cookies at current hour
  }
  add total cookies at current hour to document
}
*/

//locFirstAndPike.renderTable();

//for the <th> row
//Frist make an empty cell
//then make a cell for: 'Daily Location Total'
//then make a for loop that puts the dialy hours in the cells

// //function to populate list here
// locFirstAndPike.outputToSales = function() {
//   var puttingHere = document.getElementById('firstAndPikeList');
//   for(var i = 0; i < storeHours.length; i++) {
//     var htmlTag = document.createElement('li');
//     htmlTag.textContent = storeHours[i] + ': ' + locFirstAndPike.cookiesPerHour[i] + ' cookies';
//     puttingHere.appendChild(htmlTag);
//   }
//   var htmlTag = document.createElement('li');
//   htmlTag.textContent = 'Total: ' + locFirstAndPike.totalDailyCookies + ' cookies';
//   puttingHere.appendChild(htmlTag);
// };
// locSeaTacAirport.outputToSales = function() {
//   var getElement = document.getElementById('seaTacList');
//   for(var i = 0; i < storeHours.length; i++) {
//     var createEl = document.createElement('li');
//     createEl.textContent = storeHours[i] + ': ' + locSeaTacAirport.cookiesPerHour[i] + ' cookies';
//     getElement.appendChild(createEl);
//   }
//   var createEl = document.createElement('li');
//   createEl.textContent = 'Total: ' + locSeaTacAirport.totalDailyCookies + ' cookies';
//   getElement.appendChild(createEl);
// };
// locSeattleCenter.outputToSales = function() {
//   var getElement = document.getElementById('seaCenterList');
//   for(var i = 0; i < storeHours.length; i++) {
//     var createEl = document.createElement('li');
//     createEl.textContent = storeHours[i] + ': ' + locSeattleCenter.cookiesPerHour[i] + ' cookies';
//     getElement.appendChild(createEl);
//   }
//   var createEl = document.createElement('li');
//   createEl.textContent = 'Total: ' + locSeattleCenter.totalDailyCookies + ' cookies';
//   getElement.appendChild(createEl);
// };
// locCapitalHill.outputToSales = function() {
//   var getElement = document.getElementById('capHillList');
//   for(var i = 0; i < storeHours.length; i++) {
//     var createEl = document.createElement('li');
//     createEl.textContent = storeHours[i] + ': ' + locCapitalHill.cookiesPerHour[i] + ' cookies';
//     getElement.appendChild(createEl);
//   }
//   var createEl = document.createElement('li');
//   createEl.textContent = 'Total: ' + locCapitalHill.totalDailyCookies + ' cookies';
//   getElement.appendChild(createEl);
// };
// locAlki.outputToSales = function() {
//   var getElement = document.getElementById('alkiList');
//   for(var i = 0; i < storeHours.length; i++) {
//     var createEl = document.createElement('li');
//     createEl.textContent = storeHours[i] + ': ' + locAlki.cookiesPerHour[i] + ' cookies';
//     getElement.appendChild(createEl);
//   }
//   var createEl = document.createElement('li');
//   createEl.textContent = 'Total: ' + locAlki.totalDailyCookies + ' cookies';
//   getElement.appendChild(createEl);
// };
//
// //call functions here
// locFirstAndPike.rndmCust();
// locFirstAndPike.calcCookies();
// locFirstAndPike.calcDailyCookies();
// locFirstAndPike.outputToSales();
// locSeaTacAirport.rndmCust();
// locSeaTacAirport.calcCookies();
// locSeaTacAirport.calcDailyCookies();
// locSeaTacAirport.outputToSales();
// locSeattleCenter.rndmCust();
// locSeattleCenter.calcCookies();
// locSeattleCenter.calcDailyCookies();
// locSeattleCenter.outputToSales();
// locCapitalHill.rndmCust();
// locCapitalHill.calcCookies();
// locCapitalHill.calcDailyCookies();
// locCapitalHill.outputToSales();
// locAlki.rndmCust();
// locAlki.calcCookies();
// locAlki.calcDailyCookies();
// locAlki.outputToSales();
