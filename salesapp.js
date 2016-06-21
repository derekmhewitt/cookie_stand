'use strict';

//storeHours variable for reuse.  Hours are actually 6am-8pm but I'm omitting the last one for counting purposes
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var locFirstAndPike = {
  minCust: 23,
  maxCust: 65,
  totalDailyCookies: 0,
  avgCookiesPerCust: 6.3,
  rndmCustPerHour: [],
  cookiesPerHour: []
};
var locSeaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  totalDailyCookies: 0,
  rndmCustPerHour: [],
  cookiesPerHour: []
};
var locSeattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  totalDailyCookies: 0,
  rndmCustPerHour: [],
  cookiesPerHour: []
};
var locCapitalHill = {
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  totalDailyCookies: 0,
  rndmCustPerHour: [],
  cookiesPerHour: []
};
var locAlki = {
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  totalDailyCookies: 0,
  rndmCustPerHour: [],
  cookiesPerHour: []
};

//generating random # of customers per hour using min and max inputs and storing that function as a method
locFirstAndPike.rndmCust = function() {
  for(var i = 0; i < storeHours.length; i++) {
    this.rndmCustPerHour[i] = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};
locSeaTacAirport.rndmCust = function() {
  for(var i = 0; i < storeHours.length; i++) {
    this.rndmCustPerHour[i] = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};
locSeattleCenter.rndmCust = function() {
  for(var i = 0; i < storeHours.length; i++) {
    this.rndmCustPerHour[i] = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};
locCapitalHill.rndmCust = function() {
  for(var i = 0; i < storeHours.length; i++) {
    this.rndmCustPerHour[i] = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};
locAlki.rndmCust = function() {
  for(var i = 0; i < storeHours.length; i++){
    this.rndmCustPerHour[i] = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};

//calculating # of cookies sold per hour based on random # of customers and avg cookies sold per customer
locFirstAndPike.calcCookies = function() {
  for(var i = 0; i < storeHours.length; i++) {
    this.cookiesPerHour[i] = Math.floor(this.rndmCustPerHour[i] * this.avgCookiesPerCust);
  }
};
locSeaTacAirport.calcCookies = function() {
  for(var i = 0; i < storeHours.length; i++) {
    this.cookiesPerHour[i] = Math.floor(this.rndmCustPerHour[i] * this.avgCookiesPerCust);
  }
};
locSeattleCenter.calcCookies = function() {
  for(var i = 0; i < storeHours.length; i++){
    this.cookiesPerHour[i] = Math.floor(this.rndmCustPerHour[i] * this.avgCookiesPerCust);
  }
};
locCapitalHill.calcCookies = function() {
  for(var i = 0; i < storeHours.length; i++) {
    this.cookiesPerHour[i] = Math.floor(this.rndmCustPerHour[i] * this.avgCookiesPerCust);
  }
};
locAlki.calcCookies = function() {
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
locSeaTacAirport.calcDailyCookies = function() {
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    this.totalDailyCookies += this.cookiesPerHour[i];
  }
};
locSeattleCenter.calcDailyCookies = function() {
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    this.totalDailyCookies += this.cookiesPerHour[i];
  }
};
locCapitalHill.calcDailyCookies = function() {
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    this.totalDailyCookies += this.cookiesPerHour[i];
  }
};
locAlki.calcDailyCookies = function() {
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
locSeaTacAirport.outputToSales = function() {
  var getElement = document.getElementById('seaTacList');
  for(var i = 0; i < storeHours.length; i++) {
    var createEl = document.createElement('li');
    createEl.textContent = storeHours[i] + ': ' + locSeaTacAirport.cookiesPerHour[i] + ' cookies';
    getElement.appendChild(createEl);
  }
  var createEl = document.createElement('li');
  createEl.textContent = 'Total: ' + locSeaTacAirport.totalDailyCookies + ' cookies';
  getElement.appendChild(createEl);
};
locSeattleCenter.outputToSales = function() {
  var getElement = document.getElementById('seaCenterList');
  for(var i = 0; i < storeHours.length; i++) {
    var createEl = document.createElement('li');
    createEl.textContent = storeHours[i] + ': ' + locSeattleCenter.cookiesPerHour[i] + ' cookies';
    getElement.appendChild(createEl);
  }
  var createEl = document.createElement('li');
  createEl.textContent = 'Total: ' + locSeattleCenter.totalDailyCookies + ' cookies';
  getElement.appendChild(createEl);
};
locCapitalHill.outputToSales = function() {
  var getElement = document.getElementById('capHillList');
  for(var i = 0; i < storeHours.length; i++) {
    var createEl = document.createElement('li');
    createEl.textContent = storeHours[i] + ': ' + locCapitalHill.cookiesPerHour[i] + ' cookies';
    getElement.appendChild(createEl);
  }
  var createEl = document.createElement('li');
  createEl.textContent = 'Total: ' + locCapitalHill.totalDailyCookies + ' cookies';
  getElement.appendChild(createEl);
};
locAlki.outputToSales = function() {
  var getElement = document.getElementById('alkiList');
  for(var i = 0; i < storeHours.length; i++) {
    var createEl = document.createElement('li');
    createEl.textContent = storeHours[i] + ': ' + locAlki.cookiesPerHour[i] + ' cookies';
    getElement.appendChild(createEl);
  }
  var createEl = document.createElement('li');
  createEl.textContent = 'Total: ' + locAlki.totalDailyCookies + ' cookies';
  getElement.appendChild(createEl);
};

//call functions here
locFirstAndPike.rndmCust();
locFirstAndPike.calcCookies();
locFirstAndPike.calcDailyCookies();
locFirstAndPike.outputToSales();
locSeaTacAirport.rndmCust();
locSeaTacAirport.calcCookies();
locSeaTacAirport.calcDailyCookies();
locSeaTacAirport.outputToSales();
locSeattleCenter.rndmCust();
locSeattleCenter.calcCookies();
locSeattleCenter.calcDailyCookies();
locSeattleCenter.outputToSales();
locCapitalHill.rndmCust();
locCapitalHill.calcCookies();
locCapitalHill.calcDailyCookies();
locCapitalHill.outputToSales();
locAlki.rndmCust();
locAlki.calcCookies();
locAlki.calcDailyCookies();
locAlki.outputToSales();
