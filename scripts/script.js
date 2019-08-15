'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var form = document.getElementById('location-info');
var table = document.getElementById('my-table');
var listOfLocations = [];


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

var firstPike	= new Locations('1st And Pike', 23,	65,	6.3);
var seaTac = new Locations('SeaTac Airport', 3,	24,	1.2);
var seaCenter = new Locations('Seattle Center', 11,	38,	3.7);
var capHill = new Locations('Capito Hill', 20,	38,	2.3);
var alki = new Locations('Alki Beach', 2,	16,	4.6);

// console.log(listOfLocations);
function createTable(){
  var row;
  for (var i = 0; i <listOfLocations.length; i++) {
  //----THIS "CREATES A  TABLE"----
    row = document.createElement('tr');
    // newTableItem.textContent = this.cookies[i];
    row.innerHTML = '<td>' + listOfLocations[i].projectedCookies + '</td>';

    //---------------------------
    console.log(listOfLocations[i]);
  }
  table.appendChild(row);

}
//======test===================
function generate_table() {
  // get the reference for the body
  var tbl = document.getElementsByTagName('table')[0];

  // creates a <table> element and a <tbody> element
  var tblBody = document.createElement('tbody');

  // creating all cells
  for (var m = 0; m < hours.length; m++) {
    // creates a table row
    var row = document.createElement('tr');

    for (var j = 0; j < listOfLocations.length; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement('td');
      var cellText = document.createTextNode(listOfLocations[j].projectedCookies);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
}
//test end=====================
generate_table();



// //===CODE FROM MDN====
// function addRow(tableID) {
//   for (var k = 0; k < 5; k++){
//   // Get a reference to the table
//     var tableRef = document.getElementById(tableID);
//     // Insert a row at the end of the table
//     var newRow = tableRef.insertRow(-1);
//     // Insert a cell in the row at index 0
//     var newCell = newRow.insertCell(0);
//     // Append a text node to the cell
//     if ()
//     var newText = document.createTextNode(listOfLocations[k].projectedCookies);
//     newCell.appendChild(newText);
//   }
// //======================


// function addCell(tableID){
//   for (var k = 0; k < 5; k++){
//     addCell('my-table');
//     // Get a reference to the table
//     let tableRef = document.getElementById(tableID);

//     // Insert a row at the end of the table
//     let newRow = tableRef.insertRow(-1);

//     // Insert a cell in the row at index 0
//     let newCell = newRow.insertCell(0);

//     // Append a text node to the cell
//     let newText = document.createTextNode('');
//     newCell.appendChild(newText);
//   }
// }
// Call addRow() with the table's ID
// addRow('my-table');




// function createTable() {
//   var row;

//   for (var i = 0; i < data.length; i++) {
//     row = document.createElement('tr');
//     row.innerHTML = '<td>' + data[i].first + '</td>' +
//           '<td>' + data[i].last + '</td>' +
//           '<td>' + data[i].enrolled + '</td>' +
//           '<td>' + data[i].future_classes + '</td>';
//   }

//   table.appendChild(row);
// }

createTable();



// console.log(listOfLocations[1].name);
// var cv = listOfLocations[0].cookies;
// console.log(cv);











// function render() {

//   var section = document.getElementById('Locations');

//   var specific_tbody = document.getElementById(tbody_id);
//   let row = specific_tbody.insertRow(index)

//   for (var i = 0; i < listOfLocations.length; i++) {

//     var location = listOfLocations[i];

//     var title = document.createElement('h3');
//     title.textContent = location.name;
//     section.appendChild(title);

//     var list = document.createElement('ul');

//     for (var j = 0; j < hours.length; j++) {
//       var projection = hours[j] + ': ' + cookies[j];
//       var li = document.createElement('li');
//       li.textContent = projection;
//       list.appendChild(li);
//     }

//     section.appendChild(list);
//   }
// }

// function initialize() {

//   listOfLocations.push(firstPike);
//   listOfLocations.push(seaTac);
//   listOfLocations.push(seaCenter);
//   listOfLocations.push(capHill);
//   listOfLocations.push(alki);

// }

// initialize();
// render();














// var seaTac = {
//   name: 'SeaTac Airport',
//   cookies: [],
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   random: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Source: MDN Random Docs/Example
//   },
//   generateProjection: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var multiply = Math.ceil(this.random() * this.avgCookie);
//       this.cookies.push(multiply);
//     }
//   }
// };




// console.log(seaTac);
// console.log(seaTac.generateProjection());
// console.log(seaTac.cookies);


