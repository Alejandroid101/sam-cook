'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var form = document.getElementById('location-info');
var table = document.getElementById('my-table');
var tblBody = document.createElement('tbody');
var tr = document.createElement('tr');
var cell = document.createElement('td');

var listOfLocations = [];
var newLoca = [];


function Locations(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.projectedCookies = this.generateProjection();
  listOfLocations.push(this);
}

Locations.prototype.random = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

Locations.prototype.generateProjection = function () {
  var cookies = [];
  for (var i = 0; i < hours.length; i++) {
    var multiply = Math.floor(this.random() * this.avgCookie);
    cookies.push(multiply);
  }
  return cookies;
};
Locations.prototype.doMath = function (){
  var totals = [];
  for (var i = 0; i < hours.lenght; i++){
    totals.push(this.random);
  }
}

function newLoc (event) {
  event.preventDefault();
  var name = event.target.name.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCookie = event.target.angCookie.value;

  newLoca.push(new Locations(name, minCust, maxCust, avgCookie));

  form.reset();
  console.log('New Location Data:', newLoca);
  
  
}
newLoc();

new Locations('1st And Pike', 23,	65,	6.3);
new Locations('SeaTac Airport', 3,	24,	1.2);
new Locations('Seattle Center', 11,	38,	3.7);
new Locations('Capito Hill', 20,	38,	2.3);
new Locations('Alki Beach', 2,	16,	4.6);

//part of this code came from MDN, like 40%
function renderSalesTableHead () {
  var thead = document.createElement('thead');
  var th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);
  for (var i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Total Cookies';
  tr.appendChild(th);
  thead.appendChild(tr);
  table.appendChild(thead);
  tblBody;
}
renderSalesTableHead ();


function generate_tableBod() {
  var tbl = document.getElementsByTagName('table')[0];
  for (var m = 0; m < 5; m++) {
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    row.textContent = listOfLocations[m].name;
    tr.appendChild(cell);
    for (var j = 0; j < hours.length; j++) {
      cell = document.createElement('td');
      var cellText = document.createTextNode(listOfLocations[m].projectedCookies[j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
    tbl.setAttribute('border', '2');
  }
}
generate_tableBod();

function generateNewTableBod() {
  var tbl = document.getElementsByTagName('table')[0];
  for (var m = 0; newLoca.lenght - 1 < newLoca.length; m++) {
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    row.textContent = newLoca[m].name;
    tr.appendChild(cell);
    for (var j = 0; j < hours.length; j++) {
      cell = document.createElement('td');
      var cellText = document.createTextNode(newLoca[m].projectedCookies[j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
  }
}
generateNewTableBod();

form.addEventListener('submit', newLoc);


