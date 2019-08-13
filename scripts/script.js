'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var listOfLocations = [];


function Locations(name, minCust, maxCust, avgCookie){
  this.dataOne = name;
  this.dataTwo = minCust;
  this.dataThree = maxCust;
  this.dataFour = avgCookie;

  listOfLocations.push(this);
}

var firstPike	= new Locations('1st And Pike', '23',	'65',	'6.3');
var seaTac = new Locations('SeaTac Airport', '3',	'24',	'1.2');
var seaCenter = new Locations('Seattle Center', '11',	'38',	'3.7');
var capHill = new Locations('Capito Hill', '20',	'38',	'2.3');
var alki = new Locations('Alki Beach', '2',	'16',	'4.6');

for (var i = 0; i <listOfLocations.length; i++) {
  console.log(listOfLocations[i]);
  generateProjection = function () {
    for (var i = 0; i < hours.length; i++) {
      var multiply = Math.ceil(this.random() * this.avgCookie);
      this.cookies.push(multiply);
    }
    random = function () {
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    };
  };
}


function render() {

  var section = document.getElementById('Locations');

  for (var i = 0; i < listOfLocations.length; i++) {

    var location = listOfLocations[i];

    var title = document.createElement('h3');
    title.textContent = location.name;
    section.appendChild(title);

    var list = document.createElement('ul');

    for (var j = 0; j < hours.length; j++) {
      var projection = hours[j] + ': ' + location.cookies[j];
      var li = document.createElement('li');
      li.textContent = projection;
      list.appendChild(li);
    }

    section.appendChild(list);
  }
}

function initialize() {
  firstPike.generateProjection();
  seaTac.generateProjection();
  seaCenter.generateProjection();
  capHill.generateProjection();
  alki.generateProjection();

  listOfLocations.push(firstPike);
  listOfLocations.push(seaTac);
  listOfLocations.push(seaCenter);
  listOfLocations.push(capHill);
  listOfLocations.push(alki);

}

initialize();
render();



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


// var johnsHouse = {
//   name: 'Johns House',
//   cookies: [],
//   minCust: 4,
//   maxCust: 47,
//   avgCookie: 5.6,
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




// function render() {

//   var section = document.getElementById('locations');

//   for (var i = 0; i < locations.length; i++) {

//     var location = locations[i];

//     var title = document.createElement('h3');
//     title.textContent = location.name;
//     section.appendChild(title);

//     var list = document.createElement('ul');

//     for (var j = 0; j < hours.length; j++) {
//       var projection = hours[j] + ': ' + location.cookies[j];
//       var li = document.createElement('li');
//       li.textContent = projection;
//       list.appendChild(li);
//     }

//     section.appendChild(list);
//   }
// }

// function initialize() {
//   seaTac.generateProjection();
//   johnsHouse.generateProjection();

//   locations.push(seaTac);
//   locations.push(johnsHouse);
// }

// initialize();
// render();
