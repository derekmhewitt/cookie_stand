'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieStores = [];
var addStoreForm = document.getElementById('add_store_form');
var tableEl = document.getElementById('cookieTable');

addStoreForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var minCustPerHour = parseInt(document.getElementById('min_cust_per_hour').value),
    maxCustPerHour = parseInt(document.getElementById('max_cust_per_hour').value),
    avgCookiesPerCust = parseFloat(document.getElementById('avg_cookies_per_hour').value),
    storeName = document.getElementById('shop_location').value;
  new CookieStore(minCustPerHour, maxCustPerHour, avgCookiesPerCust, storeName);
  tableEl.textContent = '';
  makeTableHeader();
  renderCookieStores();
  makeTableFooter();
});

function CookieStore(minCustPerHour, maxCustPerHour, avgCookiesPerCust, storeName) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalDailyCookies = 0;
  this.rndmCustPerHour = [];
  this.cookiesSoldPerHour = [];
  this.calcCookiesSoldPerHour();
  cookieStores.push(this);
};

CookieStore.prototype.genRndmCust = function() {
  for(var i = 0; i < storeHours.length; i++) {
    this.rndmCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
  }
};

CookieStore.prototype.calcCookiesSoldPerHour = function() {
  this.genRndmCust();
  for(var i = 0; i < storeHours.length; i++) {
    this.cookiesSoldPerHour.push(Math.floor(this.rndmCustPerHour[i] * this.avgCookiesPerCust));
    this.totalDailyCookies += this.cookiesSoldPerHour[i];
  }
};

CookieStore.prototype.renderTable = function(rowCounter) {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailyCookies;
  trEl.appendChild(tdEl);
  for(var i = 0; i < storeHours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldPerHour[i];
    trEl.appendChild(tdEl);
    if((rowCounter % 2) === 0){
      trEl.className = 'grayRow';
    }
  }
  tableEl.appendChild(trEl);
};

var locFirstAndPike = new CookieStore(23, 65, 6.3, '1st and Pike');
var locSeaTacAirport = new CookieStore(3, 24, 1.2, 'SeaTac Airport');
var locSeattleCenter = new CookieStore(11, 38, 3.7, 'Seattle Center');
var locCapitalHill = new CookieStore(20, 38, 2.3, 'Capitol Hill');
var locAlki = new CookieStore(2, 16, 4.6, 'Alki Beach');

var makeTableHeader = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  for(var i = 0; i < storeHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
};

var makeTableFooter = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.className = 'table_footer';
  tdEl.textContent = 'Totals:';
  trEl.appendChild(tdEl);
  var allDailyLocationTotal = 0;
  for(var i = 0; i < cookieStores.length; i++) {
    allDailyLocationTotal += cookieStores[i].totalDailyCookies;
  }
  tdEl = document.createElement('td');
  tdEl.className = 'table_footer';
  tdEl.textContent = allDailyLocationTotal;
  trEl.appendChild(tdEl);
  for(var i = 0; i < storeHours.length; i++) {
    var totalCookiesAtCurrentHour = 0;
    for(var j = 0; j < cookieStores.length; j++) {
      totalCookiesAtCurrentHour += cookieStores[j].cookiesSoldPerHour[i];
    }
    tdEl = document.createElement('td');
    tdEl.className = 'table_footer';
    tdEl.textContent = totalCookiesAtCurrentHour;
    trEl.appendChild(tdEl);
  }
  tableEl.appendChild(trEl);
};

var renderCookieStores = function() {
  for(var i = 0; i < cookieStores.length; i++) {
    cookieStores[i].renderTable(i); //feeding i into renderTable to add classes for aternate row shading
  }
};

//call functions here
makeTableHeader();
renderCookieStores();
makeTableFooter();
