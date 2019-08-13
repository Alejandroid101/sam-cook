'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var pikePlace = {
//     name: '1st and Pike',
//     minCust : 23,
//     maxCust : 65,
//     avgCookie : 6.3,
//     random : function () {
//         return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; //The maximum is inclusive and the minimum is inclusive
//     },

//     };

var seaTac = {
  name: 'SeaTac Airport',
  cookies : [],
  minCust : 3,
  maxCust : 24,
  avgCookie : 1.2,
  random : function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; //The maximum is inclusive and the minimum is inclusive
  },
  cookieMultiply : function () {
    for (var i = 0; i < hours.length; i++) {
      // var = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      var multiply = this.random() * this.avgCookie;
      this.cookies.push(multiply);
      // this.cookies.push(multiply);
    }
    var elementList = document.getElementById('list)');
    for(var ii = 0; ii < seaTac.cookies.lenght; ii++) {
      var newListItem = document.createElement('li');
      newListItem.textContent = seaTac.cookies[i];
      elementList.appendChild(newListItem);
    }


  }
};

// var seaTac = {
//   cookies : [],
//   name: 'SeaTac Airport',
//   minCust : 3,
//   maxCust : 24,
//   avgCookie : 1.2,
//   random : function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; //The maximum is inclusive and the minimum is inclusive
//   },
//   cookieMultiply : function () {
//     for (var i = 0; i < hours.length; i++) {
//       // var = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//       var multiply = this.random() * this.avgCookie;
//       this.cookies.push(multiply);
//       // this.cookies.push(multiply);
//       return ;
//     }
//     var elementList = document.getElementById('list)');
//     for(var ii = 0; ii < seaTac.cookies.lenght; ii++) {
//       var newListItem = document.createElement('li');
//       newListItem.textContent = seaTac.cookies[i];
//       elementList.appendChild(newListItem);
//     }

//   },

// };
// console.log(cookieMultiply);
// console.log(multiply);
console.log(seaTac);
console.log(seaTac.random());
console.log(seaTac.cookies);


// var seaCenter = {
//     name: 'Seattle Center',
//     minCust : 11,
//     maxCust : 38,
//     avgCookie : 3.7,
//     };

// var capHill = {
//     name: 'Capitol Hill',
//     minCust : 20,
//     maxCust : 38,
//     avgCookie : 2.3,
//     };

// var alki = {
//     name: 'Alki Beach',
//     minCust : 2,
//     maxCust : 16,
//     avgCookie : 4.6,
//     };

// var title = document.getElementById('pageName');
// title.textContent = enrique.name;


//find the ul
//For enrique.children.lenght
//create an li
//set the textContent to the name of the name of the child
//append li as a child to ul

