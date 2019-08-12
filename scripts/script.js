'use strict';

var enrique = {
  name: 'Enrique Rivera',
  children : ['Victoria', 'Butters', 'Kiwi',]
};

var title = document.getElementById('pageName');
title.textContent = enrique.name;


//find the ul
  var elementList = document.getElementById('list)');

//For enrique.children.lenght
  for(var i = 0; i < john.children.lenght; i++) {
//create an li
    var newListItem = document.createElement('li');
//set the textContent to the name of the name of the child
    newListItem.textContent = enrique.children[i];
  //append li as a child to ul
    elementList.appendChild(newListItem);
  }