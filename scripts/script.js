'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var locations = [];

var seaTac = {
  name: 'SeaTac Airport',
  cookies: [],
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  random: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Source: MDN Random Docs/Example
  },
  generateProjection: function () {
    for (var i = 0; i < hours.length; i++) {
      var multiply = Math.ceil(this.random() * this.avgCookie);
      this.cookies.push(multiply);
    }
  }
};


var johnsHouse = {
  name: 'Johns House',
  cookies: [],
  minCust: 4,
  maxCust: 47,
  avgCookie: 5.6,
  random: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Source: MDN Random Docs/Example
  },
  generateProjection: function () {
    for (var i = 0; i < hours.length; i++) {
      var multiply = Math.ceil(this.random() * this.avgCookie);
      this.cookies.push(multiply);
    }
  }
};


function render() {
  // Find the container (section with an id="locations")
  // Loop over the locations
  // <h2> with it's name
  // <ul>
  //   Loop over the [hours] and and make an <li> with the hour and the projection from location [cookies]

  var section = document.getElementById('locations');

  for (var i = 0; i < locations.length; i++) {

    var location = locations[i];

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
  seaTac.generateProjection();
  johnsHouse.generateProjection();

  locations.push(seaTac);
  locations.push(johnsHouse);
}

initialize();
render();

