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

// //calculating # of cookies sold per hour based on random # of customers and avg cookies sold per customer
// locFirstAndPike.calcCookies = function() {
//   for(var i = 0; i < storeHours.length; i++) {
//     this.cookiesPerHour[i] = Math.floor(this.rndmCustPerHour[i] * this.avgCookiesPerCust);
//   }
// };
// locSeaTacAirport.calcCookies = function() {
//   for(var i = 0; i < storeHours.length; i++) {
//     this.cookiesPerHour[i] = Math.floor(this.rndmCustPerHour[i] * this.avgCookiesPerCust);
//   }
// };
// locSeattleCenter.calcCookies = function() {
//   for(var i = 0; i < storeHours.length; i++){
//     this.cookiesPerHour[i] = Math.floor(this.rndmCustPerHour[i] * this.avgCookiesPerCust);
//   }
// };
// locCapitalHill.calcCookies = function() {
//   for(var i = 0; i < storeHours.length; i++) {
//     this.cookiesPerHour[i] = Math.floor(this.rndmCustPerHour[i] * this.avgCookiesPerCust);
//   }
// };
// locAlki.calcCookies = function() {
//   for(var i = 0; i < storeHours.length; i++) {
//     this.cookiesPerHour[i] = Math.floor(this.rndmCustPerHour[i] * this.avgCookiesPerCust);
//   }
// };
//
// //caltulate total daily cookies sold using cookies sold per hour and += incrementing totalDailyCookies for each # in that array
// locFirstAndPike.calcDailyCookies = function() {
//   for(var i = 0; i < this.cookiesPerHour.length; i++) {
//     this.totalDailyCookies += this.cookiesPerHour[i];
//   }
// };
// locSeaTacAirport.calcDailyCookies = function() {
//   for(var i = 0; i < this.cookiesPerHour.length; i++) {
//     this.totalDailyCookies += this.cookiesPerHour[i];
//   }
// };
// locSeattleCenter.calcDailyCookies = function() {
//   for(var i = 0; i < this.cookiesPerHour.length; i++) {
//     this.totalDailyCookies += this.cookiesPerHour[i];
//   }
// };
// locCapitalHill.calcDailyCookies = function() {
//   for(var i = 0; i < this.cookiesPerHour.length; i++) {
//     this.totalDailyCookies += this.cookiesPerHour[i];
//   }
// };
// locAlki.calcDailyCookies = function() {
//   for(var i = 0; i < this.cookiesPerHour.length; i++) {
//     this.totalDailyCookies += this.cookiesPerHour[i];
//   }
// };
//
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
