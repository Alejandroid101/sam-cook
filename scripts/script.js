'use strict';


var listOfLocations = [];
var tbody = document.getElementById('tbody');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var form = document.getElementById('newlocation-info');
var hourlyTotalsArray = [];
var totalTotal = 0;




function Locations(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;

  this.randomCustomersHourly = [];
  this.cookiesSoldHourly = [];
  this.total= 0;


  this.calcRandomCustHourly = function () {
    for (var i = 0; i < hours.length; i++){
      var randomNumb = makeRandomNumb (this.minCust, this.maxCust);
      this.randomCustomersHourly.push(randomNumb);
    }
  };

  this.calcCookieSalesHourly = function () {

    for (var i = 0; i < this.randomCustomersHourly; i++) {
      var multiply = Math.floor(this.randomCustomerHourly[i] * this.avgCookie);
      this.cookiesSoldHourly.push(multiply);
      this.total = this.total + this.cookiesSoldHourly;
    }
  };

  listOfLocations.push(this);
}

Locations.prototype.render = function (){
  this.calcRandomCustHourly();
  this.calcCookieSalesHourly();
  calculateHourlyTotals();
  var trElement = document.createElement('tr');
  tbody.appendChild (trElement);

  var tdElement = document.createElement('td');
  tdElement.textContent = this.name;
  trElement.appendChild(tdElement);

  for(var i=0; i < this.cookiesSoldHourly; i++){
    tdElement = document.createElement('td');
    trElement.textContent = this.cookiesSoldHourly[i];
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.total;
  trElement.appendChild(tdElement);

};


function makeRandomNumb(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

function makeHeader(){
  var trElement = document.createElement('tr');
  tbody.appendChild(trElement);

  var tdElement = document.createElement('td');
  tdElement.textContent = ' ';
  trElement.appendChild(tdElement);

  for(var i = 0; i < hours.lenght; i++){
    var thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
}
function makeFooter(){
  var trElement = document.createElement('tr');
  tbody.appendChild(trElement);

  var tdElement = document.createElement('td');
  tdElement.textContent = 'TOTALS';
  trElement.appendChild(tdElement);

  for (var i = 0; i < hourlyTotalsArray; i++){
    tdElement.createElement('td');
    tdElement.textContent = hourlyTotalsArray[i];
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = totalTotal;
  trElement.appendChild(tdElement);
}
function calculateHourlyTotals(){
  for(var i = 0; i < hours.lenght; i ++){
    var hourTotals = 0;
    for(var x = 0; x < listOfLocations.lenght; x++){
      hourTotals += listOfLocations[x].cookiesSoldHourly[i];
      totalTotal += listOfLocations[x].calcCookieSoldHourly[i];
    }
    hourlyTotalsArray.push(hourTotals);
    console.table(hourlyTotalsArray);
  }
}

makeHeader();
makeFooter();
new Locations('1st And Pike', 23,	65,	6.3);
new Locations('SeaTac Airport', 3,	24,	1.2);
new Locations('Seattle Center', 11,	38,	3.7);
new Locations('Capito Hill', 20,	38,	2.3);
new Locations('Alki Beach', 2,	16,	4.6);


function newLoc (event) {
  event.preventDefault();
  var name = event.target.name.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCookie = event.target.angCookie.value;
  
  listOfLocations.push(new Locations(name, minCust, maxCust, avgCookie));

  form.reset();
  console.log('New Location Data:', listOfLocations);

}
newLoc();

form.addEventListener('submit', newLoc);







// function renderSalesTableHead () {
//   var thead = document.createElement('thead');
//   var th = document.createElement('th');
//   th.textContent = '';
//   tr.appendChild(th);
//   for (var i = 0; i < hours.length; i++) {
//     th = document.createElement('th');
//     th.textContent = hours[i];
//     tr.appendChild(th);
//   }
//   th = document.createElement('th');
//   th.textContent = 'Total Cookies';
//   tr.appendChild(th);
//   thead.appendChild(tr);
//   table.appendChild(thead);
//   tblBody;
// }
// renderSalesTableHead ();


// function generate_tableBod() {
//   var tbl = document.getElementsByTagName('table')[0];
//   for (var m = 0; m < 5; m++) {
//     var row = document.createElement('tr');
//     var cell = document.createElement('td');
//     row.textContent = listOfLocations[m].name;
//     tr.appendChild(cell);
//     for (var j = 0; j < hours.length; j++) {
//       cell = document.createElement('td');
//       var cellText = document.createTextNode(listOfLocations[m].projectedCookies[j]);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }
//     tblBody.appendChild(row);
//     tbl.appendChild(tblBody);
//     tbl.setAttribute('border', '2');
//   }
// }
// generate_tableBod();

// function generateNewTableBod() {
//   var tbl = document.getElementsByTagName('table')[0];
//   for (var m = 0; newLoca.lenght - 1 < newLoca.length; m++) {
//     var row = document.createElement('tr');
//     var cell = document.createElement('td');
//     row.textContent = newLoca[m].name;
//     tr.appendChild(cell);
//     for (var j = 0; j < hours.length; j++) {
//       cell = document.createElement('td');
//       var cellText = document.createTextNode(newLoca[m].projectedCookies[j]);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }
//     tblBody.appendChild(row);
//     tbl.appendChild(tblBody);
//   }
// }
// generateNewTableBod();

